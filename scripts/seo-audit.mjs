// Site-wide SEO audit: page metadata, schema, links, redirections, per-page score, and optional competitor comparison.
//
//   SITE_BASE_URL=http://127.0.0.1:3100 node scripts/seo-audit.mjs [--out docs/seo-audit] [--strict] [--skip-external]
//   node scripts/seo-audit.mjs --competitor https://example.com [https://other.com ...]
//
// The page list comes from /sitemap.xml. Hosts that cannot be reached (for example blocked by a network policy)
// are reported as "unchecked", never as failures and never with invented data.
import fs from "node:fs";
import { redirects } from "../src/content/redirects.mjs";

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const option = (name, fallback) => (argv.includes(name) ? argv[argv.indexOf(name) + 1] : fallback);
const base = (process.env.SITE_BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const PROD = "https://pshottreatment.com";
const today = new Date().toISOString().slice(0, 10);
const outPrefix = option("--out", `docs/seo-audit-${today}`);

// ---------- helpers ----------
// A sandbox egress proxy answers blocked hosts with a tiny text/plain 403. That is a network policy, not a verdict
// on the target site, so such responses are reported as "unchecked".
const deniedByNetwork = (r) =>
  r.ok && r.status === 403 && (r.headers.get("content-type") ?? "").startsWith("text/plain") && Number(r.headers.get("content-length") ?? 999) < 120 && !r.headers.get("server");

const decode = (s) =>
  s.replaceAll("&quot;", '"').replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const textOf = (html) => decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

async function request(url, { method = "GET", timeout = 12000, headers = {} } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { method, redirect: "manual", signal: controller.signal, headers: { "User-Agent": "seo-audit/1.0", ...headers } });
    return { ok: true, status: response.status, headers: response.headers, text: method === "GET" ? await response.text() : "" };
  } catch (error) {
    return { ok: false, status: 0, error: error?.cause?.code || error?.name || "fetch failed", headers: new Headers(), text: "" };
  } finally {
    clearTimeout(timer);
  }
}

const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`, "i")) || html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`, "i"));
  return m ? decode(m[1]) : "";
};

function parsePage(html) {
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? html;
  const headings = [...html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ level: Number(m[1]), text: textOf(m[2]) }));
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
    .map((m) => ({ href: decode(m[1].match(/href="([^"]*)"/)?.[1] ?? ""), text: textOf(m[2]), inMain: false }))
    .filter((l) => l.href);
  const mainLinks = new Set([...main.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map((m) => decode(m[1])));
  links.forEach((l) => (l.inMain = mainLinks.has(l.href)));
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)].map((m) => m[1]);
  const schema = { blocks: ldBlocks.length, valid: true, nodes: [], error: "" };
  for (const raw of ldBlocks) {
    try {
      const data = JSON.parse(decode(raw).replaceAll("\\u003c", "<"));
      schema.nodes.push(...(data["@graph"] ?? [data]));
    } catch (error) {
      schema.valid = false;
      schema.error = error.message;
    }
  }
  return {
    title: decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ""),
    description: meta(html, "name", "description"),
    canonical: decode(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? ""),
    robots: meta(html, "name", "robots"),
    og: { title: meta(html, "property", "og:title"), description: meta(html, "property", "og:description"), image: meta(html, "property", "og:image"), url: meta(html, "property", "og:url"), type: meta(html, "property", "og:type") },
    twitter: { card: meta(html, "name", "twitter:card"), image: meta(html, "name", "twitter:image") },
    lang: html.match(/<html[^>]*lang="([^"]+)"/)?.[1] ?? "",
    headings,
    h1: headings.filter((h) => h.level === 1).map((h) => h.text),
    words: textOf(main).split(" ").filter(Boolean).length,
    images: [...html.matchAll(/<img\b([^>]*)>/g)].map((m) => ({ alt: m[1].match(/alt="([^"]*)"/)?.[1] })),
    links,
    kind: html.match(/data-page-kind="([^"]+)"/)?.[1] ?? "",
    hasAnswer: html.includes("data-direct-answer"),
    hasFaq: html.includes("data-faq"),
    schema,
  };
}

// ---------- schema checks ----------
const has = (node, ...keys) => keys.filter((k) => node[k] === undefined || node[k] === null || node[k] === "");
function schemaIssues(page) {
  const issues = [];
  const { nodes } = page.schema;
  const ids = new Set(nodes.map((n) => n["@id"]).filter(Boolean));
  const typesOf = (n) => [n["@type"]].flat();
  const find = (t) => nodes.filter((n) => typesOf(n).includes(t));

  for (const n of find("MedicalClinic")) {
    const miss = has(n, "name", "address", "telephone", "email", "medicalSpecialty", "url");
    if (miss.length) issues.push(`MedicalClinic missing ${miss.join(", ")}`);
    const miss2 = has(n.address ?? {}, "streetAddress", "postalCode", "addressLocality", "addressCountry");
    if (miss2.length) issues.push(`MedicalClinic.address missing ${miss2.join(", ")}`);
  }
  for (const n of find("Physician")) {
    const miss = has(n, "name", "medicalSpecialty", "worksFor", "alumniOf");
    if (miss.length) issues.push(`Physician missing ${miss.join(", ")}`);
  }
  for (const n of find("Article")) {
    const miss = has(n, "headline", "dateModified", "author", "publisher", "image", "mainEntityOfPage");
    if (miss.length) issues.push(`Article missing ${miss.join(", ")}`);
  }
  for (const n of find("FAQPage")) {
    const bad = (n.mainEntity ?? []).filter((q) => !q.name || !q.acceptedAnswer?.text);
    if (!(n.mainEntity ?? []).length || bad.length) issues.push("FAQPage has empty or incomplete questions");
  }
  for (const n of find("Offer")) if (has(n, "price", "priceCurrency").length) issues.push("Offer missing price/priceCurrency");
  for (const n of nodes.filter((x) => x.offers)) for (const o of [n.offers].flat()) if (has(o, "price", "priceCurrency").length) issues.push("Offer missing price/priceCurrency");
  for (const n of find("BreadcrumbList")) {
    const items = n.itemListElement ?? [];
    if (!items.length || items.some((it, i) => it.position !== i + 1 || !it.name || !it.item)) issues.push("BreadcrumbList positions or names invalid");
  }
  for (const n of find("WebSite")) if (has(n, "name", "url").length) issues.push("WebSite missing name/url");
  if (!find("BreadcrumbList").length) issues.push("no BreadcrumbList");
  if (find("AggregateRating").length || find("Review").length) issues.push("contains Review/AggregateRating (not allowed on this site)");
  // Every {"@id": ...}-only reference must resolve inside the graph.
  const walk = (value) => {
    if (Array.isArray(value)) return value.forEach(walk);
    if (value && typeof value === "object") {
      const keys = Object.keys(value);
      if (keys.length === 1 && keys[0] === "@id" && !ids.has(value["@id"])) issues.push(`unresolved @id reference ${value["@id"]}`);
      Object.values(value).forEach(walk);
    }
  };
  nodes.forEach(walk);
  return [...new Set(issues)];
}

// ---------- scoring ----------
const GENERIC_ANCHORS = new Set(["here", "click here", "read more", "learn more", "more", "link"]);
function score(path, p, inboundCount, brokenOnPage) {
  const rows = [];
  const add = (name, max, got, note = "") => rows.push({ name, max, got, note });
  const tl = p.title.length;
  add("Title 45-60 chars", 10, tl >= 45 && tl <= 60 ? 10 : tl >= 30 && tl <= 70 ? 5 : 0, `${tl}`);
  const dl = p.description.length;
  add("Description 110-160 chars", 10, dl >= 110 && dl <= 160 ? 10 : dl >= 70 && dl <= 175 ? 5 : 0, `${dl}`);
  add("Exactly one H1", 8, p.h1.length === 1 ? 8 : 0, `${p.h1.length}`);
  add("Canonical is self", 8, p.canonical === (path === "/" ? PROD : `${PROD}${path}`) ? 8 : 0);
  add("OG + Twitter tags", 8, p.og.title && p.og.description && p.og.image && p.og.url && p.twitter.card === "summary_large_image" && p.twitter.image ? 8 : 0);
  add("Valid JSON-LD (4+ nodes)", 10, p.schema.valid && p.schema.nodes.length >= 4 ? 10 : p.schema.valid && p.schema.nodes.length ? 5 : 0, `${p.schema.nodes.length}`);
  add("FAQ section", 6, p.hasFaq ? 6 : p.kind === "legal" ? 6 : 0);
  add("Answer-first block", 6, p.hasAnswer ? 6 : 0);
  const threshold = ["legal", "trust"].includes(p.kind) ? 150 : 450;
  add(`Word count >= ${threshold}`, 10, p.words >= threshold ? 10 : p.words >= threshold * 0.7 ? 5 : 0, `${p.words}`);
  const exempt = ["/", "/privacy", "/editorial-policy", "/evidence-methodology"].includes(path);
  add("3+ inbound links from content", 8, exempt || inboundCount >= 3 ? 8 : inboundCount >= 1 ? 4 : 0, `${inboundCount}`);
  add("No broken internal links", 8, brokenOnPage === 0 ? 8 : 0, `${brokenOnPage}`);
  add("3+ H2 sections", 4, p.headings.filter((h) => h.level === 2).length >= 3 ? 4 : 0);
  const words = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(" ").filter((w) => w.length > 3));
  const overlap = [...words(p.h1[0] ?? "")].filter((w) => words(p.title).has(w)).length;
  add("Title and H1 share keywords", 4, overlap >= 2 || path === "/" ? 4 : 0);
  return { total: rows.reduce((s, r) => s + r.got, 0), rows };
}

// ---------- own-site audit ----------
async function auditSite() {
  const t0 = Date.now();
  const sitemap = await request(`${base}/sitemap.xml`);
  if (sitemap.status !== 200) {
    console.error(`Cannot read ${base}/sitemap.xml (status ${sitemap.status}). Start the site first.`);
    process.exit(1);
  }
  const paths = [...sitemap.text.matchAll(/<loc>https:\/\/pshottreatment\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
  const pages = new Map();
  for (const path of paths) {
    const r = await request(`${base}${path}`);
    pages.set(path, { status: r.status, p: r.status === 200 ? parsePage(r.text) : null, html: r.text, xRobots: r.headers.get("x-robots-tag") });
  }

  // Link inventory
  const internalTargets = new Map(); // target path (no hash/query) -> Set(source)
  const fragments = []; // {from, to, hash}
  const external = new Map(); // url -> Set(source)
  const inbound = new Map(paths.map((p) => [p, new Set()]));
  const genericAnchors = [];
  for (const [from, { p }] of pages) {
    if (!p) continue;
    for (const l of p.links) {
      if (GENERIC_ANCHORS.has(l.text.toLowerCase())) genericAnchors.push({ from, href: l.href, text: l.text });
      if (/^(mailto:|tel:|javascript:)/.test(l.href)) continue;
      if (l.href.startsWith("#")) { fragments.push({ from, to: from, hash: l.href.slice(1) }); continue; }
      if (/^https?:\/\//.test(l.href) && !l.href.startsWith(PROD)) {
        if (!external.has(l.href)) external.set(l.href, new Set());
        external.get(l.href).add(from);
        continue;
      }
      const url = new URL(l.href.replace(PROD, ""), "http://x");
      const to = url.pathname.replace(/\/$/, "") || "/";
      if (url.pathname.startsWith("/_next")) continue;
      if (!internalTargets.has(to)) internalTargets.set(to, new Set());
      internalTargets.get(to).add(from);
      if (url.hash) fragments.push({ from, to, hash: url.hash.slice(1) });
      if (l.inMain && to !== from && inbound.has(to)) inbound.get(to).add(from);
    }
  }

  // Internal link status
  const linkStatus = new Map();
  for (const target of internalTargets.keys()) {
    const known = pages.get(target);
    if (known) { linkStatus.set(target, { status: known.status, location: "" }); continue; }
    const r = await request(`${base}${target}`);
    linkStatus.set(target, { status: r.status, location: r.headers.get("location") ?? "" });
  }
  const brokenInternal = [];
  const redirectingInternal = [];
  for (const [target, { status, location }] of linkStatus) {
    const sources = [...internalTargets.get(target)];
    if (status >= 400 || status === 0) brokenInternal.push({ target, status, sources });
    else if (status >= 300) redirectingInternal.push({ target, status, location, sources });
  }
  const brokenBySource = new Map();
  for (const b of brokenInternal) for (const s of b.sources) brokenBySource.set(s, (brokenBySource.get(s) ?? 0) + 1);

  // Fragment (#id) checks
  const missingFragments = [];
  for (const f of fragments) {
    const html = pages.get(f.to)?.html;
    if (html && !html.includes(`id="${f.hash}"`)) missingFragments.push(f);
  }

  // External link status
  const externalResults = [];
  if (!flag("--skip-external")) {
    for (const [href, sources] of external) {
      let r = await request(href, { method: "HEAD", timeout: 10000 });
      if (r.ok && (r.status === 405 || r.status === 403 || r.status === 501)) r = await request(href, { method: "GET", timeout: 10000 });
      const state = !r.ok || deniedByNetwork(r) ? "unchecked" : r.status < 400 || (r.status >= 300 && r.status < 400) ? "ok" : [401, 403, 429].includes(r.status) ? "blocked-by-site" : "broken";
      externalResults.push({ href, status: r.status, state, detail: r.error ?? (state === "unchecked" ? "denied by network policy" : ""), sources: [...sources] });
    }
  }

  // Redirections
  const redirectRows = [];
  for (const [from, to] of Object.entries(redirects)) {
    const r = await request(`${base}${from}`);
    const location = r.headers.get("location") ?? "";
    const dest = location ? new URL(location, base).pathname : "";
    const final = dest ? await request(`${base}${dest}`) : { status: 0 };
    const problems = [];
    if (r.status !== 301) problems.push(`status ${r.status}, expected 301`);
    if (dest !== to) problems.push(`goes to ${dest || "-"}, expected ${to}`);
    if (final.status !== 200) problems.push(`destination returns ${final.status} (chain or error)`);
    if (!paths.includes(to)) problems.push("destination not in sitemap");
    if (paths.includes(from)) problems.push("source still in sitemap");
    redirectRows.push({ from, to, status: r.status, dest, finalStatus: final.status, problems });
  }
  const trailing = await request(`${base}/p-shot/`);

  // Site-wide findings
  const findings = [];
  const add = (severity, area, message, urls = []) => findings.push({ severity, area, message, urls });
  const byTitle = new Map(), byDesc = new Map();
  for (const [path, { p }] of pages) {
    if (!p) continue;
    (byTitle.get(p.title) ?? byTitle.set(p.title, []).get(p.title)).push(path);
    (byDesc.get(p.description) ?? byDesc.set(p.description, []).get(p.description)).push(path);
  }
  for (const [t, ps] of byTitle) if (ps.length > 1) add("error", "metadata", `Duplicate title "${t}"`, ps);
  for (const [d, ps] of byDesc) if (ps.length > 1) add("error", "metadata", `Duplicate description`, ps);
  const titleStart = new Map();
  for (const [path, { p }] of pages) if (p) { const k = p.title.toLowerCase().split(/\s+/).slice(0, 4).join(" "); (titleStart.get(k) ?? titleStart.set(k, []).get(k)).push(path); }
  for (const [k, ps] of titleStart) if (ps.length > 2) add("warning", "metadata", `Many titles start with "${k}" (cannibalisation risk)`, ps);
  for (const [path, { status, p, xRobots }] of pages) {
    if (status !== 200) add("error", "crawl", `Sitemap URL returns ${status}`, [path]);
    if (p?.robots.includes("noindex") || xRobots?.includes("noindex")) add("error", "indexing", "Sitemap page is noindex", [path]);
    if (p && p.title.length > 60) add("error", "metadata", `Title is ${p.title.length} characters (max 60)`, [path]);
    if (p && p.description.length > 160) add("warning", "metadata", `Description is ${p.description.length} characters (max 160)`, [path]);
    if (p && p.lang !== "en-GB") add("warning", "metadata", `html lang is "${p.lang}"`, [path]);
    if (p) {
      const levels = p.headings.map((h) => h.level);
      for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i - 1] > 1) { add("warning", "headings", `Heading level skipped (h${levels[i - 1]} to h${levels[i]})`, [path]); break; }
      if (p.images.some((img) => img.alt === undefined)) add("error", "images", "Image without alt attribute", [path]);
    }
  }
  for (const [path, set] of inbound) {
    if (["/", "/privacy", "/editorial-policy", "/evidence-methodology"].includes(path)) continue;
    if (set.size === 0) add("error", "links", "Orphan page (no inbound links from content)", [path]);
    else if (set.size < 3) add("warning", "links", `Only ${set.size} inbound content links`, [path]);
  }
  for (const b of brokenInternal) add("error", "links", `Broken internal link ${b.target} (${b.status})`, b.sources);
  for (const r of redirectingInternal) add("warning", "links", `Internal link to ${r.target} redirects (${r.status}) to ${r.location}`, r.sources);
  for (const f of missingFragments) add("error", "links", `Anchor #${f.hash} not found on ${f.to}`, [f.from]);
  for (const a of genericAnchors) add("warning", "links", `Generic anchor text "${a.text}" to ${a.href}`, [a.from]);
  for (const r of redirectRows) if (r.problems.length) add("error", "redirects", `${r.from}: ${r.problems.join("; ")}`);
  if (![301, 308].includes(trailing.status)) add("warning", "redirects", `/p-shot/ returns ${trailing.status}; expected a redirect to /p-shot`);
  for (const e of externalResults) {
    if (e.state === "broken") add("error", "links", `Broken external link ${e.href} (${e.status})`, e.sources);
    if (e.state === "blocked-by-site") add("info", "links", `External link refuses automated checks (${e.status}): ${e.href}`, e.sources);
  }
  const unchecked = externalResults.filter((e) => e.state === "unchecked");
  if (unchecked.length) add("info", "links", `${unchecked.length} external link(s) could not be reached from this network and are unchecked`, unchecked.map((e) => e.href));

  const robots = await request(`${base}/robots.txt`);
  for (const bot of ["OAI-SearchBot", "GPTBot", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"]) if (!robots.text.includes(bot)) add("error", "robots", `robots.txt has no rule for ${bot}`);
  if (!robots.text.includes("Sitemap:")) add("error", "robots", "robots.txt has no Sitemap line");
  const llms = await request(`${base}/llms.txt`);
  for (const path of paths.filter((p) => p !== "/")) if (!llms.text.includes(`(${PROD}${path})`)) add("error", "llms", "Page missing from llms.txt", [path]);
  const nf = await request(`${base}/this-page-should-not-exist`);
  if (nf.status !== 404) add("error", "crawl", `Unknown URL returns ${nf.status}, expected 404`);
  const home = await request(`${base}/`);
  for (const h of ["x-content-type-options", "referrer-policy", "x-frame-options"]) if (!home.headers.get(h)) add("warning", "security", `Missing response header ${h}`);
  if (home.headers.get("x-powered-by")) add("warning", "security", "X-Powered-By header is exposed");

  // Per-page results
  const results = [];
  for (const [path, { status, p }] of pages) {
    if (!p) { results.push({ path, status, score: 0, rows: [], issues: [`HTTP ${status}`] }); continue; }
    const s = score(path, p, inbound.get(path).size, brokenBySource.get(path) ?? 0);
    const issues = [...schemaIssues(p)];
    if (!p.schema.valid) issues.push(`JSON-LD parse error: ${p.schema.error}`);
    for (const r of s.rows) if (r.got < r.max) issues.push(`${r.name}${r.note ? ` (${r.note})` : ""}`);
    results.push({ path, status, score: s.total, rows: s.rows, issues, p, inbound: inbound.get(path).size });
  }
  return { paths, pages, results, findings, redirectRows, linkStatus, internalTargets, externalResults, inbound, seconds: Math.round((Date.now() - t0) / 1000) };
}

// ---------- report ----------
const tableRow = (cells) => `| ${cells.map((c) => String(c).replaceAll("|", "\\|").replaceAll("\n", " ")).join(" | ")} |`;
function writeReport(a) {
  const { results, findings, redirectRows, externalResults } = a;
  const avg = Math.round((results.reduce((s, r) => s + r.score, 0) / results.length) * 10) / 10;
  const count = (sev) => findings.filter((f) => f.severity === sev).length;
  const lines = [];
  lines.push(`# SEO audit ${today}`, "", `Audited ${a.results.length} pages from \`${base}/sitemap.xml\` (${a.seconds}s). Canonical host: ${PROD}.`, "");
  lines.push("## Summary", "", `- Average page score: **${avg}/100** (lowest ${Math.min(...results.map((r) => r.score))}, highest ${Math.max(...results.map((r) => r.score))})`);
  lines.push(`- Findings: **${count("error")} errors**, ${count("warning")} warnings, ${count("info")} notes`);
  lines.push(`- Redirections checked: ${redirectRows.length} (${redirectRows.filter((r) => r.problems.length).length} with problems)`);
  lines.push(`- Internal link targets checked: ${a.linkStatus.size}; external links: ${externalResults.length} (${externalResults.filter((e) => e.state === "unchecked").length} unchecked from this network)`, "");
  lines.push("## Site-wide findings", "");
  if (!findings.length) lines.push("None.", "");
  for (const sev of ["error", "warning", "info"]) {
    const list = findings.filter((f) => f.severity === sev);
    if (!list.length) continue;
    lines.push(`### ${sev === "error" ? "Errors" : sev === "warning" ? "Warnings" : "Notes"}`, "");
    for (const f of list) lines.push(`- [${f.area}] ${f.message}${f.urls.length ? `: ${f.urls.slice(0, 6).join(", ")}${f.urls.length > 6 ? ` (+${f.urls.length - 6})` : ""}` : ""}`);
    lines.push("");
  }
  lines.push("## Page scores", "", tableRow(["Page", "Score", "Title", "Desc", "Words", "H2", "Schema nodes", "Inbound", "Issues"]), tableRow(["---", "---", "---", "---", "---", "---", "---", "---", "---"]));
  for (const r of [...results].sort((x, y) => x.score - y.score)) {
    lines.push(tableRow([r.path, r.score, r.p?.title.length ?? "-", r.p?.description.length ?? "-", r.p?.words ?? "-", r.p?.headings.filter((h) => h.level === 2).length ?? "-", r.p?.schema.nodes.length ?? "-", r.inbound ?? "-", r.issues.join("; ") || "none"]));
  }
  lines.push("", "Score rubric (100 points): title 10, description 10, one H1 8, self canonical 8, OG and Twitter tags 8, valid JSON-LD 10, FAQ 6, answer-first block 6, word count 10, 3+ inbound content links 8, no broken internal links 8, 3+ H2 4, title and H1 share keywords 4.", "");
  lines.push("## Metadata", "", tableRow(["Page", "Title", "Description", "Robots"]), tableRow(["---", "---", "---", "---"]));
  for (const r of results) if (r.p) lines.push(tableRow([r.path, r.p.title, r.p.description, r.p.robots]));
  lines.push("", "## Schema markup", "", tableRow(["Page", "Types", "Issues"]), tableRow(["---", "---", "---"]));
  for (const r of results) if (r.p) lines.push(tableRow([r.path, [...new Set(r.p.schema.nodes.flatMap((n) => [n["@type"]].flat()))].join(", "), schemaIssues(r.p).join("; ") || "none"]));
  lines.push("", "## Redirections", "", tableRow(["From", "To", "Status", "Final status", "Problems"]), tableRow(["---", "---", "---", "---", "---"]));
  for (const r of redirectRows) lines.push(tableRow([r.from, r.to, r.status, r.finalStatus, r.problems.join("; ") || "ok"]));
  lines.push("", "## Links on each page", "", tableRow(["Page", "Internal links", "External links", "Content links in"]), tableRow(["---", "---", "---", "---"]));
  for (const r of results) if (r.p) {
    const internal = r.p.links.filter((l) => !/^https?:\/\//.test(l.href) && !/^(mailto:|tel:)/.test(l.href) && !l.href.startsWith("#")).length;
    const ext = r.p.links.filter((l) => /^https?:\/\//.test(l.href) && !l.href.startsWith(PROD)).length;
    lines.push(tableRow([r.path, internal, ext, r.inbound]));
  }
  lines.push("", "## External link status", "", tableRow(["URL", "Status", "State", "Found on"]), tableRow(["---", "---", "---", "---"]));
  for (const e of externalResults) lines.push(tableRow([e.href, e.status || e.detail, e.state, e.sources.slice(0, 3).join(", ") + (e.sources.length > 3 ? ` (+${e.sources.length - 3})` : "")]));
  if (!externalResults.length) lines.push(tableRow(["(skipped)", "", "", ""]));
  lines.push("");
  fs.writeFileSync(`${outPrefix}.md`, lines.join("\n"));
  fs.writeFileSync(
    `${outPrefix}.json`,
    JSON.stringify({ date: today, base, average: avg, findings, redirects: redirectRows, external: externalResults, pages: results.map((r) => ({ path: r.path, status: r.status, score: r.score, issues: r.issues, metadata: r.p && { title: r.p.title, description: r.p.description, canonical: r.p.canonical, robots: r.p.robots, h1: r.p.h1, words: r.p.words }, schema: r.p?.schema.nodes })) }, null, 1),
  );
  return { avg, errors: count("error"), warnings: count("warning") };
}

// ---------- competitor mode ----------
async function auditCompetitors(urls) {
  const lines = [`# Competitor SEO comparison ${today}`, "", "Collected with plain HTTP requests. Hosts that could not be reached are listed as unreachable; nothing is estimated.", ""];
  const rows = [];
  for (const raw of urls) {
    const origin = new URL(raw).origin;
    const home = await request(raw, { timeout: 15000 });
    if (!home.ok || home.status >= 400) { rows.push({ url: raw, unreachable: deniedByNetwork(home) ? "denied by this network's egress policy" : `${home.error ?? home.status}` }); continue; }
    const robots = await request(`${origin}/robots.txt`);
    const llms = await request(`${origin}/llms.txt`);
    const sm = await request(`${origin}/sitemap.xml`);
    const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.endsWith(".xml"));
    const picked = locs.filter((u) => /erectile|ed-|p-shot|prp|shockwave|stem|exosome|treatment/i.test(u)).slice(0, 5);
    const metrics = (html, url) => { const p = parsePage(html); return { url, title: p.title, titleLen: p.title.length, descLen: p.description.length, h1: p.h1.length, h2: p.headings.filter((h) => h.level === 2).length, words: p.words, schema: [...new Set(p.schema.nodes.flatMap((n) => [n["@type"]].flat()))].join(", ") || "none", faq: /FAQPage/.test(JSON.stringify(p.schema.nodes)), canonical: Boolean(p.canonical), og: Boolean(p.og.image) }; };
    const pageRows = [metrics(home.text, raw)];
    for (const u of picked) { const r = await request(u, { timeout: 15000 }); if (r.status === 200) pageRows.push(metrics(r.text, u)); }
    const aiRules = ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "OAI-SearchBot"].filter((b) => robots.text.includes(b));
    rows.push({ url: raw, pages: pageRows, robots: robots.status === 200, aiRules, llms: llms.status === 200, sitemapUrls: locs.length });
  }
  for (const r of rows) {
    lines.push(`## ${r.url}`, "");
    if (r.unreachable) { lines.push(`Unreachable from this network (${r.unreachable}). No data collected.`, ""); continue; }
    lines.push(`- robots.txt: ${r.robots ? "present" : "missing"}; AI-bot rules found: ${r.aiRules.join(", ") || "none"}`, `- llms.txt: ${r.llms ? "present" : "missing"}; sitemap URLs: ${r.sitemapUrls}`, "");
    lines.push(tableRow(["Page", "Title len", "Desc len", "H1", "H2", "Words", "Schema types", "FAQ schema", "Canonical", "OG image"]), tableRow(Array(10).fill("---")));
    for (const m of r.pages) lines.push(tableRow([m.url, m.titleLen, m.descLen, m.h1, m.h2, m.words, m.schema, m.faq ? "yes" : "no", m.canonical ? "yes" : "no", m.og ? "yes" : "no"]));
    lines.push("");
  }
  const file = `docs/seo-competitors-${today}.md`;
  fs.writeFileSync(file, lines.join("\n"));
  console.log(`Competitor report written to ${file}`);
  rows.forEach((r) => console.log(r.unreachable ? `  ${r.url}: unreachable (${r.unreachable})` : `  ${r.url}: ${r.pages.length} pages, schema ${r.pages[0].schema}`));
}

// ---------- main ----------
if (flag("--competitor")) {
  const urls = argv.slice(argv.indexOf("--competitor") + 1).filter((a) => /^https?:\/\//.test(a));
  if (!urls.length) { console.error("Give at least one https URL after --competitor"); process.exit(1); }
  await auditCompetitors(urls);
} else {
  const audit = await auditSite();
  const summary = writeReport(audit);
  console.log(`SEO audit: ${audit.results.length} pages, average score ${summary.avg}/100, ${summary.errors} errors, ${summary.warnings} warnings`);
  console.log(`Report: ${outPrefix}.md and ${outPrefix}.json`);
  for (const f of audit.findings.filter((f) => f.severity === "error").slice(0, 25)) console.log(`  ERROR [${f.area}] ${f.message}${f.urls.length ? ` (${f.urls.slice(0, 3).join(", ")})` : ""}`);
  if (flag("--strict") && summary.errors) process.exit(1);
}

import { redirects } from "../src/content/redirects.mjs";

const base = process.env.SITE_BASE_URL || "http://127.0.0.1:3000";

const fail = (message) => {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
};

const fetchText = async (path) => {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  if (response.status !== 200) fail(`${path} returned ${response.status}`);
  return response.text();
};

const sitemap = await fetchText("/sitemap.xml");
const paths = [...sitemap.matchAll(/<loc>https:\/\/pshottreatment\.com([^<]*)<\/loc>/g)].map(
  (match) => match[1] || "/",
);

if (!paths.length) fail("sitemap contains no canonical URLs");
if (new Set(paths).size !== paths.length) fail("sitemap contains duplicate URLs");

const decode = (value) =>
  value.replaceAll("&quot;", '"').replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const textOf = (html) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const linkedPaths = new Set();
for (const path of paths) {
  const html = await fetchText(path);
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  const expectedCanonical = path === "/" ? "https://pshottreatment.com" : `https://pshottreatment.com${path}`;

  if (h1Count !== 1) fail(`${path} has ${h1Count} H1 elements`);

  const mainCount = (html.match(/<main\b/g) || []).length;
  if (mainCount !== 1) fail(`${path} has ${mainCount} <main> elements`);

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (!title) fail(`${path} has no <title>`);
  else if (title.length > 60) fail(`${path} title is ${title.length} characters (max 60): ${title}`);

  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  if (description.length < 70 || description.length > 175) fail(`${path} meta description is ${description.length} characters (want 70-175)`);

  for (const property of ["og:image", "og:title", "og:description", "og:url"]) {
    if (!html.includes(`property="${property}"`)) fail(`${path} is missing ${property}`);
  }
  if (!html.includes('name="twitter:image"')) fail(`${path} is missing twitter:image`);
  if (!html.includes('name="twitter:card" content="summary_large_image"')) fail(`${path} twitter:card is not summary_large_image`);
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) {
    fail(`${path} canonical mismatch: ${canonicals.join(", ")}`);
  }

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)];
  if (!jsonLdBlocks.length) fail(`${path} has no JSON-LD`);
  for (const [, json] of jsonLdBlocks) {
    let data;
    try {
      data = JSON.parse(decode(json));
    } catch (error) {
      fail(`${path} has invalid JSON-LD: ${error.message}`);
      continue;
    }

    const nodes = data["@graph"] ?? [data];
    const types = nodes.flatMap((node) => [node["@type"]].flat());
    for (const banned of ["AggregateRating", "Review", "Rating"]) {
      if (types.includes(banned) || json.includes(`"${banned}"`)) fail(`${path} JSON-LD contains unsupported ${banned} markup`);
    }

    const faq = nodes.find((node) => node["@type"] === "FAQPage");
    const visibleFaq = html.includes("data-faq");
    if (faq && !visibleFaq) fail(`${path} has FAQPage JSON-LD but no visible FAQ`);
    if (!faq && visibleFaq) fail(`${path} shows a FAQ but has no FAQPage JSON-LD`);
    if (faq) {
      const pageText = textOf(html);
      for (const question of faq.mainEntity) {
        if (!pageText.includes(question.name)) fail(`${path} FAQ question not visible: ${question.name}`);
        if (!pageText.includes(question.acceptedAnswer.text)) fail(`${path} FAQ answer not visible: ${question.name}`);
      }
    }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const linked = match[1].split("#")[0].split("?")[0];
    if (linked && !linked.startsWith("/_next")) linkedPaths.add(linked);
  }

  // Claims the project brief forbids. The site must never state or imply them, even in negated form.
  const text = textOf(html).toLowerCase();
  for (const phrase of ["will restore", "guaranteed stronger", "guaranteed erection", "100% success", "permanent improvement", "only 3 slots", "board-certified doctors", "1000+ patients", "verified patient results"]) {
    if (text.includes(phrase)) fail(`${path} contains prohibited claim: ${phrase}`);
  }

  const kind = html.match(/data-page-kind="([^"]+)"/)?.[1];
  const ctaCount = (html.match(/data-cta="/g) || []).length;
  if (kind === "money" || kind === "home") {
    if (ctaCount < 5) fail(`${path} has only ${ctaCount} assessment/WhatsApp CTAs (want 5 or more on money pages)`);
    if (!html.includes("data-doctor")) fail(`${path} has no physician section`);
    if (!/href="https:\/\/wa\.me\/\d+\?text=/.test(html)) fail(`${path} has no pre-filled WhatsApp link`);
  }
  if (!jsonLdBlocks.some(([, j]) => decode(j).includes('"MedicalClinic"') && decode(j).includes('"Physician"'))) {
    fail(`${path} JSON-LD is missing MedicalClinic/Physician`);
  }

  // WhatsApp pre-filled message follows the treatment of the page.
  const expectedTreatment = path.includes("-vs-") ? null : path.match(/p-shot|prp/) ? "P-Shot" : path.match(/shockwave|edswt/) ? "Shockwave" : path.match(/stem-cell/) ? "Stem Cell" : path.match(/exosome/) ? "Exosome" : null;
  if (expectedTreatment) {
    const wa = decode(html).match(/https:\/\/wa\.me\/\d+\?text=([^"&]+)/)?.[1];
    const message = wa ? decodeURIComponent(wa) : "";
    if (!message.includes(`interested in ${expectedTreatment}.`)) fail(`${path} WhatsApp message does not name ${expectedTreatment}: ${message}`);
  }
}

for (const path of linkedPaths) await fetchText(path);

const robots = await fetchText("/robots.txt");
if (!robots.includes("Sitemap: https://pshottreatment.com/sitemap.xml")) fail("robots.txt sitemap missing");
for (const bot of ["OAI-SearchBot", "GPTBot", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"]) {
  if (!robots.includes(`User-Agent: ${bot}`)) fail(`robots.txt has no explicit rule for ${bot}`);
}

const llms = await fetchText("/llms.txt");
if (!llms.includes("PRP (P-Shot) for erectile dysfunction is experimental")) fail("llms.txt evidence position missing");
for (const path of paths) {
  const url = path === "/" ? "https://pshottreatment.com" : `https://pshottreatment.com${path}`;
  if (path !== "/" && !llms.includes(`(${url})`)) fail(`llms.txt does not list ${path}`);
}

const llmsFull = await fetchText("/llms-full.txt");
if (!llmsFull.includes("Frequently asked questions")) fail("llms-full.txt has no FAQ content");

for (const asset of ["/manifest.webmanifest", "/apple-icon", "/icon", "/og.png"]) {
  const response = await fetch(`${base}${asset}`);
  if (response.status !== 200) fail(`${asset} returned ${response.status}`);
}
const notFound = await fetch(`${base}/this-page-does-not-exist`);
if (notFound.status !== 404) fail(`unknown URL returned ${notFound.status}, expected 404`);

for (const [from, to] of Object.entries(redirects)) {
  const response = await fetch(`${base}${from}`, { redirect: "manual" });
  if (response.status !== 301) fail(`${from} returned ${response.status}, expected a 301`);
  else if (new URL(response.headers.get("location"), base).pathname !== to) fail(`${from} redirects to ${response.headers.get("location")}, expected ${to}`);
  if (!paths.includes(to)) fail(`${from} redirects to ${to}, which is not in the sitemap`);
  if (paths.includes(from)) fail(`${from} is redirected but still listed in the sitemap`);
}

// Assessment API: rejects invalid input and never reports success for a missing consent.
const post = (body) => fetch(`${base}/api/assessment`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
if ((await post({})).status !== 400) fail("/api/assessment accepted an empty payload");
const honeypot = await post({ website: "bot", age: 40, problem: "cannot-get", duration: "lt3m", country: "UK", name: "Test", whatsapp: "+44 7000 000000", consent: true });
if (honeypot.status !== 200) fail(`/api/assessment honeypot returned ${honeypot.status}`);

if (!process.exitCode) {
  console.log(`PASS ${paths.length} sitemap routes, ${linkedPaths.size} internal links, canonical/H1/main/title/meta/OG/JSON-LD/FAQ/CTA/WhatsApp/redirect/API/robots/llms checks`);
}

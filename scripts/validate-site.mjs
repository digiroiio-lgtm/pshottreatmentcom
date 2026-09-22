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

const linkedPaths = new Set();
for (const path of paths) {
  const html = await fetchText(path);
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  const expectedCanonical = path === "/" ? "https://pshottreatment.com" : `https://pshottreatment.com${path}`;

  if (h1Count !== 1) fail(`${path} has ${h1Count} H1 elements`);
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) {
    fail(`${path} canonical mismatch: ${canonicals.join(", ")}`);
  }

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)];
  if (!jsonLdBlocks.length) fail(`${path} has no JSON-LD`);
  for (const [, json] of jsonLdBlocks) {
    try {
      JSON.parse(json.replaceAll("&quot;", '"').replaceAll("&amp;", "&"));
    } catch (error) {
      fail(`${path} has invalid JSON-LD: ${error.message}`);
    }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const linked = match[1].split("#")[0].split("?")[0];
    if (linked && !linked.startsWith("/_next")) linkedPaths.add(linked);
  }

  for (const phrase of ["Only 3 slots", "Board-Certified Doctors", "1000+ Patients", "Verified patient results"]) {
    if (html.includes(phrase)) fail(`${path} renders prohibited unsupported claim: ${phrase}`);
  }
}

for (const path of linkedPaths) await fetchText(path);

const robots = await fetchText("/robots.txt");
if (!robots.includes("Sitemap: https://pshottreatment.com/sitemap.xml")) fail("robots.txt sitemap missing");

const llms = await fetchText("/llms.txt");
if (!llms.includes("PRP for erectile dysfunction is experimental")) fail("llms.txt evidence position missing");

if (!process.exitCode) {
  console.log(`PASS ${paths.length} sitemap routes, ${linkedPaths.size} internal links, canonical/H1/JSON-LD/robots/llms checks`);
}

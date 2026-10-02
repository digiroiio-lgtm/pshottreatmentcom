// Submits every sitemap URL to IndexNow (Bing, Yandex and others; Bing\'s index also feeds ChatGPT search and Copilot).
// Usage: INDEXNOW_KEY=<key> node scripts/indexnow.mjs [--dry-run] [--sitemap https://pshottreatment.com/sitemap.xml]
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const sitemapUrl = args.includes("--sitemap") ? args[args.indexOf("--sitemap") + 1] : "https://pshottreatment.com/sitemap.xml";
const key = process.env.INDEXNOW_KEY;

if (!key && !dryRun) {
  console.error("Set INDEXNOW_KEY (8-128 characters, letters, digits and dashes). The key file is served at /<key>.txt by the site.");
  process.exit(1);
}

const xml = await (await fetch(sitemapUrl)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) {
  console.error(`No URLs found in ${sitemapUrl}`);
  process.exit(1);
}
const host = new URL(urls[0]).host;

if (dryRun) {
  console.log(`Would submit ${urls.length} URLs for ${host}:`);
  urls.forEach((u) => console.log(`  ${u}`));
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls }),
});
console.log(`IndexNow responded ${response.status} for ${urls.length} URLs`);
if (response.status >= 400) process.exit(1);

import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog-posts";
import { locations } from "@/data/locations";

const BASE = "https://pshottreatment.com";

// IndexNow key — set INDEXNOW_KEY in your deployment environment variables.
// 1. Generate a unique key at https://www.bing.com/indexnow/getstarted
// 2. Set it as INDEXNOW_KEY in your environment
// 3. The key verification file is served at /api/indexnow-key
const KEY = process.env.INDEXNOW_KEY ?? "";

/** POST or GET /api/indexnow — submit all site URLs to IndexNow */
export async function GET() {
  if (!KEY) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY environment variable is not set" },
      { status: 500 }
    );
  }

  const staticUrls = [
    `${BASE}/`,
    `${BASE}/p-shot-price`,
    `${BASE}/p-shot-before-after`,
    `${BASE}/p-shot-reviews`,
    `${BASE}/p-shot-side-effects`,
    `${BASE}/how-it-works`,
    `${BASE}/contact`,
    `${BASE}/blog`,
    `${BASE}/locations`,
  ];

  const blogUrls = blogPosts.map((p) => `${BASE}/blog/${p.slug}`);
  const locationUrls = locations.map((l) => `${BASE}/locations/${l.countrySlug}/${l.slug}`);
  const urlList = [...staticUrls, ...blogUrls, ...locationUrls];

  const payload = {
    host: "pshottreatment.com",
    key: KEY,
    // Per IndexNow spec: URL where the key can be fetched as plain text
    keyLocation: `${BASE}/api/indexnow-key`,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json(
      { submitted: urlList.length, status: res.status, ok: res.ok },
      { status: res.ok ? 200 : 502 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "IndexNow submission failed", detail: String(err) },
      { status: 500 }
    );
  }
}

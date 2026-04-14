import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blog-posts";
import { locations } from "@/data/locations";

const BASE = "https://pshottreatment.com";

// IndexNow key — set INDEXNOW_KEY in your deployment environment variables.
// 1. Generate a unique key at https://www.bing.com/indexnow/getstarted
// 2. Set it as INDEXNOW_KEY in your environment
// 3. The key verification file is served by the GET handler below
const KEY = process.env.INDEXNOW_KEY ?? "";

/**
 * GET /{key}.txt  — IndexNow key verification
 * Also handles GET /api/indexnow to submit all URLs
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Key-file verification: ?verify=1
  if (searchParams.get("verify") === "1") {
    if (!KEY) {
      return NextResponse.json({ error: "INDEXNOW_KEY not configured" }, { status: 500 });
    }
    return new NextResponse(KEY, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  // Submit all URLs to IndexNow
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
    keyLocation: `${BASE}/api/indexnow?verify=1`,
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

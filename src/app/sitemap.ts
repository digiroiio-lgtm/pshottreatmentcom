import type { MetadataRoute } from "next";
import { pages } from "@/content";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    // Dates are maintained manually in the content registry. A deployment must never change them.
    lastModified: new Date(`${page.modified}T00:00:00.000Z`),
    changeFrequency: page.kind === "legal" || page.kind === "trust" ? "yearly" : "monthly",
    priority: page.priority,
  }));
}

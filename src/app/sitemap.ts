import type { MetadataRoute } from "next";
import { pages } from "@/content";
import { hreflangFor, localizedPages } from "@/content/localized";
import { absoluteUrl } from "@/lib/site-config";

const languages = (path: string) => {
  const map = hreflangFor(path);
  return map ? { alternates: { languages: Object.fromEntries(Object.entries(map).map(([lang, p]) => [lang, absoluteUrl(p)])) } } : {};
};

export default function sitemap(): MetadataRoute.Sitemap {
  const localized: MetadataRoute.Sitemap = localizedPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(`${page.modified}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.7,
    ...languages(page.path),
  }));
  const english: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(page.path),
    // Dates are maintained manually in the content registry. A deployment must never change them.
    lastModified: new Date(`${page.modified}T00:00:00.000Z`),
    changeFrequency: (page.kind === "legal" || page.kind === "trust" ? "yearly" : "monthly") as "yearly" | "monthly",
    priority: page.priority,
    ...languages(page.path),
  }));
  return [...english, ...localized];
}

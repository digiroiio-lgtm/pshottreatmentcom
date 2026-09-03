import { MetadataRoute } from "next";
import { ALL_CONTENT, pathFor } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/price",
    "/before-after",
    "/reviews",
    "/side-effects",
    "/how-it-works",
    "/guides",
    "/blog",
    "/contact",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : path === "/price" ? 0.9 : 0.8,
  }));

  const contentEntries = ALL_CONTENT.map((entry) => ({
    url: `${SITE_URL}${pathFor(entry)}`,
    lastModified: new Date(entry.updated),
    changeFrequency: "monthly" as const,
    priority: entry.type === "guide" ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...contentEntries];
}

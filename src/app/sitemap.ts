import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(`${route.modified}T00:00:00.000Z`),
    changeFrequency: route.utility ? "yearly" : "monthly",
    priority: route.priority,
  }));
}

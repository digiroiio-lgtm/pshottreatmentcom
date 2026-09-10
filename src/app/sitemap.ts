import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site-config";

/**
 * Dates come from each route's real `modified` value in site-config.ts.
 *
 * The previous version emitted `new Date()` on every request, so every URL
 * claimed to have changed today — a false freshness signal that crawlers learn
 * to discount, which then devalues genuine updates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const url = absoluteUrl(route.path);
    return {
      url,
      lastModified: new Date(`${route.modified}T00:00:00Z`),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "en-GB": url,
          "en-US": url,
        },
      },
    };
  });
}

import type { Metadata } from "next";
import { absoluteUrl, routeByPath, siteName, siteUrl } from "./site-config";

/**
 * Builds a page's Metadata from its `routes` entry so canonical URLs, titles,
 * descriptions and sitemap dates can never disagree with each other.
 */
export function buildMetadata(
  path: string,
  overrides: Metadata = {},
): Metadata {
  const route = routeByPath(path);
  if (!route) {
    throw new Error(
      `buildMetadata: no route entry for "${path}". Add it to src/lib/site-config.ts.`,
    );
  }

  const url = absoluteUrl(path);

  return {
    // `absolute` bypasses the layout title template: route titles in
    // site-config.ts are already complete, so templating would duplicate the brand.
    title: { absolute: route.title },
    description: route.summary,
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "en-US": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName,
      title: route.title,
      description: route.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.summary,
    },
    other: {
      // Visible-to-parsers freshness signal, mirrored in the JSON-LD graph.
      "article:published_time": route.published,
      "article:modified_time": route.modified,
    },
    ...overrides,
  };
}

/** Metadata for pages that must never be indexed (404, error states). */
export const noIndexMetadata: Metadata = {
  robots: { index: false, follow: true },
};

export { siteUrl };

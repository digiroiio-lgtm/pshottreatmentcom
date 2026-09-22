import type { Metadata } from "next";
import { absoluteUrl, routeByPath, SITE_NAME } from "./site-config";

export function buildMetadata(path: string): Metadata {
  const route = routeByPath(path);
  if (!route) throw new Error(`Missing route metadata for ${path}`);

  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: route.title,
      description: route.description,
      url: absoluteUrl(path),
      locale: "en_GB",
    },
    twitter: {
      card: "summary",
      title: route.title,
      description: route.description,
    },
  };
}

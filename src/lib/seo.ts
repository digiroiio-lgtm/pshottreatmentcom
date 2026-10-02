import type { Metadata } from "next";
import { absoluteUrl, brandedTitle, ogImageUrl, PUBLISHED_DATE, routeByPath, SITE_NAME } from "./site-config";

export function buildMetadata(path: string): Metadata {
  const route = routeByPath(path);
  if (!route) throw new Error(`Missing route metadata for ${path}`);

  const isArticle = path !== "/" && !route.utility;
  const image = { url: ogImageUrl(path), width: 1200, height: 630, alt: route.title };

  return {
    title: { absolute: brandedTitle(route.title) },
    description: route.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: isArticle
      ? {
          type: "article",
          siteName: SITE_NAME,
          title: route.title,
          description: route.description,
          url: absoluteUrl(path),
          locale: "en_GB",
          publishedTime: `${PUBLISHED_DATE}T00:00:00.000Z`,
          modifiedTime: `${route.modified}T00:00:00.000Z`,
          images: [image],
        }
      : {
          type: "website",
          siteName: SITE_NAME,
          title: route.title,
          description: route.description,
          url: absoluteUrl(path),
          locale: "en_GB",
          images: [image],
        },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [image.url],
    },
  };
}

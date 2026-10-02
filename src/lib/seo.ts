import type { Metadata } from "next";
import { getPage } from "@/content";
import { absoluteUrl, ogImageUrl, SITE_NAME } from "./site-config";

export function buildMetadata(path: string): Metadata {
  const page = getPage(path);
  if (!page) throw new Error(`Missing page definition for ${path}`);

  const isArticle = page.kind !== "legal" && path !== "/";
  const image = { url: ogImageUrl(path), width: 1200, height: 630, alt: page.h1 };

  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: isArticle ? "article" : "website",
      siteName: SITE_NAME,
      title: page.metaTitle,
      description: page.description,
      url: absoluteUrl(path),
      locale: "en_GB",
      images: [image],
      ...(isArticle ? { modifiedTime: `${page.modified}T00:00:00.000Z` } : {}),
    },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.description, images: [image.url] },
    ...(page.kind === "legal" ? { robots: { index: true, follow: true } } : {}),
  };
}

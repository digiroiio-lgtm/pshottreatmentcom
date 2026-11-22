import type { Metadata } from "next";
import { getPage } from "@/content";
import { hreflangFor, type LocalizedPage } from "@/content/localized";
import { absoluteUrl, ogImageUrl, SITE_NAME } from "./site-config";

export function buildMetadata(path: string): Metadata {
  const page = getPage(path);
  if (!page) throw new Error(`Missing page definition for ${path}`);

  const isArticle = page.kind !== "legal" && path !== "/";
  const image = { url: ogImageUrl(path), width: 1200, height: 630, alt: page.h1 };

  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    alternates: { canonical: absoluteUrl(path), ...languagesFor(path) },
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

const OG_LOCALE = { nl: "nl_NL", da: "da_DK" } as const;

/** hreflang alternates (absolute URLs) for pages that have translations. */
function languagesFor(path: string) {
  const map = hreflangFor(path);
  return map ? { languages: Object.fromEntries(Object.entries(map).map(([lang, p]) => [lang, absoluteUrl(p)])) } : {};
}

export function buildLocalizedMetadata(page: LocalizedPage): Metadata {
  const image = { url: ogImageUrl(page.enPath), width: 1200, height: 630, alt: page.h1 };
  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    alternates: { canonical: absoluteUrl(page.path), ...languagesFor(page.path) },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: page.metaTitle,
      description: page.description,
      url: absoluteUrl(page.path),
      locale: OG_LOCALE[page.lang],
      alternateLocale: ["en_GB"],
      images: [image],
      modifiedTime: `${page.modified}T00:00:00.000Z`,
    },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.description, images: [image.url] },
  };
}

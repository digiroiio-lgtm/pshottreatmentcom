import type { Metadata } from "next";
import { ContentEntry, pathFor } from "@/lib/content";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "P-Shot Treatment – £300 | Certified Clinic Turkey",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Get a P-Shot treatment for just £300 / €300 / $300. Same medical procedure as UK clinics – 70% cheaper. Certified doctors. 1000+ patients treated.",
  keywords: ["P-Shot treatment", "P-Shot cost", "P-Shot price", "P-Shot results"],
};

/** Metadata for a guide or blog entry: canonical, Open Graph and article dates. */
export function articleMetadata(entry: ContentEntry): Metadata {
  const url = `${SITE_URL}${pathFor(entry)}`;
  return {
    title: entry.title,
    description: entry.description,
    keywords: [entry.primaryKeyword, ...entry.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title: entry.title,
      description: entry.description,
      modifiedTime: entry.updated,
      publishedTime: entry.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
  };
}

/** Metadata for a hub or static page. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
    },
  };
}

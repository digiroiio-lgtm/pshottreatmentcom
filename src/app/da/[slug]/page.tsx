import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedPageView from "@/components/LocalizedPageView";
import { getLocalizedPage, localizedPages } from "@/content/localized";
import { buildLocalizedMetadata } from "@/lib/seo";

const LANG = "da";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedPages.filter((p) => p.lang === LANG).map((p) => ({ slug: p.path.split("/")[2] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalizedPage(`/${LANG}/${slug}`);
  return page ? buildLocalizedMetadata(page) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLocalizedPage(`/${LANG}/${slug}`);
  if (!page) notFound();
  return <LocalizedPageView page={page} />;
}

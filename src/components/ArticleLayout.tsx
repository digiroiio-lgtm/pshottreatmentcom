import { ReactNode } from "react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import FaqSection, { FaqItem } from "@/components/FaqSection";
import RelatedContent from "@/components/RelatedContent";
import JsonLd from "@/components/JsonLd";
import CtaBlock from "@/components/CtaBlock";
import { ContentEntry, pathFor } from "@/lib/content";
import { EDITORIAL, SITE_NAME, SITE_URL } from "@/lib/site";

interface Props {
  entry: ContentEntry;
  faqs: FaqItem[];
  children: ReactNode;
  /** Optional override for the closing CTA heading. */
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export default function ArticleLayout({ entry, faqs, children, ctaTitle, ctaSubtitle }: Props) {
  const path = pathFor(entry);
  const url = `${SITE_URL}${path}`;
  const hubPath = entry.type === "guide" ? "/guides" : "/blog";
  const hubLabel = entry.type === "guide" ? "Guides" : "Blog";

  const crumbs: Crumb[] = [
    { href: "/", label: "Home" },
    { href: hubPath, label: hubLabel },
    { href: path, label: entry.h1 },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href === "/" ? SITE_URL : `${SITE_URL}${c.href}`,
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.h1,
    description: entry.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: entry.updated,
    dateModified: entry.updated,
    inLanguage: "en-GB",
    author: { "@type": "Organization", name: EDITORIAL.author, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    about: { "@type": "MedicalProcedure", name: "P-Shot (Priapus Shot) platelet-rich plasma injection" },
    keywords: [entry.primaryKeyword, ...entry.secondaryKeywords].join(", "),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="pt-8 pb-4">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      {faqs.length > 0 && <JsonLd data={faqSchema} />}

      <div className="max-w-3xl mx-auto px-4">
        <Breadcrumbs items={crumbs} />

        <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-3">
          {entry.type === "guide" ? "Guide" : "Article"}
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{entry.h1}</h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 border-b border-gray-100 pb-6 mb-8">
          <span>By {EDITORIAL.author}</span>
          <span aria-hidden="true" className="text-gray-300">•</span>
          <span>
            Last updated{" "}
            <time dateTime={entry.updated}>
              {new Date(entry.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </span>
        </div>

        <div className="prose-content">{children}</div>

        {faqs.length > 0 && <FaqSection items={faqs} />}

        <RelatedContent refs={entry.related} />

        <aside className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-gray-900 mb-2">About this article</h2>
          <p className="text-sm text-gray-500 leading-relaxed">{EDITORIAL.note}</p>
        </aside>
      </div>

      <CtaBlock title={ctaTitle} subtitle={ctaSubtitle} />
    </article>
  );
}

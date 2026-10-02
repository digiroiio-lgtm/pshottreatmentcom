import Link from "next/link";
import type { EvidenceSource } from "@/lib/evidence";
import { getGeoContent } from "@/lib/geo-content";
import { routeByPath } from "@/lib/site-config";
import Breadcrumbs from "./Breadcrumbs";
import CtaBlock from "./CtaBlock";
import EvidenceStatus from "./EvidenceStatus";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import KeyTakeaways from "./KeyTakeaways";
import MedicalReviewStatus from "./MedicalReviewStatus";
import SourceList from "./SourceList";

export type ArticleTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ArticleTable;
};

export type Article = {
  path: string;
  h1: string;
  eyebrow: string;
  intro: string;
  evidenceStatus: "Established" | "Moderate" | "Limited" | "Uncertain" | "Not medical evidence";
  evidenceSummary: string;
  sections: ArticleSection[];
  sources: EvidenceSource[];
  related: { path: string; label: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
};

const hubPaths = [
  "/ed-causes",
  "/diabetes-erectile-dysfunction",
  "/post-prostatectomy-ed",
  "/testosterone-ed",
  "/post-finasteride-syndrome-ed",
  "/shockwave-therapy-ed",
  "/prp-fix-erectile-dysfunction-naturally",
  "/p-shot-venous-leak-ed",
  "/p-shot-vs-viagra",
];
const hubItems = hubPaths.map((path) => ({ path, name: routeByPath(path)?.title ?? path }));

export default function ArticlePage({ article }: { article: Article }) {
  const geo = getGeoContent(article.path);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...(article.path === "/ed-knowledge-hub"
      ? []
      : [{ name: "ED Knowledge Hub", path: "/ed-knowledge-hub" }]),
    { name: article.h1, path: article.path },
  ];

  return (
    <div className="pb-14">
      <JsonLd
        path={article.path}
        breadcrumbs={breadcrumbs}
        sources={article.sources}
        article={{ headline: article.h1 }}
        hubItems={article.path === "/ed-knowledge-hub" ? hubItems : undefined}
      />
      <Breadcrumbs items={breadcrumbs} />
      <header className="max-w-4xl mx-auto px-4 pt-10 pb-7">
        <p className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">{article.eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-5">
          {article.h1}
        </h1>
        <p data-direct-answer className="text-lg md:text-xl text-gray-700 leading-relaxed">{article.intro}</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 space-y-9">
        <MedicalReviewStatus path={article.path} />
        <EvidenceStatus status={article.evidenceStatus}>{article.evidenceSummary}</EvidenceStatus>
        {geo?.takeaways && <KeyTakeaways items={geo.takeaways} />}

        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold text-gray-950 mb-4">{section.heading}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span aria-hidden="true" className="text-blue-700 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border border-gray-200">
                    <caption className="text-left text-sm font-semibold text-gray-700 pb-2">{section.table.caption}</caption>
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>{section.table.headers.map((header) => <th key={header} scope="col" className="px-4 py-2 font-semibold">{header}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, index) => index === 0
                            ? <th key={cell} scope="row" className="px-4 py-3 font-semibold text-gray-900 align-top">{cell}</th>
                            : <td key={cell} className="px-4 py-3 align-top">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        ))}

        {geo?.faqs && <Faq items={geo.faqs} />}

        <SourceList sources={article.sources} />

        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold text-gray-950 mb-4">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {article.related.map((item) => (
              <Link key={item.path} href={item.path} className="border border-gray-200 rounded-xl p-4 font-semibold text-blue-800 hover:border-blue-400">
                {item.label} →
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
          This page provides general information and does not diagnose ED or determine whether a treatment is suitable for you. Seek individual advice from a qualified clinician. Chest pain, new neurological symptoms, penile injury or an erection lasting more than four hours requires urgent medical care.
        </div>
      </div>

      <CtaBlock title={article.ctaTitle} subtitle={article.ctaSubtitle} />
    </div>
  );
}

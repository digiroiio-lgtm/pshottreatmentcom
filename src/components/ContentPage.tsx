import Link from "next/link";
import { Suspense } from "react";
import { getPage } from "@/content";
import { breadcrumbLabels } from "@/content/breadcrumbs";
import type { Block, PageDef } from "@/content/types";
import { getSources } from "@/lib/evidence";
import { ASSESSMENT_PATH } from "@/lib/site-config";
import AssessmentForm from "./AssessmentForm";
import Breadcrumbs from "./Breadcrumbs";
import CandidateChecker from "./CandidateChecker";
import ClinicLocation from "./ClinicLocation";
import ConfidentialAssessment from "./ConfidentialAssessment";
import { AssessmentButton, ConfidentialNote, CtaBlock, WhatsAppCTA } from "./cta";
import { DoctorCredentials, DoctorReviewCTA } from "./DoctorCredentials";
import EvidenceChip from "./EvidenceChip";
import GoogleRatingBadge from "./GoogleRatingBadge";
import Faq from "./Faq";
import InternationalPatientCTA from "./InternationalPatientCTA";
import JsonLd from "./JsonLd";
import KeyTakeaways from "./KeyTakeaways";
import MedicalDisclaimer from "./MedicalDisclaimer";
import MedicalReviewStatus from "./MedicalReviewStatus";
import PatientStories from "./PatientStory";
import PriceTable from "./PriceTable";
import SourceList from "./SourceList";
import TreatmentComparison from "./TreatmentComparison";
import TreatmentNavigation from "./TreatmentNavigation";

const defaultParent = (page: PageDef) => {
  if (page.parent) return page.parent;
  switch (page.kind) {
    case "condition":
      return { name: "Erectile dysfunction", path: "/erectile-dysfunction" };
    case "money":
      return { name: "ED treatment options", path: "/ed-treatment-options" };
    case "comparison":
      return { name: "ED treatment options", path: "/ed-treatment-options" };
    case "diagnostic":
      return { name: "Erectile dysfunction", path: "/erectile-dysfunction" };
    case "article":
      return { name: "ED knowledge hub", path: "/ed-knowledge-hub" };
    default:
      return undefined;
  }
};

export const breadcrumbsFor = (page: PageDef) => {
  const parent = defaultParent(page);
  return [
    { name: "Home", path: "/" },
    ...(parent && parent.path !== page.path ? [parent] : []),
    { name: breadcrumbLabels[page.path] ?? page.h1, path: page.path },
  ];
};

const Heading = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <h2 id={id} className="text-2xl font-bold text-slate-950 mb-4 scroll-mt-24">{children}</h2>
);

function BlockView({ block, page, index }: { block: Block; page: PageDef; index: number }) {
  const treatment = page.treatment ?? "not-sure";
  switch (block.type) {
    case "text":
      return (
        <section>
          {block.heading && <Heading id={block.id}>{block.heading}</Heading>}
          <div className="space-y-4 text-slate-700 leading-relaxed">
            {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
            {block.bullets && (
              <ul className="space-y-2.5">
                {block.bullets.map((b) => (
                  <li key={b} className="flex gap-3"><span aria-hidden="true" className="text-teal-700 font-bold">•</span><span>{b}</span></li>
                ))}
              </ul>
            )}
            {block.note && <p className="text-sm text-slate-600 border-l-4 border-teal-200 pl-4">{block.note}</p>}
          </div>
        </section>
      );
    case "cards":
      return (
        <section>
          <Heading id={block.id}>{block.heading}</Heading>
          {block.intro && <p className="text-slate-700 mb-4">{block.intro}</p>}
          <div className={`grid gap-4 ${block.cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
            {block.cards.map((card) => {
              const body = (
                <>
                  <h3 className="font-bold text-slate-950 mb-1.5">{card.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{card.text}</p>
                  {card.href && <span className="inline-block mt-3 text-sm font-semibold text-teal-800">Learn more →</span>}
                </>
              );
              return card.href ? (
                <Link key={card.title} id={card.id} href={card.href} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-teal-600 scroll-mt-24">{body}</Link>
              ) : (
                <div key={card.title} id={card.id} className="rounded-xl border border-slate-200 bg-white p-5 scroll-mt-24">{body}</div>
              );
            })}
          </div>
        </section>
      );
    case "table":
      return (
        <section>
          <Heading id={block.id}>{block.heading}</Heading>
          {block.intro && <p className="text-slate-700 mb-4">{block.intro}</p>}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{block.caption}</caption>
              <thead className="bg-slate-50 text-slate-800">
                <tr>{block.headers.map((h, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold">{h || <span className="sr-only">Aspect</span>}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="bg-white">
                    {row.map((cell, i) => (i === 0 ? <th key={i} scope="row" className="px-4 py-3 font-semibold text-slate-950 align-top">{cell}</th> : <td key={i} className="px-4 py-3 text-slate-700 align-top">{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className="text-sm text-slate-600 mt-2">{block.note}</p>}
        </section>
      );
    case "steps":
      return (
        <section>
          <Heading id={block.id}>{block.heading}</Heading>
          {block.intro && <p className="text-slate-700 mb-4">{block.intro}</p>}
          <ol className="space-y-3">
            {block.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white font-bold">{i + 1}</span>
                <div><h3 className="font-bold text-slate-950">{step.title}</h3><p className="text-sm text-slate-700 mt-1">{step.text}</p></div>
              </li>
            ))}
          </ol>
        </section>
      );
    case "callout": {
      const tone = { info: "bg-sky-50 border-sky-200", caution: "bg-amber-50 border-amber-200", evidence: "bg-slate-50 border-slate-300" }[block.tone];
      return (
        <aside className={`rounded-2xl border p-5 ${tone}`}>
          <p className="font-bold text-slate-950 mb-1">{block.title}</p>
          <p className="text-sm text-slate-800 leading-relaxed">{block.text}</p>
        </aside>
      );
    }
    case "cta":
      return <CtaBlock title={block.title} text={block.text} label={block.label} whatsapp={block.whatsapp} treatment={treatment} placement={`block-${index}`} />;
    case "checker":
      return <CandidateChecker treatment={treatment} />;
    case "doctor":
      return (
        <div className="space-y-4">
          <DoctorCredentials />
          <DoctorReviewCTA treatment={treatment} placement="doctor" />
        </div>
      );
    case "comparison":
      return <TreatmentComparison heading={block.heading} intro={block.intro} highlight={block.highlight} />;
    case "stories":
      return <PatientStories treatment={page.treatment} heading={block.heading} />;
    case "international":
      return <InternationalPatientCTA treatment={treatment} />;
    case "assessment-form":
      return (
        <Suspense fallback={<div className="rounded-2xl border border-slate-200 p-8 text-slate-600">Loading the assessment…</div>}>
          <AssessmentForm />
        </Suspense>
      );
    case "treatment-nav":
      return <TreatmentNavigation heading={block.heading} exclude={block.exclude} />;
    case "price":
      return <PriceTable />;
    case "location":
      return <ClinicLocation />;
    case "rating":
      return (
        <div className="flex flex-wrap items-center gap-3">
          <GoogleRatingBadge />
          <span className="text-sm text-slate-600">Ratings on Google are from independent reviewers, not selected by the clinic.</span>
        </div>
      );
  }
}

export default function ContentPage({ page }: { page: PageDef }) {
  const treatment = page.treatment ?? "not-sure";
  const crumbs = breadcrumbsFor(page);
  const related = (page.related ?? []).map((path) => getPage(path)).filter((p): p is PageDef => Boolean(p));
  const isAssessment = page.path === ASSESSMENT_PATH;

  return (
    <div data-page-kind={page.kind} className="pb-20">
      <JsonLd page={page} breadcrumbs={crumbs} />
      <Breadcrumbs items={crumbs} />
      <header className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <p className="text-sm font-bold uppercase tracking-wider text-teal-800">{page.eyebrow}</p>
          {page.evidence && <EvidenceChip label={page.evidence} prefix />}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">{page.h1}</h1>
        <div data-direct-answer className="rounded-2xl bg-slate-50 border border-slate-200 p-5 mb-5">
          <p className="text-sm font-bold text-teal-800 mb-1">{page.answer.q}</p>
          <p className="text-lg text-slate-800 leading-relaxed">{page.answer.a}</p>
        </div>
        {page.lead && <p className="text-slate-700 text-lg mb-5">{page.lead}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          {isAssessment ? (
            <a href="#assessment-form" data-cta={page.ctaLabel} data-placement="hero" className="inline-flex items-center justify-center rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3">{page.ctaLabel}</a>
          ) : (
            <AssessmentButton label={page.ctaLabel} treatment={treatment} placement="hero" />
          )}
          <WhatsAppCTA treatment={treatment} placement="hero" variant="outline" />
        </div>
        <ConfidentialNote className="text-slate-600 mt-4" />
      </header>

      <div className="max-w-4xl mx-auto px-4 space-y-10">
        <MedicalReviewStatus modified={page.modified} />
        {page.takeaways && <KeyTakeaways items={page.takeaways} />}
        {page.blocks.map((block, index) => <BlockView key={index} block={block} page={page} index={index} />)}
        {page.faqs && <Faq items={page.faqs} />}
        {page.sources && <SourceList sources={getSources(page.sources)} />}
        {related.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-bold text-slate-950 mb-4">Related guides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((item) => (
                <Link key={item.path} href={item.path} className="rounded-xl border border-slate-200 p-4 font-semibold text-teal-900 hover:border-teal-600">{item.h1} →</Link>
              ))}
            </div>
          </section>
        )}
        {!isAssessment && page.kind !== "legal" && <ConfidentialAssessment treatment={treatment} />}
        <MedicalDisclaimer />
      </div>
    </div>
  );
}

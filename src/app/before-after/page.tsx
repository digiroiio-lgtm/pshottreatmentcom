import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import EvidenceStatus from "@/components/EvidenceStatus";
import JsonLd from "@/components/JsonLd";
import MedicalReviewStatus from "@/components/MedicalReviewStatus";
import SourceList from "@/components/SourceList";
import { getSources } from "@/lib/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/before-after");
const trail = [{ name: "Home", path: "/" }, { name: "Results", path: "/before-after" }];

export default function Page() {
  return <div className="pb-14"><JsonLd path="/before-after" breadcrumbs={trail} /><Breadcrumbs items={trail} /><header className="max-w-4xl mx-auto px-4 pt-10 pb-7"><p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">Outcomes</p><h1 className="text-4xl md:text-5xl font-extrabold mb-5">P-Shot Results: Evidence and Limits</h1><p data-direct-answer className="text-xl text-gray-700 leading-relaxed">There is no reliable visual ‘before and after’ standard for erectile function. Outcome claims should use validated measures, disclose concurrent treatment and include non-responders and adverse events.</p></header><div className="max-w-4xl mx-auto px-4 space-y-8"><MedicalReviewStatus path="/before-after" /><EvidenceStatus status="Limited">Trials conflict, protocols vary and long-term durability is uncertain. A selected patient image or testimonial cannot establish the probability of benefit.</EvidenceStatus></div><BeforeAfterGrid /><div className="max-w-4xl mx-auto px-4"><SourceList sources={getSources(["eau2026", "masterson2023", "poulios2021", "panunzio2024"])} /></div><CtaBlock title="Ask How Outcomes Are Measured" subtitle="Request the provider's full outcome method, including non-responders, adverse events and follow-up duration." /></div>;
}

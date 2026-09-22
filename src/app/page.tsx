import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import PriceTable from "@/components/PriceTable";
import HowItWorks from "@/components/HowItWorks";
import CtaBlock from "@/components/CtaBlock";
import EvidenceStatus from "@/components/EvidenceStatus";
import JsonLd from "@/components/JsonLd";
import SourceList from "@/components/SourceList";
import MedicalReviewStatus from "@/components/MedicalReviewStatus";
import { getSources } from "@/lib/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

export default function HomePage() {
  return (
    <>
      <JsonLd path="/" breadcrumbs={[{ name: "Home", path: "/" }]} />
      <HeroSection />
      <TrustBadges />
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-7">
        <MedicalReviewStatus path="/" />
        <EvidenceStatus status="Limited">
          Some trials report improved erectile-function scores after PRP, while another randomised placebo-controlled trial found no meaningful efficacy difference. The 2026 European Association of Urology guideline says PRP for ED should be used only in a clinical-trial setting.
        </EvidenceStatus>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-950 mb-4">What this means for a patient</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PRP is a real blood-derived preparation with a plausible biological rationale, but plausible is not the same as proven. No one can responsibly promise that it will cure ED, regenerate penile tissue, increase size or provide a fixed duration of benefit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A sound decision begins with the likely cause of ED, established treatment options, individual risks and transparent consent. The pages below separate those questions instead of treating every search term as a sales page.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["/ed-knowledge-hub", "Understand the condition", "Causes, assessment and established options"],
            ["/prp-fix-erectile-dysfunction-naturally", "Review the evidence", "Trials, limitations and guideline position"],
            ["/best-p-shot-clinic-turkey", "Verify the provider", "Clinician, facility, protocol and aftercare checks"],
          ].map(([href, title, text]) => (
            <Link key={href} href={href} className="border border-gray-200 rounded-2xl p-5 hover:border-blue-400">
              <h3 className="font-bold text-blue-900 mb-2">{title}</h3><p className="text-sm text-gray-600">{text}</p>
            </Link>
          ))}
        </div>
        <SourceList sources={getSources(["eau2026", "aua2018", "masterson2023", "panunzio2024"])} />
      </section>
      <PriceTable />
      <HowItWorks />
      <CtaBlock />
    </>
  );
}

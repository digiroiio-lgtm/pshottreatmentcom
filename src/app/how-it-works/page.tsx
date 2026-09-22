import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import EvidenceStatus from "@/components/EvidenceStatus";
import HowItWorks from "@/components/HowItWorks";
import JsonLd from "@/components/JsonLd";
import MedicalReviewStatus from "@/components/MedicalReviewStatus";
import SourceList from "@/components/SourceList";
import { getSources } from "@/lib/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/how-it-works");
const trail = [{ name: "Home", path: "/" }, { name: "How it works", path: "/how-it-works" }];

export default function Page() {
  return (
    <div className="pb-14">
      <JsonLd path="/how-it-works" breadcrumbs={trail} />
      <Breadcrumbs items={trail} />
      <header className="max-w-4xl mx-auto px-4 pt-10 pb-7">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">Treatment</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5">How P-Shot PRP Is Performed</h1>
        <p data-direct-answer className="text-xl text-gray-700 leading-relaxed">Blood is drawn and processed to concentrate platelets in plasma, then the preparation is injected into penile tissue after assessment and consent. This describes the procedure, not proof that it repairs tissue or improves ED.</p>
      </header>
      <main className="max-w-4xl mx-auto px-4 space-y-9">
        <MedicalReviewStatus path="/how-it-works" />
        <EvidenceStatus status="Limited">Preparation, platelet concentration, activation, injection sites and number of sessions vary between studies and providers. No single protocol is established as optimal.</EvidenceStatus>
        <section><h2 className="text-2xl font-bold mb-4">Typical procedural stages</h2><ol className="space-y-4">{[
          ["Clinical assessment", "Review ED history, medical conditions, medication, bleeding risk, likely cause and alternatives."],
          ["Blood collection", "A blood sample is taken using sterile technique."],
          ["PRP preparation", "A centrifuge separates blood components. The resulting concentration varies by system and protocol."],
          ["Anaesthesia and injection", "Local or topical anaesthesia may be used before intracavernosal or targeted penile injections."],
          ["Observation and aftercare", "The provider should give written instructions, warning signs and a named follow-up route."],
        ].map(([title,text], index) => <li key={title} className="border border-gray-200 rounded-xl p-5"><h3 className="font-bold mb-1">{index + 1}. {title}</h3><p className="text-gray-700 text-sm">{text}</p></li>)}</ol></section>
        <section><h2 className="text-2xl font-bold mb-3">Proposed mechanism vs clinical evidence</h2><p className="text-gray-700 leading-relaxed">Platelets release growth factors, creating a rationale for research into angiogenesis and tissue responses. Current human evidence does not establish that penile PRP regenerates nerves, reverses fibrosis, repairs a venous leak or permanently restores erectile function.</p></section>
        <SourceList sources={getSources(["eau2026", "aua2018", "masterson2023", "panunzio2024"])} />
      </main>
      <HowItWorks />
      <CtaBlock />
    </div>
  );
}

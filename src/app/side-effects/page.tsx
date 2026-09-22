import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import EvidenceStatus from "@/components/EvidenceStatus";
import JsonLd from "@/components/JsonLd";
import MedicalReviewStatus from "@/components/MedicalReviewStatus";
import SourceList from "@/components/SourceList";
import { getSources } from "@/lib/evidence";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/side-effects");
const trail = [{ name: "Home", path: "/" }, { name: "Side effects", path: "/side-effects" }];

export default function Page() {
  return (
    <div className="pb-14">
      <JsonLd path="/side-effects" breadcrumbs={trail} />
      <Breadcrumbs items={trail} />
      <header className="max-w-4xl mx-auto px-4 pt-10 pb-7"><p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">Safety</p><h1 className="text-4xl md:text-5xl font-extrabold mb-5">P-Shot Side Effects and Risks</h1><p data-direct-answer className="text-xl text-gray-700 leading-relaxed">Reported study adverse events have generally been minor, but available trials are too small to define uncommon risks confidently. Penile injections can cause pain, bruising, swelling, bleeding, infection and other procedure-related complications.</p></header>
      <main className="max-w-4xl mx-auto px-4 space-y-9">
        <MedicalReviewStatus path="/side-effects" />
        <EvidenceStatus status="Limited">Autologous PRP reduces concern about donor rejection, but it does not make the procedure risk-free. Sterility, clinician technique, anaesthetic or additives, medical history and anticoagulant use all matter.</EvidenceStatus>
        <section><h2 className="text-2xl font-bold mb-4">Possible effects and risks</h2><div className="grid md:grid-cols-2 gap-4">{[
          ["Expected or common", "Temporary injection pain, tenderness, bruising, redness or swelling."],
          ["Bleeding-related", "Bleeding or haematoma risk may be higher with anticoagulants, antiplatelets or bleeding disorders."],
          ["Infection", "Any injection can introduce infection if preparation or technique is not appropriately sterile."],
          ["Uncertain or uncommon", "Small trials cannot reliably quantify rare events or long-term penile tissue effects."],
        ].map(([title,text]) => <div key={title} className="border border-gray-200 rounded-xl p-5"><h3 className="font-bold mb-2">{title}</h3><p className="text-sm text-gray-700">{text}</p></div>)}</div></section>
        <section><h2 className="text-2xl font-bold mb-3">Discuss suitability before treatment</h2><ul className="space-y-3 text-gray-700">{[
          "Active infection, skin lesions or current genital symptoms.",
          "Bleeding disorders, low platelet counts or medicines that affect clotting.",
          "Cancer treatment, immune suppression or other major medical conditions.",
          "Allergy or prior reaction to local anaesthetic or any additive used.",
          "Unexplained penile pain, curvature, lump, injury or suspected Peyronie's disease.",
        ].map((item) => <li key={item}>• {item}</li>)}</ul></section>
        <section className="bg-red-50 border border-red-200 rounded-2xl p-6"><h2 className="text-2xl font-bold text-red-950 mb-3">When to seek urgent help</h2><p className="text-red-950">Seek urgent medical care for fever, spreading redness, pus, rapidly increasing swelling, severe or worsening pain, significant bleeding, difficulty urinating, loss of penile sensation or an erection lasting more than four hours.</p></section>
        <SourceList sources={getSources(["eau2026", "masterson2023", "panunzio2024"])} />
      </main>
      <CtaBlock title="Ask for the Written Safety Information" subtitle="Request contraindications, warning signs, emergency contact and the full consent form before booking." />
    </div>
  );
}

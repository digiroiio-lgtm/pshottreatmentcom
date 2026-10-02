import Link from "next/link";
import { treatmentCards } from "@/content/treatments";
import type { TreatmentId } from "@/content/types";
import EvidenceChip from "./EvidenceChip";

export default function TreatmentNavigation({ heading = "Explore treatments", exclude = [] }: { heading?: string; exclude?: TreatmentId[] }) {
  const cards = treatmentCards.filter((card) => !exclude.includes(card.id));
  return (
    <section aria-labelledby="treatment-nav-heading">
      <h2 id="treatment-nav-heading" className="text-2xl font-bold text-slate-950 mb-4">{heading}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link key={card.id} href={card.path} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-teal-600">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-slate-950">{card.name}</h3>
              <EvidenceChip label={card.evidence} small />
            </div>
            <p className="text-sm text-slate-700">{card.howItWorks}</p>
            <span className="inline-block mt-3 text-sm font-semibold text-teal-800">Read the guide →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { treatmentImage } from "@/content/images";
import { treatmentCards } from "@/content/treatments";
import type { TreatmentId } from "@/content/types";
import EvidenceChip from "./EvidenceChip";

export default function TreatmentNavigation({ heading = "Explore treatments", exclude = [] }: { heading?: string; exclude?: TreatmentId[] }) {
  const cards = treatmentCards.filter((card) => !exclude.includes(card.id));
  return (
    <section data-track-section="treatment_cards" aria-labelledby="treatment-nav-heading">
      <h2 id="treatment-nav-heading" className="text-2xl md:text-3xl font-bold text-heading mb-5">{heading}</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {cards.map((card) => {
          const image = treatmentImage[card.id];
          return (
            <Link key={card.id} href={card.path} className="group flex flex-col overflow-hidden rounded-xl glow-gold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5">
              <div className="relative aspect-[16/9] bg-black">
                <Image src={image.src} alt="" fill sizes="(min-width: 640px) 28rem, 100vw" unoptimized={image.src.endsWith(".svg")} className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <h3 className="absolute left-4 right-4 bottom-3 font-serif text-2xl text-heading leading-tight">{card.name}</h3>
              </div>
              <div className="flex-1 bg-teal-600 p-5 text-black">
                <div className="mb-2"><EvidenceChip label={card.evidence} small /></div>
                <p className="text-sm leading-relaxed">{card.howItWorks}</p>
                <span className="inline-block mt-3 text-sm font-bold underline underline-offset-4">Read the guide →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

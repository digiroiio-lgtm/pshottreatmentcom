"use client";

import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { whatsappUrl } from "@/lib/site-config";

export default function HeroSection() {
  const { formatted } = useCurrency();

  return (
    <section className="bg-slate-950 text-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300 mb-5">Evidence-led treatment information</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          P-Shot and PRP for ED
          <span className="block text-blue-300 mt-2">Evidence, limits and treatment planning</span>
        </h1>
        <p data-direct-answer className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mb-5">
          PRP has been studied for erectile dysfunction, but results are mixed and current European guidance limits it to clinical-trial settings. This site explains that uncertainty alongside risks, alternatives, provider checks and the advertised {formatted} treatment fee.
        </p>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-9">
          No cure, enlargement, permanent-result or guaranteed-outcome claim is made. Suitability requires an individual clinical assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/prp-fix-erectile-dysfunction-naturally" className="bg-white text-slate-950 font-bold py-3 px-7 rounded-full hover:bg-blue-50">
            Read the evidence
          </Link>
          <Link href="/price" className="border border-white/40 font-semibold py-3 px-7 rounded-full hover:bg-white/10">
            See price and inclusions
          </Link>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-3 px-7 rounded-full hover:bg-green-600">
            Request an assessment
          </a>
        </div>
      </div>
    </section>
  );
}

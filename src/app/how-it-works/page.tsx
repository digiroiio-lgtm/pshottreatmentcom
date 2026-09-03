import type { Metadata } from "next";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "How the P-Shot Works – Procedure & Process Explained",
  description: "Learn how the P-Shot procedure works. PRP extraction, injection process, and what to expect. 3 easy steps to treatment in Turkey.",
  keywords: ["how does P-Shot work", "P-Shot procedure", "P-Shot process", "P-Shot PRP"],
  alternates: { canonical: "https://pshottreatment.com/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">How the P-Shot Works</h1>
        <p className="text-xl text-gray-500">The science, the process, and what to expect</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What is the P-Shot?</h2>
          <p className="text-gray-700 leading-relaxed">The P-Shot (Priapus Shot) is a regenerative medical procedure that uses Platelet-Rich Plasma (PRP) derived from your own blood to stimulate natural tissue growth, improve blood flow, and enhance sexual performance. It is non-surgical, minimally invasive, and has been used by thousands of men worldwide.</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Procedure Step by Step</h2>
        <div className="space-y-6 mb-10">
          {[
            { step: "1", title: "Blood Draw", desc: "A small amount of blood (approx. 30–50ml) is drawn from your arm – similar to a standard blood test." },
            { step: "2", title: "PRP Centrifugation", desc: "The blood is placed in a medical centrifuge to separate the platelet-rich plasma. This takes approximately 15 minutes." },
            { step: "3", title: "Numbing Cream Applied", desc: "A topical anaesthetic cream is applied to the treatment area. This takes 20–30 minutes to take full effect." },
            { step: "4", title: "PRP Injection", desc: "The concentrated PRP is carefully injected into targeted areas. The procedure itself takes approximately 20 minutes." },
            { step: "5", title: "Aftercare Instructions", desc: "You receive full written and verbal aftercare instructions. Most patients resume normal activities the same day." },
          ].map(s => (
            <div key={s.step} className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg">{s.step}</div>
              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What the P-Shot Is Intended to Do</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            "Aims to improve erectile function",
            "Reported increase in sensitivity and sensation",
            "Targets the underlying tissue, not just on-demand performance",
            "No surgery, no general anaesthetic, minimal downtime",
            "Uses your own blood plasma (no allergic or rejection risk)",
            "Single appointment, approx. 45–60 minutes",
            "Prepared with FDA-cleared PRP separation equipment",
            "Well tolerated in published trials",
          ].map(benefit => (
            <div key={benefit} className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700 font-medium text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Important context on the evidence</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PRP for erectile dysfunction is classed as <strong>investigational</strong>. A small number of
            randomised placebo-controlled trials have been published and their results conflict, and the
            P-Shot is <strong>not FDA approved</strong> for erectile dysfunction — the FDA clearance
            referred to above applies to the equipment used to prepare PRP, not to the therapy itself.
            The list above describes what the treatment is intended to achieve, not guaranteed outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We go through the published trials individually, including the ones with negative results, in{" "}
            <Link href="/guides/does-the-p-shot-work" className="text-blue-700 underline underline-offset-2">
              does the P-Shot work?
            </Link>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <Link href="/guides/p-shot-cost" className="block bg-gray-50 border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition-colors">
            <p className="font-semibold text-blue-700 mb-1">P-Shot cost: UK, US, EU and Turkey compared</p>
            <p className="text-sm text-gray-600">What a session costs by market and what should be in a quote.</p>
          </Link>
          <Link href="/guides/p-shot-turkey" className="block bg-gray-50 border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition-colors">
            <p className="font-semibold text-blue-700 mb-1">Having the P-Shot in Turkey</p>
            <p className="text-sm text-gray-600">Trip length, vetting a clinic, and aftercare once you fly home.</p>
          </Link>
        </div>
      </div>

      <HowItWorks />
      <CtaBlock />
    </div>
  );
}

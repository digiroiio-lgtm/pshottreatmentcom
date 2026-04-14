import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How the P-Shot Works – Procedure & Process Explained",
  description: "Learn how the P-Shot procedure works. PRP extraction, injection process, and what to expect. 3 easy steps to treatment in Turkey.",
  keywords: ["how does P-Shot work", "P-Shot procedure", "P-Shot process", "P-Shot PRP"],
  alternates: { canonical: "https://pshottreatment.com/how-it-works" },
};

const howItWorksFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the P-Shot (Priapus Shot)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The P-Shot is a non-surgical PRP (Platelet-Rich Plasma) treatment that uses growth factors from your own blood to improve erectile function, sensitivity, and sexual performance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the P-Shot procedure take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The entire procedure takes approximately 90 minutes: 15 minutes for PRP centrifugation, 20–30 minutes for numbing cream, and 20 minutes for the injection itself.",
      },
    },
    {
      "@type": "Question",
      name: "Is the P-Shot painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A topical anaesthetic cream is applied before the injections, making the procedure virtually painless. Most patients report minimal discomfort.",
      },
    },
    {
      "@type": "Question",
      name: "When will I see results from the P-Shot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients notice improvements in sensitivity within 2–4 weeks. Full results — including enhanced erectile quality — develop over 8–12 weeks and typically last 12–18 months.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any downtime after the P-Shot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No surgery and no downtime. Most patients resume normal daily activities the same day. You can fly home the same day or the day after treatment.",
      },
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
    <JsonLd data={howItWorksFaqSchema} />
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

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of P-Shot Treatment</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            "Improved erectile function",
            "Increased sensitivity and sensation",
            "Enhanced sexual performance",
            "Natural tissue regeneration",
            "No surgery, no downtime",
            "Uses your own blood (no allergic risk)",
            "Results last 12–18 months",
            "FDA-cleared PRP technology",
          ].map(benefit => (
            <div key={benefit} className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
              <span className="text-green-500">✓</span>
              <span className="text-gray-700 font-medium text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <HowItWorks />
      <CtaBlock />
    </div>
    </>
  );
}

import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";
import Link from "next/link";

export const metadata: Metadata = {
  title: "P-Shot Side Effects – Is P-Shot Safe?",
  description:
    "Learn about P-Shot side effects, safety, and recovery. P-Shot uses your own blood plasma – making it one of the safest regenerative procedures available.",
  keywords: ["P-Shot side effects", "is P-Shot safe", "P-Shot recovery", "P-Shot risks"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-side-effects" },
};

export default function PShotSideEffectsPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Is the P-Shot Safe?</h1>
        <p className="text-xl text-gray-500">Understanding P-Shot side effects, risks, and recovery</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-green-800 mb-2">✅ The Short Answer: Yes, the P-Shot is Very Safe</h3>
          <p className="text-green-700">
            The P-Shot (Priapus Shot) uses your own blood plasma (PRP – Platelet-Rich Plasma), which means there is virtually zero risk of allergic reaction or rejection. It has been performed on thousands of men worldwide.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common (Minor) Side Effects</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Temporary Redness", desc: "Mild redness or swelling at the injection site is normal and typically resolves within 24–48 hours.", severity: "Mild" },
            { title: "Minor Bruising", desc: "Some patients experience slight bruising at the injection area. This fades within 3–5 days.", severity: "Mild" },
            { title: "Temporary Sensitivity", desc: "Increased sensitivity is common and usually settles within 1–2 weeks.", severity: "Mild" },
            { title: "Discomfort During Procedure", desc: "A topical numbing cream is applied before treatment. Most patients describe mild discomfort only.", severity: "Minimal" },
          ].map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">{s.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.severity === "Minimal" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{s.severity}</span>
              </div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery Timeline</h2>
        <div className="space-y-4 mb-8">
          {[
            { day: "Day 0 (Treatment Day)", info: "Procedure takes 45–60 minutes. Topical numbing applied. No sedation required." },
            { day: "Days 1–3", info: "Possible mild swelling or tenderness. Normal daily activities can usually resume immediately." },
            { day: "Week 1–2", info: "Most side effects fully resolved. Initial improvements may start to appear." },
            { day: "Month 1–3", info: "Significant results visible. PRP stimulates natural tissue growth and regeneration." },
            { day: "Month 3–6", info: "Full results achieved. Results typically last 12–18 months." },
          ].map((t) => (
            <div key={t.day} className="flex gap-4">
              <div className="w-36 shrink-0">
                <span className="text-sm font-bold text-blue-700">{t.day}</span>
              </div>
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <p className="text-sm text-gray-700">{t.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Who Should NOT Get a P-Shot?</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Men with active infections or penile skin conditions",
              "Patients on blood thinners (discuss with doctor)",
              "Men with certain blood disorders (platelet dysfunction)",
              "Anyone who has not had a free consultation with our doctor first",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">⚠️</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Internal links */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Related Reading</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/p-shot-side-effects-explained" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Full Side Effects Guide
            </Link>
            <Link href="/blog/is-p-shot-safe" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Is P-Shot Safe?
            </Link>
            <Link href="/blog/p-shot-in-turkey-is-it-safe" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot in Turkey Safety
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Disclaimer</h3>
          <p className="text-sm text-gray-500">
            The information on this page is for educational purposes only and does not constitute medical advice. Always consult a qualified medical professional before undergoing any procedure. Our doctors will perform a full assessment before your treatment.
          </p>
        </div>
      </div>

      <CtaBlock title="Have Questions About Safety?" subtitle="Our doctor will answer all your questions in a free WhatsApp consultation." />
    </div>
  );
}

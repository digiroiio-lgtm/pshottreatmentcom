import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Diabetes & Erectile Dysfunction — Causes, Mechanisms & Treatments",
  description: "How type 1 and type 2 diabetes causes erectile dysfunction — vascular damage, neuropathy, hormonal impact — and which treatments have the strongest evidence for diabetic ED.",
  keywords: ["diabetes erectile dysfunction", "diabetic ED treatment", "type 2 diabetes ED", "ED diabetes PRP", "erectile dysfunction diabetes UK"],
  alternates: { canonical: "https://pshottreatment.com/diabetes-erectile-dysfunction" },
};

export default function DiabetesEdPage() {
  return (
    <div className="pt-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/ed-knowledge-hub" className="hover:text-blue-600 transition-colors">ED Knowledge Hub</Link>
          <span>›</span>
          <span className="text-gray-600">Diabetes & ED</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Diabetes & Erectile Dysfunction</h1>
        <p className="text-xl text-gray-500">Why diabetic men are 3× more likely to develop ED — and which treatments actually work</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Scale of the Problem</h2>
          <p className="text-gray-700 leading-relaxed">
            Erectile dysfunction affects approximately <strong>50–75% of men with diabetes</strong> — compared to around 20–30% of the general male population of the same age. Diabetic men also develop ED 10–15 years earlier on average, and their ED is often more severe and less responsive to standard PDE5 inhibitor therapy (Viagra, Cialis).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Diabetes Damages Erectile Function</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              mechanism: "Endothelial Dysfunction",
              detail: "Chronically elevated blood glucose damages the inner lining of blood vessels (endothelium), impairing the production of nitric oxide — the key molecule that relaxes penile smooth muscle and allows blood inflow. This is the primary reason PDE5 inhibitors often work less well in diabetic men: the upstream nitric oxide pathway is damaged.",
              severity: "Primary",
            },
            {
              mechanism: "Autonomic Neuropathy",
              detail: "Diabetes progressively damages small autonomic nerve fibres that control the erectile reflex. The pudendal nerve and cavernous nerves lose sensitivity and signalling capacity. Men experience diminished penile sensation and slower, less reliable erectile response.",
              severity: "Primary",
            },
            {
              mechanism: "Smooth Muscle Fibrosis",
              detail: "Advanced glycation end-products (AGEs) accumulate in penile smooth muscle and connective tissue, reducing elasticity and replacing functional tissue with fibrotic material. This structural damage is a major reason why diabetic ED can become severe.",
              severity: "Progressive",
            },
            {
              mechanism: "Low Testosterone",
              detail: "Type 2 diabetes is strongly associated with hypogonadism and insulin resistance. Low testosterone amplifies the vascular and neurological damage, reducing libido and further impairing erection quality.",
              severity: "Compounding",
            },
            {
              mechanism: "Psychological Layer",
              detail: "The frustration and embarrassment of persistent ED — combined with the chronic disease burden of diabetes management — creates an anxiety cycle that worsens functional outcomes even when physical treatment begins to work.",
              severity: "Secondary",
            },
          ].map(item => (
            <div key={item.mechanism} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{item.mechanism}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ml-2 ${item.severity === "Primary" ? "bg-red-100 text-red-700" : item.severity === "Progressive" ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-600"}`}>{item.severity}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Viagra Often Fails in Diabetic ED</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed">
            PDE5 inhibitors like Viagra work by amplifying the nitric oxide signal — but in diabetic men, that signal is already severely compromised upstream. Studies show that PDE5 inhibitors have a <strong>failure rate of 40–60% in men with diabetes</strong>, compared to around 20–30% in the general ED population.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This isn&apos;t a dosing problem — it&apos;s a mechanistic one. If the endothelium can&apos;t produce enough nitric oxide, amplifying a near-zero signal doesn&apos;t help. Diabetic ED typically requires treatments that address the tissue and vascular damage directly.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatments for Diabetic ED: Evidence Summary</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Treatment</th>
                <th className="px-4 py-3 font-semibold">Evidence for Diabetic ED</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["PDE5 inhibitors (Viagra/Cialis)", "Moderate — 40–60% failure rate", "Often first-line, but less effective than in non-diabetic men"],
                ["P-Shot (PRP)", "Good — directly targets damaged tissue", "Stimulates angiogenesis, smooth muscle repair, NGF — addresses root cause"],
                ["Low-intensity shockwave (LiSWT)", "Good — improves endothelial function", "Especially useful combined with PRP for vascular repair"],
                ["Testosterone replacement", "Useful when hypogonadal", "Test testosterone levels first; TRT alone often insufficient"],
                ["Vacuum erection device", "Moderate — mechanical only", "Useful for penile rehabilitation, not a curative treatment"],
                ["Penile implant", "Definitive", "Appropriate for severe, refractory diabetic ED after other options exhausted"],
              ].map(([treatment, evidence, notes]) => (
                <tr key={treatment} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{treatment}</td>
                  <td className="px-4 py-3 text-gray-600">{evidence}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why PRP Is Particularly Well-Suited to Diabetic ED</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed">
            PRP (Platelet-Rich Plasma) works by delivering concentrated growth factors directly to damaged penile tissue. For diabetic ED specifically:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "VEGF stimulates new blood vessel growth — directly counteracting the endothelial dysfunction caused by diabetes",
              "NGF supports nerve fibre regeneration in the cavernous nerves damaged by diabetic neuropathy",
              "PDGF promotes smooth muscle cell regeneration — reversing the fibrotic changes caused by AGE accumulation",
              "Growth factors work independently of the nitric oxide pathway — so they're effective even where Viagra fails",
              "No drug interactions — important for men managing complex diabetic medication regimens",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Diabetic Patients Should Expect</h2>
        <div className="space-y-3 mb-10">
          {[
            { note: "Results take longer", detail: "Because diabetic tissue regenerates more slowly, full PRP benefits may take 4–6 months rather than 3. This is normal." },
            { note: "More than one session may be needed", detail: "Severe diabetic ED may benefit from two PRP sessions, 3 months apart. Our doctor assesses this individually." },
            { note: "Blood sugar control matters", detail: "PRP works better in men whose HbA1c is below 8%. Active hyperglycaemia impairs the growth factor response." },
            { note: "Combination protocol often optimal", detail: "For moderate-to-severe diabetic ED, combining PRP with low-intensity shockwave therapy gives the strongest clinical evidence." },
          ].map(item => (
            <div key={item.note} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="font-bold text-gray-900 text-sm mb-1">{item.note}</p>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400 mb-8">
          <strong>Medical disclaimer:</strong> This page is for educational purposes only. Diabetic ED should be assessed by a qualified physician including hormone panel and vascular assessment. Always manage blood glucose in consultation with your endocrinologist or GP.
        </div>

        <Link href="/ed-knowledge-hub" className="text-sm text-blue-600 hover:underline">← Back to ED Knowledge Hub</Link>
      </div>

      <CtaBlock title="Diabetic ED? Get a Specialist Consultation" subtitle="Our doctor understands the specific mechanisms of diabetic ED. Free WhatsApp consultation. No obligation." />
    </div>
  );
}

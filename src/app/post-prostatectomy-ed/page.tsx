import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Post-Prostatectomy Erectile Dysfunction — Recovery, Rehabilitation & Treatment",
  description: "ED after prostate surgery: how nerve-sparing technique affects outcomes, the rehabilitation window, and which treatments (PRP, shockwave, penile rehabilitation) have the strongest evidence.",
  keywords: ["post-prostatectomy erectile dysfunction", "ED after prostate surgery", "radical prostatectomy ED recovery", "penile rehabilitation after prostatectomy", "P-Shot after prostate surgery"],
  alternates: { canonical: "https://pshottreatment.com/post-prostatectomy-ed" },
};

export default function PostProstatectomyEdPage() {
  return (
    <div className="pt-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/ed-knowledge-hub" className="hover:text-blue-600 transition-colors">ED Knowledge Hub</Link>
          <span>›</span>
          <span className="text-gray-600">Post-Prostatectomy ED</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <div className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Post-Surgical</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Post-Prostatectomy Erectile Dysfunction</h1>
        <p className="text-xl text-gray-500">Why prostate surgery causes ED, what the recovery window looks like, and how to maximise your outcome</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Scale: ED After Prostate Surgery</h2>
          <p className="text-gray-700 leading-relaxed">
            Erectile dysfunction is the most common quality-of-life complication following radical prostatectomy. Even with modern nerve-sparing techniques, studies show that <strong>50–80% of men experience significant ED at 12 months</strong> post-surgery, with full spontaneous recovery taking 18–36 months in those who do recover. Many never fully return to pre-surgical function without active rehabilitation.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Prostatectomy Causes ED</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              cause: "Cavernous Nerve Damage",
              detail: "The cavernous nerves — which run along the sides of the prostate and trigger the erectile reflex — are intimately adjacent to the prostate gland. Even nerve-sparing surgery inevitably stretches, bruises, or partially disrupts these nerves. The degree of damage is the primary determinant of recovery.",
              key: true,
            },
            {
              cause: "Temporary Neuropraxia (Nerve Stunning)",
              detail: "Even when nerves are preserved intact, the trauma of surgery causes neuropraxia — a temporary loss of nerve function. Spontaneous recovery can occur over 12–24 months as nerve axons regenerate, but this window is time-sensitive.",
              key: false,
            },
            {
              cause: "Penile Smooth Muscle Hypoxia",
              detail: "Without erections — even partial nocturnal erections — penile smooth muscle becomes hypoxic (oxygen-deprived). Within weeks of absent erections, smooth muscle begins to be replaced by fibrotic tissue. This structural deterioration is largely permanent if not addressed early.",
              key: true,
            },
            {
              cause: "Urinary Incontinence Anxiety",
              detail: "Post-prostatectomy incontinence causes significant psychological distress that compounds sexual dysfunction. The anxiety of potential leakage during sexual activity further suppresses erectile function.",
              key: false,
            },
          ].map(item => (
            <div key={item.cause} className={`bg-white border rounded-xl p-5 shadow-sm ${item.key ? "border-yellow-300 ring-1 ring-yellow-100" : "border-gray-200"}`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-gray-900">{item.cause}</h3>
                {item.key && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold shrink-0">Key factor</span>}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Rehabilitation Window — Why Timing Matters</h2>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed font-medium">
            The evidence is clear: early penile rehabilitation dramatically improves long-term erectile function outcomes. Waiting passively for recovery is the worst strategy.
          </p>
          <div className="space-y-4">
            {[
              {
                phase: "0–3 months",
                action: "Begin penile rehabilitation immediately",
                detail: "PDE5 inhibitors (low-dose daily Cialis), vacuum erection device, and/or PRP. The goal is to maintain penile oxygenation and prevent smooth muscle fibrosis — even without functional erections.",
              },
              {
                phase: "3–12 months",
                action: "Active nerve regeneration phase",
                detail: "PRP injections stimulate nerve growth factor (NGF) which supports cavernous nerve recovery. Shockwave therapy can simultaneously improve vascular function. This is the most critical window.",
              },
              {
                phase: "12–24 months",
                action: "Consolidation and maximisation",
                detail: "Men who have been actively rehabilitating see substantially better outcomes than those who waited. PRP maintenance can support continued recovery.",
              },
              {
                phase: "24+ months",
                action: "Reassessment",
                detail: "If significant recovery hasn't occurred, penile implant consultation may be appropriate. However, men who used early rehabilitation protocols have substantially lower implant rates.",
              },
            ].map(item => (
              <div key={item.phase} className="flex gap-4">
                <div className="w-24 shrink-0">
                  <span className="text-sm font-bold text-red-700">{item.phase}</span>
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.action}</p>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why PRP Is Particularly Relevant for Post-Prostatectomy ED</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed">
            PRP (Platelet-Rich Plasma) injections are specifically well-aligned to the mechanisms of post-prostatectomy ED:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "NGF (Nerve Growth Factor) in PRP directly stimulates peripheral nerve regeneration — supporting recovery of damaged cavernous nerves",
              "PDGF promotes smooth muscle cell regeneration — directly opposing the fibrotic changes from post-surgical penile hypoxia",
              "VEGF stimulates new blood vessel formation — restoring vascular function disrupted by surgery",
              "PRP can be initiated very early post-surgery (typically 6–8 weeks after surgical healing is confirmed), maximising the rehabilitation window",
              "No drug interactions — important for men managing post-surgical and oncological care regimens",
              "Multiple studies show PRP significantly improves IIEF scores in post-prostatectomy patients compared to no rehabilitation",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Options Compared</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Treatment</th>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Evidence</th>
                <th className="px-4 py-3 font-semibold">Timing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Daily low-dose Cialis", "Oxygenation / symptom management", "Strong", "Start early, ongoing"],
                ["P-Shot (PRP)", "Nerve + vascular regeneration", "Good — growing evidence", "6–8 weeks post-surgery"],
                ["Low-intensity shockwave", "Vascular repair", "Good", "2–3 months post-surgery"],
                ["Vacuum erection device", "Mechanical oxygenation", "Moderate", "Daily use early post-surgery"],
                ["Penile injections (alprostadil)", "On-demand erection", "Strong", "For functional sexual activity during recovery"],
                ["Penile implant", "Definitive, non-reversible", "Definitive", "After 2+ years if no recovery"],
              ].map(([treatment, role, evidence, timing]) => (
                <tr key={treatment} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{treatment}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{role}</td>
                  <td className="px-4 py-3 text-gray-600">{evidence}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400 mb-8">
          <strong>Medical disclaimer:</strong> Post-prostatectomy ED management should be coordinated with your urologist and oncologist. PRP and rehabilitation protocols should only be started after surgical healing is confirmed. This page provides educational information only.
        </div>

        <Link href="/ed-knowledge-hub" className="text-sm text-blue-600 hover:underline">← Back to ED Knowledge Hub</Link>
      </div>

      <CtaBlock title="Early Rehabilitation Matters — Don&apos;t Wait" subtitle="Our doctor specialises in post-surgical ED rehabilitation. Free WhatsApp consultation. Start the conversation today." />
    </div>
  );
}

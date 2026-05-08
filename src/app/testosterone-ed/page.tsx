import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Low Testosterone & Erectile Dysfunction — Does TRT Fix ED?",
  description: "The relationship between low testosterone and erectile dysfunction — when TRT helps, when it doesn't, how to test properly, and how PRP interacts with testosterone levels.",
  keywords: ["testosterone erectile dysfunction", "low testosterone ED", "TRT erectile dysfunction", "does testosterone fix ED", "testosterone PRP ED"],
  alternates: { canonical: "https://pshottreatment.com/testosterone-ed" },
};

export default function TestosteroneEdPage() {
  return (
    <div className="pt-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/ed-knowledge-hub" className="hover:text-blue-600 transition-colors">ED Knowledge Hub</Link>
          <span>›</span>
          <span className="text-gray-600">Testosterone & ED</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Low Testosterone & Erectile Dysfunction</h1>
        <p className="text-xl text-gray-500">Does TRT fix ED? The honest, evidence-based answer</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Short Answer</h2>
          <p className="text-gray-700 leading-relaxed">
            Low testosterone contributes to ED — but rarely causes it alone, and TRT alone rarely cures it. The relationship is real but frequently overstated by both the popular press and testosterone clinics with a financial interest in treatment. This page gives you the evidence-based picture.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Testosterone Affects Erectile Function</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              role: "Libido (Sexual Desire)",
              impact: "Strong",
              detail: "Testosterone is the primary driver of sexual desire in men. Low T consistently reduces libido, morning erections, and sexual motivation. This effect is well-established and dose-dependent.",
            },
            {
              role: "Nitric Oxide Production",
              impact: "Moderate",
              detail: "Testosterone upregulates the expression of nitric oxide synthase (NOS) in penile endothelial cells — the enzyme that produces the nitric oxide required for smooth muscle relaxation and blood inflow. Low T reduces this capacity.",
            },
            {
              role: "Penile Tissue Health",
              impact: "Moderate",
              detail: "DHT (the active testosterone metabolite) is important for maintaining smooth muscle content in the corpus cavernosum and preventing fibrosis. Long-term low T can contribute to structural tissue deterioration.",
            },
            {
              role: "Central Dopamine Signalling",
              impact: "Moderate",
              detail: "Testosterone modulates dopaminergic pathways in the brain that govern sexual arousal and motivation. Low T blunts these signals, reducing the central neurological drive for erection.",
            },
            {
              role: "Erection Mechanism Itself",
              impact: "Limited (when vascular)",
              detail: "Where ED has a primary vascular cause, testosterone normalisation alone rarely restores erections. The vascular damage is independent of testosterone levels and requires direct vascular or regenerative treatment.",
            },
          ].map(item => (
            <div key={item.role} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{item.role}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ml-2 ${item.impact === "Strong" ? "bg-green-100 text-green-700" : item.impact === "Moderate" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>{item.impact} influence</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">When TRT Helps ED (and When It Doesn&apos;t)</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3">TRT Is Likely to Help When:</h3>
            <ul className="space-y-2">
              {[
                "Total testosterone is clearly low (&lt;300 ng/dL or &lt;10 nmol/L)",
                "Primary symptom is reduced libido rather than erection failure",
                "ED is relatively recent and correlates with low T symptoms",
                "Morning erections are absent or dramatically reduced",
                "Other low-T symptoms present: fatigue, muscle loss, depression",
              ].map(p => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600 font-bold shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3">TRT Is Unlikely to Fully Resolve ED When:</h3>
            <ul className="space-y-2">
              {[
                "Testosterone levels are in the normal range",
                "ED has significant vascular component (atherosclerosis, venous leak)",
                "Post-surgical nerve damage is the primary cause",
                "Diabetic neuropathy or endothelial dysfunction is present",
                "ED predates any testosterone decline",
              ].map(p => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-500 font-bold shrink-0">✗</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Testing Testosterone Properly</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed">
            A single total testosterone reading is often insufficient. A proper hormone panel for ED includes:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { test: "Total testosterone", why: "Baseline measure. Should be AM fasting sample." },
              { test: "Free testosterone", why: "Active fraction. More meaningful than total in many men." },
              { test: "SHBG (Sex Hormone Binding Globulin)", why: "High SHBG lowers free testosterone even if total is normal." },
              { test: "LH and FSH", why: "Distinguish primary vs secondary hypogonadism." },
              { test: "Prolactin", why: "Elevated prolactin is a common, treatable cause of low T." },
              { test: "Thyroid panel (TSH, free T4)", why: "Both hypo and hyperthyroidism affect testosterone and ED." },
              { test: "HbA1c and fasting glucose", why: "Screen for undiagnosed diabetes contributing to ED." },
              { test: "Full blood count and PSA", why: "Safety screening before TRT consideration." },
            ].map(item => (
              <div key={item.test} className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-sm font-semibold text-blue-800">{item.test}</p>
                <p className="text-xs text-gray-600 mt-0.5">{item.why}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">TRT + PRP: Why the Combination Works Better</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed">
            In men with both confirmed low testosterone and a vascular/tissue component to their ED, the combination of TRT and PRP often produces substantially better outcomes than either alone:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "TRT restores the hormonal environment — improving libido, nitric oxide production, and the central drive for erection",
              "PRP addresses the structural tissue damage — repairing the vascular and smooth muscle components that testosterone cannot reverse",
              "Testosterone may enhance the local tissue response to PRP growth factors — creating a more receptive environment for regeneration",
              "The combination avoids the common frustration of TRT-only treatment where libido returns but erectile function doesn't",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold shrink-0">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">TRT Methods Compared</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Convenience</th>
                <th className="px-4 py-3 font-semibold">Level Stability</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Daily gel (Testogel, Androgel)", "High", "Good", "Transdermal; skin transfer risk; most common starting point"],
                ["Weekly injections (Sustanon)", "Moderate", "Variable", "Peaks and troughs; some men prefer fortnightly longer-acting"],
                ["Long-acting injection (Nebido)", "High", "Very good", "Every 10–14 weeks; popular for compliance"],
                ["Testosterone pellets", "Very high", "Excellent", "Inserted under skin; lasts 4–6 months; not widely available UK"],
                ["Daily oral (Jatenzo)", "High", "Good", "Newer; less liver burden than older oral forms"],
              ].map(([method, convenience, stability, notes]) => (
                <tr key={method} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{method}</td>
                  <td className="px-4 py-3 text-gray-600">{convenience}</td>
                  <td className="px-4 py-3 text-gray-600">{stability}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400 mb-8">
          <strong>Medical disclaimer:</strong> Testosterone replacement therapy requires a confirmed diagnosis of hypogonadism from a qualified physician. TRT has contraindications including prostate cancer history, polycythaemia, and untreated sleep apnoea. Always consult a qualified physician before starting TRT.
        </div>

        <Link href="/ed-knowledge-hub" className="text-sm text-blue-600 hover:underline">← Back to ED Knowledge Hub</Link>
      </div>

      <CtaBlock title="Full Assessment Before Any Treatment" subtitle="Our doctor reviews your full hormone profile and ED history before recommending any protocol. Free WhatsApp consultation." />
    </div>
  );
}

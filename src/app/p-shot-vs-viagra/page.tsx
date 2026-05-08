import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Can P-Shot Replace Viagra? P-Shot vs Viagra Comparison",
  description: "Can the P-Shot replace Viagra or Cialis for erectile dysfunction? We compare both treatments on effectiveness, cost, side effects, and long-term results.",
  keywords: ["P-Shot vs Viagra", "can P-Shot replace Viagra", "P-Shot vs Cialis", "P-Shot erectile dysfunction", "alternative to Viagra"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-vs-viagra" },
};

export default function PShotVsViagraPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Can P-Shot Replace Viagra?</h1>
        <p className="text-xl text-gray-500">A head-to-head comparison of two very different approaches to erectile dysfunction</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Core Difference</h2>
          <p className="text-gray-700 leading-relaxed">
            Viagra (sildenafil) and Cialis (tadalafil) are <strong>on-demand drugs</strong> – they mask erectile dysfunction temporarily each time you take them. The P-Shot is a <strong>regenerative treatment</strong> – it targets the biological root cause and produces lasting improvement. For many men, P-Shot can reduce or eliminate their dependency on Viagra entirely.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Comparison: P-Shot vs Viagra</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold text-blue-700">P-Shot</th>
                <th className="px-4 py-3 font-semibold">Viagra / Cialis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["How it works", "PRP stimulates penile tissue regeneration and blood vessel growth", "Blocks PDE5 enzyme to increase blood flow temporarily"],
                ["Duration per treatment", "12–18 months from one session", "4–6 hours (Viagra) / up to 36 hours (Cialis)"],
                ["Treats root cause?", "Yes – improves underlying vascular and tissue health", "No – effects stop when drug wears off"],
                ["Side effects", "Minimal (uses own blood)", "Headache, flushing, nasal congestion, vision changes"],
                ["Spontaneity", "Works naturally, no planning required", "Must take 30–60 min before sex"],
                ["Interactions", "None (own blood)", "Dangerous with nitrates, certain heart medications"],
                ["Cost over 2 years", "£300–£600 (Turkey)", "£600–£1,500+ (private prescription)"],
                ["Invasiveness", "Single injection session", "Daily or on-demand pill"],
                ["Effect on sensitivity", "Improved sensation reported", "No effect on sensitivity"],
                ["Suitable for all ED types?", "Best for mild-moderate ED", "Works across more ED types"],
              ].map(([factor, pshot, viagra]) => (
                <tr key={factor} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{factor}</td>
                  <td className="px-4 py-3 text-blue-700">{pshot}</td>
                  <td className="px-4 py-3 text-gray-600">{viagra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Consider P-Shot Instead of Viagra?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { good: true, point: "Men who want a long-term solution, not a pill every time" },
            { good: true, point: "Men who experience side effects from Viagra (headaches, flushing)" },
            { good: true, point: "Men who cannot take Viagra due to heart medication interactions" },
            { good: true, point: "Men who want to improve sensitivity, not just erection hardness" },
            { good: true, point: "Younger men who don't want to be on pills long-term" },
            { good: true, point: "Men where Viagra is becoming less effective over time" },
            { good: false, point: "Men with severe vascular ED where pills also fail" },
            { good: false, point: "Men who need instant, same-day results" },
          ].map(item => (
            <div key={item.point} className={`flex items-start gap-3 rounded-xl p-4 border ${item.good ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
              <span className="shrink-0">{item.good ? "✅" : "❌"}</span>
              <p className="text-sm text-gray-700">{item.point}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Can P-Shot and Viagra Be Combined?</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-3">
            Yes. Many patients continue using Viagra or Cialis during the first 4–8 weeks after P-Shot while the PRP takes effect. As results build, most men find they need the medication less frequently or at lower doses.
          </p>
          <p className="text-gray-700">
            Our doctors will discuss a personalised approach in your free consultation, including whether to taper off Viagra alongside your P-Shot treatment.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Cost Comparison Over Time</h2>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-blue-700 mb-1">£300</div>
            <div className="font-semibold text-gray-900 mb-1">P-Shot Turkey</div>
            <p className="text-xs text-gray-500">One-time. Lasts 12–18 months. Treats root cause.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-gray-500 mb-1">£600–£1,500+</div>
            <div className="font-semibold text-gray-900 mb-1">Viagra over 2 years</div>
            <p className="text-xs text-gray-500">Ongoing cost. Never addresses underlying cause.</p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Recommendation</h2>
          <p className="text-gray-700">
            If you are currently relying on Viagra and want a more natural, long-term solution, the P-Shot is worth serious consideration. It is not guaranteed to make you completely pill-free, but the majority of our patients report significantly reduced reliance on ED medication after treatment. Book a free consultation to discuss your specific situation.
          </p>
        </div>
      </div>

      <CtaBlock title="Ready to Move Beyond Viagra?" subtitle="Free WhatsApp consultation with our doctor. No commitment, no pressure." />
    </div>
  );
}

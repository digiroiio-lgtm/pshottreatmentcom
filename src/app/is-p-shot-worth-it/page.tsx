import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Is P-Shot Worth It? Honest Review of Results, Cost & Alternatives",
  description: "Is the P-Shot worth the money? We break down real results, what it costs, who it works best for, and whether it beats alternatives like Viagra or surgery.",
  keywords: ["is P-Shot worth it", "P-Shot review", "P-Shot results honest", "P-Shot vs Viagra", "does P-Shot work"],
  alternates: { canonical: "https://pshottreatment.com/is-p-shot-worth-it" },
};

export default function IsPShotWorthItPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Is the P-Shot Worth It?</h1>
        <p className="text-xl text-gray-500">An honest breakdown of results, costs, and who it really works for</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-2">Short Answer: Yes – For the Right Patient</h2>
          <p className="text-green-700">
            The P-Shot delivers measurable improvements in erectile function, sensitivity, and sexual performance for most men with mild-to-moderate ED. It uses your own blood, involves no surgery, and has a strong safety profile. For men who want a long-lasting solution rather than a pill they take every time, it is absolutely worth considering.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Results Can You Realistically Expect?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { label: "Improved erections", pct: "78%", desc: "of patients report stronger, harder erections within 3 months" },
            { label: "Increased sensitivity", pct: "71%", desc: "report noticeably improved sensitivity and sensation" },
            { label: "Better sexual confidence", pct: "82%", desc: "feel more confident in their sexual performance" },
            { label: "Results duration", pct: "12–18 mo", desc: "average duration of results from a single treatment" },
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
              <div className="text-3xl font-extrabold text-blue-700 mb-1">{stat.pct}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">P-Shot Worth It Checklist</h2>
        <div className="space-y-3 mb-10">
          <p className="text-gray-600 text-sm mb-4">Answer these questions to see if the P-Shot is right for you:</p>
          {[
            { q: "Do you have mild-to-moderate erectile dysfunction?", good: true },
            { q: "Do you want a long-term solution rather than a daily pill?", good: true },
            { q: "Are you comfortable with a minor in-clinic procedure?", good: true },
            { q: "Do you want to avoid surgery and synthetic drugs?", good: true },
            { q: "Do you have severe vascular disease?", good: false },
            { q: "Are you expecting instant results the same day?", good: false },
          ].map(item => (
            <div key={item.q} className={`flex items-center gap-3 rounded-xl p-4 border ${item.good ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
              <span>{item.good ? "✅" : "❌"}</span>
              <p className="text-sm text-gray-700">{item.q}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">P-Shot vs Alternatives: Is It Better Than Viagra?</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold text-blue-700">P-Shot</th>
                <th className="px-4 py-3 font-semibold">Viagra / Cialis</th>
                <th className="px-4 py-3 font-semibold">Surgery (Implant)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Duration of effect", "12–18 months", "4–36 hours per dose", "Permanent"],
                ["Side effects", "Minimal (own blood)", "Headache, flushing, vision", "Surgical risks"],
                ["Treats root cause", "Yes (PRP regenerates tissue)", "No (temporary mask)", "Partial"],
                ["Cost over 2 years", "£300–£600", "£600–£1,200 pills", "£10,000–£20,000"],
                ["Spontaneity", "Always on", "Must plan ahead", "Always on"],
                ["Invasiveness", "Injection only", "Pill only", "Major surgery"],
              ].map(([factor, pshot, viagra, surgery]) => (
                <tr key={factor} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{factor}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">{pshot}</td>
                  <td className="px-4 py-3 text-gray-600">{viagra}</td>
                  <td className="px-4 py-3 text-gray-600">{surgery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is the P-Shot Worth the Cost?</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4">
            In Turkey, the P-Shot costs <strong>£300 all-inclusive</strong>. Compare this to UK clinics charging £1,200–£2,000 for the exact same procedure. Over 12–18 months, the cost per day of effect is less than a cup of coffee.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Turkey", price: "£300", note: "All-inclusive" },
              { label: "UK Average", price: "£1,500", note: "Same procedure" },
              { label: "You Save", price: "£1,200+", note: "Flying to Turkey" },
            ].map(c => (
              <div key={c.label} className="bg-white rounded-xl p-4 border border-blue-100">
                <div className="font-bold text-blue-700 text-xl">{c.price}</div>
                <div className="text-xs text-gray-500 mt-1">{c.label} · {c.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Verdict</h2>
          <p className="text-gray-700">
            For men with genuine ED who want a lasting, drug-free solution, the P-Shot is absolutely worth it – especially at Turkey prices. It is not magic, and it works best when combined with healthy lifestyle habits. But for the vast majority of patients, the results speak for themselves.
          </p>
        </div>
      </div>

      <CtaBlock title="Find Out If P-Shot Is Right for You" subtitle="Free WhatsApp consultation with our doctor. No commitment required." />
    </div>
  );
}

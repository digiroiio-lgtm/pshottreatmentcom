import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "PRP vs Stem Cell for Erectile Dysfunction – Which Is Better?",
  description: "PRP (P-Shot) vs stem cell therapy for erectile dysfunction. Compare effectiveness, cost, evidence, risks, and which treatment is right for your situation.",
  keywords: ["PRP vs stem cell erectile dysfunction", "stem cell ED treatment", "P-Shot vs stem cell", "best ED treatment 2024", "stem cell therapy ED"],
  alternates: { canonical: "https://pshottreatment.com/prp-vs-stem-cell-erectile-dysfunction" },
};

export default function PrpVsStemCellEdPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">PRP vs Stem Cell for Erectile Dysfunction</h1>
        <p className="text-xl text-gray-500">A detailed comparison of two cutting-edge regenerative treatments for ED</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Two Regenerative Approaches</h2>
          <p className="text-gray-700 leading-relaxed">
            Both PRP (Platelet-Rich Plasma, delivered as the P-Shot) and stem cell therapy represent a new generation of ED treatment – moving beyond drugs to actually regenerate penile tissue. But they work very differently, have very different price points, and suit different patients. Here&apos;s everything you need to know.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Each Treatment Works</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-blue-700 mb-3">PRP / P-Shot</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Blood drawn from your arm (30–50ml)",
                "Centrifuged to concentrate growth factors",
                "Platelet-Rich Plasma injected into penis",
                "Growth factors stimulate tissue regeneration",
                "Results over 3–6 months as tissue heals",
                "Uses your own blood (autologous)",
              ].map(point => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-purple-700 mb-3">Stem Cell Therapy</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Stem cells harvested from fat tissue or bone marrow",
                "Processed in a laboratory",
                "Injected into penile tissue",
                "Stem cells differentiate into specialised cells",
                "Potentially more powerful regenerative effect",
                "More complex procedure with higher risks",
              ].map(point => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Comparison: PRP vs Stem Cell for ED</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold text-blue-700">PRP (P-Shot)</th>
                <th className="px-4 py-3 font-semibold text-purple-700">Stem Cell Therapy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Cost", "£300 (Turkey) / £1,200–£2,000 (UK)", "£5,000–£20,000+"],
                ["Clinical evidence", "Strong: multiple published trials", "Emerging: promising but limited trials"],
                ["Regulatory status", "Well-established, widely approved", "Varies by country; many clinics unregulated"],
                ["Procedure time", "45–60 minutes", "Several hours + laboratory processing"],
                ["Recovery", "Same day", "1–3 days typically"],
                ["Side effects", "Minimal (own blood)", "Higher: fat harvest, processing risks"],
                ["Duration of results", "12–18 months", "Potentially longer (still being studied)"],
                ["Availability", "Wide – hundreds of clinics globally", "Limited – fewer specialist centres"],
                ["Who performs", "Trained physician", "Specialist clinic required"],
                ["Combined protocols", "Often combined with LiSWT", "Sometimes combined with PRP"],
              ].map(([factor, prp, stem]) => (
                <tr key={factor} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{factor}</td>
                  <td className="px-4 py-3 text-blue-700">{prp}</td>
                  <td className="px-4 py-3 text-purple-700">{stem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Evidence Gap</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-800 mb-3">PRP Evidence</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Multiple randomised controlled trials published",
                "Systematic reviews confirming efficacy and safety",
                "FDA-cleared centrifuge kits used globally",
                "Thousands of patients treated with documented outcomes",
                "Standard of care in many sexual medicine clinics",
              ].map(point => (
                <li key={point} className="flex items-start gap-2"><span className="text-blue-500">✓</span><span>{point}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <h3 className="font-bold text-purple-800 mb-3">Stem Cell Evidence</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Early-phase trials show promising results",
                "Most evidence from small, uncontrolled case series",
                "Not yet approved as standard care in most countries",
                "Many offering clinics are unregulated",
                "Long-term safety data still being collected",
              ].map(point => (
                <li key={point} className="flex items-start gap-2"><span className="text-purple-500">•</span><span>{point}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Is Right for You?</h2>
        <div className="space-y-3 mb-10">
          {[
            { scenario: "You want the most evidence-backed, widely available regenerative treatment", choice: "PRP / P-Shot" },
            { scenario: "You want the lowest cost with proven results", choice: "PRP / P-Shot" },
            { scenario: "You have severe ED unresponsive to all other treatments", choice: "Discuss stem cell with specialist" },
            { scenario: "You want to start treatment this month", choice: "PRP / P-Shot (widely available)" },
            { scenario: "You have a very high budget and want experimental cutting-edge therapy", choice: "Stem cell (find regulated clinic)" },
          ].map(item => (
            <div key={item.scenario} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex gap-4 items-start">
              <p className="text-sm text-gray-700 flex-1"><span className="font-semibold">Scenario:</span> {item.scenario}</p>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold shrink-0">{item.choice}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Recommendation</h2>
          <p className="text-gray-700">
            For the vast majority of men, PRP (P-Shot) is the right starting point: it is proven, affordable, safe, and widely available. Stem cell therapy may hold promise for severe cases in the future, but the current evidence base is not strong enough to justify the significantly higher cost and risk for most patients. We recommend a free consultation to determine the best approach for your specific situation.
          </p>
        </div>
      </div>

      <CtaBlock title="Discuss Your Options with Our Doctor" subtitle="Free WhatsApp consultation. Evidence-based recommendations. No pressure." />
    </div>
  );
}

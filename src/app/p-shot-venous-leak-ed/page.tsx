import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "P-Shot for Venous Leak Erectile Dysfunction – Does It Work?",
  description: "Can the P-Shot treat venous leak ED? Learn how PRP injections can help strengthen the veno-occlusive mechanism and improve erectile function for venous leak patients.",
  keywords: ["P-Shot venous leak", "PRP venous leak ED", "venous leak erectile dysfunction treatment", "P-Shot veno-occlusive", "P-Shot for ED"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-venous-leak-ed" },
};

export default function PShotVenousLeakPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot for Venous Leak ED</h1>
        <p className="text-xl text-gray-500">Can PRP therapy help men with veno-occlusive erectile dysfunction?</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Is Venous Leak ED?</h2>
          <p className="text-gray-700 leading-relaxed">
            Venous leak (also called corpus cavernosum veno-occlusive dysfunction) occurs when the veins in the penis fail to properly trap blood during an erection. Instead of maintaining firmness, blood escapes – leading to soft erections, difficulty staying hard, or rapid loss of erection even with arousal. It is one of the most frustrating and often misunderstood causes of erectile dysfunction.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Venous Leak Is Different from Other ED</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { title: "Arterial (Inflow) ED", desc: "Blood can't get in. Common in men with cardiovascular disease. Viagra works well for this type.", tag: "Different type" },
            { title: "Neurogenic ED", desc: "Nerve damage (e.g. post-prostate surgery, diabetes). The signal doesn't reach the tissue.", tag: "Different type" },
            { title: "Psychogenic ED", desc: "Mental/emotional cause. Often responds well to therapy.", tag: "Different type" },
            { title: "Venous Leak ED", desc: "Blood gets in but can't stay in. Pills often fail or underperform. Requires different approach.", tag: "This type" },
          ].map(item => (
            <div key={item.title} className={`bg-white border rounded-xl p-5 shadow-sm ${item.tag === "This type" ? "border-blue-300 ring-2 ring-blue-100" : "border-gray-200"}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.tag === "This type" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>{item.tag}</span>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How P-Shot Targets Venous Leak</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              step: "1",
              title: "PRP Stimulates Smooth Muscle Regeneration",
              detail: "Growth factors in PRP (particularly PDGF and VEGF) stimulate regeneration of smooth muscle tissue inside the corpus cavernosum. Healthy smooth muscle is critical for the veno-occlusive mechanism.",
            },
            {
              step: "2",
              title: "Collagen and Tissue Strengthening",
              detail: "PRP promotes collagen production and tissue remodelling in the penile tunica albuginea – the fibrous sheath that helps maintain pressure during erection. Strengthening this tissue directly reduces venous leakage.",
            },
            {
              step: "3",
              title: "Improved Vascular Function",
              detail: "VEGF in PRP encourages new blood vessel formation and improves endothelial function, which supports better overall blood management during erection.",
            },
            {
              step: "4",
              title: "Nerve Regeneration",
              detail: "NGF (Nerve Growth Factor) in PRP supports penile nerve health, improving the neurological signalling that coordinates the veno-occlusive reflex.",
            },
          ].map(item => (
            <div key={item.step} className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">{item.step}</div>
              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Results Can Venous Leak Patients Expect?</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4">Results vary depending on the severity of the venous leak and the patient&apos;s baseline health. In general:</p>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "Mild venous leak: Significant improvement in erection quality and duration in most patients (3–6 months)",
              "Moderate venous leak: Noticeable improvement for most patients, often reducing reliance on ED medication",
              "Severe venous leak: P-Shot may provide partial improvement; combined protocol with low-intensity shockwave may be recommended",
              "Most patients notice initial improvements at 4–8 weeks post-treatment",
              "Results typically peak at 3–6 months and last 12–18 months",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">P-Shot vs Other Venous Leak Treatments</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Treatment</th>
                <th className="px-4 py-3 font-semibold">Effectiveness for Venous Leak</th>
                <th className="px-4 py-3 font-semibold">Invasiveness</th>
                <th className="px-4 py-3 font-semibold">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["P-Shot (PRP)", "Moderate–Good", "Injection only", "£300 (Turkey)"],
                ["Viagra / Cialis", "Often poor for venous leak", "Pill", "Ongoing"],
                ["Penile venous ligation surgery", "Variable, high complication risk", "Major surgery", "£5,000–£15,000"],
                ["Penile implant", "Effective but irreversible", "Major surgery", "£10,000–£20,000"],
                ["Low-intensity shockwave (LiSWT)", "Moderate, often combined with PRP", "Non-invasive", "£500–£2,000 course"],
              ].map(([treatment, effectiveness, invasiveness, cost]) => (
                <tr key={treatment} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{treatment}</td>
                  <td className="px-4 py-3 text-gray-600">{effectiveness}</td>
                  <td className="px-4 py-3 text-gray-600">{invasiveness}</td>
                  <td className="px-4 py-3 text-gray-600">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Medical Disclaimer</h2>
          <p className="text-sm text-gray-500">This page is for educational purposes only. Venous leak ED should be diagnosed by a qualified urologist via penile Doppler ultrasound. Our doctor will conduct a thorough consultation before any treatment is recommended.</p>
        </div>
      </div>

      <CtaBlock title="Ask Our Doctor About P-Shot for Venous Leak" subtitle="Free WhatsApp consultation. Tell us your symptoms and get a personalised recommendation." />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Shockwave Therapy for Erectile Dysfunction — LiSWT Explained",
  description: "Low-intensity shockwave therapy (LiSWT) for ED: how it works, clinical evidence, who it helps, and how it compares and combines with PRP for optimal results.",
  keywords: ["shockwave therapy erectile dysfunction", "LiSWT ED", "low intensity shockwave ED", "shockwave ED treatment UK", "shockwave vs PRP ED"],
  alternates: { canonical: "https://pshottreatment.com/shockwave-therapy-ed" },
};

export default function ShockwaveTherapyEdPage() {
  return (
    <div className="pt-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/ed-knowledge-hub" className="hover:text-blue-600 transition-colors">ED Knowledge Hub</Link>
          <span>›</span>
          <span className="text-gray-600">Shockwave Therapy for ED</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Shockwave Therapy for Erectile Dysfunction</h1>
        <p className="text-xl text-gray-500">Low-intensity extracorporeal shockwave therapy (LiSWT) — what the evidence says</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Is Shockwave Therapy for ED?</h2>
          <p className="text-gray-700 leading-relaxed">
            Low-intensity extracorporeal shockwave therapy (LiSWT) delivers acoustic waves to penile tissue at a very low energy level — sufficient to stimulate biological responses, but non-destructive. Unlike high-energy shockwave used in kidney stone treatment, LiSWT for ED is completely non-painful and non-invasive. The acoustic waves stimulate the growth of new blood vessels (neovascularisation) and improve endothelial function in the penile vasculature.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Shockwave Works in the Penis</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              step: "1",
              title: "Mechanotransduction",
              detail: "Acoustic waves create microscopic mechanical stress in penile tissue. Cells detect this stress and activate regenerative signalling pathways — interpreting it as mild, controlled microtrauma that requires healing.",
            },
            {
              step: "2",
              title: "Neovascularisation (New Blood Vessel Growth)",
              detail: "Shockwave stimulates upregulation of VEGF (Vascular Endothelial Growth Factor) and other angiogenic factors. Over weeks, new capillaries and arterioles form in the treated tissue, improving blood flow capacity.",
            },
            {
              step: "3",
              title: "Endothelial Repair",
              detail: "The endothelial cells lining penile blood vessels are stimulated to produce more nitric oxide — the primary molecule that relaxes smooth muscle and allows blood inflow. This is the mechanism that makes Viagra work, but shockwave stimulates the upstream production rather than blocking downstream breakdown.",
            },
            {
              step: "4",
              title: "Plaque Disruption (in Peyronie&apos;s cases)",
              detail: "In men with Peyronie&apos;s disease alongside ED, shockwave can help break down fibrotic plaques in the tunica albuginea, improving both curvature and blood trapping.",
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

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What the Clinical Evidence Shows</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4">LiSWT is one of the best-researched non-invasive ED treatments:</p>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "A 2019 meta-analysis of 14 randomised controlled trials found statistically significant improvement in IIEF (erectile function) scores with LiSWT vs sham treatment",
              "The European Association of Urology (EAU) includes LiSWT in its guidelines as an option for vasculogenic ED",
              "Studies consistently show LiSWT can restore responsiveness to PDE5 inhibitors in men who had become non-responsive to Viagra",
              "PRP + LiSWT combination protocol shows consistently stronger results than either treatment alone in comparative studies",
              "Effects begin appearing at 4–8 weeks, peak at 3 months, and can last 12–24 months",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-green-600 shrink-0 font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Is Shockwave Best Suited For?</h2>
        <div className="grid md:grid-cols-2 gap-3 mb-10">
          {[
            { fit: true, label: "Mild-to-moderate vasculogenic ED" },
            { fit: true, label: "Men who want to avoid medication long-term" },
            { fit: true, label: "Men where Viagra is losing effectiveness" },
            { fit: true, label: "Post-prostatectomy penile rehabilitation" },
            { fit: true, label: "Diabetic ED (especially combined with PRP)" },
            { fit: true, label: "ED associated with Peyronie&apos;s disease" },
            { fit: false, label: "Severe end-stage vascular disease" },
            { fit: false, label: "Active penile infection or skin condition" },
            { fit: false, label: "Bleeding disorders or anticoagulant therapy" },
            { fit: false, label: "Men with penile implants" },
          ].map(item => (
            <div key={item.label} className={`flex items-center gap-3 rounded-xl p-3 border text-sm ${item.fit ? "bg-green-50 border-green-100 text-green-800" : "bg-red-50 border-red-100 text-red-700"}`}>
              <span>{item.fit ? "✅" : "❌"}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shockwave vs PRP vs Combined Protocol</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold">Shockwave alone</th>
                <th className="px-4 py-3 font-semibold">PRP alone</th>
                <th className="px-4 py-3 font-semibold text-blue-700">Combined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Primary mechanism", "Neovascularisation, endothelial repair", "Growth factor tissue regeneration", "Both — synergistic"],
                ["Invasiveness", "Non-invasive", "Injection", "Minimal"],
                ["Best for", "Vascular ED, Peyronie's", "Tissue damage, nerve component", "Moderate-severe / complex ED"],
                ["Sessions needed", "6–12 sessions over 4–6 weeks", "1–2 sessions", "6–12 shockwave + 1–2 PRP"],
                ["Evidence strength", "Strong (RCT meta-analyses)", "Good (growing evidence)", "Very strong (combination studies)"],
                ["Duration of effect", "12–18 months", "12–18 months", "18–24 months (estimated)"],
                ["UK cost", "£800–£2,000 course", "£1,200–£2,000", "£2,000–£4,000"],
                ["Turkey cost", "£200–£400", "£300", "£450–£600"],
              ].map(([factor, shockwave, prp, combined]) => (
                <tr key={factor} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{factor}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{shockwave}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{prp}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold text-xs">{combined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">A Note on Shockwave Device Quality</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Not all shockwave devices are equal. There is a significant difference between clinical-grade focused/linear shockwave devices and the radial pressure wave devices found in some beauty and wellness clinics. The clinical evidence for ED treatment specifically relates to focused or linear shockwave devices. If you are considering shockwave treatment anywhere, ask specifically which device is used.
          </p>
          <p className="text-gray-700 text-sm font-medium">Our clinic uses clinical-grade equipment with the same device specifications used in published LiSWT ED trials.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400 mb-8">
          <strong>Medical disclaimer:</strong> This page is for educational purposes only. Shockwave therapy for ED should be administered by qualified medical professionals using approved clinical-grade equipment. Always consult a physician before beginning any ED treatment.
        </div>

        <Link href="/ed-knowledge-hub" className="text-sm text-blue-600 hover:underline">← Back to ED Knowledge Hub</Link>
      </div>

      <CtaBlock title="Ask About Our PRP + Shockwave Protocol" subtitle="The combination protocol backed by the strongest clinical evidence. Free consultation via WhatsApp." />
    </div>
  );
}

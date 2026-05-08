import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Post-Finasteride Syndrome & Erectile Dysfunction — What the Evidence Says",
  description: "Persistent ED, low libido, and cognitive symptoms after stopping finasteride (Propecia) or dutasteride. What post-finasteride syndrome is, who gets it, and what treatments may help.",
  keywords: ["post-finasteride syndrome ED", "finasteride erectile dysfunction", "Propecia ED persistent", "post-finasteride syndrome treatment", "PFS erectile dysfunction"],
  alternates: { canonical: "https://pshottreatment.com/post-finasteride-syndrome-ed" },
};

export default function PostFinasterideSyndromeEdPage() {
  return (
    <div className="pt-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/ed-knowledge-hub" className="hover:text-blue-600 transition-colors">ED Knowledge Hub</Link>
          <span>›</span>
          <span className="text-gray-600">Post-Finasteride Syndrome</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Underreported</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Post-Finasteride Syndrome & Erectile Dysfunction</h1>
        <p className="text-xl text-gray-500">Persistent sexual dysfunction after stopping Propecia — what the research shows and what may help</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Is Post-Finasteride Syndrome?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Post-Finasteride Syndrome (PFS) refers to a cluster of persistent side effects that continue — or newly appear — after discontinuing finasteride (Propecia, Proscar) or dutasteride (Avodart). The condition is officially recognised by the FDA, which added persistent sexual dysfunction warnings to finasteride labels in 2012.
          </p>
          <p className="text-gray-700 leading-relaxed">
            PFS affects a minority of men who take these medications — estimates range from 1–8% — but for those affected, the symptoms can be severe and long-lasting.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Symptoms of PFS</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            {
              category: "Sexual",
              symptoms: ["Erectile dysfunction", "Loss of libido (often severe)", "Reduced penile sensitivity", "Ejaculatory dysfunction", "Penile shrinkage (perceived or actual)"],
            },
            {
              category: "Hormonal / Physical",
              symptoms: ["Fatigue and low energy", "Loss of muscle mass", "Increased body fat", "Gynecomastia (breast tissue growth)", "Testicular pain or atrophy"],
            },
            {
              category: "Neurological / Cognitive",
              symptoms: ["Brain fog and poor concentration", "Memory impairment", "Depression and anxiety", "Emotional blunting", "Sleep disturbance"],
            },
          ].map(group => (
            <div key={group.category} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">{group.category}</h3>
              <ul className="space-y-1">
                {group.symptoms.map(s => (
                  <li key={s} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-purple-400 shrink-0">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Does PFS Cause Persistent ED?</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              mechanism: "Neuroactive Steroid Disruption",
              detail: "Finasteride blocks 5-alpha reductase, preventing testosterone from converting to DHT and also reducing neurosteroids like allopregnanolone and DHEA. These neurosteroids play critical roles in brain function, mood, and nerve signalling. Disruption of this pathway — particularly during sensitive periods of neural plasticity — may cause changes that persist after the drug is stopped.",
            },
            {
              mechanism: "Persistent Gene Expression Changes",
              detail: "Some research suggests that finasteride causes epigenetic changes — alterations in which genes are expressed — in penile tissue and neural pathways. These changes may not fully reverse after discontinuation, potentially explaining why symptoms persist.",
            },
            {
              mechanism: "Androgen Receptor Upregulation",
              detail: "Prolonged DHT suppression may cause androgen receptors to upregulate (become hypersensitive) in an attempt to compensate. This abnormal receptor state can persist after the drug is stopped, creating an altered hormonal signalling environment.",
            },
            {
              mechanism: "Penile Tissue Changes",
              detail: "DHT is important for maintaining penile smooth muscle, collagen balance, and vascular health. Long-term suppression may cause structural changes in penile tissue that reduce erectile function independent of circulating hormone levels.",
            },
          ].map(item => (
            <div key={item.mechanism} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{item.mechanism}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes PFS ED Different</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFS-associated ED is distinctly different from typical vascular or age-related ED, which has important treatment implications:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Testosterone and DHT levels may test as normal — yet sexual dysfunction persists",
              "Viagra often provides little benefit, as the dysfunction is neurologically mediated rather than haemodynamic",
              "TRT (testosterone replacement therapy) alone is frequently ineffective in true PFS",
              "The dysfunction often begins or worsens in men who had normal sexual function before finasteride",
              "Psychological testing often reveals co-existing depression and anxiety that standard ED metrics miss",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold shrink-0">⚠</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatments Being Explored for PFS ED</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Approach</th>
                <th className="px-4 py-3 font-semibold">Evidence Level</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["P-Shot (PRP)", "Emerging — case series positive", "Addresses penile tissue component; growth factors support nerve and vascular repair independent of DHT pathway"],
                ["Low-intensity shockwave", "Emerging", "Improves endothelial function and neovascularisation; may help vascular component of PFS ED"],
                ["Testosterone / HRT optimisation", "Partial benefit only", "Useful if frank hypogonadism present; rarely sufficient alone for true PFS"],
                ["Allopregnanolone precursors (progesterone)", "Experimental", "Research ongoing; addresses neurosteroid depletion pathway"],
                ["Psychosexual therapy / CBT", "Supportive", "Important for the anxiety and depression component; not curative for physical symptoms"],
                ["Vacuum erection device", "Symptomatic only", "Useful for penile rehabilitation and maintaining tissue oxygenation"],
              ].map(([approach, evidence, notes]) => (
                <tr key={approach} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{approach}</td>
                  <td className="px-4 py-3 text-gray-600">{evidence}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Important: Confirm Your Diagnosis</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Before treating for PFS, it is important to rule out other causes. Full hormone panel (total testosterone, free testosterone, DHT, LH, FSH, prolactin, thyroid, SHBG) should be performed. Some men who believe they have PFS have treatable hormonal conditions that respond well to standard treatment.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            If hormone levels are genuinely normal and ED persists, PRP therapy targeting the penile tissue component is a reasonable, evidence-aligned option that our doctor can discuss with you.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400 mb-8">
          <strong>Medical disclaimer:</strong> Post-finasteride syndrome is a complex and incompletely understood condition. This page provides educational information only. Diagnosis and treatment should always involve a qualified physician with experience in men&apos;s hormonal health. The PFS Foundation (pfsfoundation.org) is a patient advocacy resource with research links.
        </div>

        <Link href="/ed-knowledge-hub" className="text-sm text-blue-600 hover:underline">← Back to ED Knowledge Hub</Link>
      </div>

      <CtaBlock title="Complex ED? Our Doctor Can Help" subtitle="Free WhatsApp consultation. We take post-finasteride and complex ED seriously. No generic advice." />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "ED Knowledge Hub — Complete Guide to Erectile Dysfunction Causes & Treatments",
  description: "The complete guide to erectile dysfunction: causes, types, and every treatment option explained. Backed by clinical evidence. Read before spending £1,000+ on treatment.",
  keywords: ["erectile dysfunction guide", "ED causes and treatments", "ED knowledge hub", "erectile dysfunction help UK", "ED treatment options"],
  alternates: { canonical: "https://pshottreatment.com/ed-knowledge-hub" },
};

const causes = [
  {
    slug: "/ed-causes",
    title: "What Causes Erectile Dysfunction?",
    desc: "The definitive overview — vascular, neurological, hormonal, psychological, and drug-induced ED explained.",
    tag: "Start Here",
    tagColor: "bg-blue-100 text-blue-700",
    icon: "🔬",
  },
  {
    slug: "/diabetes-erectile-dysfunction",
    title: "Diabetes & Erectile Dysfunction",
    desc: "How high blood sugar damages vascular and neural pathways — and which treatments work best for diabetic ED.",
    tag: "Common Cause",
    tagColor: "bg-orange-100 text-orange-700",
    icon: "💉",
  },
  {
    slug: "/p-shot-venous-leak-ed",
    title: "Venous Leak ED",
    desc: "Blood gets in but won't stay in. Viagra often fails for this type. Understand why — and what does work.",
    tag: "Often Misdiagnosed",
    tagColor: "bg-red-100 text-red-700",
    icon: "🩸",
  },
  {
    slug: "/post-finasteride-syndrome-ed",
    title: "Post-Finasteride Syndrome & ED",
    desc: "Persistent ED, low libido, and brain fog after stopping Propecia or Proscar. What the research says.",
    tag: "Underreported",
    tagColor: "bg-purple-100 text-purple-700",
    icon: "💊",
  },
  {
    slug: "/post-prostatectomy-ed",
    title: "Post-Prostatectomy ED",
    desc: "ED following prostate surgery — nerve-sparing outcomes, realistic recovery timelines, and proven rehabilitation.",
    tag: "Post-Surgical",
    tagColor: "bg-yellow-100 text-yellow-700",
    icon: "🏥",
  },
  {
    slug: "/testosterone-ed",
    title: "Low Testosterone & Erectile Dysfunction",
    desc: "Does low T cause ED? When TRT helps, when it doesn't, and how PRP interacts with testosterone levels.",
    tag: "Hormonal",
    tagColor: "bg-green-100 text-green-700",
    icon: "⚡",
  },
];

const treatments = [
  {
    slug: "/prp-fix-erectile-dysfunction-naturally",
    title: "PRP for ED — The Science",
    desc: "How platelet-rich plasma stimulates tissue regeneration and vascular repair to address root-cause ED.",
    tag: "Non-Surgical",
    tagColor: "bg-blue-100 text-blue-700",
    icon: "🧬",
  },
  {
    slug: "/shockwave-therapy-ed",
    title: "Shockwave Therapy for ED",
    desc: "Low-intensity shockwave (LiSWT) — who it helps, how it compares to PRP, and whether combining both is better.",
    tag: "Non-Surgical",
    tagColor: "bg-blue-100 text-blue-700",
    icon: "⚙️",
  },
  {
    slug: "/prp-vs-stem-cell-erectile-dysfunction",
    title: "PRP vs Stem Cell Therapy",
    desc: "Two regenerative options compared: evidence quality, cost difference, and which is right for which patient.",
    tag: "Comparison",
    tagColor: "bg-indigo-100 text-indigo-700",
    icon: "⚖️",
  },
  {
    slug: "/p-shot-vs-viagra",
    title: "P-Shot vs Viagra",
    desc: "A pill that masks symptoms vs a procedure that fixes the underlying biology. Long-term cost and outcome comparison.",
    tag: "Comparison",
    tagColor: "bg-indigo-100 text-indigo-700",
    icon: "💊",
  },
  {
    slug: "/testosterone-ed",
    title: "Testosterone Therapy for ED",
    desc: "When testosterone replacement actually helps ED — and when it makes no difference at all.",
    tag: "Hormonal",
    tagColor: "bg-green-100 text-green-700",
    icon: "⚡",
  },
];

export default function EdKnowledgeHubPage() {
  return (
    <div className="pt-6">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/10 border border-white/20 text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">ED Knowledge Hub</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Everything You Need to Know<br className="hidden md:block" /> About Erectile Dysfunction
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most men arrive at a treatment decision without fully understanding why they have ED — or what treatments actually address their specific cause. This hub changes that.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {["ED Causes", "Diabetes ED", "Venous Leak", "Post-Finasteride", "Post-Prostatectomy", "Testosterone", "PRP", "Shockwave", "Stem Cell"].map(tag => (
              <span key={tag} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">

        {/* Why diagnosis-first matters */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-14">
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Why the cause matters before the treatment</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Erectile dysfunction has multiple distinct causes — vascular, neurological, hormonal, pharmacological, and psychological. A treatment that works brilliantly for one type may fail entirely for another. Venous leak ED does not respond to Viagra the same way arterial ED does. Post-finasteride ED has a completely different mechanism to diabetic ED. Understanding your cause is the most important step you can take before spending money on treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Causes section */}
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Understand Your Cause</h2>
          <p className="text-gray-500 mb-8">Start here. Most ED is caused by one or more of these underlying mechanisms.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {causes.map(item => (
              <Link key={item.slug} href={item.slug} className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Treatments section */}
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Compare Your Treatment Options</h2>
          <p className="text-gray-500 mb-8">Once you understand your cause, explore which treatments are backed by evidence for your type of ED.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {treatments.map(item => (
              <Link key={item.slug + item.title} href={item.slug} className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Smart decision framing */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 mb-14">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">The Smart Medical Decision Question</h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              &ldquo;Why pay £1,800 in London for the same PRP procedure available in a certified Turkish clinic for £300?&rdquo;
            </p>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              The procedure is identical. The PRP centrifuge kits are the same FDA-cleared equipment. The doctors are equally qualified. The only difference is operational cost. Once you understand that, Turkey isn&apos;t the budget option — it&apos;s the informed option.
            </p>
            <Link href="/why-is-p-shot-expensive-london" className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm">
              See the Full Cost Breakdown →
            </Link>
          </div>
        </div>

        {/* Quick-reference treatment comparison table */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Comparison at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Treatment</th>
                  <th className="px-4 py-3 font-semibold">Evidence</th>
                  <th className="px-4 py-3 font-semibold">Addresses Root Cause?</th>
                  <th className="px-4 py-3 font-semibold">UK Cost</th>
                  <th className="px-4 py-3 font-semibold text-blue-700">Turkey Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["P-Shot (PRP)", "Strong", "Yes", "£1,200–£2,000", "£300"],
                  ["Shockwave (LiSWT)", "Good", "Yes", "£500–£2,000 course", "£200–£400"],
                  ["PRP + Shockwave combo", "Very strong", "Yes", "£2,000–£4,000", "£450–£600"],
                  ["Testosterone therapy", "Good (when deficient)", "Partial", "£150–£400/mo", "—"],
                  ["Viagra / Cialis (PDE5i)", "Strong (symptomatic)", "No", "£5–£25/pill", "—"],
                  ["Penile implant", "Definitive", "Replacement", "£10,000–£20,000", "£3,000–£6,000"],
                  ["Stem cell therapy", "Early stage", "Yes (theoretical)", "£5,000–£15,000", "£2,000–£5,000"],
                ].map(([treatment, evidence, rootCause, ukCost, turkey]) => (
                  <tr key={treatment} className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">{treatment}</td>
                    <td className="px-4 py-3 text-gray-600">{evidence}</td>
                    <td className="px-4 py-3 text-gray-600">{rootCause}</td>
                    <td className="px-4 py-3 text-gray-600">{ukCost}</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold">{turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Patient story links */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Patient Experiences</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "/i-paid-1800-london-p-shot", title: "I Paid £1,800 in London — Here's Why I'd Never Do It Again", tag: "Cost story" },
              { slug: "/what-uk-clinics-dont-tell-you-p-shot-pricing", title: "What UK Clinics Don't Tell You About P-Shot Pricing", tag: "Insider" },
              { slug: "/flew-to-turkey-for-ed-treatment-reality", title: "I Flew to Turkey for ED Treatment — Here's the Reality", tag: "Patient diary" },
            ].map(item => (
              <Link key={item.slug} href={item.slug} className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <span className="inline-block text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full mb-3">{item.tag}</span>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors text-sm leading-snug">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400">
          <strong>Medical disclaimer:</strong> This hub is for educational purposes only. Erectile dysfunction has multiple causes, some of which require professional diagnosis. Always consult a qualified physician before starting any treatment. Content is regularly reviewed by our medical team.
        </div>
      </div>

      <CtaBlock title="Not Sure Which Treatment Is Right for You?" subtitle="Free WhatsApp consultation with our doctor. Describe your symptoms and get honest, personalised guidance." />
    </div>
  );
}

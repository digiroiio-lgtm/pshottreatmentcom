import type { Metadata } from "next";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "What Causes Erectile Dysfunction? The Complete Guide",
  description: "A complete, clinically accurate guide to every cause of erectile dysfunction — vascular, neurological, hormonal, psychological, and medication-induced. Understand yours before you treat it.",
  keywords: ["what causes erectile dysfunction", "erectile dysfunction causes", "ED causes UK", "why do I have ED", "types of erectile dysfunction"],
  alternates: { canonical: "https://pshottreatment.com/ed-causes" },
};

const causes = [
  {
    category: "Vascular (Most Common)",
    color: "blue",
    desc: "The most common root cause. Blood either can't reach the penis in sufficient volume, or can't be retained once an erection begins.",
    types: [
      {
        name: "Arterial insufficiency",
        detail: "Reduced arterial blood flow due to atherosclerosis, hypertension, or diabetes. Responds well to Viagra and PDE5 inhibitors.",
        responds: "Viagra, PRP, shockwave",
      },
      {
        name: "Venous leak (veno-occlusive dysfunction)",
        detail: "Blood enters but veins fail to trap it. Erections soft or short-lived even with stimulation. Viagra often underperforms.",
        responds: "PRP, shockwave, venous ligation (advanced)",
        link: "/p-shot-venous-leak-ed",
      },
    ],
  },
  {
    category: "Neurological",
    color: "purple",
    desc: "The nervous system signal that triggers and maintains erection is disrupted — either centrally or at the penile nerve level.",
    types: [
      {
        name: "Post-prostatectomy nerve damage",
        detail: "Prostate removal often damages cavernous nerves. Recovery depends on nerve-sparing technique and rehabilitation speed.",
        responds: "PRP, vacuum erection device, penile rehabilitation",
        link: "/post-prostatectomy-ed",
      },
      {
        name: "Diabetic neuropathy",
        detail: "Autonomic neuropathy from chronic high blood sugar damages the nerves governing erectile response.",
        responds: "Blood sugar management, PRP, shockwave",
        link: "/diabetes-erectile-dysfunction",
      },
      {
        name: "Pelvic surgery / radiation damage",
        detail: "Bladder, colorectal, or other pelvic surgery can damage nearby cavernous nerves. Outcomes vary by nerve proximity.",
        responds: "PRP, penile rehabilitation, implant",
      },
    ],
  },
  {
    category: "Hormonal",
    color: "green",
    desc: "Hormonal imbalances affect both desire and the biological mechanisms of erection.",
    types: [
      {
        name: "Low testosterone (hypogonadism)",
        detail: "Low T reduces libido, energy, and morning erections. May not cause ED directly but amplifies other causes significantly.",
        responds: "TRT, lifestyle changes, PRP (complementary)",
        link: "/testosterone-ed",
      },
      {
        name: "Hyperprolactinaemia",
        detail: "Elevated prolactin (from pituitary adenoma or medications) suppresses testosterone and causes ED.",
        responds: "Dopamine agonist medication, treat underlying cause",
      },
      {
        name: "Thyroid dysfunction",
        detail: "Both hypo- and hyperthyroidism can cause ED. Often overlooked in basic ED screening.",
        responds: "Thyroid treatment, lifestyle correction",
      },
    ],
  },
  {
    category: "Pharmacological",
    color: "orange",
    desc: "Many common medications cause ED as a side effect — often not disclosed to patients at point of prescription.",
    types: [
      {
        name: "Antidepressants (SSRIs / SNRIs)",
        detail: "Sertraline, fluoxetine, paroxetine and similar drugs commonly cause ED and delayed ejaculation in 30–60% of men.",
        responds: "Medication review, PDE5i addition, switch to different antidepressant",
      },
      {
        name: "Antihypertensives (beta-blockers, thiazides)",
        detail: "Some blood pressure medications reduce penile blood flow or impair erectile mechanisms.",
        responds: "Medication review, switch to ACE inhibitor or ARB class",
      },
      {
        name: "5-alpha reductase inhibitors (finasteride, dutasteride)",
        detail: "Used for hair loss (Propecia) and BPH. Can cause persistent ED even after stopping — post-finasteride syndrome.",
        responds: "Complex; see Post-Finasteride Syndrome page",
        link: "/post-finasteride-syndrome-ed",
      },
    ],
  },
  {
    category: "Psychological",
    color: "pink",
    desc: "Purely psychological ED is often misdiagnosed — most ED in men over 40 has a physical component even when anxiety plays a role.",
    types: [
      {
        name: "Performance anxiety",
        detail: "A single failure creates anticipatory anxiety, which triggers adrenaline release that physically prevents erection. Cycle self-perpetuates.",
        responds: "CBT, sex therapy, short-term PDE5i to break cycle",
      },
      {
        name: "Depression",
        detail: "Depression reduces libido and impairs the neurological signalling for erection. Antidepressants can further complicate this.",
        responds: "Treat depression; consider PDE5i concurrent with antidepressant",
      },
      {
        name: "Relationship and stress factors",
        detail: "Chronic stress, relationship conflict, or unresolved emotional issues can suppress the parasympathetic response needed for erection.",
        responds: "Couples therapy, stress management, psychosexual therapy",
      },
    ],
  },
];

export default function EdCausesPage() {
  return (
    <div className="pt-6">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/ed-knowledge-hub" className="hover:text-blue-600 transition-colors">ED Knowledge Hub</Link>
          <span>›</span>
          <span className="text-gray-600">What Causes ED?</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">What Causes Erectile Dysfunction?</h1>
        <p className="text-xl text-gray-500 leading-relaxed">The complete clinical guide — understand your specific cause before choosing a treatment</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Erectile dysfunction is not a single condition — it is a symptom with multiple distinct underlying causes. The most important thing you can do before spending money on treatment is understand which type you have. A treatment that is highly effective for vascular ED may be useless for pharmacological ED, and vice versa. This guide explains every major cause and which treatments are evidence-based for each.
          </p>
        </div>

        {causes.map(section => (
          <div key={section.category} className="mb-12">
            <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 bg-${section.color}-100 text-${section.color}-700`}>
              {section.category}
            </div>
            <p className="text-gray-600 text-sm mb-5">{section.desc}</p>
            <div className="space-y-4">
              {section.types.map(type => (
                <div key={type.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{type.name}</h3>
                    {type.link && (
                      <Link href={type.link} className="text-xs text-blue-600 hover:underline shrink-0">Deep dive →</Link>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{type.detail}</p>
                  <p className="text-xs text-gray-400"><strong>Responds to:</strong> {type.responds}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Mixed Aetiology: The Most Common Reality</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Most men over 45 with ED have <strong>mixed aetiology</strong> — a combination of mild vascular impairment, perhaps a hormonal factor, and anxiety layered on top. This is why a single-treatment approach often underperforms: if you treat the vascular component but leave the hormonal or psychological component unaddressed, results are partial.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            A thorough medical consultation will consider all possible contributing factors. Our doctor reviews each patient individually before recommending any treatment protocol.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400">
          <strong>Medical disclaimer:</strong> This page is for educational purposes only. Accurate diagnosis of ED aetiology requires a qualified physician assessment, which may include penile Doppler ultrasound, hormone blood panel, and full medical history review.
        </div>

        <div className="mt-8">
          <Link href="/ed-knowledge-hub" className="text-sm text-blue-600 hover:underline">← Back to ED Knowledge Hub</Link>
        </div>
      </div>

      <CtaBlock title="Get a Diagnosis-First Consultation" subtitle="Our doctor assesses your specific cause before recommending any treatment. Free. No obligation." />
    </div>
  );
}

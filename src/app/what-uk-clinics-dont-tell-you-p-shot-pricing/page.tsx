import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "What UK Clinics Don't Tell You About P-Shot Pricing",
  description: "The hidden truth about P-Shot pricing in the UK — what you're actually paying for, why prices are so high, and what clinics quietly leave out of their quotes.",
  keywords: ["P-Shot UK pricing truth", "P-Shot hidden costs", "P-Shot London what they don't tell you", "P-Shot price breakdown UK", "P-Shot transparent pricing"],
  alternates: { canonical: "https://pshottreatment.com/what-uk-clinics-dont-tell-you-p-shot-pricing" },
};

export default function WhatUKClinicsDontTellYouPage() {
  return (
    <div className="pt-6">
      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 text-center py-10">
        <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Inside Knowledge</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">What UK Clinics Don&apos;t Tell You About P-Shot Pricing</h1>
        <p className="text-lg text-gray-500">The things that never make it onto the clinic website — but that every patient deserves to know</p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
          <span>Editorial</span>
          <span>·</span>
          <span>7 min read</span>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-4 pb-16">

        <div className="bg-orange-50 border-l-4 border-orange-400 pl-5 pr-4 py-4 rounded-r-xl mb-10 text-gray-700 italic leading-relaxed">
          The P-Shot is a legitimate, effective procedure. This article isn&apos;t about whether it works — it does. It&apos;s about what happens between the moment you decide you want it and the moment you actually receive it. And why the typical UK patient ends up paying three to six times more than they need to.
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thing #1: The &ldquo;All-Inclusive&rdquo; Price Isn&apos;t Always</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many UK clinics advertise a headline price — say, £1,200 — that sounds like the total cost. Read the small print carefully. Common add-ons that UK clinics sometimes charge separately:
          </p>
          <div className="space-y-2 mb-4">
            {[
              { item: "Initial consultation fee", note: "£100–£200, sometimes refundable against treatment" },
              { item: "Topical anaesthetic (numbing cream)", note: "Sometimes billed as a separate consumable" },
              { item: "Follow-up consultation", note: "Often required at 6 weeks, not always included" },
              { item: "Blood processing fee", note: "Occasionally separated from the procedure quote" },
              { item: "Aftercare kit / documentation", note: "Some clinics charge for printed aftercare packs" },
            ].map(row => (
              <div key={row.item} className="bg-white border border-gray-200 rounded-xl px-4 py-3">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium text-gray-900">{row.item}</span>
                  <span className="text-xs text-orange-600 font-semibold shrink-0 ml-3">{row.note}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800"><strong>What to ask:</strong> &ldquo;Is that your total all-inclusive price? What specifically is included and what is not?&rdquo; Get it in writing before you pay a deposit.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thing #2: The Procedure Costs About the Same Everywhere to Perform</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here is the part that UK clinics would rather you didn&apos;t focus on: the actual cost of performing a P-Shot — the consumables, the blood tubes, the centrifuge kit — is roughly the same in the UK as in Turkey, Spain, or anywhere else. It&apos;s a globally traded product.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">Approximate material cost per P-Shot procedure:</p>
            <div className="space-y-2">
              {[
                ["FDA-cleared PRP centrifuge kit", "£60–£90"],
                ["Blood collection tubes", "£5–£10"],
                ["Syringes & needles", "£5–£10"],
                ["Topical anaesthetic", "£5–£15"],
                ["Total consumables", "~£75–£125"],
              ].map(([item, cost]) => (
                <div key={item} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item}</span>
                  <span className="font-semibold text-gray-900">{cost}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The difference between a £300 procedure and a £1,800 procedure is not the quality of materials. It is the cost of the building, the staff wages, the compliance costs, and the profit margin — all of which vary enormously between Istanbul and London.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thing #3: There Is No Quality Premium for a UK Postcode</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Paying more does not guarantee a better outcome. The P-Shot procedure is highly standardised. What actually determines the quality of your result:
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-4">
            {[
              { factor: "Doctor qualification", matters: true },
              { factor: "PRP centrifuge protocol", matters: true },
              { factor: "Injection technique", matters: true },
              { factor: "Pre-treatment consultation quality", matters: true },
              { factor: "Clinic postcode", matters: false },
              { factor: "Interior design of waiting room", matters: false },
              { factor: "Brand name of clinic", matters: false },
              { factor: "Price paid", matters: false },
            ].map(item => (
              <div key={item.factor} className={`flex items-center gap-3 rounded-xl p-3 border text-sm ${item.matters ? "bg-green-50 border-green-100 text-green-800" : "bg-red-50 border-red-100 text-red-700"}`}>
                <span>{item.matters ? "✅" : "❌"}</span>
                <span>{item.factor}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thing #4: UK Clinics Know Patients Won&apos;t Shop Around</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Erectile dysfunction is a deeply personal issue. Most men do not want to comparison shop for it the way they would for a car service. They find one clinic that feels trustworthy, they feel some relief that they&apos;ve made a decision, and they book.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            UK private clinics know this. Pricing for private men&apos;s health procedures reflects it. The embarrassment premium is real — and it adds hundreds of pounds to your bill.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 italic">&ldquo;I genuinely didn&apos;t think to look anywhere else. The clinic seemed reputable. I was just relieved to have found somewhere. It didn&apos;t occur to me to check whether there was a better option until a colleague mentioned he&apos;d had it done in Turkey for a fraction of what I paid.&rdquo;</p>
            <p className="text-xs text-gray-400 mt-2">— Patient from London</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thing #5: Medical Tourism for This Procedure Is Mainstream</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is perhaps the most significant thing UK clinics quietly hope you don&apos;t discover: flying abroad for P-Shot treatment is not unusual, experimental, or risky. It is entirely mainstream.
          </p>
          <div className="space-y-3 mb-4">
            {[
              "Turkey receives over 1.4 million medical tourists per year — and is accredited by international medical standards bodies",
              "Hair transplants, dental implants, rhinoplasty, and bariatric surgery are all routinely performed on UK patients in Turkey at dramatically lower cost",
              "The P-Shot community on Reddit regularly discusses Turkey as the go-to destination for UK men",
              "Reputable Turkish clinics have English-speaking medical teams specifically for international patients",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
                <span className="text-blue-600 font-bold text-sm shrink-0">→</span>
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thing #6: The Free Consultation Exists Whether You Go Local or Abroad</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UK clinics often use the free or low-cost initial consultation as a funnel — you come in, feel invested, and it becomes harder to walk away. What most men don&apos;t realise is that reputable international clinics also offer free consultations, just via WhatsApp or video call.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can have a full medical assessment, ask every question, review the doctor&apos;s qualifications, and see real patient results — all before committing to a flight. The process is as thorough as any UK consultation, and you&apos;re under no obligation to book.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Price Comparison No UK Clinic Website Will Show You</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Total Cost</th>
                  <th className="px-4 py-3 font-semibold">Same Medical Outcome?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["London private clinic", "£1,200–£2,000", "Yes"],
                  ["Manchester / Birmingham UK clinic", "£900–£1,500", "Yes"],
                  ["Turkey (procedure only)", "£300", "Yes"],
                  ["Turkey (all-in with flights + hotel)", "£480–£600", "Yes"],
                ].map(([option, cost, outcome]) => (
                  <tr key={option} className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-900">{option}</td>
                    <td className="px-4 py-3 text-gray-700">{cost}</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">{outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400">
          <strong>Editorial note:</strong> We are a P-Shot clinic in Turkey. We have written this article because we believe patients deserve full information to make informed decisions. The claims above are based on publicly available pricing data and patient accounts. We encourage you to verify everything independently.
        </div>
      </div>

      <CtaBlock title="Get the Full Picture Before You Book Anywhere" subtitle="Free WhatsApp consultation. Transparent all-inclusive pricing. No surprises." />
    </div>
  );
}

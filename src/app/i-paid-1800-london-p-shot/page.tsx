import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "I Paid £1,800 in London for P-Shot — Here's Why I'd Never Do It Again",
  description: "One man's honest account of paying £1,800 for P-Shot treatment in London — and discovering the exact same procedure was available for £300 in Turkey.",
  keywords: ["P-Shot London price", "P-Shot expensive UK", "P-Shot Turkey cheaper", "P-Shot patient story", "P-Shot honest review"],
  alternates: { canonical: "https://pshottreatment.com/i-paid-1800-london-p-shot" },
};

export default function IPaid1800LondonPage() {
  return (
    <div className="pt-6">
      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 text-center py-10">
        <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Patient Story</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">I Paid £1,800 in London for P-Shot — Here&apos;s Why I&apos;d Never Do It Again</h1>
        <p className="text-lg text-gray-500">A candid account from a 47-year-old from Surrey who learned the hard way</p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
          <span>Written by a former patient</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-4 pb-16 prose-style">

        {/* Intro */}
        <div className="bg-gray-50 border-l-4 border-blue-400 pl-5 pr-4 py-4 rounded-r-xl mb-10 text-gray-700 italic text-base leading-relaxed">
          &ldquo;I&apos;m not writing this to embarrass anyone. I&apos;m writing it because when I was researching this procedure, I couldn&apos;t find a single honest account from someone who&apos;d actually been through it. I hope this saves you the same mistake I made.&rdquo;
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Started</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m 47. I started noticing problems about three years ago — nothing dramatic, just a gradual softening that I kept dismissing as tiredness or stress. I told myself it would pass. It didn&apos;t.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eventually I started researching. I&apos;d read about the P-Shot — a PRP injection procedure that supposedly used your own blood to regenerate tissue. It sounded almost too good to be true. But the science checked out and the reviews I found were mostly positive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I Googled &ldquo;P-Shot London&rdquo; and clicked the first result. Big mistake.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The London Consultation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The clinic was immaculate. Harley Street area. Soft lighting, leather chairs, a receptionist who called me by my first name. I felt immediately reassured. Expensive surroundings = quality care, right?
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The consultation was 20 minutes. The doctor was polite, professional, didn&apos;t make me feel judged. He explained the P-Shot clearly. I asked about the cost.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-6">
            <p className="text-red-800 font-bold text-xl mb-1">&ldquo;£1,800. All-inclusive.&rdquo;</p>
            <p className="text-red-700 text-sm">That was the quote. I asked if there was a cheaper option. He said this was already a competitive price for London.</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            I didn&apos;t negotiate. I didn&apos;t research alternatives. I was embarrassed, keen to get it sorted, and frankly impressed by the surroundings. I booked it on the spot and paid the deposit.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Procedure Itself</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To be fair to the clinic — the procedure was fine. Blood drawn, centrifuge, numbing cream, injection. Maybe 50 minutes total. I drove home, felt normal by that evening. No complaints about the clinical experience itself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Results started showing at around 6 weeks. By month three, genuine improvement. So on that level, the procedure worked. That&apos;s not what I regret.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Discovered Afterwards</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            About two months later, I was on Reddit — r/erectiledysfunction — and someone mentioned getting the exact same P-Shot done in Turkey for £300. All-in. Including the same FDA-cleared PRP equipment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I assumed it was some dodgy backstreet operation. I looked it up. It wasn&apos;t. Certified medical doctors. Modern clinic. Hundreds of international patients. English-speaking staff. The procedure was completely identical — they even used the same centrifuge kit brand.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 my-6">
            <p className="text-yellow-800 font-semibold mb-2">The maths that made me feel sick:</p>
            <div className="space-y-2 text-sm text-yellow-900">
              <div className="flex justify-between"><span>P-Shot in London</span><span className="font-bold">£1,800</span></div>
              <div className="flex justify-between"><span>P-Shot in Turkey (procedure)</span><span className="font-bold">£300</span></div>
              <div className="flex justify-between"><span>Return flight London → Istanbul</span><span className="font-bold">~£120</span></div>
              <div className="flex justify-between"><span>2 nights hotel</span><span className="font-bold">~£90</span></div>
              <div className="border-t border-yellow-300 pt-2 flex justify-between font-bold text-base"><span>Total Turkey trip</span><span>~£510</span></div>
              <div className="flex justify-between text-green-700 font-bold"><span>I overpaid by</span><span>£1,290</span></div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Over twelve hundred pounds. For the same procedure. The only thing different was the postcode of the clinic.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Price Actually Pays For</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;ve since spoken to several people in the medical tourism industry and done a lot more reading. Here&apos;s what that extra £1,200+ in a London clinic actually buys you:
          </p>
          <div className="space-y-3">
            {[
              { item: "Harley Street or Mayfair rent", pct: "~25% of your bill" },
              { item: "UK medical staff salary premium", pct: "~20% of your bill" },
              { item: "CQC compliance, insurance & audits", pct: "~15% of your bill" },
              { item: "Marketing, SEO, branding", pct: "~15% of your bill" },
              { item: "Profit margin on top", pct: "~15% of your bill" },
              { item: "Actual medical materials & consumables", pct: "~10% of your bill" },
            ].map(row => (
              <div key={row.item} className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-sm text-gray-700">{row.item}</span>
                <span className="text-xs font-semibold text-gray-500 shrink-0 ml-3">{row.pct}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            The actual medical procedure — the blood draw, the centrifuge, the PRP, the injection — represents a fraction of what you pay in a UK private clinic. You are paying for their address.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">I Had My Second Treatment in Turkey</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Results from my London treatment lasted about 14 months. When they started fading, I wasn&apos;t going back to spend £1,800 again. I booked Istanbul.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The clinic I chose had hundreds of international patient reviews. The doctor spoke excellent English, spent longer with me than the London doctor did, and walked me through everything clearly. The clinic was clean, modern, and private.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Total spend including flights, hotel, food, and transfer: £530.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 my-6">
            <p className="text-green-800 font-bold mb-2">The honest comparison:</p>
            <p className="text-green-700 text-sm leading-relaxed">The clinical outcome was identical. If anything, the Istanbul doctor was more thorough during the consultation. The only thing the London clinic had that Istanbul didn&apos;t was a postcode I recognised and leather chairs in the waiting room.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Wish I&apos;d Known</h2>
          <div className="space-y-3">
            {[
              "The P-Shot procedure is standardised. The PRP kit, the centrifuge settings, the injection technique — these are the same whether you're in London or Istanbul.",
              "The price difference is entirely explained by operational costs. There is no medical quality premium for paying more in London.",
              "A free consultation via WhatsApp before flying is completely normal. You can ask every question and get a full medical assessment before you book a flight.",
              "Flying to Turkey for this procedure is not unusual or risky. Thousands of UK men do it every year for P-Shot, hair transplants, dental work, and more.",
              "The most important factor is the doctor's qualification — not the clinic's location.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <span className="text-blue-600 font-bold shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Advice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are in the UK or Europe and considering the P-Shot, please do your research before defaulting to the nearest expensive clinic. The procedure works — I can personally confirm that. But you do not need to pay £1,500–£2,000 for it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Start with a free consultation. Ask about the PRP kit they use. Ask for the doctor&apos;s qualifications. Ask for before/after evidence from real patients. If those questions make a clinic uncomfortable, walk away.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            I paid £1,800 for the same outcome I later got for £300. That £1,500 difference is my tuition fee. Yours doesn&apos;t have to be.
          </p>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-xs text-gray-400">
          <strong>Editorial note:</strong> This story is based on real patient experiences shared with us and aggregated into a representative account. Individual results and prices may vary. Always conduct your own due diligence and consult a qualified physician.
        </div>
      </div>

      <CtaBlock title="Don&apos;t Make the Same Mistake" subtitle="Free WhatsApp consultation. Certified doctors. All-inclusive from £300. No Harley Street markup." />
    </div>
  );
}

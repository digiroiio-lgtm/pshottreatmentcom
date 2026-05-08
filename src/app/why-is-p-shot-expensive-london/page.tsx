import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Why Is P-Shot So Expensive in London? (And the Cheaper Alternative)",
  description: "P-Shot in London costs £1,200–£2,000. We explain exactly why UK prices are so high – and how to get the exact same treatment in Turkey from just £300.",
  keywords: ["P-Shot London price", "P-Shot UK cost", "P-Shot expensive London", "P-Shot cheaper alternative UK", "P-Shot Turkey vs London"],
  alternates: { canonical: "https://pshottreatment.com/why-is-p-shot-expensive-london" },
};

export default function WhyPShotExpensiveLondonPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Why Is P-Shot So Expensive in London?</h1>
        <p className="text-xl text-gray-500">Breaking down what you&apos;re actually paying for – and the alternative</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Price Reality</h2>
          <p className="text-gray-700 leading-relaxed">
            London P-Shot clinics charge between <strong>£1,200 and £2,000</strong> for the same procedure that costs <strong>£300 all-inclusive in Turkey</strong>. That is not a typo. The medical procedure is identical – same PRP centrifuge, same injection technique, same aftercare. So where does the extra £1,200 go?
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why London P-Shot Is So Expensive</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              reason: "Central London Clinic Overheads",
              detail: "A clinical space in Harley Street or Mayfair costs £5,000–£15,000 per month in rent alone. This is baked directly into your procedure price.",
              cost: "~£400 of your bill",
            },
            {
              reason: "UK Medical Staffing Costs",
              detail: "Doctors, nurses, and admin staff in the UK earn significantly more than equivalent professionals in Turkey. A session with a UK doctor alone costs the clinic £200–£400.",
              cost: "~£300 of your bill",
            },
            {
              reason: "UK VAT & Medical Regulation Compliance",
              detail: "CQC registration, insurance, compliance audits, and professional indemnity add hundreds of pounds to running costs per patient treated.",
              cost: "~£200 of your bill",
            },
            {
              reason: "Marketing & Brand Premium",
              detail: "London \"luxury\" clinics spend heavily on SEO, advertising, and brand positioning. That spend is recouped via higher patient fees.",
              cost: "~£200 of your bill",
            },
            {
              reason: "Actual Procedure Materials",
              detail: "The blood tubes, PRP centrifuge kit, syringes, numbing cream, and consumables cost roughly the same everywhere in the world.",
              cost: "~£80–£120 actual cost",
            },
          ].map(item => (
            <div key={item.reason} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{item.reason}</h3>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold shrink-0 ml-2">{item.cost}</span>
              </div>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">London vs Turkey: Cost Breakdown</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">London</th>
                <th className="px-4 py-3 font-semibold text-blue-700">Turkey (all-in)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["P-Shot procedure", "£1,200–£2,000", "£300"],
                ["Return flight from London", "—", "£80–£150"],
                ["2 nights hotel", "—", "£60–£120"],
                ["Total spend", "£1,200–£2,000", "£440–£570"],
                ["Saving vs London", "—", "Up to £1,500+"],
              ].map(([item, london, turkey]) => (
                <tr key={item} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{item}</td>
                  <td className="px-4 py-3 text-gray-600">{london}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">{turkey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is the Cheaper Price in Turkey Safe?</h2>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-4">
            Turkey&apos;s lower price is not because of lower medical standards. It is because of lower operational costs in a country with a fraction of UK overheads. Top Turkish clinics treating international patients use:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "FDA-cleared PRP centrifuge kits (same as UK clinics)",
              "Licensed, specialist-trained medical doctors",
              "International patient English-speaking support",
              "Same clinical protocols as Western European clinics",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Patients From the UK Say…</h2>
          <div className="space-y-4">
            {[
              { loc: "Manchester", quote: "I got quoted £1,700 in London. Flew to Turkey for £120 return. Paid £300 for the treatment. Saved over £1,200 and had a mini-break at the same time." },
              { loc: "Birmingham", quote: "The clinic was more professional than I expected. English-speaking doctor, thorough consultation. Wish I'd done it sooner instead of paying a London premium." },
            ].map(review => (
              <div key={review.loc} className="border-l-4 border-blue-300 pl-4">
                <p className="text-gray-700 italic text-sm">&ldquo;{review.quote}&rdquo;</p>
                <p className="text-xs text-gray-400 mt-1">— Patient from {review.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBlock title="Skip the London Premium – Get P-Shot for £300" subtitle="Same procedure. Certified doctors. All-inclusive. Free consultation on WhatsApp." />
    </div>
  );
}

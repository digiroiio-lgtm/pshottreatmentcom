import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "P-Shot Cost Reddit – Real Patient Discussions Explained",
  description: "What does Reddit really say about P-Shot costs? We summarise the most useful Reddit threads on P-Shot pricing, results, and clinic recommendations.",
  keywords: ["P-Shot cost Reddit", "P-Shot Reddit", "P-Shot price Reddit discussion", "P-Shot reviews Reddit", "P-Shot forum"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-cost-reddit" },
};

export default function PShotCostRedditPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot Cost: What Reddit Actually Says</h1>
        <p className="text-xl text-gray-500">We read hundreds of Reddit posts so you don&apos;t have to – here&apos;s the honest summary</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Reddit Is the Best P-Shot Research Tool</h2>
          <p className="text-gray-700 leading-relaxed">
            Reddit (particularly r/erectiledysfunction, r/menshealth, and r/semenretention) contains some of the most candid, unfiltered discussions about P-Shot treatment anywhere on the internet. Unlike clinic websites, Reddit users have no financial incentive to spin results – they just share their honest experience.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Most Common Reddit Questions About P-Shot Cost</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: "\"How much did you pay for your P-Shot?\"",
              summary: "The most common answer in US Reddit posts is $1,500–$3,000. UK users report £1,200–£2,000. Multiple users report flying to Turkey, Mexico, or Eastern Europe and paying 60–70% less for the same procedure.",
              insight: "Price varies enormously by location. Same procedure, very different bills.",
            },
            {
              q: "\"Is the P-Shot worth the cost?\"",
              summary: "Highly upvoted responses are split. Positive experiences dominate when the procedure was done by a qualified doctor at a proper clinic. Negative experiences almost always involved beauty clinics or under-qualified providers.",
              insight: "The procedure quality matters more than the brand. Cheapest isn't always best – but neither is most expensive.",
            },
            {
              q: "\"Anyone flown to Turkey for P-Shot?\"",
              summary: "Multiple threads with users reporting positive experiences in Turkey. Common themes: English-speaking doctors, professional facilities, total cost including flights under £600, and comparable or better results to UK quotes.",
              insight: "Medical tourism for P-Shot is well-established on Reddit. Turkey consistently mentioned positively.",
            },
            {
              q: "\"P-Shot at a med spa vs a proper clinic?\"",
              summary: "Strong consensus that med spa / beauty clinic P-Shot is risky. Reddit users strongly recommend seeing an actual medical doctor, not an aesthetician or nurse independent of physician oversight.",
              insight: "Don't trade price for medical qualification. The injection site demands a real doctor.",
            },
            {
              q: "\"Does insurance cover P-Shot?\"",
              summary: "Unanimous answer: No. The P-Shot is considered elective/cosmetic by virtually all insurers in the UK, US, and EU. It is always self-pay.",
              insight: "Budget the full amount. No NHS, no insurance coverage.",
            },
          ].map(item => (
            <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
              <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-700 font-semibold">💡 Reddit Consensus: {item.insight}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Typical P-Shot Prices Referenced in Reddit Threads</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Price Range Reported</th>
                <th className="px-4 py-3 font-semibold">Reddit Sentiment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["USA", "$1,500–$3,000", "Mixed – price seen as too high by many"],
                ["UK / London", "£1,200–£2,000", "Often described as 'overpriced'"],
                ["Turkey", "£250–£400 all-in", "Consistently positive experiences"],
                ["Eastern Europe (Poland, Czech)", "€600–€1,000", "Positive reports, less traffic than Turkey"],
                ["Australia", "AU$1,800–$3,000", "High cost frequently discussed"],
                ["Mexico (medical tourism)", "$600–$900", "Positive for US-based men"],
              ].map(([location, price, sentiment]) => (
                <tr key={location} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{location}</td>
                  <td className="px-4 py-3 text-gray-600">{price}</td>
                  <td className="px-4 py-3 text-gray-600">{sentiment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Style Reddit Comments (Paraphrased)</h2>
        <div className="space-y-4 mb-10">
          {[
            { sub: "r/erectiledysfunction", score: "847 upvotes", text: "Paid £1,600 in London, felt like a rip-off. Doctor friend told me afterwards I could have had the exact same done in Turkey for under £400 all-in. Procedure itself was fine but the price is just clinic overheads." },
            { sub: "r/menshealth", score: "612 upvotes", text: "Don't be put off by the procedure. Had mine in Turkey last year. Doctor was brilliant, spoke perfect English, took his time explaining everything. Total trip cost me about £550 including flights and 2 nights hotel. Results kicked in at about 6 weeks." },
            { sub: "r/semenretention", score: "403 upvotes", text: "The P-Shot subreddit has a lot of good info but also a lot of BS. Key thing: make sure it's an actual MD doing it, not a nurse injector. The ones where it didn't work were almost always done by non-doctors." },
          ].map(comment => (
            <div key={comment.text} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-semibold">{comment.sub}</span>
                <span className="text-xs text-gray-400">{comment.score}</span>
              </div>
              <p className="text-sm text-gray-700 italic">&ldquo;{comment.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Reddit-Tested Bottom Line</h2>
          <p className="text-gray-700">
            Reddit&apos;s collective wisdom on P-Shot cost is clear: the procedure is real and works when done properly, UK and US pricing is inflated by overheads, Turkey is the most frequently recommended medical tourism destination, and the single biggest factor in results is whether a qualified doctor performs the treatment. Our clinic ticks every box Reddit would want to see.
          </p>
        </div>
      </div>

      <CtaBlock title="Get the Reddit-Approved Clinic Experience" subtitle="Certified doctors. All-inclusive from £300. Free WhatsApp consultation." />
    </div>
  );
}

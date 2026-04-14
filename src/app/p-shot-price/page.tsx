import type { Metadata } from "next";
import PriceTable from "@/components/PriceTable";
import CtaBlock from "@/components/CtaBlock";
import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "P-Shot Price – £300 / €300 / $300 All-Inclusive",
  description:
    "P-Shot treatment costs just £300 / €300 / $300 at our certified clinic in Turkey. No hidden fees. Compare to UK prices of £1,200–£2,000.",
  keywords: ["P-Shot price", "P-Shot cost", "P-Shot cost UK", "how much does P-Shot cost", "P-Shot Turkey price"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-price" },
};

const priceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the P-Shot cost in Turkey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our P-Shot treatment in Turkey costs £300 / €300 / $300 all-inclusive. This covers the full consultation, PRP extraction, injection procedure, and aftercare support.",
      },
    },
    {
      "@type": "Question",
      name: "What does the £300 P-Shot price include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The £300 price includes: doctor consultation, PRP blood draw and centrifugation, the P-Shot injection procedure, medical aftercare instructions, and English-speaking medical staff support.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the P-Shot cheaper in Turkey than in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turkish private clinics have significantly lower operating costs (rent, staff, overheads) compared to UK clinics in London or major cities. The medical procedure and quality are the same — only the cost of running the clinic differs.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The £300 price is all-inclusive with no hidden fees. Optional extras such as airport transfers and hotel accommodation are quoted separately if needed.",
      },
    },
  ],
};

export default function PShotPricePage() {
  return (
    <>
    <JsonLd data={priceFaqSchema} />
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot Treatment Price</h1>
        <p className="text-xl text-gray-500">Fixed price. No surprises. All-inclusive.</p>
      </div>
      <PriceTable />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in the Price?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {["Doctor consultation", "PRP extraction and processing", "P-Shot injection procedure", "Medical aftercare instructions", "English-speaking medical staff", "Clinic accommodation"].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
              <span className="text-green-500 text-xl">✅</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Optional Add-ons (quoted separately)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            <li>Airport transfer (approx. £30 / €35 / $40)</li>
            <li>Hotel accommodation (from £60/night)</li>
            <li>City tour package</li>
          </ul>
        </div>

        {/* Internal links */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
          <h3 className="font-bold text-gray-900 mb-4">Learn More</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/p-shot-cost-uk" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Cost UK Guide
            </Link>
            <Link href="/p-shot-before-after" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Before & After Results
            </Link>
            <Link href="/blog/p-shot-vs-viagra" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot vs Viagra
            </Link>
          </div>
        </div>
      </div>
      <CtaBlock />
      <HowItWorks />
    </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PriceTable from "@/components/PriceTable";
import CtaBlock from "@/components/CtaBlock";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "P-Shot Price – £300 / €300 / $300 All-Inclusive",
  description: "P-Shot treatment costs just £300 / €300 / $300 at our certified clinic in Turkey. No hidden fees. Compare to UK prices of £1,200–£2,000.",
  keywords: ["P-Shot price", "P-Shot cost", "P-Shot cost UK", "how much does P-Shot cost"],
  alternates: { canonical: "https://pshottreatment.com/price" },
};

export default function PricePage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot Treatment Price</h1>
        <p className="text-xl text-gray-500">Fixed price. No surprises. All-inclusive.</p>
      </div>
      <PriceTable />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included in the Price?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {["Doctor consultation", "PRP extraction and processing", "P-Shot injection procedure", "Medical aftercare instructions", "English-speaking medical staff", "Clinic accommodation"].map(item => (
            <div key={item} className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
              <span className="text-green-500 text-xl">✅</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Comparing us against other clinics?</h3>
          <p className="text-sm text-gray-700 mb-2">
            Our{" "}
            <Link href="/guides/p-shot-cost" className="text-blue-700 underline underline-offset-2">
              P-Shot cost guide
            </Link>{" "}
            sets out published price ranges in the UK, US, EU and Turkey, explains why the gap is so wide,
            and gives you a checklist for comparing two quotes like for like.
          </p>
          <p className="text-sm text-gray-700">
            Before weighing cost, it is worth reading{" "}
            <Link href="/guides/does-the-p-shot-work" className="text-blue-700 underline underline-offset-2">
              what the clinical evidence actually shows
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">Optional Add-ons (quoted separately)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            <li>Airport transfer (approx. £30 / €35 / $40)</li>
            <li>Hotel accommodation (from £60/night)</li>
            <li>City tour package</li>
          </ul>
        </div>
      </div>
      <CtaBlock />
      <HowItWorks />
    </div>
  );
}

import PriceTable from "@/components/PriceTable";
import CtaBlock from "@/components/CtaBlock";
import HowItWorks from "@/components/HowItWorks";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { buildMetadata } from "@/lib/seo";
import { priceFaq } from "@/lib/faq";

export const metadata = buildMetadata("/price");

const trail = [
  { name: "Home", path: "/" },
  { name: "Price", path: "/price" },
];

const included = [
  "Doctor consultation",
  "PRP extraction and processing",
  "P-Shot injection procedure",
  "Medical aftercare instructions",
  "English-speaking medical staff",
  "Clinic accommodation on treatment day",
];

export default function PricePage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/price"
        breadcrumb={trail}
        offers
        faq={priceFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          P-Shot Treatment Price
        </h1>
        <p className="text-xl text-gray-700">
          Fixed price. No surprises. All-inclusive.
        </p>
      </div>

      <AnswerBlock>
        The P-Shot costs £300 / €300 / $300 all-inclusive at our clinic in
        Istanbul, with no separate consultation or facility fee. The same
        procedure typically costs £1,200–£2,000 in the UK, $1,500–$2,500 in the
        US and €1,000–€1,800 in the EU — a saving of roughly 70%.
      </AnswerBlock>

      <PriceTable />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What&apos;s Included in the Price?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4"
            >
              <span className="text-green-700 text-xl" aria-hidden="true">
                ✅
              </span>
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 mb-2">
            Optional Add-ons (quoted separately)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Airport transfer (approx. £30 / €35 / $40)</li>
            <li>Hotel accommodation (from £60/night)</li>
            <li>City tour package</li>
          </ul>
        </div>
      </div>

      <FaqSection items={priceFaq} title="Pricing Questions" id="price-faq" />
      <CtaBlock />
      <HowItWorks />
    </div>
  );
}

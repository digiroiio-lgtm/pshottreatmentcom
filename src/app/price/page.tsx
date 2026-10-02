import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import PriceTable from "@/components/PriceTable";
import Faq from "@/components/Faq";
import Link from "next/link";
import { getGeoContent } from "@/lib/geo-content";
import { costGuides } from "@/lib/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/price");
const trail = [{ name: "Home", path: "/" }, { name: "Price", path: "/price" }];

export default function Page() {
  return (
    <div className="pb-14">
      <JsonLd path="/price" breadcrumbs={trail} />
      <Breadcrumbs items={trail} />
      <header className="max-w-4xl mx-auto px-4 pt-10 pb-2"><p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">Cost</p><h1 className="text-4xl md:text-5xl font-extrabold mb-5">P-Shot Treatment Price</h1><p data-direct-answer className="text-xl text-gray-700 leading-relaxed">The site advertises a treatment fee of £300, €300 or $300 depending on the chosen billing currency. This is a first-party price, not a clinical recommendation or a live currency conversion, and the complete scope must be confirmed in writing.</p></header>
      <PriceTable />
      <div className="max-w-4xl mx-auto px-4 space-y-9">
        <section><h2 className="text-2xl font-bold mb-3">Confirm before paying</h2><ul className="space-y-3 text-gray-700">{[
          "The legal provider, treating clinician and facility address.",
          "Whether the fee covers one session or a course and the exact PRP protocol.",
          "What assessment, local anaesthetic, tests, medication and follow-up are included.",
          "Travel, hotel, transfer, card fees and complication care that remain separate.",
          "Cancellation and refund terms if the clinician decides treatment is unsuitable.",
        ].map((item) => <li key={item}>• {item}</li>)}</ul></section>
        <section><h2 className="text-2xl font-bold mb-3">Do not infer quality from price alone</h2><p className="text-gray-700 leading-relaxed">A higher price does not prove better outcomes, and a lower price does not prove that protocols or providers are equivalent. Compare itemised quotations, credentials, consent and follow-up. The possibility of no meaningful benefit belongs in the cost decision because PRP remains experimental for ED.</p></section>
        <Faq items={getGeoContent("/price")?.faqs ?? []} />
        <section aria-labelledby="cost-guides-heading"><h2 id="cost-guides-heading" className="text-2xl font-bold mb-4">Cost and travel guides</h2><ul className="grid sm:grid-cols-2 gap-3">{costGuides.map((guide) => <li key={guide.path}><Link href={guide.path} className="block border border-gray-200 rounded-xl p-4 font-semibold text-blue-800 hover:border-blue-400">{guide.label} →</Link></li>)}</ul></section>
      </div>
      <CtaBlock title="Request an Itemised Quote" subtitle="Ask for the clinician, protocol, inclusions, exclusions and refund terms in writing." />
    </div>
  );
}

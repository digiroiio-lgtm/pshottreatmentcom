import CtaBlock from "@/components/CtaBlock";
import HowItWorks from "@/components/HowItWorks";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { buildMetadata } from "@/lib/seo";
import { istanbulFaq } from "@/lib/faq";

export const metadata = buildMetadata("/istanbul");

const trail = [
  { name: "Home", path: "/" },
  { name: "P-Shot in Istanbul", path: "/istanbul" },
];

/**
 * Location page for "P-Shot Istanbul" / "P-Shot Turkey" intent.
 *
 * Because no street address is published, local visibility has to come from
 * service-area signals — travel logistics, origin markets, timing — rather than
 * a map listing. This page carries that content.
 */

const itinerary = [
  {
    stage: "Before you fly",
    detail:
      "Free WhatsApp consultation. The doctor reviews your medical history and current medication and confirms whether you are a suitable candidate. We agree a treatment date and send you what to bring.",
  },
  {
    stage: "Day 1 — arrival",
    detail:
      "Fly into Istanbul (IST or SAW). Airport transfer can be arranged as an optional add-on. Nothing clinical happens on arrival day; you rest.",
  },
  {
    stage: "Day 2 — treatment",
    detail:
      "In-person consultation, then the procedure: blood draw, PRP preparation, topical anaesthetic and injection. Roughly 45–60 minutes in clinic. You receive written aftercare and can fly home the same evening.",
  },
  {
    stage: "Day 3 — optional",
    detail:
      "Some patients prefer a second night before flying. There is no overnight hospital stay and no follow-up appointment required in Turkey.",
  },
];

const origins = [
  { region: "United Kingdom", note: "London, Manchester, Birmingham, Edinburgh — 3.5–4h direct" },
  { region: "Ireland", note: "Dublin — approx. 4h direct" },
  { region: "Germany, France, Netherlands, Belgium", note: "2.5–3.5h direct" },
  { region: "Spain, Italy", note: "3–3.5h direct" },
  { region: "Scandinavia", note: "3–4h direct" },
  { region: "United States & Canada", note: "Direct long-haul to IST from major hubs" },
];

export default function IstanbulPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/istanbul"
        breadcrumb={trail}
        offers
        faq={istanbulFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          P-Shot in Istanbul, Turkey
        </h1>
        <p className="text-xl text-gray-700">
          Travel, timing and what the trip actually involves.
        </p>
      </div>

      <div className="mb-10">
        <AnswerBlock>
          Having the P-Shot in Istanbul takes two nights for most patients:
          arrive on day one, consultation and treatment on day two, fly home
          that evening or the next morning. Treatment costs £300 / €300 / $300
          all-inclusive, there is no overnight hospital stay, and everything is
          conducted in English.
        </AnswerBlock>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          A typical trip, stage by stage
        </h2>
        <ol className="space-y-4 mb-12 list-none p-0">
          {itinerary.map((i, idx) => (
            <li key={i.stage} className="flex gap-4">
              <span
                aria-hidden="true"
                className="w-10 h-10 shrink-0 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold"
              >
                {idx + 1}
              </span>
              <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{i.stage}</h3>
                <p className="text-sm text-gray-700">{i.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Where our patients travel from
        </h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <caption className="sr-only">
              Flight times to Istanbul by region
            </caption>
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th scope="col" className="py-2 pr-4 font-semibold text-gray-800">
                  Region
                </th>
                <th scope="col" className="py-2 font-semibold text-gray-800">
                  Typical flight
                </th>
              </tr>
            </thead>
            <tbody>
              {origins.map((o) => (
                <tr key={o.region} className="border-b border-gray-200 last:border-0">
                  <th
                    scope="row"
                    className="py-2 pr-4 text-left font-medium text-gray-800 align-top"
                  >
                    {o.region}
                  </th>
                  <td className="py-2 text-gray-700">{o.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Why the price is lower in Turkey
          </h2>
          <p className="text-gray-800 leading-relaxed text-sm">
            The procedure, the PRP consumables and the technique are the same as
            in a UK or US clinic. What differs is the cost base: clinical
            salaries, facility rent, malpractice insurance and regulatory
            overheads are substantially lower in Turkey. That is the whole of
            the price difference — it is not a reduced or shortened treatment.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Clinic location
          </h2>
          <p className="text-sm text-gray-700">
            Our clinic is in Istanbul, Turkey. For patient privacy we confirm the
            exact address and directions on WhatsApp once your treatment date is
            agreed, rather than publishing it. Consultations, treatment and
            aftercare are all conducted in English.
          </p>
        </div>
      </div>

      <FaqSection
        items={istanbulFaq}
        title="Travel Questions"
        id="travel-faq"
      />
      <HowItWorks />
      <CtaBlock
        title="Planning Your Trip?"
        subtitle="Message us on WhatsApp and we'll help you pick dates and arrange transfer."
      />
    </div>
  );
}

import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import { buildMetadata } from "@/lib/seo";
import { beforeAfterFaq } from "@/lib/faq";

export const metadata = buildMetadata("/before-after");

const trail = [
  { name: "Home", path: "/" },
  { name: "Before & After", path: "/before-after" },
];

const phases = [
  {
    period: "2–4 weeks",
    desc: "Initial tissue regeneration begins. Some patients report early improvements.",
  },
  {
    period: "6–8 weeks",
    desc: "Most patients report noticeable improvement in firmness and sensitivity.",
  },
  {
    period: "3–6 months",
    desc: "Full effect generally reached. Many patients report lasting improvement for 12–18 months.",
  },
];

export default function BeforeAfterPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/before-after"
        breadcrumb={trail}
        faq={beforeAfterFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          P-Shot Before &amp; After Results
        </h1>
        <p className="text-xl text-gray-700">
          Patient results photographed at 4–12 weeks post-treatment.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <AnswerBlock>
          P-Shot results build gradually. Some patients notice early changes at
          2–4 weeks, most report a clear difference at 6–8 weeks, and the full
          effect is generally reached between 3 and 6 months as tissue
          regeneration completes. Results typically last 12–18 months and vary
          between individuals.
        </AnswerBlock>
        <MedicalReviewBadge path="/before-after" />
      </div>

      <BeforeAfterGrid />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            When do you see results?
          </h2>
          <ol className="grid md:grid-cols-3 gap-4 mt-4 list-none p-0">
            {phases.map((r) => (
              <li
                key={r.period}
                className="bg-white rounded-xl p-4 border border-blue-100"
              >
                <p className="font-bold text-blue-700 mb-1">{r.period}</p>
                <p className="text-sm text-gray-700">{r.desc}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          Images on this page are placeholders. Individual results vary and are
          not guaranteed; the timelines above are typical ranges reported by
          patients, not a promise of outcome.
        </p>
      </div>

      <FaqSection
        items={beforeAfterFaq}
        title="Questions About Results"
        id="results-faq"
      />
      <CtaBlock title="Ready to See Your Own Results?" />
    </div>
  );
}

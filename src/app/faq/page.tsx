import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import References, { references } from "@/components/References";
import { buildMetadata } from "@/lib/seo";
import { generalFaq } from "@/lib/faq";
import { keyFacts } from "@/lib/site-config";

export const metadata = buildMetadata("/faq");

const trail = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FaqPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/faq"
        breadcrumb={trail}
        offers
        faq={generalFaq}
        speakable={["h1", "[data-speakable]", "dt", "dd"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          P-Shot: Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-700">
          Direct answers on cost, pain, safety, results and travel.
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <AnswerBlock facts={keyFacts}>
          The P-Shot costs £300 / €300 / $300 all-inclusive at our clinic in
          Istanbul, takes about 45–60 minutes under topical anaesthetic only,
          and most patients resume normal activity the same day. Results
          typically appear between 2 and 8 weeks and last 12–18 months.
        </AnswerBlock>
        <MedicalReviewBadge path="/faq" />
      </div>

      <FaqSection items={generalFaq} title="All Questions" id="all-faq" />

      <References
        items={[
          references.prpReview,
          references.prpSafety,
          references.fdaPrp,
          references.nhsEd,
          references.auaEd,
        ]}
      />
      <CtaBlock
        title="Still Have a Question?"
        subtitle="Ask our medical coordinator directly on WhatsApp – free and no obligation."
      />
    </div>
  );
}

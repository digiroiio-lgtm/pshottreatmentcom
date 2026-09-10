import HeroSection from "@/components/HeroSection";
import PriceTable from "@/components/PriceTable";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import Testimonials from "@/components/Testimonials";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import FaqSection from "@/components/FaqSection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import References, { references } from "@/components/References";
import { buildMetadata } from "@/lib/seo";
import { homeFaq } from "@/lib/faq";
import { keyFacts } from "@/lib/site-config";

export const metadata = buildMetadata("/");

export default function HomePage() {
  return (
    <>
      <JsonLd
        path="/"
        offers
        faq={homeFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <HeroSection />

      <div className="pt-12 space-y-4">
        <AnswerBlock facts={keyFacts}>
          The P-Shot (Priapus Shot) is a non-surgical procedure in which
          platelet-rich plasma prepared from your own blood is injected into
          penile tissue to support blood flow, sensitivity and erectile
          function. At our clinic in Istanbul it costs £300 / €300 / $300
          all-inclusive, takes about 45–60 minutes, and most patients travel
          home within 48 hours.
        </AnswerBlock>
        <MedicalReviewBadge path="/" />
      </div>

      <PriceTable />
      <CtaBlock />
      <HowItWorks />
      <CtaBlock
        title="Ready to Book Your P-Shot?"
        subtitle="WhatsApp us now for a free consultation and to lock in your price."
      />
      <BeforeAfterGrid limit={4} />
      <Testimonials />
      <FaqSection items={homeFaq} title="P-Shot: Quick Answers" />
      <References
        items={[references.prpReview, references.nhsEd, references.fdaPrp]}
      />
      <CtaBlock
        title="Join 1000+ Satisfied Patients"
        subtitle="Same procedure as UK clinics. 70% cheaper. Same-day treatment."
      />
    </>
  );
}

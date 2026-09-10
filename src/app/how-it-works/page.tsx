import HowItWorks from "@/components/HowItWorks";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import References, { references } from "@/components/References";
import { buildMetadata } from "@/lib/seo";
import { howItWorksFaq } from "@/lib/faq";

export const metadata = buildMetadata("/how-it-works");

const trail = [
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
];

const steps = [
  {
    step: "1",
    title: "Blood Draw",
    desc: "A small amount of blood (approx. 30–50 ml) is drawn from your arm – similar to a standard blood test.",
  },
  {
    step: "2",
    title: "PRP Centrifugation",
    desc: "The blood is placed in a medical centrifuge to separate the platelet-rich plasma. This takes approximately 15 minutes.",
  },
  {
    step: "3",
    title: "Numbing Cream Applied",
    desc: "A topical anaesthetic cream is applied to the treatment area. This takes 20–30 minutes to take full effect.",
  },
  {
    step: "4",
    title: "PRP Injection",
    desc: "The concentrated PRP is carefully injected into targeted areas. The procedure itself takes approximately 20 minutes.",
  },
  {
    step: "5",
    title: "Aftercare Instructions",
    desc: "You receive full written and verbal aftercare instructions. Most patients resume normal activities the same day.",
  },
];

/**
 * "FDA-cleared PRP technology" was corrected here. The P-Shot procedure is not
 * FDA approved for erectile dysfunction; only the PRP separation devices are
 * FDA-cleared, and the procedure is an off-label use of PRP. Stating otherwise
 * on a YMYL page is both a factual error and a regulatory exposure.
 */
const benefits = [
  "Improved erectile function",
  "Increased sensitivity and sensation",
  "Enhanced sexual performance",
  "Natural tissue regeneration",
  "No surgery, minimal downtime",
  "Uses your own blood (no allergic risk)",
  "Results typically last 12–18 months",
  "Prepared using FDA-cleared PRP separation systems",
];

export default function HowItWorksPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/how-it-works"
        breadcrumb={trail}
        faq={howItWorksFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          How the P-Shot Works
        </h1>
        <p className="text-xl text-gray-700">
          The science, the process, and what to expect
        </p>
      </div>

      <div className="space-y-4 mb-10">
        <AnswerBlock>
          The P-Shot works in five stages: about 30–50 ml of blood is drawn,
          centrifuged for roughly 15 minutes to concentrate platelet-rich
          plasma, a topical anaesthetic is applied for 20–30 minutes, the PRP is
          injected over about 20 minutes, and written aftercare follows. Total
          time in clinic is roughly 45–60 minutes, with no sedation.
        </AnswerBlock>
        <MedicalReviewBadge path="/how-it-works" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            What is the P-Shot?
          </h2>
          <p className="text-gray-800 leading-relaxed">
            The P-Shot (Priapus Shot) is a regenerative medical procedure that
            uses Platelet-Rich Plasma (PRP) derived from your own blood to
            stimulate natural tissue growth, improve blood flow, and support
            sexual function. It is non-surgical, minimally invasive, and has
            been performed on many thousands of men worldwide.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          The Procedure Step by Step
        </h2>
        <ol className="space-y-6 mb-10 list-none p-0">
          {steps.map((s) => (
            <li key={s.step} className="flex gap-4">
              <span
                aria-hidden="true"
                className="w-12 h-12 shrink-0 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-lg"
              >
                {s.step}
              </span>
              <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">
                  Step {s.step}: {s.title}
                </h3>
                <p className="text-sm text-gray-700">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Reported Benefits of P-Shot Treatment
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-6 list-none p-0">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4"
            >
              <span className="text-green-700" aria-hidden="true">
                ✓
              </span>
              <span className="text-gray-800 font-medium text-sm">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <strong>Regulatory note:</strong> the P-Shot procedure is not FDA
          approved as a treatment for erectile dysfunction. The centrifuge
          systems used to prepare platelet-rich plasma are FDA-cleared medical
          devices, and the procedure is performed as an off-label use of PRP.
          Individual results vary and are not guaranteed.
        </p>
      </div>

      <HowItWorks />
      <FaqSection
        items={howItWorksFaq}
        title="Questions About the Procedure"
        id="procedure-faq"
      />
      <References
        items={[references.prpReview, references.fdaPrp, references.auaEd]}
      />
      <CtaBlock />
    </div>
  );
}

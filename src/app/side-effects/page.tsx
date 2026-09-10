import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import MedicalReviewBadge from "@/components/MedicalReviewBadge";
import References, { references } from "@/components/References";
import { buildMetadata } from "@/lib/seo";
import { sideEffectsFaq } from "@/lib/faq";

export const metadata = buildMetadata("/side-effects");

const trail = [
  { name: "Home", path: "/" },
  { name: "Side Effects", path: "/side-effects" },
];

const sideEffects = [
  {
    title: "Temporary Redness",
    desc: "Mild redness or swelling at the injection site is common and typically resolves within 24–48 hours.",
    severity: "Mild",
  },
  {
    title: "Minor Bruising",
    desc: "Some patients experience slight bruising at the injection area. This usually fades within 3–5 days.",
    severity: "Mild",
  },
  {
    title: "Temporary Sensitivity",
    desc: "Increased sensitivity is common and usually settles within 1–2 weeks.",
    severity: "Mild",
  },
  {
    title: "Discomfort During Procedure",
    desc: "A topical numbing cream is applied before treatment. Most patients describe mild discomfort only.",
    severity: "Minimal",
  },
];

const timeline = [
  {
    day: "Day 0 (Treatment Day)",
    info: "Procedure takes 45–60 minutes. Topical numbing applied. No sedation required.",
  },
  {
    day: "Days 1–3",
    info: "Possible mild swelling or tenderness. Normal daily activities can usually resume immediately.",
  },
  {
    day: "Week 1–2",
    info: "Most side effects fully resolved. Initial improvements may start to appear.",
  },
  {
    day: "Month 1–3",
    info: "Many patients report noticeable results as PRP stimulates tissue regeneration.",
  },
  {
    day: "Month 3–6",
    info: "Full effect generally reached. Results typically last 12–18 months, though this varies between patients.",
  },
];

const contraindications = [
  "Men with active infections or penile skin conditions",
  "Patients on blood thinners (requires individual assessment by the doctor)",
  "Men with certain blood disorders (platelet dysfunction)",
  "Anyone who has not completed a consultation with our doctor first",
];

export default function SideEffectsPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/side-effects"
        breadcrumb={trail}
        faq={sideEffectsFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Is the P-Shot Safe?
        </h1>
        <p className="text-xl text-gray-700">
          Understanding P-Shot side effects, risks, and recovery
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <AnswerBlock>
          The P-Shot has a favourable safety profile because the plasma is taken
          from your own blood, so allergic reaction and rejection risk is
          minimal. Reported side effects are usually mild and short-lived:
          redness or swelling for 24–48 hours, minor bruising for 3–5 days, and
          temporary sensitivity for 1–2 weeks.
        </AnswerBlock>
        <MedicalReviewBadge path="/side-effects" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            <span aria-hidden="true">✅</span> The Short Answer: the P-Shot has a
            strong safety record
          </h2>
          <p className="text-green-900">
            The P-Shot (Priapus Shot) uses your own blood plasma (PRP –
            Platelet-Rich Plasma), which means there is essentially no risk of
            allergic reaction or rejection. It has been performed on many
            thousands of men worldwide. As with any injection, there remains a
            small risk of bleeding, bruising or infection at the injection site.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common (Minor) Side Effects
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-8 list-none p-0">
          {sideEffects.map((s) => (
            <li
              key={s.title}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-gray-900">{s.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    s.severity === "Minimal"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-900"
                  }`}
                >
                  {s.severity}
                </span>
              </div>
              <p className="text-sm text-gray-700">{s.desc}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Recovery Timeline
        </h2>
        <ol className="space-y-4 mb-8 list-none p-0">
          {timeline.map((t) => (
            <li key={t.day} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="sm:w-36 shrink-0 text-sm font-bold text-blue-700">
                {t.day}
              </span>
              <span className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-800">
                {t.info}
              </span>
            </li>
          ))}
        </ol>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Who Should Not Get a P-Shot?
          </h2>
          <ul className="space-y-2 text-sm text-gray-800">
            {contraindications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5" aria-hidden="true">
                  ⚠️
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Medical Disclaimer
          </h2>
          <p className="text-sm text-gray-700">
            The information on this page is for educational purposes only and
            does not constitute medical advice. Timelines and outcomes described
            here are typical ranges, not guarantees, and vary between patients.
            Always consult a qualified medical professional before undergoing
            any procedure. Our doctors will perform a full assessment before
            your treatment.
          </p>
        </div>
      </div>

      <FaqSection
        items={sideEffectsFaq}
        title="Safety Questions"
        id="safety-faq"
      />
      <References
        items={[references.prpSafety, references.fdaPrp, references.nhsEd]}
      />
      <CtaBlock
        title="Have Questions About Safety?"
        subtitle="Our doctor will answer all your questions in a free WhatsApp consultation."
      />
    </div>
  );
}

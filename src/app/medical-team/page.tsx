import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { medicalReviewer } from "@/lib/site-config";

export const metadata = buildMetadata("/medical-team");

const trail = [
  { name: "Home", path: "/" },
  { name: "Medical Team", path: "/medical-team" },
];

const standards = [
  {
    title: "Doctor-led consultation before every treatment",
    detail:
      "No patient is treated without a prior consultation covering medical history, current medication and suitability. Patients who are not suitable candidates are declined.",
  },
  {
    title: "Autologous PRP only",
    detail:
      "Plasma is prepared from the patient's own blood during the same visit. Nothing is stored, pooled or sourced from a donor.",
  },
  {
    title: "Single-use sterile consumables",
    detail:
      "Needles, tubes and centrifuge consumables are single-use. PRP is prepared using FDA-cleared separation systems.",
  },
  {
    title: "Written aftercare",
    detail:
      "Every patient leaves with written aftercare instructions in English, plus a WhatsApp channel for post-treatment questions.",
  },
  {
    title: "Honest regulatory framing",
    detail:
      "Patients are told during consultation that the P-Shot is an off-label use of PRP and is not FDA approved for erectile dysfunction.",
  },
];

export default function MedicalTeamPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/medical-team"
        breadcrumb={trail}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Medical Team &amp; Clinical Standards
        </h1>
        <p className="text-xl text-gray-700">
          Who performs the treatment and the standards applied to it.
        </p>
      </div>

      <div className="mb-8">
        <AnswerBlock>
          P-Shot treatment at our clinic is performed by licensed physicians and
          preceded by a doctor-led consultation in every case. Plasma is prepared
          from the patient&apos;s own blood using FDA-cleared separation systems
          and single-use sterile consumables.
        </AnswerBlock>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-12 space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Treating clinicians
          </h2>
          {medicalReviewer ? (
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-900">
                {medicalReviewer.name}, {medicalReviewer.credential}
              </p>
              <p className="text-sm text-gray-700">
                {medicalReviewer.jobTitle}
              </p>
            </div>
          ) : (
            /* Named credentials are the strongest E-E-A-T signal a health site
               can carry. This block stays honest until real names are supplied
               in src/lib/site-config.ts — inventing a clinician would be worse
               than an acknowledged gap. */
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-sm text-gray-800 leading-relaxed">
                Named clinician profiles and registration numbers are not yet
                published on this page. Treatment is carried out by physicians
                licensed to practise in Turkey. If you would like the name and
                registration details of the doctor who would treat you, ask for
                them on WhatsApp before booking — we will provide them.
              </p>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Clinical standards
          </h2>
          <ul className="space-y-4 list-none p-0">
            {standards.map((s) => (
              <li
                key={s.title}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-700">{s.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Content review
          </h2>
          <p className="leading-relaxed">
            How the medical information on this site is written, sourced and
            dated is set out in our{" "}
            <Link
              href="/editorial-policy"
              className="text-blue-700 underline"
            >
              editorial policy
            </Link>
            . Nothing on this site is a substitute for a consultation — see the{" "}
            <Link
              href="/medical-disclaimer"
              className="text-blue-700 underline"
            >
              medical disclaimer
            </Link>
            .
          </p>
        </section>
      </div>

      <CtaBlock
        title="Want the Treating Doctor's Details?"
        subtitle="Ask on WhatsApp before you book — we will send them to you."
      />
    </div>
  );
}

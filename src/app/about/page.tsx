import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { openingHours, phoneE164 } from "@/lib/site-config";

export const metadata = buildMetadata("/about");

const trail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <div className="pt-2">
      <JsonLd path="/about" breadcrumb={trail} speakable={["h1", "[data-speakable]"]} />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About Our Clinic
        </h1>
        <p className="text-xl text-gray-700">
          Who we are, what we do, and what we do not claim.
        </p>
      </div>

      <div className="mb-8">
        <AnswerBlock>
          pshottreatment.com is the patient-facing site for a private clinic in
          Istanbul, Turkey offering P-Shot (PRP) treatment to international
          patients at a fixed all-inclusive price of £300 / €300 / $300.
          Enquiries and bookings are handled by an English-speaking medical
          coordinator over WhatsApp.
        </AnswerBlock>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-12 space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What we do</h2>
          <p className="leading-relaxed">
            We provide a single, focused service: P-Shot treatment using
            platelet-rich plasma prepared from the patient&apos;s own blood.
            Every patient completes a doctor consultation before treatment is
            confirmed, and patients who are not suitable candidates are told so
            rather than booked. Treatment takes place in one visit, with written
            aftercare provided before you leave.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How the price works
          </h2>
          <p className="leading-relaxed">
            The price is fixed at £300 / €300 / $300 and covers the
            consultation, PRP preparation, the procedure and aftercare
            instructions. It is the same for every patient regardless of
            nationality. Airport transfer, hotel and any city tour are separate
            optional add-ons, quoted before you commit. There is no commission
            structure and no upsell during treatment. See{" "}
            <Link href="/price" className="text-blue-700 underline">
              full pricing
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What we do not claim
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              We do not claim the P-Shot is FDA approved. It is not. The PRP
              separation devices used are FDA-cleared, and the procedure is an
              off-label use of PRP.
            </li>
            <li>
              We do not guarantee outcomes. The timelines published on this site
              are typical ranges reported by patients, not promises.
            </li>
            <li>
              We do not present patient testimonials as verified aggregate
              ratings, and we deliberately do not mark them up as structured
              review data.
            </li>
            <li>
              We do not offer medical advice through this website. Content here
              is general health information; the clinical decision is made in
              consultation with a doctor.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Privacy and address
          </h2>
          <p className="leading-relaxed">
            We do not publish the clinic&apos;s street address. Given the nature
            of the treatment, many patients prefer that the location is not
            publicly indexed alongside the procedure. The exact address and
            directions are confirmed on WhatsApp once a treatment date is
            agreed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How to reach a person
          </h2>
          <p className="leading-relaxed">
            WhatsApp {phoneE164}, {openingHours.opens}–{openingHours.closes}{" "}
            Istanbul time (UTC+3), seven days a week. A medical coordinator
            answers, not an automated system. See also our{" "}
            <Link href="/medical-team" className="text-blue-700 underline">
              medical team
            </Link>{" "}
            and{" "}
            <Link
              href="/editorial-policy"
              className="text-blue-700 underline"
            >
              editorial policy
            </Link>
            .
          </p>
        </section>
      </div>

      <CtaBlock />
    </div>
  );
}

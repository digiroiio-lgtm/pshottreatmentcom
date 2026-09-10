import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/terms");

export default function TermsPage() {
  return (
    <PolicyPage
      path="/terms"
      name="Terms of Use"
      heading="Terms of Use"
      intro="The terms governing your use of pshottreatment.com."
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Using this site
        </h2>
        <p>
          By using pshottreatment.com you accept these terms. The site is
          intended for adults aged 18 or over seeking information about P-Shot
          treatment. It is informational and promotional; it is not a booking
          system and does not take payment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Information, not advice
        </h2>
        <p>
          Content on this site is general health information and does not
          constitute medical advice — see the full{" "}
          <Link
            href="/medical-disclaimer"
            className="text-blue-700 underline"
          >
            medical disclaimer
          </Link>
          . Nothing here should be relied on in place of a consultation with a
          qualified clinician.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Pricing and availability
        </h2>
        <p>
          Prices shown are the all-inclusive treatment price at the time of
          publication and are quoted in GBP, EUR and USD. Optional add-ons such
          as transfer and accommodation are priced separately and confirmed
          before you commit. Prices and appointment availability may change; the
          price applicable to you is the one confirmed in writing on WhatsApp
          before treatment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          No guarantee of outcome
        </h2>
        <p>
          We do not warrant any particular clinical result. Results described on
          this site are typical ranges reported by patients, not commitments.
          Eligibility for treatment is determined by a clinician, and we may
          decline to treat where it would not be clinically appropriate.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          External links
        </h2>
        <p>
          This site links to third-party sources such as PubMed, the NHS, the
          FDA and the AUA for reference. We do not control those sites and are
          not responsible for their content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Limitation of liability
        </h2>
        <p>
          To the extent permitted by law, we are not liable for any loss arising
          from reliance on information on this website. Nothing in these terms
          limits liability for death or personal injury caused by negligence,
          for fraud, or any other liability that cannot lawfully be excluded —
          including your statutory rights as a consumer.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Governing law
        </h2>
        <p>
          These terms are governed by the laws of the Republic of Turkey.
          Nothing here removes protections you have under the mandatory consumer
          law of your own country of residence.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Placeholder notice
        </h2>
        <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          These terms are a template, not legal advice. Have them reviewed by a
          lawyer and add the operating entity&apos;s registered name,
          registration number and registered address before relying on them.
        </p>
      </section>
    </PolicyPage>
  );
}

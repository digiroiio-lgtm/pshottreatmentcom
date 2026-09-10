import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { phoneE164 } from "@/lib/site-config";

export const metadata = buildMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <PolicyPage
      path="/privacy"
      name="Privacy Policy"
      heading="Privacy Policy"
      intro="What this site collects, why, how long it is kept, and your rights."
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          What this website collects
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Analytics.</strong> We use Vercel Analytics and Vercel Speed
            Insights to count page views and measure loading performance. These
            are cookie-less and aggregate: they do not build a profile of you
            and do not track you across other websites.
          </li>
          <li>
            <strong>A currency preference.</strong> If you switch the displayed
            currency, that choice is stored in a first-party cookie named{" "}
            <code className="text-sm bg-gray-100 px-1 rounded">currency</code>{" "}
            for one year, so prices show correctly on your next visit. It
            contains only &ldquo;GBP&rdquo;, &ldquo;EUR&rdquo; or
            &ldquo;USD&rdquo;.
          </li>
          <li>
            <strong>Server logs.</strong> Our hosting provider records standard
            request data (IP address, user agent, timestamp) for security and
            abuse prevention.
          </li>
        </ul>
        <p className="mt-3">
          This website has no contact form, no account system and no payment
          processing. It does not collect your name, email address or any health
          information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          What happens when you message us on WhatsApp
        </h2>
        <p>
          All enquiries go through WhatsApp. When you message us, we receive your
          WhatsApp phone number, your display name and the content of your
          messages. If you describe symptoms, medication or medical history, that
          is <strong>special category health data</strong>, and you are choosing
          to share it with us in order to obtain a consultation — that consent is
          our lawful basis for processing it.
        </p>
        <p className="mt-3">
          WhatsApp is operated by Meta, not by us. Message transport is subject
          to WhatsApp&apos;s own privacy terms and its servers may be located
          outside your country. If you would rather not send health details over
          WhatsApp, say so and we will arrange to take that part of the
          conversation with the doctor in person or by phone.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Retention and sharing
        </h2>
        <p>
          Enquiry conversations are kept only as long as needed to answer you and
          to maintain a clinical record where treatment goes ahead, after which
          they are deleted in line with the clinic&apos;s medical record
          obligations under Turkish law. We do not sell your data, and we do not
          share it with advertisers or data brokers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          International transfers
        </h2>
        <p>
          The clinic is in Turkey. If you contact us from the UK or the EU, your
          enquiry data is transferred to Turkey, which is outside the UK and EEA.
          You are consenting to that transfer when you choose to message us.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Your rights</h2>
        <p>
          Depending on where you live, you have rights under UK GDPR, EU GDPR or
          Turkish KVKK to ask what data we hold about you, to have it corrected,
          to have it deleted, to withdraw consent, and to object to processing.
          To exercise any of these, message us on WhatsApp at {phoneE164} or use
          the{" "}
          <Link href="/contact" className="text-blue-700 underline">
            contact page
          </Link>
          . We will respond within one month.
        </p>
        <p className="mt-3">
          If you are unhappy with our response, you can complain to your data
          protection authority — the ICO in the UK, your national supervisory
          authority in the EU, or the KVKK in Turkey.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Placeholder notice
        </h2>
        <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          This policy describes the data flows implemented on this website
          accurately, but it is a template rather than legal advice. Before
          relying on it, have it reviewed by a lawyer in your jurisdiction and
          add the operating entity&apos;s registered name, registration number
          and data controller contact details.
        </p>
      </section>
    </PolicyPage>
  );
}

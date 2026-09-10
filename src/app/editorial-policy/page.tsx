import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/editorial-policy");

export default function EditorialPolicyPage() {
  return (
    <PolicyPage
      path="/editorial-policy"
      name="Editorial Policy"
      heading="Editorial and Medical Review Policy"
      intro="How the health information on this site is written, sourced, reviewed and dated."
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Scope</h2>
        <p>
          This policy covers every page on pshottreatment.com that describes the
          P-Shot procedure, its safety profile, its expected results or its
          regulatory status.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Sourcing</h2>
        <p>
          Clinical statements are drawn from peer-reviewed literature indexed in
          PubMed, from national health bodies (NHS, FDA) and from professional
          urology guidance (AUA). Pages carrying clinical claims list their
          sources at the foot of the page. Where the published evidence for PRP
          in erectile dysfunction is limited or mixed, we say so rather than
          overstating it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          What we will not publish
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Guaranteed outcomes. Timelines on this site are typical ranges
            reported by patients, explicitly labelled as such.
          </li>
          <li>
            A claim that the P-Shot is FDA approved. It is not; the PRP
            separation devices are FDA-cleared and the procedure is off-label
            use of PRP. This distinction is stated on every page that touches
            regulatory status.
          </li>
          <li>
            Aggregate rating or review structured data derived from testimonials
            we cannot independently verify.
          </li>
          <li>Before/after imagery without documented patient consent.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Review and dating
        </h2>
        <p>
          Each medical page carries a visible &ldquo;last updated&rdquo; date
          that matches the date published in the page&apos;s structured data.
          Where a named clinician has reviewed a page, that name and credential
          appear in the byline and in the page&apos;s{" "}
          <code className="text-sm bg-gray-100 px-1 rounded">reviewedBy</code>{" "}
          structured data. Where no named clinician has reviewed it, we show only
          the update date — we do not attribute content to a reviewer who has not
          read it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Corrections
        </h2>
        <p>
          If you believe something on this site is medically inaccurate, tell us
          on WhatsApp via the{" "}
          <Link href="/contact" className="text-blue-700 underline">
            contact page
          </Link>
          . Substantive corrections are made and the page&apos;s update date is
          revised.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Commercial disclosure
        </h2>
        <p>
          This site is operated by the clinic that provides the treatment it
          describes. It is commercial content: we have a financial interest in
          you booking. That is precisely why the limits above exist, and why
          every page directs you to a doctor&apos;s assessment rather than to a
          checkout.
        </p>
      </section>
    </PolicyPage>
  );
}

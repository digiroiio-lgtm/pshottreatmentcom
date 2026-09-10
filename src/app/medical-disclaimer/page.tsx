import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/medical-disclaimer");

export default function MedicalDisclaimerPage() {
  return (
    <PolicyPage
      path="/medical-disclaimer"
      name="Medical Disclaimer"
      heading="Medical Disclaimer"
      intro="This site provides general health information. It is not medical advice."
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Not medical advice
        </h2>
        <p>
          Everything on pshottreatment.com is published for general information
          and education. It is not a diagnosis, not a treatment recommendation
          for your situation, and not a substitute for consulting a qualified
          medical professional who has examined you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          No doctor–patient relationship
        </h2>
        <p>
          Reading this site, messaging us on WhatsApp, or requesting information
          does not create a doctor–patient relationship. That relationship
          begins only when a clinician formally accepts you as a patient after a
          consultation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Outcomes are not guaranteed
        </h2>
        <p>
          Results described on this site are typical ranges reported by
          patients. They are not guarantees. Individual outcomes depend on age,
          general health, smoking status, medication and underlying vascular or
          hormonal conditions. Some patients see little or no benefit.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Regulatory status
        </h2>
        <p>
          The P-Shot procedure is not approved by the FDA as a treatment for
          erectile dysfunction. The centrifuge systems used to prepare
          platelet-rich plasma are FDA-cleared medical devices; the procedure
          itself is an off-label use of PRP. Regulatory status differs by
          country.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Seek urgent care when appropriate
        </h2>
        <p>
          Erectile dysfunction can be an early sign of cardiovascular disease,
          diabetes or hormonal disorders. If you have new or worsening symptoms,
          see your own doctor for assessment before pursuing any cosmetic or
          regenerative procedure. If you experience severe pain, fever, spreading
          redness or discharge after any injection, seek medical attention
          immediately — do not wait to contact us.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
        <p>
          Questions about this disclaimer can be raised through the{" "}
          <Link href="/contact" className="text-blue-700 underline">
            contact page
          </Link>
          .
        </p>
      </section>
    </PolicyPage>
  );
}

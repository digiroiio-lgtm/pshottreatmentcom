import type { TreatmentId } from "@/content/types";
import { AssessmentButton, ConfidentialNote, WhatsAppCTA } from "./cta";

export default function ConfidentialAssessment({
  treatment = "not-sure",
  label = "Request a Confidential ED Assessment",
  placement = "bottom",
}: {
  treatment?: TreatmentId;
  label?: string;
  placement?: string;
}) {
  return (
    <section aria-labelledby="assessment-cta-heading" className="rounded-3xl bg-slate-950 text-white p-8 md:p-10">
      <h2 id="assessment-cta-heading" className="text-2xl md:text-3xl font-bold mb-3">Send your case for confidential review</h2>
      <p className="text-slate-200 max-w-2xl mb-6">
        You do not need to know which treatment you need. Share a few details and the clinic can advise which options may be relevant to your case.
      </p>
      <ul className="grid sm:grid-cols-3 gap-3 text-sm text-slate-200 mb-7">
        <li className="rounded-xl bg-white/10 p-4"><strong className="block text-white">1. Send your case</strong>About 2 minutes, private.</li>
        <li className="rounded-xl bg-white/10 p-4"><strong className="block text-white">2. Coordinator contacts you</strong>By WhatsApp, phone or email.</li>
        <li className="rounded-xl bg-white/10 p-4"><strong className="block text-white">3. Doctor assessment</strong>The urologist decides suitability.</li>
      </ul>
      <div className="flex flex-col sm:flex-row gap-3">
        <AssessmentButton label={label} treatment={treatment} placement={placement} variant="onDark" />
        <WhatsAppCTA treatment={treatment} placement={placement} variant="onDark" />
      </div>
      <ConfidentialNote className="text-slate-300 mt-4" />
    </section>
  );
}

import Link from "next/link";
import type { TreatmentId } from "@/content/types";
import { AssessmentButton } from "./cta";

const points = [
  ["Consultation process", "Start online. A coordinator contacts you."],
  ["Assessment before travelling", "Remote review of your history and reports."],
  ["What to send", "History, medicines, any blood test or Doppler results."],
  ["Treatment planning", "Evidence, risks and options explained first."],
  ["Travel timing", "Planned around your treatment plan."],
  ["Clinic location", "Antalya, Turkey."],
  ["Follow-up", "Written aftercare and a contact after you return home."],
  ["Patient coordination", "One coordinator for questions and logistics."],
];

export default function InternationalPatientCTA({ treatment = "not-sure", placement = "international" }: { treatment?: TreatmentId; placement?: string }) {
  return (
    <section aria-labelledby="intl-heading" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-800 mb-1">International patients</p>
      <h2 id="intl-heading" className="text-2xl font-bold text-slate-950 mb-2">Travelling to Antalya for ED Treatment</h2>
      <p className="text-slate-700 mb-5">The medical question comes first. You can be assessed remotely before deciding whether to travel.</p>
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm mb-6">
        {points.map(([term, text]) => (
          <div key={term}><dt className="font-semibold text-slate-950">{term}</dt><dd className="text-slate-700">{text}</dd></div>
        ))}
      </dl>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <AssessmentButton label="Send Your Case Before You Travel" treatment={treatment} placement={placement} />
        <Link href="/international-patients" className="text-teal-800 font-semibold underline underline-offset-2">How international assessment works</Link>
      </div>
    </section>
  );
}

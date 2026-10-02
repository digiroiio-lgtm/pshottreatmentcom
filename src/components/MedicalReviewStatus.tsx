import Link from "next/link";
import { CONTENT_REVIEW, DOCTOR } from "@/lib/clinic";

export default function MedicalReviewStatus({ modified }: { modified: string }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600 border-y border-slate-200 py-3">
      <span>Last updated: <time dateTime={modified}>{modified}</time></span>
      {CONTENT_REVIEW.reviewedByDoctor && CONTENT_REVIEW.reviewDate ? (
        <span>Medically reviewed by <Link href={DOCTOR.path} className="underline underline-offset-2 hover:text-teal-800">{DOCTOR.name}</Link> on <time dateTime={CONTENT_REVIEW.reviewDate}>{CONTENT_REVIEW.reviewDate}</time></span>
      ) : (
        <span>Educational information from UZ Clinic Antalya</span>
      )}
      <span>Not a diagnosis</span>
    </div>
  );
}

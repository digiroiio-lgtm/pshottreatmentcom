import Link from "next/link";
import { medicalReviewer, routeByPath } from "@/lib/site-config";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * Content provenance line for medical pages: who reviewed it and when.
 *
 * When no named clinician is configured (`medicalReviewer` is null) this shows
 * only the update date and links to the editorial policy. It never invents a
 * reviewer — a fabricated medical byline is worse than no byline, both for
 * E-E-A-T and for regulators.
 */
export default function MedicalReviewBadge({ path }: { path: string }) {
  const route = routeByPath(path);
  if (!route) return null;

  return (
    <p className="max-w-3xl mx-auto px-4 text-xs text-gray-600 flex flex-wrap items-center gap-x-2 gap-y-1">
      {medicalReviewer && (
        <span>
          Medically reviewed by{" "}
          <strong className="text-gray-700">
            {medicalReviewer.name}, {medicalReviewer.credential}
          </strong>{" "}
          ({medicalReviewer.jobTitle}) ·
        </span>
      )}
      <span>
        Last updated{" "}
        <time dateTime={route.modified}>{formatDate(route.modified)}</time>
      </span>
      <span aria-hidden="true">·</span>
      <Link href="/editorial-policy" className="text-blue-700 underline">
        How we review content
      </Link>
    </p>
  );
}

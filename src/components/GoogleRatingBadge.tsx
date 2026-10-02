import { CLINIC } from "@/lib/clinic";

/** Visible Google Business Profile rating. Deliberately no structured data (see CLINIC.googleRating). */
export default function GoogleRatingBadge({ className = "" }: { className?: string }) {
  const { value, count, asOf } = CLINIC.googleRating;
  const content = (
    <>
      <span aria-hidden="true" className="text-amber-500 tracking-tight">★★★★★</span>
      <span>
        <strong>Rated {value} on Google</strong> ({count} reviews, as of {asOf})
      </span>
    </>
  );
  const style = `inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-800 ${className}`;
  return CLINIC.mapUrl ? (
    <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer" data-google-rating className={`${style} hover:border-teal-600`}>{content}</a>
  ) : (
    <span data-google-rating className={style}>{content}</span>
  );
}

import { patientStories } from "@/content/patient-stories";
import { TREATMENT_LABEL } from "@/content/treatments";
import type { TreatmentId } from "@/content/types";

export default function PatientStories({ treatment, heading = "Patient experiences" }: { treatment?: TreatmentId; heading?: string }) {
  const stories = patientStories.filter((story) => story.consent && (!treatment || treatment === "not-sure" || story.treatment === treatment));
  if (!stories.length) return null;
  return (
    <section aria-labelledby={`stories-${treatment ?? "all"}`}>
      <h2 id={`stories-${treatment ?? "all"}`} className="text-2xl font-bold text-slate-950 mb-4">{heading}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {stories.map((story) => (
          <figure key={story.id} className="rounded-xl border border-slate-200 bg-white p-5">
            <blockquote className="text-slate-800 leading-relaxed">“{story.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-slate-600">
              {story.attribution} · {TREATMENT_LABEL[story.treatment]}{story.date ? ` · ${story.date}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="text-xs text-slate-600 mt-3">Individual experiences, shared with consent. They are not guarantees, and results vary between patients.</p>
    </section>
  );
}

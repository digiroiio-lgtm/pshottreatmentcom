import type { TreatmentId } from "./types";

export type PatientStoryData = {
  id: string;
  treatment: Exclude<TreatmentId, "not-sure">;
  quote: string;
  /** For example "Patient, United Kingdom". Use first names or initials only if the patient agreed. */
  attribution: string;
  date?: string;
  /** Must be true: the patient gave written permission and the quote is unedited in meaning. */
  consent: boolean;
};

// Add only genuine, consented patient experiences here (P-Shot, EdSWT, cellular therapy).
// Pages render this list automatically. Review/Rating schema is deliberately never emitted for self-published
// testimonials, because search engines treat them as ineligible and they can mislead.
export const patientStories: PatientStoryData[] = [];

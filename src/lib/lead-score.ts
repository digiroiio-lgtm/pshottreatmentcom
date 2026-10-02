import type { AssessmentPayload } from "@/content/assessment";

export type LeadTier = "Low Intent" | "Medium" | "High" | "Priority Lead";

export const tierFor = (score: number): LeadTier =>
  score >= 70 ? "Priority Lead" : score >= 50 ? "High" : score >= 30 ? "Medium" : "Low Intent";

/**
 * Internal lead score. Computed server-side and never shown to the patient.
 * Weights follow the project brief; "WhatsApp contact" is scored when WhatsApp is the preferred channel.
 */
export function scoreLead(payload: AssessmentPayload): { score: number; tier: LeadTier; reasons: string[] } {
  const reasons: string[] = [];
  let score = 0;
  const add = (points: number, reason: string) => {
    score += points;
    reasons.push(`+${points} ${reason}`);
  };

  add(20, "submitted assessment");
  if (payload.contactPref === "whatsapp") add(15, "WhatsApp contact");
  if (payload.interest && payload.interest !== "not-sure") add(10, "selected a specific treatment");
  // The 3-12 month band cannot be split at 6 months, so only 1 year or longer counts as ">6 months".
  if (payload.duration === "1-3y" || payload.duration === "3y+") add(10, "ED longer than 6 months");
  if (payload.using.some((u) => u === "sildenafil" || u === "tadalafil")) add(10, "previous PDE5 use");
  if (payload.helped === "failed") add(10, "previous ED treatment did not work");
  if (payload.travel === "3m") add(10, "ready to travel within 3 months");
  if (payload.country && !/^(turkey|türkiye|turkiye)$/i.test(payload.country.trim())) add(10, "international patient");
  if (payload.reports.includes("report")) add(5, "has medical report");
  if (payload.reports.includes("doppler")) add(5, "has Doppler result");

  return { score, tier: tierFor(score), reasons };
}

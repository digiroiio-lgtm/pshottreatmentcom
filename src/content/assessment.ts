// Shared by the assessment form (client), the API route and lead scoring.
export type Option = { value: string; label: string };

export const problemOptions: Option[] = [
  { value: "cannot-get", label: "I cannot get an erection" },
  { value: "cannot-maintain", label: "I cannot maintain an erection" },
  { value: "not-hard-enough", label: "My erection is not hard enough" },
  { value: "medication-stopped", label: "Medication no longer works" },
  { value: "reduced-sensitivity", label: "Reduced sensitivity" },
  { value: "venous-leak", label: "Venous leak diagnosed" },
  { value: "after-prostate-surgery", label: "ED after prostate surgery" },
  { value: "other", label: "Other" },
];

export const durationOptions: Option[] = [
  { value: "lt3m", label: "Less than 3 months" },
  { value: "3-12m", label: "3 to 12 months" },
  { value: "1-3y", label: "1 to 3 years" },
  { value: "3y+", label: "More than 3 years" },
];

export const usingOptions: Option[] = [
  { value: "sildenafil", label: "Sildenafil / Viagra" },
  { value: "tadalafil", label: "Tadalafil / Cialis" },
  { value: "injections", label: "Penile injections" },
  { value: "vacuum", label: "Vacuum device" },
  { value: "none", label: "No treatment" },
];

export const helpedOptions: Option[] = [
  { value: "worked", label: "They worked well enough" },
  { value: "partly", label: "They helped partly" },
  { value: "failed", label: "They did not help, or stopped working" },
  { value: "na", label: "Not applicable" },
];

export const historyOptions: Option[] = [
  { value: "diabetes", label: "Diabetes" },
  { value: "high-bp", label: "High blood pressure" },
  { value: "heart", label: "Heart disease" },
  { value: "prostate-surgery", label: "Prostate surgery" },
  { value: "pelvic-surgery", label: "Pelvic surgery" },
  { value: "peyronies", label: "Peyronie's disease" },
  { value: "none", label: "None" },
  { value: "other", label: "Other" },
];

export const interestOptions: Option[] = [
  { value: "p-shot", label: "P-Shot" },
  { value: "shockwave", label: "Shockwave Therapy" },
  { value: "stem-cell", label: "Stem Cell Therapy" },
  { value: "exosome", label: "Exosome Therapy" },
  { value: "not-sure", label: "Not sure / doctor recommendation" },
];

export const travelOptions: Option[] = [
  { value: "3m", label: "Within 3 months" },
  { value: "3-6m", label: "In 3 to 6 months" },
  { value: "researching", label: "Just researching" },
  { value: "local", label: "I live in Turkey" },
];

export const contactOptions: Option[] = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
];

export const reportOptions: Option[] = [
  { value: "report", label: "I have a recent medical report or blood tests" },
  { value: "doppler", label: "I have a penile Doppler result" },
];

export const labelOf = (options: Option[], value: string) => options.find((option) => option.value === value)?.label ?? value;

export type AssessmentPayload = {
  age: number;
  problem: string;
  duration: string;
  using: string[];
  helped: string;
  history: string[];
  historyOther: string;
  interest: string;
  country: string;
  travel: string;
  contactPref: string;
  reports: string[];
  name: string;
  whatsapp: string;
  email: string;
  consent: boolean;
  website: string; // honeypot
  startedAt: number;
  from: string;
  attribution: { source?: string; medium?: string; campaign?: string; landing_page?: string };
};

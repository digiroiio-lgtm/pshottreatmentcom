import type { EvidenceLabel, TreatmentId } from "./types";

export const TREATMENT_LABEL: Record<TreatmentId, string> = {
  "p-shot": "P-Shot",
  shockwave: "Shockwave",
  "stem-cell": "Stem Cell",
  exosome: "Exosome",
  rehabilitation: "Penile Rehabilitation",
  "not-sure": "Not Sure",
};

export type TreatmentCard = {
  id: Exclude<TreatmentId, "not-sure">;
  name: string;
  path: string;
  evidence: EvidenceLabel;
  evidenceNote: string;
  bestFor: string;
  howItWorks: string;
  format: string;
  assessment: string;
  cta: string;
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "p-shot",
    name: "P-Shot / PRP",
    path: "/p-shot",
    evidence: "Experimental",
    evidenceNote: "The 2026 EAU guideline limits PRP for ED to clinical-trial settings.",
    bestFor: "Selected men with organic ED who want to discuss an injection-based regenerative option after assessment.",
    howItWorks: "Platelet-rich plasma is prepared from your own blood and injected into penile tissue after numbing.",
    format: "Outpatient: blood draw, centrifuge preparation, local anaesthetic, injection.",
    assessment: "Yes. History and examination first, with Doppler ultrasound when indicated.",
    cta: "Am I Suitable for P-Shot?",
  },
  {
    id: "shockwave",
    name: "Shockwave Therapy (EdSWT)",
    path: "/shockwave-therapy-ed",
    evidence: "Emerging",
    evidenceNote: "The 2026 EAU guideline gives a weak recommendation for selected men with vasculogenic ED.",
    bestFor: "Blood-flow related (vasculogenic) ED, including some men who respond only partly to tablets.",
    howItWorks: "Low-intensity shockwaves are applied to the penis. The proposed aim is to support blood-flow related pathways.",
    format: "A course of non-injection sessions. The clinic protocol is 12 sessions: 6, a 3-week interval, then 6 more.",
    assessment: "Yes. Patient selection is central, and Doppler assessment is often useful.",
    cta: "Check Shockwave Therapy Suitability",
  },
  {
    id: "stem-cell",
    name: "Stem Cell Therapy",
    path: "/stem-cell-therapy-erectile-dysfunction",
    evidence: "Experimental",
    evidenceNote: "Evidence is insufficient for routine clinical use. Studies are small and varied.",
    bestFor: "Selected men for whom established options were unsuitable or ineffective, after specialist assessment.",
    howItWorks: "A cell-based preparation is injected into penile tissue with the aim of supporting tissue repair.",
    format: "Individualised. The source, preparation and procedure are explained at assessment, with written consent.",
    assessment: "Yes. Suitability and availability are confirmed by the urologist.",
    cta: "Check Stem Cell Suitability",
  },
  {
    id: "exosome",
    name: "Exosome Therapy",
    path: "/exosome-therapy-erectile-dysfunction",
    evidence: "Experimental",
    evidenceNote: "Mostly laboratory and animal research. Human evidence is very limited.",
    bestFor: "Men who want to ask whether an investigational regenerative option could be relevant to their case.",
    howItWorks: "Exosomes are tiny cell-released vesicles being studied for signalling that may support tissue repair.",
    format: "Availability and format are confirmed only after clinical evaluation.",
    assessment: "Yes. Treatment is considered only after specialist evaluation.",
    cta: "Check Exosome Therapy Suitability",
  },
  {
    id: "rehabilitation",
    name: "Penile Rehabilitation Programme",
    path: "/penile-rehabilitation",
    evidence: "Individualised",
    evidenceNote: "Components depend on the cause of ED and are chosen individually.",
    bestFor: "Men recovering erectile function after prostate surgery or injury, and men who want a structured plan.",
    howItWorks: "A stepwise plan that may combine medication, devices and other therapies according to the cause.",
    format: "A plan set after assessment, with follow-up. Components vary by patient.",
    assessment: "Yes. The plan is built from your assessment.",
    cta: "Ask About Penile Rehabilitation",
  },
];

export const treatmentFromPath = (path: string): TreatmentId => {
  const p = path.toLowerCase();
  if (p.includes("p-shot") || p.includes("prp")) return "p-shot";
  if (p.includes("shockwave") || p.includes("edswt") || p.includes("li-eswt")) return "shockwave";
  if (p.includes("stem-cell")) return "stem-cell";
  if (p.includes("exosome")) return "exosome";
  if (p.includes("rehabilitation")) return "rehabilitation";
  return "not-sure";
};

export const comparisonRows: { id: string; name: string; cells: string[] }[] = [
  {
    id: "p-shot",
    name: "P-Shot (PRP)",
    cells: [
      "Selected men with organic ED after assessment",
      "Minimally invasive (injection)",
      "Protocol varies; confirmed at assessment",
      "Usually short; instructions given by the clinician",
      "Injected platelet-rich plasma, proposed to support tissue repair",
      "Yes",
    ],
  },
  {
    id: "shockwave",
    name: "Shockwave / EdSWT",
    cells: [
      "Vasculogenic ED; some partial responders to tablets",
      "Non-invasive (no injection)",
      "Clinic protocol: 12 sessions over about 2 to 3 months",
      "No downtime expected for most men; confirmed by the clinic",
      "Low-intensity shockwaves, proposed to support blood-flow pathways",
      "Yes",
    ],
  },
  {
    id: "stem-cell",
    name: "Stem Cell",
    cells: [
      "Selected men when established options were unsuitable or ineffective",
      "Minimally invasive; may involve cell collection",
      "Individualised; explained at assessment",
      "Depends on the procedure; confirmed by the clinic",
      "Cell-based preparation, proposed to support tissue repair",
      "Yes",
    ],
  },
  {
    id: "exosome",
    name: "Exosome",
    cells: [
      "Men asking about an investigational option",
      "Minimally invasive if offered",
      "Not established; confirmed only if offered",
      "Confirmed if offered",
      "Cell-derived vesicles, proposed to support repair signalling",
      "Yes",
    ],
  },
  {
    id: "pde5",
    name: "PDE5 medication (e.g. sildenafil, tadalafil)",
    cells: [
      "Many men with ED, unless contraindicated (for example with nitrates)",
      "Non-invasive (tablet)",
      "Ongoing, as needed or daily depending on the medicine",
      "None",
      "Increases the blood-flow response to sexual stimulation",
      "Yes (prescription, with a health check)",
    ],
  },
  {
    id: "injections",
    name: "Penile injections (e.g. alprostadil)",
    cells: [
      "Men for whom tablets are unsuitable or ineffective",
      "Self-injection after training",
      "As needed before sex",
      "None",
      "Medicine injected into the penis to produce an erection",
      "Yes (training and dose setting)",
    ],
  },
  {
    id: "implant",
    name: "Penile implant",
    cells: [
      "Severe or refractory ED after other options",
      "Surgical",
      "One operation",
      "Surgical recovery; instructions given by the surgeon",
      "A device placed in the penis that allows an erection",
      "Yes (surgical assessment)",
    ],
  },
];

export const comparisonHeaders = [
  "Treatment",
  "Typical candidate",
  "Invasiveness",
  "Number of sessions",
  "Recovery",
  "Primary treatment concept",
  "Clinical assessment required",
];

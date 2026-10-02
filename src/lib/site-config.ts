export const SITE_URL = "https://pshottreatment.com";
export const SITE_NAME = "PShotTreatment.com";
export const WHATSAPP_NUMBER = "905353998999";
export const SITE_LOCALE = "en-GB";
export const SITE_DESCRIPTION =
  "Evidence-led information about P-Shot/PRP for erectile dysfunction, including limitations, risks, alternatives, price and assessment questions.";

// Add verified external profiles (e.g. Google Business Profile, LinkedIn) here only when they exist.
// Entries flow into Organization.sameAs automatically; an empty list omits the property.
export const SAME_AS: string[] = [];

export const whatsappUrl = (message = "Hi, I would like to ask about a P-Shot assessment") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type RouteRecord = {
  path: string;
  title: string;
  description: string;
  modified: string;
  priority: number;
  medical?: boolean;
  utility?: boolean;
};

// These dates are maintained manually. A deployment must never change them.
// Every route below was substantively audited or created on 2026-09-22.
export const AUDIT_DATE = "2026-09-22";
// Content was created or substantively rebuilt on the audit date; used for datePublished until per-route dates exist.
export const PUBLISHED_DATE = AUDIT_DATE;

export const routes: RouteRecord[] = [
  {
    path: "/",
    title: "P-Shot and PRP for ED: Evidence, Limits and Cost",
    description:
      "Evidence-led information about P-Shot/PRP for erectile dysfunction, including limitations, risks, alternatives, price and assessment questions.",
    modified: AUDIT_DATE,
    priority: 1,
    medical: true,
  },
  {
    path: "/how-it-works",
    title: "How P-Shot PRP Is Performed and What Evidence Shows",
    description:
      "How penile PRP is prepared and injected, the proposed mechanism, what clinical trials show and what remains uncertain.",
    modified: AUDIT_DATE,
    priority: 0.9,
    medical: true,
  },
  {
    path: "/side-effects",
    title: "P-Shot Side Effects, Risks and Safety Questions",
    description:
      "Common injection-related effects, less common risks, suitability questions and when to seek medical attention after penile PRP.",
    modified: AUDIT_DATE,
    priority: 0.9,
    medical: true,
  },
  {
    path: "/price",
    title: "P-Shot Price in Turkey: Treatment Fee and Inclusions",
    description:
      "The advertised P-Shot treatment fee, what it includes, optional travel costs and the questions to ask before comparing quotations.",
    modified: AUDIT_DATE,
    priority: 0.9,
  },
  {
    path: "/before-after",
    title: "P-Shot Results: Evidence, Timelines and Limitations",
    description:
      "What studies can and cannot show about P-Shot outcomes. No unverified before-and-after cases or guaranteed result timelines.",
    modified: AUDIT_DATE,
    priority: 0.7,
    medical: true,
  },
  {
    path: "/reviews",
    title: "P-Shot Reviews: How Patient Experiences Are Verified",
    description:
      "How to assess P-Shot reviews and why anonymous or unverified testimonials should not be treated as medical evidence.",
    modified: AUDIT_DATE,
    priority: 0.6,
  },
  {
    path: "/contact",
    title: "Request a P-Shot Suitability Assessment",
    description:
      "Contact the treatment coordination team on WhatsApp to ask about suitability, clinician credentials, written consent, price and aftercare.",
    modified: AUDIT_DATE,
    priority: 0.8,
  },
  {
    path: "/ed-knowledge-hub",
    title: "Erectile Dysfunction Knowledge Hub: Causes and Options",
    description:
      "A diagnosis-first guide to erectile dysfunction causes, assessment and evidence-based treatment options, including where experimental PRP fits.",
    modified: AUDIT_DATE,
    priority: 0.9,
    medical: true,
  },
  {
    path: "/ed-causes",
    title: "What Causes Erectile Dysfunction? A Diagnosis-First Guide",
    description:
      "Vascular, neurological, hormonal, medication-related and psychological contributors to erectile dysfunction and why assessment matters.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/diabetes-erectile-dysfunction",
    title: "Diabetes and Erectile Dysfunction: Assessment and Treatment",
    description:
      "How diabetes can affect erections, what should be assessed and which treatments are established versus experimental.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/post-finasteride-syndrome-ed",
    title: "Finasteride and Persistent Sexual Symptoms: What Is Known",
    description:
      "What regulators say about sexual symptoms that may persist after finasteride, what remains uncertain and when to seek medical help.",
    modified: AUDIT_DATE,
    priority: 0.7,
    medical: true,
  },
  {
    path: "/post-prostatectomy-ed",
    title: "Erectile Dysfunction After Prostate Surgery",
    description:
      "Why ED can occur after radical prostatectomy, what recovery depends on and which rehabilitation options have established evidence.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/testosterone-ed",
    title: "Low Testosterone and Erectile Dysfunction: When TRT Helps",
    description:
      "How testosterone deficiency is diagnosed, when testosterone therapy may help ED and why it is not a universal ED treatment.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/shockwave-therapy-ed",
    title: "Shockwave Therapy for ED: Evidence and Limitations",
    description:
      "What low-intensity shockwave therapy is, who guidelines say may be considered and why device type and evidence quality matter.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/prp-fix-erectile-dysfunction-naturally",
    title: "PRP for Erectile Dysfunction: Evidence and Limitations",
    description:
      "PRP has been studied for erectile dysfunction, but evidence remains inconsistent and current EAU guidance limits it to clinical trials.",
    modified: AUDIT_DATE,
    priority: 0.9,
    medical: true,
  },
  {
    path: "/p-shot-venous-leak-ed",
    title: "Can P-Shot Treat Venous Leak Erectile Dysfunction?",
    description:
      "There is no established evidence that P-Shot cures venogenic ED. Learn how suspected venous leak is assessed and what to discuss with a urologist.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/p-shot-vs-viagra",
    title: "P-Shot vs Viagra for Erectile Dysfunction",
    description:
      "PDE5 inhibitors are guideline-supported first-line ED therapy; PRP remains experimental. Compare evidence, use, risks and limitations.",
    modified: AUDIT_DATE,
    priority: 0.8,
    medical: true,
  },
  {
    path: "/prp-vs-stem-cell-erectile-dysfunction",
    title: "PRP vs Stem Cell Therapy for Erectile Dysfunction",
    description:
      "Both PRP and stem-cell approaches remain investigational for ED. Compare evidence gaps, uncertainty, regulation and questions to ask.",
    modified: AUDIT_DATE,
    priority: 0.7,
    medical: true,
  },
  {
    path: "/is-p-shot-worth-it",
    title: "Is the P-Shot Worth It? An Evidence-Based Decision Guide",
    description:
      "A balanced decision framework covering experimental status, uncertain benefit, cost, alternatives and informed consent.",
    modified: AUDIT_DATE,
    priority: 0.7,
    medical: true,
  },
  {
    path: "/p-shot-scam-or-legit",
    title: "P-Shot: Legitimate Procedure or Misleading Marketing?",
    description:
      "PRP is a real blood-derived product, but strong P-Shot outcome claims can exceed the evidence. Learn how to assess a provider and consent process.",
    modified: AUDIT_DATE,
    priority: 0.7,
    medical: true,
  },
  {
    path: "/best-p-shot-clinic-turkey",
    title: "How to Choose a P-Shot Provider in Turkey",
    description:
      "A safety-first checklist for verifying the treating clinician, clinic registration, protocol, consent, emergency plan and aftercare.",
    modified: AUDIT_DATE,
    priority: 0.7,
    medical: true,
  },
  {
    path: "/flying-to-turkey-ed-treatment",
    title: "Travelling to Turkey for ED Treatment: Planning Guide",
    description:
      "How to verify a provider, understand the treatment plan, arrange follow-up and account for travel risks before booking ED treatment abroad.",
    modified: AUDIT_DATE,
    priority: 0.7,
  },
  {
    path: "/flew-to-turkey-for-ed-treatment-reality",
    title: "ED Treatment in Turkey: Practical Travel and Safety Guide",
    description:
      "A practical, non-testimonial guide to treatment travel, consent, provider checks, aftercare and realistic planning.",
    modified: AUDIT_DATE,
    priority: 0.6,
  },
  {
    path: "/why-is-p-shot-expensive-london",
    title: "Why P-Shot Prices Vary Between London and Turkey",
    description:
      "P-Shot fees vary by provider, protocol, clinician time and included care. Compare itemised quotations rather than assuming procedures are identical.",
    modified: AUDIT_DATE,
    priority: 0.7,
  },
  {
    path: "/i-paid-1800-london-p-shot",
    title: "P-Shot Cost: Comparing a £1,800 Quote With Turkey",
    description:
      "A neutral cost-comparison framework for P-Shot quotations. This page does not present a fabricated first-person patient story.",
    modified: AUDIT_DATE,
    priority: 0.6,
  },
  {
    path: "/what-uk-clinics-dont-tell-you-p-shot-pricing",
    title: "P-Shot Pricing in the UK: What a Quote Should Explain",
    description:
      "Questions UK patients should ask about PRP preparation, clinician credentials, number of sessions, follow-up and refund terms.",
    modified: AUDIT_DATE,
    priority: 0.6,
  },
  {
    path: "/p-shot-cost-reddit",
    title: "P-Shot Cost Discussions on Reddit: How to Read Them",
    description:
      "Reddit posts can reveal common questions but are anecdotal, unverified and not medical or pricing evidence. Use this checklist before relying on them.",
    modified: AUDIT_DATE,
    priority: 0.6,
  },
  {
    path: "/about",
    title: "About PShotTreatment.com",
    description:
      "What this website covers, its commercial purpose, current provider-information limitations and how to request verification before booking.",
    modified: AUDIT_DATE,
    priority: 0.5,
    utility: true,
  },
  {
    path: "/editorial-policy",
    title: "Editorial Policy",
    description:
      "How medical topics are selected, sourced, written, corrected and separated from commercial content.",
    modified: AUDIT_DATE,
    priority: 0.4,
    utility: true,
  },
  {
    path: "/evidence-methodology",
    title: "Evidence Methodology",
    description:
      "How guidelines, systematic reviews, trials and clinic claims are ranked and how uncertainty is communicated.",
    modified: AUDIT_DATE,
    priority: 0.4,
    utility: true,
  },
];

export const routeByPath = (path: string) => routes.find((route) => route.path === path);

export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

export const ogImageUrl = (path: string) => `${SITE_URL}/og.png?path=${encodeURIComponent(path)}`;

// The root layout title template appends the brand; skip it when the result would exceed ~60 characters.
export const TITLE_MAX_LENGTH = 60;
export const brandedTitle = (title: string) => {
  const branded = `${title} | ${SITE_NAME}`;
  return branded.length <= TITLE_MAX_LENGTH ? branded : title;
};

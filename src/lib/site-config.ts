/**
 * Single source of truth for every SEO / schema / AI-visibility surface.
 *
 * Anything that appears in JSON-LD, metadata, robots.txt, sitemap.xml or llms.txt
 * is derived from this file. Change a fact here and it propagates everywhere,
 * so the machine-readable layer can never drift from the visible content.
 */

export const siteUrl = "https://pshottreatment.com";

export const siteName = "P-Shot Treatment";
export const legalName = "pshottreatment.com";

export const siteDescription =
  "P-Shot (Priapus Shot) PRP treatment at a certified clinic in Istanbul, Turkey for £300 / €300 / $300 all-inclusive — the same procedure UK and US clinics charge £1,200–£2,500 for.";

/** WhatsApp is the only contact channel. E.164 for schema, wa.me for links. */
export const phoneE164 = "+905353998999";
export const whatsappNumber = "905353998999";

export const whatsappUrl = (
  message = "Hi, I'm interested in the P-Shot treatment",
) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Country/city level only — no street address is published. */
export const addressLocality = "Istanbul";
export const addressCountry = "TR";
export const timezone = "Europe/Istanbul";

/** Markets we actively serve. Drives schema `areaServed` and content targeting. */
export const areaServed = [
  "GB",
  "IE",
  "US",
  "CA",
  "DE",
  "FR",
  "ES",
  "IT",
  "NL",
  "BE",
  "AT",
  "CH",
  "SE",
  "NO",
  "DK",
  "PL",
] as const;

export const openingHours = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "08:00",
  closes: "22:00",
} as const;

export const prices = [
  { currency: "GBP", symbol: "£", amount: "300" },
  { currency: "EUR", symbol: "€", amount: "300" },
  { currency: "USD", symbol: "$", amount: "300" },
] as const;

/** How long the advertised price is guaranteed. Required by Offer schema. */
export const priceValidUntil = "2026-12-31";

export const sameAs: string[] = [
  "https://pshotnearme.com",
  // TODO: add Google Business Profile / social profile URLs here when available.
];

/**
 * Medical reviewer. Intentionally nullable: we do NOT emit `reviewedBy` in
 * schema or a byline in the UI until a real, named clinician is filled in.
 * Attributing medical content to an invented person is an E-E-A-T and
 * regulatory risk, not a shortcut.
 */
export const medicalReviewer: {
  name: string;
  jobTitle: string;
  credential: string;
  url?: string;
} | null = null;
// Example once known:
// { name: "Dr Jane Doe", jobTitle: "Consultant Urologist", credential: "MD, FEBU" }

export const organizationId = `${siteUrl}/#organization`;
export const clinicId = `${siteUrl}/#clinic`;
export const websiteId = `${siteUrl}/#website`;
export const procedureId = `${siteUrl}/#p-shot`;
export const serviceId = `${siteUrl}/#p-shot-service`;

export type RouteMeta = {
  path: string;
  title: string;
  /** Short, entity-dense description used for metadata AND llms.txt. */
  summary: string;
  /** Real content dates — never `new Date()`, which fakes freshness. */
  published: string;
  modified: string;
  /** Set for pages carrying medical claims; drives MedicalWebPage + review badge. */
  medical?: boolean;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /** Legal/utility pages stay in the sitemap but are low priority. */
  utility?: boolean;
};

const LAST_REVIEW = "2026-09-07";

export const routes: RouteMeta[] = [
  {
    path: "/",
    title: "P-Shot Treatment – £300 All-Inclusive | Certified Clinic Turkey",
    summary:
      "P-Shot (Priapus Shot) PRP treatment for £300 / €300 / $300 all-inclusive at a certified clinic in Istanbul. Same-day procedure, roughly 70% below typical UK and US pricing.",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    medical: true,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/price",
    title: "P-Shot Price – £300 / €300 / $300 All-Inclusive",
    summary:
      "Full P-Shot cost breakdown: £300 / €300 / $300 all-inclusive, what the price covers, optional add-ons, and how it compares with UK (£1,200–£2,000), US ($1,500–$2,500) and EU (€1,000–€1,800) clinics.",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/how-it-works",
    title: "How the P-Shot Works – Procedure & Process Explained",
    summary:
      "Step-by-step P-Shot procedure: blood draw, PRP centrifugation, topical anaesthetic, injection and aftercare. Total clinic time is about 45–60 minutes.",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    medical: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/side-effects",
    title: "P-Shot Side Effects – Is the P-Shot Safe?",
    summary:
      "P-Shot safety profile, common minor side effects (redness, bruising, temporary sensitivity), recovery timeline and contraindications. PRP is autologous, so allergic reaction risk is minimal.",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    medical: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/faq",
    title: "P-Shot FAQ – Cost, Pain, Results and Safety Answered",
    summary:
      "Direct answers to the most common P-Shot questions: what it costs, whether it hurts, how long results last, how soon results appear, and who is not a candidate.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    medical: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/before-after",
    title: "P-Shot Before and After Results – What to Expect",
    summary:
      "P-Shot results timeline: initial tissue response at 2–4 weeks, noticeable change at 6–8 weeks, full effect at 3–6 months, typically lasting 12–18 months. Outcomes vary between patients.",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    medical: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/istanbul",
    title: "P-Shot in Istanbul, Turkey – Travel, Timing and Logistics",
    summary:
      "Practical guide to having the P-Shot in Istanbul: 48-hour trip structure, airport transfer, which countries patients travel from, and why treatment in Turkey costs less.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/reviews",
    title: "P-Shot Patient Reviews and Experiences",
    summary:
      "Patient-submitted accounts of P-Shot treatment from the UK, US and EU, covering cost comparison, travel experience and outcomes. Individual experiences; results vary.",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    title: "Contact Us – Free P-Shot Consultation on WhatsApp",
    summary:
      "Free, no-obligation P-Shot consultation via WhatsApp. English-speaking medical coordinator, 7 days a week, 08:00–22:00 Istanbul time (UTC+3).",
    published: "2025-01-15",
    modified: LAST_REVIEW,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    title: "About Our Clinic – Who We Are",
    summary:
      "Who operates pshottreatment.com, how the clinic works, what we do and do not claim, and how to reach a human being.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/medical-team",
    title: "Medical Team and Clinical Standards",
    summary:
      "The clinicians who perform and review P-Shot treatment, their qualifications, and the clinical standards applied to every procedure.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/editorial-policy",
    title: "Editorial and Medical Review Policy",
    summary:
      "How medical content on this site is written, sourced, reviewed and dated, and how to report an inaccuracy.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.4,
    changeFrequency: "yearly",
    utility: true,
  },
  {
    path: "/medical-disclaimer",
    title: "Medical Disclaimer",
    summary:
      "This site provides general health information, not medical advice. No doctor–patient relationship is formed by using it.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.3,
    changeFrequency: "yearly",
    utility: true,
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    summary:
      "What data this site collects, why, how long it is kept, and your rights under UK GDPR, EU GDPR and Turkish KVKK.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.3,
    changeFrequency: "yearly",
    utility: true,
  },
  {
    path: "/terms",
    title: "Terms of Use",
    summary:
      "The terms governing use of pshottreatment.com, including limits of liability and the scope of information provided.",
    published: "2026-09-07",
    modified: LAST_REVIEW,
    priority: 0.3,
    changeFrequency: "yearly",
    utility: true,
  },
];

export const routeByPath = (path: string): RouteMeta | undefined =>
  routes.find((r) => r.path === path);

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path: string): string =>
  path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;

/**
 * Key facts reused by the homepage fact table, llms.txt and schema.
 * Keeping one list means the visible answer and the machine answer agree.
 */
export const keyFacts: { label: string; value: string }[] = [
  { label: "Treatment", value: "P-Shot (Priapus Shot), PRP injection" },
  { label: "Price", value: "£300 / €300 / $300, all-inclusive" },
  { label: "Location", value: "Istanbul, Turkey" },
  { label: "Time in clinic", value: "Approximately 45–60 minutes" },
  { label: "Anaesthetic", value: "Topical numbing cream only, no sedation" },
  { label: "Downtime", value: "Most patients resume normal activity same day" },
  { label: "First results", value: "Typically 2–8 weeks" },
  { label: "Duration of effect", value: "Typically 12–18 months" },
  { label: "Consultation", value: "Free, via WhatsApp, before any booking" },
];

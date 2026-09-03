export type ContentType = "guide" | "blog";

export interface ContentEntry {
  type: ContentType;
  slug: string;
  /** SEO <title> (without the site-name template suffix). */
  title: string;
  /** Single page H1. */
  h1: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** One-line summary used on hub pages and related-content cards. */
  summary: string;
  updated: string;
  /** Slugs of related content, in `guide:slug` / `blog:slug` form, plus site paths. */
  related: string[];
}

export const GUIDES: ContentEntry[] = [
  {
    type: "guide",
    slug: "p-shot-cost",
    title: "P-Shot Cost 2026: UK, US, EU & Turkey Prices Compared",
    h1: "P-Shot Cost: UK, US, EU and Turkey Prices Compared",
    description:
      "What the P-Shot costs in 2026: UK, US, EU and Turkey prices compared, what a quote should include, and the hidden costs to check before you book.",
    primaryKeyword: "p-shot cost",
    secondaryKeywords: [
      "p-shot price uk",
      "how much does the p-shot cost",
      "priapus shot price",
      "p-shot cost turkey",
      "p-shot price comparison",
      "is the p-shot covered by insurance",
    ],
    summary:
      "Real price ranges for the P-Shot in the UK, US, EU and Turkey, what a quote should include, and the hidden costs that change the total.",
    updated: "2026-09-03",
    related: ["guide:p-shot-turkey", "guide:does-the-p-shot-work", "blog:how-long-does-the-p-shot-last", "/price"],
  },
  {
    type: "guide",
    slug: "does-the-p-shot-work",
    title: "Does the P-Shot Work? What the Evidence Shows",
    h1: "Does the P-Shot Work? An Honest Look at the Evidence",
    description:
      "An evidence-based look at whether the P-Shot works for ED: what the randomised trials found, why results conflict, and what regulators actually say.",
    primaryKeyword: "does the p-shot work",
    secondaryKeywords: [
      "p-shot success rate",
      "is the p-shot legit",
      "prp erectile dysfunction evidence",
      "p-shot clinical trials",
      "is the p-shot fda approved",
      "p-shot results realistic",
    ],
    summary:
      "What the randomised controlled trials on PRP for erectile dysfunction actually found — including the ones with negative results — and what that means for you.",
    updated: "2026-09-03",
    related: ["guide:p-shot-cost", "blog:p-shot-vs-shockwave-therapy", "blog:p-shot-vs-viagra", "/side-effects"],
  },
  {
    type: "guide",
    slug: "p-shot-turkey",
    title: "P-Shot in Turkey: Cost, Clinics, Safety & Travel",
    h1: "Getting the P-Shot in Turkey: A Patient's Guide",
    description:
      "Having the P-Shot in Turkey: how many days you need, how to vet a clinic, what it costs, aftercare once you fly home, and the red flags to avoid.",
    primaryKeyword: "p-shot turkey",
    secondaryKeywords: [
      "p-shot istanbul",
      "p-shot turkey cost",
      "how many days in turkey for a p-shot",
      "is the p-shot safe in turkey",
      "how to choose a p-shot clinic in turkey",
      "p-shot medical tourism",
    ],
    summary:
      "Trip length, clinic vetting questions, regulation, aftercare once you fly home, and the red flags that should stop you booking.",
    updated: "2026-09-03",
    related: ["guide:p-shot-cost", "guide:does-the-p-shot-work", "blog:how-long-does-the-p-shot-last", "/how-it-works"],
  },
];

export const POSTS: ContentEntry[] = [
  {
    type: "blog",
    slug: "how-long-does-the-p-shot-last",
    title: "How Long Does the P-Shot Last? Results Timeline",
    h1: "How Long Does the P-Shot Last?",
    description:
      "How long P-Shot results last, when improvements appear, and why the commonly quoted 12-18 months sits beyond the published trial follow-up period.",
    primaryKeyword: "how long does the p-shot last",
    secondaryKeywords: [
      "p-shot results timeline",
      "how often do you need a p-shot",
      "p-shot repeat treatment",
      "when do p-shot results start",
      "is the p-shot permanent",
    ],
    summary:
      "What the trial follow-up data supports, what clinics typically quote, and why those two numbers are not the same thing.",
    updated: "2026-09-03",
    related: ["guide:does-the-p-shot-work", "guide:p-shot-cost", "/side-effects"],
  },
  {
    type: "blog",
    slug: "p-shot-vs-shockwave-therapy",
    title: "P-Shot vs Shockwave Therapy for ED: How They Compare",
    h1: "P-Shot vs Shockwave Therapy: Which ED Treatment Is Right for You?",
    description:
      "P-Shot and low-intensity shockwave therapy compared for ED: mechanism, sessions, evidence quality, cost, downtime and who each option suits.",
    primaryKeyword: "p-shot vs shockwave therapy",
    secondaryKeywords: [
      "prp vs shockwave ed",
      "liswt vs p-shot",
      "shockwave therapy erectile dysfunction",
      "best regenerative ed treatment",
      "p-shot or shockwave",
    ],
    summary:
      "A side-by-side comparison of the two main regenerative ED treatments, including where the evidence is stronger and where it is weaker.",
    updated: "2026-09-03",
    related: ["guide:does-the-p-shot-work", "blog:p-shot-vs-viagra", "guide:p-shot-cost"],
  },
  {
    type: "blog",
    slug: "p-shot-vs-viagra",
    title: "P-Shot vs Viagra: PRP Injection vs ED Tablets",
    h1: "P-Shot vs Viagra: How Do They Actually Compare?",
    description:
      "P-Shot compared with Viagra and other PDE5 inhibitors: how each works, evidence strength, cost over time, and why they are not real alternatives.",
    primaryKeyword: "p-shot vs viagra",
    secondaryKeywords: [
      "p-shot vs pde5 inhibitors",
      "p-shot instead of viagra",
      "can you take viagra after a p-shot",
      "p-shot or tablets for ed",
      "sildenafil vs prp",
    ],
    summary:
      "Tablets and PRP injections sit at different points in ED treatment. Here is how they compare on evidence, cost and practicality.",
    updated: "2026-09-03",
    related: ["guide:does-the-p-shot-work", "blog:p-shot-vs-shockwave-therapy", "/side-effects"],
  },
];

export const ALL_CONTENT: ContentEntry[] = [...GUIDES, ...POSTS];

export function pathFor(entry: ContentEntry): string {
  return entry.type === "guide" ? `/guides/${entry.slug}` : `/blog/${entry.slug}`;
}

export function findEntry(ref: string): ContentEntry | undefined {
  const [type, slug] = ref.split(":");
  return ALL_CONTENT.find((e) => e.type === type && e.slug === slug);
}

/** Static site pages that are not guides or blog posts. */
export const STATIC_PAGES = [
  { path: "/", label: "Home" },
  { path: "/price", label: "P-Shot Price" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/before-after", label: "Before & After" },
  { path: "/reviews", label: "Reviews" },
  { path: "/side-effects", label: "Side Effects & Safety" },
  { path: "/guides", label: "Guides" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export function labelForPath(path: string): string {
  const staticPage = STATIC_PAGES.find((p) => p.path === path);
  if (staticPage) return staticPage.label;
  const entry = ALL_CONTENT.find((e) => pathFor(e) === path);
  return entry ? entry.h1 : path;
}

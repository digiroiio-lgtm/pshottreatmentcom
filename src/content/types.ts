export type TreatmentId = "p-shot" | "shockwave" | "stem-cell" | "exosome" | "rehabilitation" | "not-sure";

export type EvidenceLabel = "Established" | "Emerging" | "Experimental" | "Individualised" | "Mixed";

export type FaqItem = { q: string; a: string };

export type Block =
  | { type: "text"; heading?: string; id?: string; paragraphs?: string[]; bullets?: string[]; note?: string }
  | { type: "cards"; heading: string; id?: string; intro?: string; cols?: 2 | 3; cards: { id?: string; title: string; text: string; href?: string }[] }
  | { type: "table"; heading: string; id?: string; intro?: string; caption: string; headers: string[]; rows: string[][]; note?: string }
  | { type: "steps"; heading: string; id?: string; intro?: string; steps: { title: string; text: string }[] }
  | { type: "callout"; tone: "info" | "caution" | "evidence"; title: string; text: string }
  | { type: "cta"; title: string; text: string; label: string; whatsapp?: boolean }
  | { type: "checker"; heading?: string }
  | { type: "doctor" }
  | { type: "comparison"; heading?: string; intro?: string; highlight?: string[] }
  | { type: "stories"; heading?: string }
  | { type: "international" }
  | { type: "assessment-form" }
  | { type: "treatment-nav"; heading?: string; exclude?: TreatmentId[] }
  | { type: "price" }
  | { type: "location" }
  | { type: "rating" };

export type PageKind = "money" | "condition" | "comparison" | "diagnostic" | "trust" | "article" | "legal";

export type PageDef = {
  path: string;
  /** Full <title>, no template appended. Keep to 60 characters or fewer. */
  metaTitle: string;
  /** 70-160 characters. */
  description: string;
  h1: string;
  eyebrow: string;
  kind: PageKind;
  treatment?: TreatmentId;
  medical: boolean;
  evidence?: EvidenceLabel;
  /** Answer-first block shown directly under the H1 and used for speakable markup. */
  answer: { q: string; a: string };
  lead?: string;
  takeaways?: string[];
  blocks: Block[];
  faqs?: FaqItem[];
  /** Ids from src/lib/evidence.ts */
  sources?: string[];
  /** Paths of related pages. */
  related?: string[];
  parent?: { name: string; path: string };
  /** Hero call-to-action label (context specific). */
  ctaLabel: string;
  modified: string;
  priority: number;
  schema?: { therapy?: string; condition?: string };
};

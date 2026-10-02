import { articles } from "@/lib/articles";
import { geoContent } from "@/lib/geo-content";
import { redirects } from "../redirects";
import { DATE } from "../shared";
import type { Block, PageDef } from "../types";

const meta: Record<string, { metaTitle: string; description: string; ctaLabel: string; treatment?: PageDef["treatment"] }> = {
  "/testosterone-ed": {
    metaTitle: "Low Testosterone and Erectile Dysfunction: When TRT Helps",
    description: "How testosterone deficiency is diagnosed, when testosterone therapy may help ED and why it is not a universal ED treatment.",
    ctaLabel: "Ask About Hormonal ED",
  },
  "/post-finasteride-syndrome-ed": {
    metaTitle: "Finasteride and Persistent Sexual Symptoms: What Is Known",
    description: "What regulators say about sexual symptoms that may persist after finasteride, what remains uncertain and when to seek medical help.",
    ctaLabel: "Ask the Urologist",
  },
  "/p-shot-vs-viagra": {
    metaTitle: "P-Shot vs Viagra for Erectile Dysfunction | UZ Clinic",
    description: "PDE5 inhibitors such as Viagra are guideline-supported first-line ED therapy; PRP remains experimental. Compare evidence, use and risks.",
    ctaLabel: "Ask the Urologist",
    treatment: "p-shot",
  },
};

const remap = (path: string) => redirects[path] ?? path;

export const legacyPages: PageDef[] = Object.values(articles).map((article) => {
  const m = meta[article.path];
  const geo = geoContent[article.path];
  const blocks: Block[] = [
    { type: "callout", tone: "evidence", title: `Evidence status: ${article.evidenceStatus}`, text: article.evidenceSummary },
    ...article.sections.map<Block>((section) =>
      section.table
        ? { type: "table", heading: section.heading, caption: section.table.caption, headers: section.table.headers, rows: section.table.rows }
        : { type: "text", heading: section.heading, paragraphs: section.paragraphs, bullets: section.bullets },
    ),
    { type: "cta", title: m.ctaLabel, text: "Send your case. The urologist can advise which options may be relevant to you.", label: m.ctaLabel, whatsapp: true },
    { type: "doctor" },
  ];
  return {
    path: article.path,
    metaTitle: m.metaTitle,
    description: m.description,
    h1: article.h1,
    eyebrow: article.eyebrow,
    kind: "article",
    treatment: m.treatment ?? "not-sure",
    medical: true,
    answer: { q: "Quick answer", a: article.intro },
    takeaways: geo?.takeaways,
    blocks,
    faqs: geo?.faqs,
    sources: article.sources.map((s) => s.id),
    related: [...new Set(article.related.map((r) => remap(r.path)))],
    parent: { name: "ED knowledge hub", path: "/ed-knowledge-hub" },
    ctaLabel: m.ctaLabel,
    modified: DATE,
    priority: 0.6,
  } satisfies PageDef;
});

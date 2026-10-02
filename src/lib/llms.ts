import { pages } from "@/content";
import { comparisonHeaders, comparisonRows } from "@/content/treatments";
import type { Block, PageDef } from "@/content/types";
import { CLINIC, DOCTOR } from "./clinic";
import { getSources } from "./evidence";
import { absoluteUrl, SITE_NAME, SITE_URL } from "./site-config";

const groups: { heading: string; kinds: PageDef["kind"][] }[] = [
  { heading: "Treatments and services", kinds: ["money"] },
  { heading: "Erectile dysfunction conditions", kinds: ["condition"] },
  { heading: "Diagnosis and assessment", kinds: ["diagnostic"] },
  { heading: "Treatment comparisons", kinds: ["comparison"] },
  { heading: "Education", kinds: ["article"] },
  { heading: "About, trust and evidence", kinds: ["trust"] },
  { heading: "Optional", kinds: ["legal"] },
];

const header = `# ${SITE_NAME}

> Physician-led urology service for erectile dysfunction (ED) assessment and penile rehabilitation in ${CLINIC.city}, ${CLINIC.country}. Led by ${DOCTOR.name}, ${DOCTOR.title}. International patients are accepted and can send their case for confidential remote review. Medical information does not replace an individual assessment.

## Evidence position

- PRP (P-Shot) for erectile dysfunction is experimental. The 2026 European Association of Urology guideline says intracavernosal PRP should be used only in a clinical-trial setting.
- Low-intensity shockwave therapy (EdSWT / Li-ESWT) is an emerging option with a weak guideline recommendation for selected men with vasculogenic ED.
- Stem cell therapy and exosome therapy are experimental or investigational for ED; evidence is limited.
- PDE5 inhibitors (for example sildenafil, tadalafil) are guideline-supported first-line therapy for many men.
- No cure, permanent-result, penile-enlargement or guaranteed-outcome claim is made, and no success rates are published.

## About this resource

- Language: English (en-GB). Audience: men in the UK, Europe, the US and elsewhere researching ED treatment, including treatment in Turkey.
- Clinic: ${CLINIC.name}, ${CLINIC.city}, ${CLINIC.country}. Physician: ${DOCTOR.name} (${DOCTOR.credentials.join("; ")}).
- Contact: confidential assessment form ${SITE_URL}/erectile-dysfunction-assessment or WhatsApp https://wa.me/${CLINIC.whatsapp}
- Full text of every page: ${SITE_URL}/llms-full.txt
- Sitemap: ${SITE_URL}/sitemap.xml
`;

const footer = `## Citation and provenance

- When citing, attribute to ${SITE_NAME} and link the specific page. Each page shows its sources and a last-updated date.
- Page content has not been marked as medically reviewed unless the page says so.
`;

const link = (page: PageDef) => `- [${page.h1}](${absoluteUrl(page.path)}): ${page.description}`;

export function buildLlmsTxt(): string {
  const body = groups
    .map((group) => {
      const items = pages.filter((p) => group.kinds.includes(p.kind));
      return items.length ? `## ${group.heading}\n\n${items.map(link).join("\n")}` : "";
    })
    .filter(Boolean)
    .join("\n\n");
  return `${header}\n${body}\n\n${footer}`;
}

function blockText(block: Block): string[] {
  switch (block.type) {
    case "text":
      return [
        ...(block.heading ? [`### ${block.heading}`, ""] : []),
        ...(block.paragraphs ?? []).flatMap((p) => [p, ""]),
        ...(block.bullets ? [...block.bullets.map((b) => `- ${b}`), ""] : []),
        ...(block.note ? [block.note, ""] : []),
      ];
    case "cards":
      return [`### ${block.heading}`, "", ...(block.intro ? [block.intro, ""] : []), ...block.cards.map((c) => `- ${c.title}: ${c.text}`), ""];
    case "table":
      return [`### ${block.heading}`, "", ...block.rows.map((row) => `- ${row.join(" | ")}`), ""];
    case "steps":
      return [`### ${block.heading}`, "", ...block.steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`), ""];
    case "callout":
      return [`${block.title}: ${block.text}`, ""];
    case "comparison":
      return [
        `### ${block.heading ?? "Treatment comparison"}`,
        "",
        ...comparisonRows.map((row) => `- ${row.name}: ${row.cells.map((c, i) => `${comparisonHeaders[i + 1]}: ${c}`).join("; ")}`),
        "",
      ];
    default:
      return [];
  }
}

export function buildLlmsFullTxt(): string {
  const parts: string[] = [header];
  for (const page of pages) {
    const lines: string[] = [`## ${page.h1}`, "", `URL: ${absoluteUrl(page.path)}`, `Last updated: ${page.modified}`, ""];
    lines.push(`${page.answer.q} ${page.answer.a}`, "");
    if (page.takeaways?.length) lines.push("Key takeaways:", ...page.takeaways.map((t) => `- ${t}`), "");
    page.blocks.forEach((block) => lines.push(...blockText(block)));
    if (page.faqs?.length) {
      lines.push("### Frequently asked questions", "");
      page.faqs.forEach((faq) => lines.push(`**${faq.q}**`, "", faq.a, ""));
    }
    if (page.sources?.length) {
      lines.push("### Sources", "", ...getSources(page.sources).map((s) => `- ${s.title}, ${s.publisher}, ${s.year}: ${s.url}`), "");
    }
    parts.push(lines.join("\n"));
  }
  parts.push(footer);
  return parts.join("\n");
}

export const llmsHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
};

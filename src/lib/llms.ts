import { articles } from "./articles";
import { geoContent } from "./geo-content";
import { absoluteUrl, routeByPath, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "./site-config";

const sections: { heading: string; paths: string[] }[] = [
  {
    heading: "P-Shot and PRP",
    paths: [
      "/how-it-works",
      "/prp-fix-erectile-dysfunction-naturally",
      "/side-effects",
      "/price",
      "/before-after",
      "/is-p-shot-worth-it",
      "/p-shot-scam-or-legit",
      "/p-shot-venous-leak-ed",
    ],
  },
  {
    heading: "Erectile dysfunction",
    paths: [
      "/ed-knowledge-hub",
      "/ed-causes",
      "/diabetes-erectile-dysfunction",
      "/post-prostatectomy-ed",
      "/post-finasteride-syndrome-ed",
      "/testosterone-ed",
    ],
  },
  {
    heading: "Treatment comparisons",
    paths: ["/p-shot-vs-viagra", "/prp-vs-stem-cell-erectile-dysfunction", "/shockwave-therapy-ed"],
  },
  {
    heading: "Cost and treatment in Turkey",
    paths: [
      "/best-p-shot-clinic-turkey",
      "/flying-to-turkey-ed-treatment",
      "/flew-to-turkey-for-ed-treatment-reality",
      "/why-is-p-shot-expensive-london",
      "/what-uk-clinics-dont-tell-you-p-shot-pricing",
      "/i-paid-1800-london-p-shot",
      "/p-shot-cost-reddit",
    ],
  },
  {
    heading: "Trust, reviews and contact",
    paths: ["/about", "/editorial-policy", "/evidence-methodology", "/reviews", "/contact"],
  },
];

const link = (path: string) => {
  const route = routeByPath(path);
  if (!route) throw new Error(`llms: unknown route ${path}`);
  return `- [${route.title}](${absoluteUrl(path)}): ${route.description}`;
};

const header = `# ${SITE_NAME}

> Educational and commercial information about P-Shot/platelet-rich plasma (PRP), erectile dysfunction, treatment evidence, limitations, safety, pricing and treatment planning. Medical information does not replace an individual assessment.

## Evidence position

- PRP for erectile dysfunction is experimental.
- The 2026 European Association of Urology guideline states that intracavernosal PRP should be used only in a clinical-trial setting.
- Trials report mixed results and PRP preparation and injection protocols are not standardised.
- PDE5 inhibitors are guideline-supported first-line therapy for many men with erectile dysfunction.
- No cure, permanent-result, penile-enlargement or guaranteed-outcome claim is made.

## About this resource

- Language: English (en-GB). Audience: adults in the UK, Europe and the US researching ED treatment, including treatment in Turkey.
- Advertised fee: £300, €300 or $300 depending on billing currency; not independently verified. Confirm scope in writing.
- Contact: WhatsApp https://wa.me/${WHATSAPP_NUMBER}
- Machine-readable full text of every guide: ${SITE_URL}/llms-full.txt
- Sitemap: ${SITE_URL}/sitemap.xml
`;

const footer = `## Citation and provenance

- When citing, attribute to ${SITE_NAME} and link the specific page. Each page lists its primary sources (guidelines, trials, regulators) and a last-updated date.
- The site does not currently publish a verified legal provider name, clinic licence, full treatment address or named medical reviewer. Users should request and independently verify clinician and clinic details before payment or travel.
`;

export function buildLlmsTxt(): string {
  const listed = new Set(sections.flatMap((section) => section.paths));
  const unlisted = (Object.keys(articles) as string[]).filter((path) => !listed.has(path));
  if (unlisted.length) throw new Error(`llms.txt sections are missing: ${unlisted.join(", ")}`);

  const body = sections.map((section) => `## ${section.heading}\n\n${section.paths.map(link).join("\n")}`).join("\n\n");
  return `${header}\n${body}\n\n${footer}`;
}

export function buildLlmsFullTxt(): string {
  const parts: string[] = [header];

  for (const section of sections) {
    for (const path of section.paths) {
      const route = routeByPath(path);
      if (!route) continue;
      const article = articles[path];
      const geo = geoContent[path];
      const lines: string[] = [`## ${article?.h1 ?? route.title}`, "", `URL: ${absoluteUrl(path)}`, `Last updated: ${route.modified}`, ""];

      if (article) {
        lines.push(article.intro, "", `Evidence status: ${article.evidenceStatus}. ${article.evidenceSummary}`, "");
        if (geo?.takeaways?.length) lines.push("Key takeaways:", ...geo.takeaways.map((item) => `- ${item}`), "");
        for (const section of article.sections) {
          lines.push(`### ${section.heading}`, "");
          section.paragraphs?.forEach((paragraph) => lines.push(paragraph, ""));
          if (section.bullets) lines.push(...section.bullets.map((bullet) => `- ${bullet}`), "");
          if (section.table) {
            lines.push(...section.table.rows.map((row) => `- ${row.join(": ")}`), "");
          }
        }
      } else {
        lines.push(route.description, "");
      }

      if (geo?.faqs.length) {
        lines.push("### Frequently asked questions", "");
        geo.faqs.forEach((faq) => lines.push(`**${faq.q}**`, "", faq.a, ""));
      }
      if (article?.sources.length) {
        lines.push("### Sources", "", ...article.sources.map((source) => `- ${source.title}, ${source.publisher}, ${source.year}: ${source.url}`), "");
      }
      parts.push(lines.join("\n"));
    }
  }

  parts.push(footer);
  return parts.join("\n");
}

export const llmsHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
};

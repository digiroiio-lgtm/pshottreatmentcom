import type { EvidenceSource } from "@/lib/evidence";
import { getGeoContent } from "@/lib/geo-content";
import { advertisedFees, howItWorksSteps } from "@/lib/page-data";
import {
  absoluteUrl,
  ogImageUrl,
  PUBLISHED_DATE,
  routeByPath,
  SAME_AS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site-config";

type Node = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const edCondition: Node = {
  "@type": "MedicalCondition",
  name: "Erectile dysfunction",
  alternateName: "Impotence",
};

const prpProcedure: Node = {
  "@type": "MedicalProcedure",
  name: "Platelet-rich plasma (PRP) injection for erectile dysfunction (P-Shot)",
  description:
    "An experimental procedure in which platelets are concentrated from the patient's own blood and injected into penile tissue. The 2026 EAU guideline says it should be used only in a clinical-trial setting.",
};

// Routes whose main subject includes the PRP/P-Shot procedure itself.
const prpPaths = new Set([
  "/",
  "/how-it-works",
  "/side-effects",
  "/price",
  "/before-after",
  "/prp-fix-erectile-dysfunction-naturally",
  "/p-shot-venous-leak-ed",
  "/p-shot-vs-viagra",
  "/prp-vs-stem-cell-erectile-dysfunction",
  "/is-p-shot-worth-it",
  "/p-shot-scam-or-legit",
  "/best-p-shot-clinic-turkey",
]);

const pageTypeOverrides: Record<string, string[]> = {
  "/about": ["WebPage", "AboutPage"],
  "/contact": ["WebPage", "ContactPage"],
  "/ed-knowledge-hub": ["MedicalWebPage", "CollectionPage"],
};

const areaServed: Node[] = [
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "Ireland" },
  { "@type": "Country", name: "United States" },
  { "@type": "AdministrativeArea", name: "European Union" },
];

const citationNode = (source: EvidenceSource): Node => ({
  "@type": "CreativeWork",
  name: source.title,
  publisher: { "@type": "Organization", name: source.publisher },
  datePublished: source.year,
  url: source.url,
});

/** Extra nodes derived from the page's visible content (price table, steps, hub listing). */
function extraNodes(path: string, pageUrl: string, itemList?: { path: string; name: string }[]): Node[] {
  if (path === "/price") {
    return [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "P-Shot (PRP) treatment: advertised fee",
        serviceType: "Platelet-rich plasma injection for erectile dysfunction",
        areaServed,
        offers: advertisedFees.map((fee) => ({
          "@type": "Offer",
          price: fee.amount,
          priceCurrency: fee.currency,
          url: pageUrl,
          seller: { "@id": ORG_ID },
          description:
            "Advertised first-party treatment fee, not independently verified. Request the complete itemised scope in writing before paying.",
        })),
      },
    ];
  }

  if (path === "/how-it-works") {
    return [
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#stages`,
        name: "Typical stages of a P-Shot PRP procedure",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: howItWorksSteps.map(([name, text], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          description: text,
        })),
      },
    ];
  }

  if (itemList?.length) {
    return [
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#articles`,
        name: "Erectile dysfunction guides",
        itemListElement: itemList.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: absoluteUrl(item.path),
        })),
      },
    ];
  }

  return [];
}

export default function JsonLd({
  path,
  breadcrumbs,
  sources,
  article,
  hubItems,
}: {
  path: string;
  breadcrumbs?: { name: string; path: string }[];
  sources?: EvidenceSource[];
  /** Pass the H1 for long-form content pages so an Article node is emitted. */
  article?: { headline: string };
  /** Pages the hub page lists, emitted as an ItemList. */
  hubItems?: { path: string; name: string }[];
}) {
  const route = routeByPath(path);
  if (!route) return null;

  const pageUrl = absoluteUrl(path);
  const imageUrl = ogImageUrl(path);
  const geo = getGeoContent(path);

  const organization: Node = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon`, width: 180, height: 180 },
    description:
      "An educational and commercial information resource about P-Shot/PRP, erectile dysfunction, treatment considerations, pricing and treatment planning.",
    areaServed,
    knowsAbout: [
      "Erectile dysfunction",
      "Platelet-rich plasma (PRP) for erectile dysfunction",
      "P-Shot",
      "Medical travel to Turkey",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "treatment enquiry",
      url: `https://wa.me/${WHATSAPP_NUMBER}`,
      availableLanguage: ["English"],
    },
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };

  const webSite: Node = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": ORG_ID },
    inLanguage: SITE_LOCALE,
  };

  const about: Node[] = route.medical ? [edCondition, ...(prpPaths.has(path) ? [prpProcedure] : [])] : [];

  const webPage: Node = {
    "@type": pageTypeOverrides[path] ?? (route.medical ? "MedicalWebPage" : "WebPage"),
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    datePublished: PUBLISHED_DATE,
    dateModified: route.modified,
    inLanguage: SITE_LOCALE,
    isAccessibleForFree: true,
    primaryImageOfPage: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-direct-answer]"] },
    ...(breadcrumbs?.length ? { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } } : {}),
    ...(about.length ? { about } : {}),
    ...(sources?.length ? { citation: sources.map(citationNode) } : {}),
    ...(route.medical ? { audience: { "@type": "Patient", audienceType: "Adults seeking ED information" } } : {}),
    ...(article ? { mainEntity: { "@id": `${pageUrl}#article` } } : {}),
  };

  const graph: Node[] = [organization, webSite, webPage];

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: article.headline,
      description: route.description,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      datePublished: PUBLISHED_DATE,
      dateModified: route.modified,
      inLanguage: SITE_LOCALE,
      isAccessibleForFree: true,
      image: imageUrl,
      ...(sources?.length ? { citation: sources.map(citationNode) } : {}),
    });
  }

  if (breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    });
  }

  if (geo?.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      isPartOf: { "@id": `${pageUrl}#webpage` },
      inLanguage: SITE_LOCALE,
      mainEntity: geo.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  graph.push(...extraNodes(path, pageUrl, hubItems));

  // Escape "<" so page text can never terminate the script element.
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

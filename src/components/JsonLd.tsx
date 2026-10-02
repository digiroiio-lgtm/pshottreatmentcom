import { pages } from "@/content";
import { treatmentCards } from "@/content/treatments";
import type { PageDef } from "@/content/types";
import { advertisedFees } from "@/lib/page-data";
import { CLINIC, CONTENT_REVIEW, DOCTOR } from "@/lib/clinic";
import { getSources } from "@/lib/evidence";
import { absoluteUrl, ogImageUrl, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site-config";

type Node = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const DOCTOR_ID = `${SITE_URL}/#physician`;

const areaServed: Node[] = [
  { "@type": "Country", name: "Turkey" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "Ireland" },
  { "@type": "Country", name: "United States" },
  { "@type": "AdministrativeArea", name: "European Union" },
];

const therapy = (name: string): Node => ({
  "@type": "MedicalTherapy",
  name,
  relevantSpecialty: "https://schema.org/Urologic",
});

// Treatments the clinic has stated it offers. Exosome therapy is left out until the clinic confirms availability.
const offered = ["P-Shot (platelet-rich plasma injection)", "Low-intensity shockwave therapy (EdSWT / Li-ESWT)", "Stem cell therapy for erectile dysfunction", "Penile rehabilitation"];

function organization(): Node {
  return {
    "@type": ["Organization", "MedicalClinic"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description:
      "A physician-led urology service in Antalya, Turkey, for erectile dysfunction assessment and penile rehabilitation, accepting international patients.",
    logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon`, width: 180, height: 180 },
    medicalSpecialty: "https://schema.org/Urologic",
    isAcceptingNewPatients: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: CLINIC.city,
      addressCountry: CLINIC.countryCode,
      ...(CLINIC.streetAddress ? { streetAddress: CLINIC.streetAddress } : {}),
      ...(CLINIC.postalCode ? { postalCode: CLINIC.postalCode } : {}),
    },
    ...(CLINIC.mapUrl ? { hasMap: CLINIC.mapUrl } : {}),
    ...(CLINIC.phone ? { telephone: CLINIC.phone } : {}),
    ...(CLINIC.email ? { email: CLINIC.email } : {}),
    areaServed,
    availableLanguage: "English",
    availableService: offered.map(therapy),
    physician: { "@id": DOCTOR_ID },
    knowsAbout: ["Erectile dysfunction", "Penile rehabilitation", "Vasculogenic erectile dysfunction", "Shockwave therapy for erectile dysfunction"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "patient enquiries",
      url: `https://wa.me/${CLINIC.whatsapp}`,
      availableLanguage: ["English"],
    },
    ...(CLINIC.sameAs.length ? { sameAs: CLINIC.sameAs } : {}),
  };
}

function physician(): Node {
  return {
    "@type": "Physician",
    "@id": DOCTOR_ID,
    name: DOCTOR.name,
    jobTitle: DOCTOR.title,
    url: absoluteUrl(DOCTOR.path),
    medicalSpecialty: "https://schema.org/Urologic",
    worksFor: { "@id": ORG_ID },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Ege University" },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Board certification",
      recognizedBy: { "@type": "Organization", name: "Turkish Association of Urology" },
    },
    knowsAbout: DOCTOR.focus,
    workLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: CLINIC.city, addressCountry: CLINIC.countryCode } },
  };
}

const citation = (id: string): Node => {
  const source = getSources([id])[0];
  return {
    "@type": "CreativeWork",
    name: source.title,
    publisher: { "@type": "Organization", name: source.publisher },
    datePublished: source.year,
    url: source.url,
  };
};

function extraNodes(page: PageDef, pageUrl: string): Node[] {
  const nodes: Node[] = [];

  if (page.schema?.condition) {
    nodes.push({
      "@type": "MedicalCondition",
      "@id": `${pageUrl}#condition`,
      name: page.schema.condition,
      ...(page.schema.therapy ? { possibleTreatment: therapy(page.schema.therapy) } : {}),
    });
  }
  if (page.schema?.therapy) {
    nodes.push({ ...therapy(page.schema.therapy), "@id": `${pageUrl}#therapy`, description: page.answer.a });
  }

  if (page.path === "/price") {
    nodes.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "P-Shot (PRP) treatment fee",
      provider: { "@id": ORG_ID },
      areaServed,
      offers: advertisedFees.map((fee) => ({
        "@type": "Offer",
        price: fee.amount,
        priceCurrency: fee.currency,
        url: pageUrl,
        seller: { "@id": ORG_ID },
        description: "Advertised treatment fee. What it includes is confirmed in the written treatment plan after assessment.",
      })),
    });
  }

  // Describe the first ordered-steps block, but only because the same steps are shown on the page.
  const steps = page.blocks.find((b) => b.type === "steps");
  if (steps && steps.type === "steps") {
    nodes.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#steps`,
      name: steps.heading,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: steps.steps.map((step, i) => ({ "@type": "ListItem", position: i + 1, name: step.title, description: step.text })),
    });
  }

  if (page.path === "/ed-knowledge-hub" || page.path === "/ed-treatment-options") {
    const list =
      page.path === "/ed-treatment-options"
        ? treatmentCards.map((card) => ({ path: card.path, name: card.name }))
        : pages.filter((p) => ["condition", "money"].includes(p.kind) && p.path !== "/").slice(0, 20).map((p) => ({ path: p.path, name: p.h1 }));
    nodes.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#items`,
      itemListElement: list.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: absoluteUrl(item.path) })),
    });
  }
  return nodes;
}

export default function JsonLd({ page, breadcrumbs }: { page: PageDef; breadcrumbs: { name: string; path: string }[] }) {
  const pageUrl = absoluteUrl(page.path);
  const imageUrl = ogImageUrl(page.path);
  const pageType: string[] =
    page.path === "/about" ? ["AboutPage"] : page.path === "/dr-niyazi-umut-ozdemir" ? ["ProfilePage"] : page.medical ? ["MedicalWebPage"] : ["WebPage"];
  if (["/ed-knowledge-hub", "/ed-treatment-options"].includes(page.path)) pageType.push("CollectionPage");

  const reviewed = CONTENT_REVIEW.reviewedByDoctor && CONTENT_REVIEW.reviewDate;
  const sources = (page.sources ?? []).map(citation);
  const isArticle = page.kind !== "legal" && page.path !== "/" && page.kind !== "trust";

  const webPage: Node = {
    "@type": pageType.length === 1 ? pageType[0] : pageType,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.metaTitle,
    description: page.description,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    dateModified: page.modified,
    inLanguage: SITE_LOCALE,
    primaryImageOfPage: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-direct-answer]"] },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    ...(page.schema?.condition ? { about: { "@id": `${pageUrl}#condition` } } : {}),
    ...(sources.length ? { citation: sources } : {}),
    ...(page.medical ? { audience: { "@type": "Patient", audienceType: "Adults seeking ED information" } } : {}),
    ...(reviewed ? { reviewedBy: { "@id": DOCTOR_ID }, lastReviewed: CONTENT_REVIEW.reviewDate } : {}),
    ...(isArticle ? { mainEntity: { "@id": `${pageUrl}#article` } } : {}),
  };

  const graph: Node[] = [
    organization(),
    physician(),
    { "@type": "WebSite", "@id": WEBSITE_ID, name: SITE_NAME, url: `${SITE_URL}/`, publisher: { "@id": ORG_ID }, inLanguage: SITE_LOCALE },
    webPage,
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
    },
  ];

  if (isArticle) {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      dateModified: page.modified,
      inLanguage: SITE_LOCALE,
      image: imageUrl,
      ...(sources.length ? { citation: sources } : {}),
      ...(reviewed ? { reviewedBy: { "@id": DOCTOR_ID } } : {}),
    });
  }

  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      isPartOf: { "@id": `${pageUrl}#webpage` },
      inLanguage: SITE_LOCALE,
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    });
  }

  graph.push(...extraNodes(page, pageUrl));

  // Escape "<" so page text can never terminate the script element.
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}


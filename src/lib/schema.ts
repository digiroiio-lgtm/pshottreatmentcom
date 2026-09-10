/**
 * JSON-LD builders.
 *
 * Every page emits ONE `<script type="application/ld+json">` containing a single
 * `@graph`. Nodes reference each other by `@id`, which is what lets search engines
 * and LLM parsers resolve "this page is about this procedure, offered by this
 * organisation, at this price" as one connected entity rather than loose fragments.
 *
 * Deliberately absent: `Review` and `AggregateRating`. The on-site testimonials are
 * not independently verifiable, and marking up unverifiable reviews violates
 * Google's structured data policies — a real manual-action risk on a health site.
 */

import {
  absoluteUrl,
  addressCountry,
  addressLocality,
  areaServed,
  clinicId,
  legalName,
  medicalReviewer,
  openingHours,
  organizationId,
  phoneE164,
  priceValidUntil,
  prices,
  procedureId,
  routeByPath,
  sameAs,
  serviceId,
  siteDescription,
  siteName,
  siteUrl,
  websiteId,
  type RouteMeta,
} from "./site-config";

type Node = Record<string, unknown>;

const ref = (id: string) => ({ "@id": id });

const logoId = `${siteUrl}/#logo`;

export function logoNode(): Node {
  return {
    "@type": "ImageObject",
    "@id": logoId,
    url: `${siteUrl}/icon`,
    contentUrl: `${siteUrl}/icon`,
    width: 512,
    height: 512,
    caption: siteName,
  };
}

const countryNodes = areaServed.map((code) => ({
  "@type": "Country",
  identifier: code,
}));

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteName,
    legalName,
    url: `${siteUrl}/`,
    description: siteDescription,
    logo: ref(logoId),
    image: ref(logoId),
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: phoneE164,
        url: `https://wa.me/${phoneE164.replace("+", "")}`,
        availableLanguage: ["en", "tr"],
        areaServed: [...areaServed],
      },
    ],
  };
}

/**
 * Service-area clinic. No street address is published, so this is
 * country/city level only and carries no `hasMap` or `geo` — claiming a
 * precise location we do not disclose would be worse than omitting it.
 */
export function clinicNode(): Node {
  return {
    "@type": ["MedicalBusiness", "MedicalClinic"],
    "@id": clinicId,
    name: siteName,
    url: `${siteUrl}/`,
    description: siteDescription,
    parentOrganization: ref(organizationId),
    telephone: phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressCountry,
    },
    areaServed: countryNodes,
    availableLanguage: ["en", "tr"],
    medicalSpecialty: ["Urologic", "PlasticSurgery"],
    availableService: ref(procedureId),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...openingHours.days],
        opens: openingHours.opens,
        closes: openingHours.closes,
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${siteUrl}/`,
    name: siteName,
    description: siteDescription,
    publisher: ref(organizationId),
    inLanguage: "en-GB",
  };
}

export function procedureNode(): Node {
  return {
    "@type": "MedicalProcedure",
    "@id": procedureId,
    name: "P-Shot (Priapus Shot)",
    alternateName: [
      "Priapus Shot",
      "PRP penile injection",
      "Platelet-Rich Plasma penile treatment",
    ],
    url: absoluteUrl("/how-it-works"),
    description:
      "A non-surgical regenerative procedure in which platelet-rich plasma (PRP) prepared from the patient's own blood is injected into penile tissue to support blood flow, sensitivity and erectile function.",
    procedureType: {
      "@type": "MedicalProcedureType",
      name: "Percutaneous procedure",
    },
    bodyLocation: "Penis",
    status: "https://schema.org/ActiveActionStatus",
    relevantSpecialty: [
      { "@type": "MedicalSpecialty", name: "Urologic" },
      { "@type": "MedicalSpecialty", name: "PlasticSurgery" },
    ],
    howPerformed:
      "Approximately 30–50 ml of the patient's blood is drawn and centrifuged to separate platelet-rich plasma. A topical anaesthetic cream is applied for 20–30 minutes, after which the concentrated PRP is injected into targeted areas. The injection stage takes about 20 minutes.",
    preparation:
      "A doctor reviews the patient's medical history and current medication in a consultation before treatment. Patients taking anticoagulants or with platelet disorders require individual assessment.",
    followup:
      "Most patients resume normal activity the same day. Written and verbal aftercare instructions are provided. Mild redness, bruising or sensitivity may occur and typically resolves within a few days.",
    provider: ref(clinicId),
  };
}

/** Offers live on a Service node — one Offer per currency, as schema.org requires. */
export function serviceNode(): Node {
  return {
    "@type": "Service",
    "@id": serviceId,
    name: "P-Shot Treatment",
    serviceType: "P-Shot (Priapus Shot) PRP treatment",
    url: absoluteUrl("/price"),
    description:
      "All-inclusive P-Shot treatment: doctor consultation, PRP extraction and processing, the injection procedure, and medical aftercare.",
    provider: ref(clinicId),
    areaServed: countryNodes,
    about: ref(procedureId),
    offers: prices.map((p) => ({
      "@type": "Offer",
      "@id": `${siteUrl}/#offer-${p.currency.toLowerCase()}`,
      name: `P-Shot treatment (${p.currency})`,
      price: p.amount,
      priceCurrency: p.currency,
      priceValidUntil,
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/price"),
      seller: ref(organizationId),
      itemOffered: ref(procedureId),
    })),
  };
}

export type BreadcrumbTrail = { name: string; path: string }[];

export function breadcrumbNode(trail: BreadcrumbTrail, pageUrl: string): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqNode(items: FaqItem[], pageUrl: string): Node {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function webPageNode(
  route: RouteMeta,
  pageUrl: string,
  opts: { hasBreadcrumb: boolean; speakable?: string[] },
): Node {
  const medical = route.medical === true;

  return {
    "@type": medical ? "MedicalWebPage" : "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: route.title,
    description: route.summary,
    isPartOf: ref(websiteId),
    about: medical ? ref(procedureId) : ref(organizationId),
    datePublished: route.published,
    dateModified: route.modified,
    inLanguage: "en-GB",
    publisher: ref(organizationId),
    primaryImageOfPage: ref(logoId),
    ...(opts.hasBreadcrumb ? { breadcrumb: ref(`${pageUrl}#breadcrumb`) } : {}),
    ...(medical
      ? {
          audience: { "@type": "Patient", audienceType: "Adult men" },
          specialty: { "@type": "MedicalSpecialty", name: "Urologic" },
          // Only claim clinical review when a named clinician actually reviewed it.
          ...(medicalReviewer
            ? {
                lastReviewed: route.modified,
                reviewedBy: {
                  "@type": "Person",
                  name: medicalReviewer.name,
                  jobTitle: medicalReviewer.jobTitle,
                  honorificSuffix: medicalReviewer.credential,
                  ...(medicalReviewer.url ? { url: medicalReviewer.url } : {}),
                },
              }
            : {}),
        }
      : {}),
    ...(opts.speakable?.length
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: opts.speakable,
          },
        }
      : {}),
  };
}

export type GraphOptions = {
  path: string;
  breadcrumb?: BreadcrumbTrail;
  faq?: FaqItem[];
  /** Include the Service + Offer entities (pages that quote the price). */
  offers?: boolean;
  speakable?: string[];
};

/**
 * Build the complete `@graph` for a page. Global entities (organisation, clinic,
 * website) are always present so any single page can be crawled in isolation and
 * still resolve the full business context — which is how LLM retrievers see pages.
 */
export function buildGraph(options: GraphOptions): Node {
  const route = routeByPath(options.path);
  if (!route) {
    throw new Error(
      `buildGraph: no route entry for "${options.path}". Add it to src/lib/site-config.ts.`,
    );
  }

  const pageUrl = absoluteUrl(options.path);
  const graph: Node[] = [
    logoNode(),
    organizationNode(),
    clinicNode(),
    websiteNode(),
    // Always present: `clinicNode().availableService` and every medical page's
    // `about` point at it, and it is the entity the whole site describes.
    procedureNode(),
    webPageNode(route, pageUrl, {
      hasBreadcrumb: Boolean(options.breadcrumb?.length),
      speakable: options.speakable,
    }),
  ];

  if (options.breadcrumb?.length) {
    graph.push(breadcrumbNode(options.breadcrumb, pageUrl));
  }
  if (options.offers) graph.push(serviceNode());
  if (options.faq?.length) graph.push(faqNode(options.faq, pageUrl));

  return { "@context": "https://schema.org", "@graph": graph };
}

import { absoluteUrl, routeByPath, SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site-config";

export default function JsonLd({
  path,
  breadcrumbs,
}: {
  path: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const route = routeByPath(path);
  if (!route) return null;

  const pageUrl = absoluteUrl(path);
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description:
      "An educational and commercial information resource about P-Shot/PRP, erectile dysfunction, treatment considerations, pricing and treatment planning.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "treatment enquiry",
      url: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };

  const webPage = {
    "@type": route.medical ? "MedicalWebPage" : "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    dateModified: route.modified,
    inLanguage: "en-GB",
    ...(route.medical
      ? {
          audience: { "@type": "Patient", audienceType: "Adults seeking ED information" },
        }
      : {}),
  };

  const graph: Record<string, unknown>[] = [organization, webSite, webPage];
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

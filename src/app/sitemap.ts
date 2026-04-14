import { MetadataRoute } from "next";
import {
  UK_CITIES,
  LONDON_AREAS,
  PROGRAMMATIC_TYPES,
  buildProgrammaticSlug,
} from "@/lib/uk-locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pshottreatment.com";

  // Core pages
  const corePages = [
    "/",
    "/price",
    "/before-after",
    "/reviews",
    "/side-effects",
    "/how-it-works",
    "/contact",
  ];

  const coreEntries: MetadataRoute.Sitemap = corePages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  // UK overview
  const ukEntry: MetadataRoute.Sitemap = [
    {
      url: `${base}/locations/uk`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // City pages
  const cityEntries: MetadataRoute.Sitemap = UK_CITIES.map((city) => ({
    url: `${base}/locations/uk/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: city.tier === 1 ? 0.9 : 0.8,
  }));

  // London area pages
  const londonAreaEntries: MetadataRoute.Sitemap = LONDON_AREAS.map((area) => ({
    url: `${base}/locations/uk/london/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  // Programmatic pages
  const programmaticEntries: MetadataRoute.Sitemap = UK_CITIES.flatMap(
    (city) =>
      PROGRAMMATIC_TYPES.map((pt) => ({
        url: `${base}/${buildProgrammaticSlug(pt.prefix, city.slug)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  );

  return [
    ...coreEntries,
    ...ukEntry,
    ...cityEntries,
    ...londonAreaEntries,
    ...programmaticEntries,
  ];
}

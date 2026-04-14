import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UK_CITIES, LONDON_AREAS } from "@/lib/uk-locations";
import LocationPageTemplate from "@/components/LocationPageTemplate";

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return LONDON_AREAS.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = LONDON_AREAS.find((a) => a.slug === areaSlug);
  if (!area) return {};
  return {
    title: `P-Shot in ${area.name}, London | Save 70% with Turkey Treatment`,
    description: `P-Shot treatment near ${area.name}, London. Local clinics charge £1,200–£2,000. Get the same certified procedure in Turkey for just £300. Save 70%.`,
    keywords: [
      `P-Shot ${area.name}`,
      `P-Shot ${area.name} London`,
      `P-Shot near me ${area.name}`,
      `P-Shot cost ${area.name}`,
      `P-Shot clinic ${area.name} London`,
    ],
    alternates: {
      canonical: `https://pshottreatment.com/locations/uk/london/${area.slug}`,
    },
  };
}

export default async function LondonAreaPage({ params }: Props) {
  const { area: areaSlug } = await params;
  const area = LONDON_AREAS.find((a) => a.slug === areaSlug);
  if (!area) notFound();

  const otherCities = UK_CITIES.filter((c) => c.slug !== "london").map((c) => ({
    name: c.name,
    slug: c.slug,
  }));

  const londonAreas = LONDON_AREAS.filter((a) => a.slug !== areaSlug).map(
    (a) => ({ name: a.name, slug: a.slug })
  );

  return (
    <LocationPageTemplate
      displayName={`${area.name}, London`}
      cityName="London"
      citySlug="london"
      areaName={area.name}
      areaSlug={area.slug}
      variant="city"
      otherCities={otherCities}
      londonAreas={londonAreas}
    />
  );
}

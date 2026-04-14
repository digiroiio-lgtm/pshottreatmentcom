import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UK_CITIES, LONDON_AREAS } from "@/lib/uk-locations";
import LocationPageTemplate from "@/components/LocationPageTemplate";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return UK_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = UK_CITIES.find((c) => c.slug === citySlug);
  if (!city) return {};
  return {
    title: `P-Shot in ${city.name} | Save 70% with Turkey Treatment`,
    description: `P-Shot treatment in ${city.name}. Local clinics charge £1,200–£2,000. Get the same certified procedure in Turkey for just £300 all-inclusive. Save 70%.`,
    keywords: [
      `P-Shot ${city.name}`,
      `P-Shot near me ${city.name}`,
      `P-Shot cost ${city.name}`,
      `best P-Shot ${city.name}`,
      `cheap P-Shot ${city.name}`,
      `P-Shot clinic ${city.name}`,
    ],
    alternates: {
      canonical: `https://pshottreatment.com/locations/uk/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = UK_CITIES.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const otherCities = UK_CITIES.filter((c) => c.slug !== citySlug).map((c) => ({
    name: c.name,
    slug: c.slug,
  }));

  const londonAreas =
    citySlug === "london"
      ? LONDON_AREAS.map((a) => ({ name: a.name, slug: a.slug }))
      : undefined;

  return (
    <LocationPageTemplate
      displayName={city.name}
      cityName={city.name}
      citySlug={city.slug}
      variant="city"
      otherCities={otherCities}
      londonAreas={londonAreas}
    />
  );
}

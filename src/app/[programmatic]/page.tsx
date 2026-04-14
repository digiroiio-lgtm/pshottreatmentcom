import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  UK_CITIES,
  PROGRAMMATIC_TYPES,
  buildProgrammaticSlug,
  parseProgrammaticSlug,
} from "@/lib/uk-locations";
import LocationPageTemplate from "@/components/LocationPageTemplate";

interface Props {
  params: Promise<{ programmatic: string }>;
}

export async function generateStaticParams() {
  return UK_CITIES.flatMap((city) =>
    PROGRAMMATIC_TYPES.map((pt) => ({
      programmatic: buildProgrammaticSlug(pt.prefix, city.slug),
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { programmatic: slug } = await params;
  const parsed = parseProgrammaticSlug(slug);
  if (!parsed) return {};

  const { type: pt, city } = parsed;
  const titleMap: Record<string, string> = {
    "near-me": `P-Shot Near Me in ${city.name} | Save 70% with Turkey Treatment`,
    cost: `P-Shot Cost in ${city.name} | £300 vs £1,200–£2,000 UK Price`,
    cheap: `Cheap P-Shot in ${city.name} | £300 All-Inclusive in Turkey`,
    best: `Best P-Shot Clinics in ${city.name} | Turkey vs UK Comparison`,
  };
  const descMap: Record<string, string> = {
    "near-me": `Find P-Shot treatment near you in ${city.name}. Local clinics charge £1,200–£2,000. Our certified Turkey clinic offers the same procedure for just £300 all-inclusive.`,
    cost: `P-Shot cost in ${city.name} explained. UK private clinics charge £1,200–£2,000. Turkey alternative: £300 all-inclusive. Save up to 70%.`,
    cheap: `Affordable P-Shot options for ${city.name} patients. Skip the £1,200–£2,000 UK price tag. Same certified procedure in Turkey for just £300.`,
    best: `Best P-Shot providers for ${city.name} patients. Compare UK clinics vs Turkey. Same medical standard — 70% cheaper at £300 all-inclusive.`,
  };

  return {
    title: titleMap[pt.type] ?? `${pt.title} in ${city.name} | P-Shot Treatment`,
    description:
      descMap[pt.type] ??
      `P-Shot treatment for ${city.name} patients. Save 70% by choosing Turkey.`,
    keywords: [
      `${pt.title.toLowerCase()} ${city.name}`,
      `P-Shot ${city.name}`,
      `P-Shot near me ${city.name}`,
      `P-Shot cost ${city.name}`,
      `P-Shot Turkey`,
    ],
    alternates: {
      canonical: `https://pshottreatment.com/${slug}`,
    },
  };
}

export default async function ProgrammaticPage({ params }: Props) {
  const { programmatic: slug } = await params;
  const parsed = parseProgrammaticSlug(slug);
  if (!parsed) notFound();

  const { type: pt, city } = parsed;

  const otherCities = UK_CITIES.filter((c) => c.slug !== city.slug).map(
    (c) => ({ name: c.name, slug: c.slug })
  );

  const intro = pt.intro.replace("[city]", city.name);

  return (
    <LocationPageTemplate
      displayName={city.name}
      cityName={city.name}
      citySlug={city.slug}
      variant={pt.type}
      h1={`${pt.h1Prefix} ${city.name}`}
      introParagraph={intro}
      otherCities={otherCities}
    />
  );
}

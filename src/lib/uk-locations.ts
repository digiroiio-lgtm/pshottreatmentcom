export interface UKCity {
  slug: string;
  name: string;
  tier: 1 | 2;
  region: string;
  description: string;
}

export interface LondonArea {
  slug: string;
  name: string;
  description: string;
}

export interface ProgrammaticPageType {
  type: "near-me" | "cost" | "cheap" | "best";
  prefix: string;
  title: string;
  h1Prefix: string;
  intro: string;
}

export const UK_CITIES: UKCity[] = [
  {
    slug: "london",
    name: "London",
    tier: 1,
    region: "Greater London",
    description: "the UK's capital and largest city",
  },
  {
    slug: "manchester",
    name: "Manchester",
    tier: 1,
    region: "Greater Manchester",
    description: "one of the UK's most vibrant northern cities",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    tier: 1,
    region: "West Midlands",
    description: "the UK's second-largest city",
  },
  {
    slug: "leeds",
    name: "Leeds",
    tier: 1,
    region: "West Yorkshire",
    description: "a major commercial hub in West Yorkshire",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    tier: 1,
    region: "Scotland",
    description: "Scotland's largest and most populous city",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    tier: 1,
    region: "Merseyside",
    description: "a vibrant port city on the Mersey",
  },
  {
    slug: "bristol",
    name: "Bristol",
    tier: 2,
    region: "South West England",
    description: "a thriving south-western city and cultural hub",
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    tier: 2,
    region: "South Yorkshire",
    description: "a major Yorkshire city known for its heritage",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    tier: 2,
    region: "East Midlands",
    description: "a central English city in the East Midlands",
  },
  {
    slug: "leicester",
    name: "Leicester",
    tier: 2,
    region: "East Midlands",
    description: "a diverse and historic East Midlands city",
  },
  {
    slug: "coventry",
    name: "Coventry",
    tier: 2,
    region: "West Midlands",
    description: "a thriving West Midlands city and university town",
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    tier: 2,
    region: "Tyne and Wear",
    description: "a vibrant north-east city on the River Tyne",
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    tier: 2,
    region: "Scotland",
    description: "Scotland's historic and beautiful capital city",
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    tier: 2,
    region: "Wales",
    description: "the capital and largest city of Wales",
  },
];

export const LONDON_AREAS: LondonArea[] = [
  {
    slug: "chelsea",
    name: "Chelsea",
    description: "an affluent riverside borough in west London",
  },
  {
    slug: "kensington",
    name: "Kensington",
    description: "one of London's most prestigious and sought-after areas",
  },
  {
    slug: "westminster",
    name: "Westminster",
    description: "the heart of central London and the seat of government",
  },
  {
    slug: "canary-wharf",
    name: "Canary Wharf",
    description: "London's iconic financial and business district",
  },
  {
    slug: "camden",
    name: "Camden",
    description: "a vibrant and eclectic north London borough",
  },
  {
    slug: "islington",
    name: "Islington",
    description: "a trendy inner north London borough",
  },
  {
    slug: "shoreditch",
    name: "Shoreditch",
    description: "London's creative and tech hub in East London",
  },
  {
    slug: "greenwich",
    name: "Greenwich",
    description: "a historic and scenic south-east London area",
  },
  {
    slug: "hammersmith",
    name: "Hammersmith",
    description: "a busy and well-connected west London district",
  },
  {
    slug: "fulham",
    name: "Fulham",
    description: "an upmarket south-west London riverside area",
  },
];

export const PROGRAMMATIC_TYPES: ProgrammaticPageType[] = [
  {
    type: "near-me",
    prefix: "p-shot-near-me",
    title: "P-Shot Near Me",
    h1Prefix: "P-Shot Near Me in",
    intro:
      "Searching for a P-Shot provider near you in [city]? You're not alone — thousands of UK men search for accessible P-Shot clinics every month.",
  },
  {
    type: "cost",
    prefix: "p-shot-cost",
    title: "P-Shot Cost",
    h1Prefix: "P-Shot Cost in",
    intro:
      "Wondering about P-Shot prices in [city]? Local UK clinics typically charge between £1,200 and £2,000 — but there's a smarter, more affordable option.",
  },
  {
    type: "cheap",
    prefix: "cheap-p-shot",
    title: "Cheap P-Shot",
    h1Prefix: "Affordable P-Shot in",
    intro:
      "Looking for a more affordable P-Shot option near [city]? High street UK clinics charge a premium — discover how to get the same certified procedure for £300.",
  },
  {
    type: "best",
    prefix: "best-p-shot",
    title: "Best P-Shot",
    h1Prefix: "Best P-Shot Clinics in",
    intro:
      "Looking for the best P-Shot treatment near [city]? Quality and value don't have to be a trade-off — discover why UK patients are choosing Turkey for world-class care.",
  },
];

/** Build every programmatic slug: e.g. "p-shot-near-me-london" */
export function buildProgrammaticSlug(
  prefix: string,
  citySlug: string
): string {
  return `${prefix}-${citySlug}`;
}

/** Parse a programmatic slug back to { type, citySlug } | null */
export function parseProgrammaticSlug(
  slug: string
): { type: ProgrammaticPageType; city: UKCity } | null {
  for (const pt of PROGRAMMATIC_TYPES) {
    const expectedPrefix = `${pt.prefix}-`;
    if (slug.startsWith(expectedPrefix)) {
      const citySlug = slug.slice(expectedPrefix.length);
      const city = UK_CITIES.find((c) => c.slug === citySlug);
      if (city) return { type: pt, city };
    }
  }
  return null;
}

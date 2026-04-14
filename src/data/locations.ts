export interface CityData {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  countryName: string;
  flag: string;
  localCost: string;
  savingsPercent: number;
  currency: string;
  population?: string;
  isConversionFocused?: boolean;
}

export const locations: CityData[] = [
  // Turkey (conversion-focused)
  {
    slug: "p-shot-istanbul",
    name: "Istanbul",
    country: "turkey",
    countrySlug: "turkey",
    countryName: "Turkey",
    flag: "🇹🇷",
    localCost: "£300",
    savingsPercent: 0,
    currency: "GBP",
    population: "15 million",
    isConversionFocused: true,
  },
  {
    slug: "p-shot-antalya",
    name: "Antalya",
    country: "turkey",
    countrySlug: "turkey",
    countryName: "Turkey",
    flag: "🇹🇷",
    localCost: "£300",
    savingsPercent: 0,
    currency: "GBP",
    isConversionFocused: true,
  },
  {
    slug: "p-shot-ankara",
    name: "Ankara",
    country: "turkey",
    countrySlug: "turkey",
    countryName: "Turkey",
    flag: "🇹🇷",
    localCost: "£300",
    savingsPercent: 0,
    currency: "GBP",
    isConversionFocused: true,
  },
  {
    slug: "p-shot-izmir",
    name: "Izmir",
    country: "turkey",
    countrySlug: "turkey",
    countryName: "Turkey",
    flag: "🇹🇷",
    localCost: "£300",
    savingsPercent: 0,
    currency: "GBP",
    isConversionFocused: true,
  },
  {
    slug: "p-shot-bursa",
    name: "Bursa",
    country: "turkey",
    countrySlug: "turkey",
    countryName: "Turkey",
    flag: "🇹🇷",
    localCost: "£300",
    savingsPercent: 0,
    currency: "GBP",
    isConversionFocused: true,
  },

  // UK
  {
    slug: "p-shot-london",
    name: "London",
    country: "uk",
    countrySlug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    localCost: "£1,500–£2,000",
    savingsPercent: 70,
    currency: "GBP",
    population: "9 million",
  },
  {
    slug: "p-shot-manchester",
    name: "Manchester",
    country: "uk",
    countrySlug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    localCost: "£1,200–£1,800",
    savingsPercent: 70,
    currency: "GBP",
  },
  {
    slug: "p-shot-birmingham",
    name: "Birmingham",
    country: "uk",
    countrySlug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    localCost: "£1,200–£1,800",
    savingsPercent: 70,
    currency: "GBP",
  },
  {
    slug: "p-shot-leeds",
    name: "Leeds",
    country: "uk",
    countrySlug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    localCost: "£1,200–£1,600",
    savingsPercent: 70,
    currency: "GBP",
  },
  {
    slug: "p-shot-glasgow",
    name: "Glasgow",
    country: "uk",
    countrySlug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    localCost: "£1,000–£1,500",
    savingsPercent: 70,
    currency: "GBP",
  },
  {
    slug: "p-shot-liverpool",
    name: "Liverpool",
    country: "uk",
    countrySlug: "uk",
    countryName: "United Kingdom",
    flag: "🇬🇧",
    localCost: "£1,200–£1,600",
    savingsPercent: 70,
    currency: "GBP",
  },

  // USA
  {
    slug: "p-shot-new-york",
    name: "New York",
    country: "usa",
    countrySlug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    localCost: "$2,000–$3,500",
    savingsPercent: 75,
    currency: "USD",
    population: "8 million",
  },
  {
    slug: "p-shot-los-angeles",
    name: "Los Angeles",
    country: "usa",
    countrySlug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    localCost: "$2,000–$3,500",
    savingsPercent: 75,
    currency: "USD",
  },
  {
    slug: "p-shot-miami",
    name: "Miami",
    country: "usa",
    countrySlug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    localCost: "$1,800–$3,000",
    savingsPercent: 75,
    currency: "USD",
  },
  {
    slug: "p-shot-houston",
    name: "Houston",
    country: "usa",
    countrySlug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    localCost: "$1,800–$2,800",
    savingsPercent: 75,
    currency: "USD",
  },
  {
    slug: "p-shot-chicago",
    name: "Chicago",
    country: "usa",
    countrySlug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    localCost: "$1,800–$2,800",
    savingsPercent: 75,
    currency: "USD",
  },
  {
    slug: "p-shot-dallas",
    name: "Dallas",
    country: "usa",
    countrySlug: "usa",
    countryName: "United States",
    flag: "🇺🇸",
    localCost: "$1,800–$2,500",
    savingsPercent: 75,
    currency: "USD",
  },

  // Canada
  {
    slug: "p-shot-toronto",
    name: "Toronto",
    country: "canada",
    countrySlug: "canada",
    countryName: "Canada",
    flag: "🇨🇦",
    localCost: "CAD $2,500–$4,000",
    savingsPercent: 75,
    currency: "CAD",
    population: "3 million",
  },
  {
    slug: "p-shot-vancouver",
    name: "Vancouver",
    country: "canada",
    countrySlug: "canada",
    countryName: "Canada",
    flag: "🇨🇦",
    localCost: "CAD $2,500–$4,000",
    savingsPercent: 75,
    currency: "CAD",
  },
  {
    slug: "p-shot-calgary",
    name: "Calgary",
    country: "canada",
    countrySlug: "canada",
    countryName: "Canada",
    flag: "🇨🇦",
    localCost: "CAD $2,200–$3,500",
    savingsPercent: 75,
    currency: "CAD",
  },

  // Australia
  {
    slug: "p-shot-sydney",
    name: "Sydney",
    country: "australia",
    countrySlug: "australia",
    countryName: "Australia",
    flag: "🇦🇺",
    localCost: "AUD $2,500–$4,500",
    savingsPercent: 75,
    currency: "AUD",
    population: "5 million",
  },
  {
    slug: "p-shot-melbourne",
    name: "Melbourne",
    country: "australia",
    countrySlug: "australia",
    countryName: "Australia",
    flag: "🇦🇺",
    localCost: "AUD $2,500–$4,000",
    savingsPercent: 75,
    currency: "AUD",
  },
  {
    slug: "p-shot-brisbane",
    name: "Brisbane",
    country: "australia",
    countrySlug: "australia",
    countryName: "Australia",
    flag: "🇦🇺",
    localCost: "AUD $2,000–$3,500",
    savingsPercent: 75,
    currency: "AUD",
  },
];

export const countriesMeta: Record<string, { name: string; flag: string; description: string }> = {
  turkey: {
    name: "Turkey",
    flag: "🇹🇷",
    description: "Our certified clinics in Turkey offer world-class P-Shot treatment at £300 all-inclusive.",
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "UK patients save up to 70% by travelling to Turkey for P-Shot treatment vs local prices.",
  },
  usa: {
    name: "United States",
    flag: "🇺🇸",
    description: "US patients save up to 75% by travelling to Turkey for P-Shot treatment vs local prices.",
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    description: "Canadian patients save up to 75% by travelling to Turkey for P-Shot treatment vs local prices.",
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    description: "Australian patients save up to 75% by travelling to Turkey for P-Shot treatment vs local prices.",
  },
};

export function getCitiesByCountry(countrySlug: string): CityData[] {
  return locations.filter((l) => l.countrySlug === countrySlug);
}

export function getCityData(countrySlug: string, citySlug: string): CityData | undefined {
  return locations.find((l) => l.countrySlug === countrySlug && l.slug === citySlug);
}

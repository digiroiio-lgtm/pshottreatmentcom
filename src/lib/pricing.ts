// Single source of truth for prices. Approved by the clinic on 2026-11-22.
// Rules:
// - Each standalone price keeps its approved source currency and amount exactly.
// - Other currencies are converted through TRY with the fixed reference rates below, then rounded UP to the nearest 5.
// - Packages: published at the exact prices in the owner's approved package table (2026-11-22).
//   Those were derived from the separate cash prices minus 5%; calculatedPackagePrice() keeps the formula for checks.
// - Card price = published cash price x 1.25 (20% tax + 5% card fee). Not shown on the site until
//   CARD_PRICES_PUBLISHED is set to true (see docs/pricing.md: tax and consumer-law check pending).

export type Currency = "GBP" | "EUR" | "USD";
export const CURRENCIES: Currency[] = ["GBP", "EUR", "USD"];
export const SYMBOL: Record<Currency, string> = { GBP: "£", EUR: "€", USD: "$" };
export const CURRENCY_LABEL: Record<Currency, string> = { GBP: "British pound", EUR: "Euro", USD: "US dollar" };

/** Fixed reference rates (TRY per unit), 22 November 2026. Not live exchange rates. */
export const REFERENCE_RATES: Record<Currency, number> = { USD: 50.5697, EUR: 55.5123, GBP: 66.2223 };
export const REFERENCE_RATES_DATE = "2026-11-22";

export const PACKAGE_DISCOUNT = 0.05;
export const CARD_MULTIPLIER = 1.25;
/** Card prices stay off the public site until tax treatment and consumer rules are confirmed. */
export const CARD_PRICES_PUBLISHED = false;

export type PriceItemId = "doppler" | "pshot" | "gcell" | "bloodTests" | "eswt" | "pelvicFloor" | "nano" | "biofiller10" | "biofiller15" | "biofiller20";

type PriceItem = {
  id: PriceItemId;
  name: string;
  unit?: string;
  source: { currency: Currency; amount: number };
  /** Reference list price, shown struck through next to the cash price. */
  list?: { currency: Currency; amount: number };
  /** Shown on the website. Biofiller is held back until the site has a page that explains it (see docs/pricing.md). */
  published: boolean;
  href?: string;
};

export const PRICE_ITEMS: PriceItem[] = [
  { id: "doppler", name: "Penile Doppler ultrasound", source: { currency: "EUR", amount: 300 }, published: true, href: "/penile-doppler-antalya" },
  { id: "pshot", name: "Standard P-Shot", source: { currency: "GBP", amount: 300 }, published: true, href: "/p-shot" },
  { id: "gcell", name: "G-Cell Power P-Shot", source: { currency: "GBP", amount: 350 }, list: { currency: "GBP", amount: 400 }, published: true, href: "/p-shot" },
  { id: "bloodTests", name: "Comprehensive blood tests", source: { currency: "GBP", amount: 110 }, published: true, href: "/erectile-dysfunction-assessment" },
  { id: "eswt", name: "Shockwave therapy (ESWT)", unit: "per session", source: { currency: "GBP", amount: 110 }, published: true, href: "/shockwave-therapy-ed" },
  { id: "pelvicFloor", name: "Pelvic floor therapy", unit: "per session", source: { currency: "GBP", amount: 110 }, published: true },
  { id: "nano", name: "Nano Therapy for ED", source: { currency: "GBP", amount: 1490 }, published: true, href: "/nano-therapy-erectile-dysfunction" },
  { id: "biofiller10", name: "Biofiller 10 cc", source: { currency: "GBP", amount: 1100 }, published: false },
  { id: "biofiller15", name: "Biofiller 15 cc", source: { currency: "GBP", amount: 1200 }, published: false },
  { id: "biofiller20", name: "Biofiller 20 cc", source: { currency: "GBP", amount: 1300 }, published: false },
];

export type PackageId = "bloodDoppler" | "bloodDopplerGcell" | "eswt3" | "eswt6" | "pelvic3" | "comprehensive";

type PricePackage = { id: PackageId; name: string; items: { id: PriceItemId; qty: number }[]; approved: Record<Currency, number> };

/** Only the packages approved by the clinic. */
export const PACKAGES: PricePackage[] = [
  { id: "bloodDoppler", name: "Blood tests + penile Doppler", items: [{ id: "bloodTests", qty: 1 }, { id: "doppler", qty: 1 }], approved: { GBP: 345, EUR: 410, USD: 450 } },
  { id: "bloodDopplerGcell", name: "Blood tests + penile Doppler + G-Cell Power P-Shot", items: [{ id: "bloodTests", qty: 1 }, { id: "doppler", qty: 1 }, { id: "gcell", qty: 1 }], approved: { GBP: 680, EUR: 805, USD: 890 } },
  { id: "eswt3", name: "3 shockwave (ESWT) sessions", items: [{ id: "eswt", qty: 3 }], approved: { GBP: 315, EUR: 375, USD: 410 } },
  { id: "eswt6", name: "6 shockwave (ESWT) sessions", items: [{ id: "eswt", qty: 6 }], approved: { GBP: 630, EUR: 750, USD: 820 } },
  { id: "pelvic3", name: "3 pelvic floor therapy sessions", items: [{ id: "pelvicFloor", qty: 3 }], approved: { GBP: 315, EUR: 375, USD: 410 } },
  { id: "comprehensive", name: "Comprehensive ED: 2 G-Cell Power P-Shots + 6 ESWT + 3 pelvic floor sessions", items: [{ id: "gcell", qty: 2 }, { id: "eswt", qty: 6 }, { id: "pelvicFloor", qty: 3 }], approved: { GBP: 1605, EUR: 1920, USD: 2105 } },
];

const ceil5 = (value: number) => Math.ceil(value / 5 - 1e-9) * 5;
const toTry = (amount: number, currency: Currency) => amount * REFERENCE_RATES[currency];

/** Converts an approved amount; the approved source currency is returned unchanged. */
export function convert(amount: number, from: Currency, to: Currency): number {
  return from === to ? amount : ceil5(toTry(amount, from) / REFERENCE_RATES[to]);
}

export const getItem = (id: PriceItemId) => {
  const item = PRICE_ITEMS.find((i) => i.id === id);
  if (!item) throw new Error(`Unknown price item ${id}`);
  return item;
};

export const itemPrice = (id: PriceItemId, currency: Currency) => {
  const { source } = getItem(id);
  return convert(source.amount, source.currency, currency);
};

export const listPrice = (id: PriceItemId, currency: Currency) => {
  const { list } = getItem(id);
  return list ? convert(list.amount, list.currency, currency) : undefined;
};

/** Sum of the individual cash prices, in TRY, before the discount. */
const packageTry = (pkg: PricePackage) => pkg.items.reduce((sum, { id, qty }) => {
  const { source } = getItem(id);
  return sum + toTry(source.amount, source.currency) * qty;
}, 0);

/** Published package price: the approved figure from the owner's package table. */
export function packagePrice(id: PackageId, currency: Currency): number {
  const pkg = PACKAGES.find((p) => p.id === id);
  if (!pkg) throw new Error(`Unknown package ${id}`);
  return pkg.approved[currency];
}

/** The formula behind the approved table (separate prices in TRY minus 5%, converted). For checks only, not published. */
export function calculatedPackagePrice(id: PackageId, currency: Currency): number {
  const pkg = PACKAGES.find((p) => p.id === id)!;
  return (packageTry(pkg) * (1 - PACKAGE_DISCOUNT)) / REFERENCE_RATES[currency];
}

/** Separate prices, before the package discount, for the "you save" line. */
export function packageUndiscounted(id: PackageId, currency: Currency): number {
  const pkg = PACKAGES.find((p) => p.id === id)!;
  return pkg.items.reduce((sum, { id: itemId, qty }) => sum + itemPrice(itemId, currency) * qty, 0);
}

export const cardPrice = (cash: number) => Math.round(cash * CARD_MULTIPLIER * 100) / 100;

export const formatPrice = (amount: number, currency: Currency) =>
  `${SYMBOL[currency]}${amount.toLocaleString("en-GB", { minimumFractionDigits: Number.isInteger(amount) ? 0 : 2, maximumFractionDigits: 2 })}`;

export const publishedItems = () => PRICE_ITEMS.filter((item) => item.published);

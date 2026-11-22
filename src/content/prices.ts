// Price wording for page copy, built from the central pricing configuration so text never drifts from the price table.
import { CURRENCIES, formatPrice, getItem, itemPrice, listPrice, packagePrice, type PackageId, type PriceItemId } from "@/lib/pricing";

/** "£300 (about €360 / $395)": the approved source currency first, then the reference-rate conversions. */
export function priceText(id: PriceItemId): string {
  const source = getItem(id).source.currency;
  const others = CURRENCIES.filter((c) => c !== source).map((c) => formatPrice(itemPrice(id, c), c)).join(" / ");
  return `${formatPrice(itemPrice(id, source), source)} (about ${others})`;
}

export const listText = (id: PriceItemId) => formatPrice(listPrice(id, "GBP")!, "GBP");

export const packageText = (id: PackageId) =>
  `${formatPrice(packagePrice(id, "GBP"), "GBP")} (about ${formatPrice(packagePrice(id, "EUR"), "EUR")} / ${formatPrice(packagePrice(id, "USD"), "USD")})`;

export const PRICE_NOTE = "Euro and dollar amounts use fixed reference exchange rates from 22 November 2026, not live rates. Your written treatment plan confirms the total before you book.";

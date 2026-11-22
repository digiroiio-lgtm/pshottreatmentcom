// Data shared between rendered pages and their structured data, so markup never drifts from visible content.

import { CURRENCIES, CURRENCY_LABEL, SYMBOL, itemPrice } from "./pricing";

/** Standard P-Shot price per currency, from the central pricing configuration. */
export const advertisedFees = CURRENCIES.map((currency) => ({ currency, symbol: SYMBOL[currency], amount: String(itemPrice("pshot", currency)), label: CURRENCY_LABEL[currency] }));

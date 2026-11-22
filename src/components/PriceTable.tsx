"use client";

import Link from "next/link";
import { CurrencyProvider, useCurrency } from "@/context/CurrencyContext";
import {
  CARD_MULTIPLIER,
  CARD_PRICES_PUBLISHED,
  CURRENCIES,
  CURRENCY_LABEL,
  PACKAGE_DISCOUNT,
  PACKAGES,
  REFERENCE_RATES_DATE,
  SYMBOL,
  cardPrice,
  formatPrice,
  itemPrice,
  listPrice,
  packagePrice,
  packageUndiscounted,
  publishedItems,
  type Currency,
} from "@/lib/pricing";

const th = "px-4 md:px-6 py-3 font-semibold";
const td = "px-4 md:px-6 py-4 align-top";

function CurrencySwitch({ currency, setCurrency }: { currency: Currency; setCurrency: (c: Currency) => void }) {
  return (
    <div className="inline-flex rounded-full bg-slate-100 p-1 text-sm font-bold" role="group" aria-label="Currency">
      {CURRENCIES.map((c) => (
        <button key={c} type="button" aria-pressed={currency === c} onClick={() => setCurrency(c)} className={`px-4 py-1.5 rounded-full ${currency === c ? "bg-teal-700 text-black" : "text-slate-700"}`}>
          {SYMBOL[c]} {c}
        </button>
      ))}
    </div>
  );
}

function PriceTableInner() {
  const { currency, setCurrency } = useCurrency();
  const discount = Math.round(PACKAGE_DISCOUNT * 100);
  return (
    <section data-price className="space-y-8">
      <div className="rounded-2xl border border-teal-700/40 bg-surface overflow-hidden glow-gold">
        <div className="p-5 md:p-8 border-b border-slate-200 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-teal-800 mb-2">Prices at UZ Clinic Antalya</p>
            <h2 className="text-3xl font-bold text-heading">Treatment prices</h2>
            <p className="text-slate-600 mt-2 text-sm">Cash prices in {CURRENCY_LABEL[currency]}. Your written treatment plan confirms the final total before you book.</p>
          </div>
          <CurrencySwitch currency={currency} setCurrency={setCurrency} />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <caption className="sr-only">Individual treatment prices in {CURRENCY_LABEL[currency]}</caption>
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr><th scope="col" className={th}>Treatment</th><th scope="col" className={`${th} text-right`}>Price</th>{CARD_PRICES_PUBLISHED && <th scope="col" className={`${th} text-right`}>By card</th>}</tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {publishedItems().map((item) => {
                const price = itemPrice(item.id, currency);
                const list = listPrice(item.id, currency);
                return (
                  <tr key={item.id}>
                    <th scope="row" className={`${td} font-medium text-slate-900`}>
                      {item.href ? <Link href={item.href} className="hover:text-teal-800 underline-offset-4 hover:underline">{item.name}</Link> : item.name}
                      {item.unit && <span className="block text-xs font-normal text-slate-600">{item.unit}</span>}
                    </th>
                    <td className={`${td} text-right whitespace-nowrap`}>
                      {list && <span className="mr-2 text-sm text-slate-500 line-through" aria-label={`List price ${formatPrice(list, currency)}`}>{formatPrice(list, currency)}</span>}
                      <span className="text-xl font-bold text-teal-800">{formatPrice(price, currency)}</span>
                    </td>
                    {CARD_PRICES_PUBLISHED && <td className={`${td} text-right whitespace-nowrap text-slate-700`}>{formatPrice(cardPrice(price), currency)}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-teal-700/40 bg-surface overflow-hidden glow-gold">
        <div className="p-5 md:p-8 border-b border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wide text-teal-800 mb-2">{discount}% package discount</p>
          <h2 className="text-3xl font-bold text-heading">Packages</h2>
          <p className="text-slate-600 mt-2 text-sm">Each package is {discount}% less than the same items priced separately. Packages are offered only when the doctor considers them suitable after assessment.</p>
        </div>
        <ul className="divide-y divide-slate-100">
          {PACKAGES.map((pkg) => {
            const price = packagePrice(pkg.id, currency);
            const separate = packageUndiscounted(pkg.id, currency);
            return (
              <li key={pkg.id} className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="font-medium text-slate-900">{pkg.name}</p>
                <p className="sm:text-right whitespace-nowrap">
                  <span className="mr-2 text-sm text-slate-500 line-through" aria-label={`Separately ${formatPrice(separate, currency)}`}>{formatPrice(separate, currency)}</span>
                  <span className="text-xl font-bold text-teal-800">{formatPrice(price, currency)}</span>
                  {CARD_PRICES_PUBLISHED && <span className="block text-sm text-slate-600">By card {formatPrice(cardPrice(price), currency)}</span>}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="p-5 md:p-6 bg-slate-50 border-t border-slate-200 text-sm text-slate-700 space-y-2">
          <p>Prices in pounds, euros and dollars use fixed reference exchange rates from {REFERENCE_RATES_DATE}, not live rates, and are rounded up to the nearest 5.</p>
          {CARD_PRICES_PUBLISHED ? (
            <p>Card payments cost {Math.round((CARD_MULTIPLIER - 1) * 100)}% more than the cash price. All charges are shown before you book or pay.</p>
          ) : (
            <p>The coordinator confirms the total for your chosen payment method in writing before you book or pay.</p>
          )}
          <p>A price is not evidence of outcome. Suitability is decided by the doctor after assessment.</p>
        </div>
      </div>
    </section>
  );
}

// The currency state is only needed here, so the provider lives here instead of in the root layout.
export default function PriceTable() {
  return (
    <CurrencyProvider>
      <PriceTableInner />
    </CurrencyProvider>
  );
}

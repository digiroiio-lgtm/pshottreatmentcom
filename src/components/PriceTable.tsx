"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { advertisedFees as fees } from "@/lib/page-data";


export default function PriceTable() {
  const { currency, setCurrency } = useCurrency();
  return (
    <section data-price>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-200">
          <p className="text-xs font-bold uppercase tracking-wide text-teal-700 mb-2">Advertised treatment fee</p>
          <h2 className="text-3xl font-extrabold text-gray-950">Choose a billing currency</h2>
          <p className="text-gray-600 mt-2">These are stated billing options, not live exchange-rate conversions.</p>
          <div className="inline-flex mt-4 rounded-full bg-slate-100 p-1 text-sm font-bold" role="group" aria-label="Billing currency">
            {fees.map((fee) => (
              <button key={fee.currency} type="button" aria-pressed={currency === fee.currency} onClick={() => setCurrency(fee.currency as "GBP" | "EUR" | "USD")} className={`px-4 py-1.5 rounded-full ${currency === fee.currency ? "bg-teal-800 text-white" : "text-slate-700"}`}>
                {fee.symbol} {fee.currency}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr><th className="px-6 py-3">Currency</th><th className="px-6 py-3">Fee</th><th className="px-6 py-3">Scope</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fees.map((fee) => (
                <tr key={fee.currency} className={currency === fee.currency ? "bg-teal-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900">{fee.label}</td>
                  <td className="px-6 py-4 text-2xl font-extrabold text-teal-800">{fee.symbol}{fee.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Scope is confirmed in your written treatment plan.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-200 text-sm text-slate-800">What the fee includes is confirmed in your written treatment plan after assessment. Request an itemised quote before you decide.</div>
      </div>
    </section>
  );
}

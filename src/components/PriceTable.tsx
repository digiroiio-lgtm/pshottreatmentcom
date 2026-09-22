"use client";

import { useCurrency } from "@/context/CurrencyContext";

const fees = [
  { currency: "GBP", symbol: "£", amount: "300", label: "British pound" },
  { currency: "EUR", symbol: "€", amount: "300", label: "Euro" },
  { currency: "USD", symbol: "$", amount: "300", label: "US dollar" },
];

export default function PriceTable() {
  const { currency } = useCurrency();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-6 md:p-8 border-b border-gray-200">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Advertised treatment fee</p>
          <h2 className="text-3xl font-extrabold text-gray-950">Choose a billing currency</h2>
          <p className="text-gray-600 mt-2">These are stated billing options, not live exchange-rate conversions.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr><th className="px-6 py-3">Currency</th><th className="px-6 py-3">Fee</th><th className="px-6 py-3">Scope</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fees.map((fee) => (
                <tr key={fee.currency} className={currency === fee.currency ? "bg-blue-50" : "bg-white"}>
                  <td className="px-6 py-4 font-medium text-gray-900">{fee.label}</td>
                  <td className="px-6 py-4 text-2xl font-extrabold text-blue-800">{fee.symbol}{fee.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Not independently verified. Request the complete itemised scope in writing.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-amber-50 border-t border-amber-200 text-sm text-amber-950">
          Flights, hotel, transfers, tests, medication, extra sessions and complication care are not assumed to be included. Request an itemised written quote before paying.
        </div>
      </div>
    </section>
  );
}

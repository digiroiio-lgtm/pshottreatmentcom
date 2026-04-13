"use client";
import { useCurrency } from "@/context/CurrencyContext";

export default function PriceTable() {
  const { currency } = useCurrency();

  const rows = [
    { currency: "GBP", symbol: "£", price: "300", flag: "🇬🇧", label: "British Pound" },
    { currency: "EUR", symbol: "€", price: "300", flag: "🇪🇺", label: "Euro" },
    { currency: "USD", symbol: "$", price: "300", flag: "🇺🇸", label: "US Dollar" },
  ];

  const competitors = [
    { country: "UK Clinic", price: "£1,200–£2,000" },
    { country: "US Clinic", price: "$1,500–$2,500" },
    { country: "EU Clinic", price: "€1,000–€1,800" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Transparent Pricing</h2>
          <p className="text-gray-500 text-lg">All-inclusive. No hidden fees. Same price regardless of your nationality.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-2 border-blue-600 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">OUR PRICE</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-semibold text-gray-500 border-b border-blue-200">
                  <th className="pb-3">Currency</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Includes</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.currency} className={`border-b border-blue-100 last:border-0 ${currency === r.currency ? "bg-blue-100 font-bold" : ""}`}>
                    <td className="py-3 flex items-center gap-2">{r.flag} {r.label}</td>
                    <td className="py-3 text-2xl font-extrabold text-blue-700">{r.symbol}{r.price}</td>
                    <td className="py-3 text-sm text-gray-600">All-in</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {["✅ No hidden fees", "✅ Same-day treatment", "✅ Certified doctor", "✅ Medical aftercare", "✅ Optional hotel & transfer"].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">COMPETITOR PRICES</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-semibold text-gray-500 border-b border-gray-200">
                  <th className="pb-3">Location</th>
                  <th className="pb-3">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr key={c.country} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 text-gray-700">{c.country}</td>
                    <td className="py-3 text-xl font-bold text-red-500">{c.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <p className="text-red-700 font-bold text-lg">You save up to 70%</p>
              <p className="text-red-500 text-sm">Same medical procedure. Different location.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

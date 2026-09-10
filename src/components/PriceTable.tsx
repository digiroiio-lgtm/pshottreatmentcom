"use client";
import { useCurrency } from "@/context/CurrencyContext";
import { prices } from "@/lib/site-config";

const currencyNames: Record<string, { flag: string; label: string }> = {
  GBP: { flag: "🇬🇧", label: "British Pound" },
  EUR: { flag: "🇪🇺", label: "Euro" },
  USD: { flag: "🇺🇸", label: "US Dollar" },
};

const competitors = [
  { country: "UK Clinic", price: "£1,200–£2,000" },
  { country: "US Clinic", price: "$1,500–$2,500" },
  { country: "EU Clinic", price: "€1,000–€1,800" },
];

/**
 * Still a client component: it highlights the row matching the visitor's
 * selected currency. The highlight is a background colour only, so it settles
 * after hydration without moving anything on the page.
 */
export default function PriceTable() {
  const { currency } = useCurrency();

  return (
    <section aria-labelledby="pricing-heading" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
          >
            Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            All-inclusive. No hidden fees. Same price regardless of your
            nationality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-2 border-blue-700 rounded-2xl p-8">
            <p className="mb-6">
              <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                OUR PRICE
              </span>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">
                  P-Shot treatment price by currency
                </caption>
                <thead>
                  <tr className="text-left text-sm font-semibold text-gray-700 border-b border-blue-200">
                    <th scope="col" className="pb-3">
                      Currency
                    </th>
                    <th scope="col" className="pb-3">
                      Price
                    </th>
                    <th scope="col" className="pb-3">
                      Includes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((p) => {
                    const meta = currencyNames[p.currency];
                    return (
                      <tr
                        key={p.currency}
                        className={`border-b border-blue-100 last:border-0 ${
                          currency === p.currency ? "bg-blue-100 font-bold" : ""
                        }`}
                      >
                        <th
                          scope="row"
                          className="py-3 font-normal text-left whitespace-nowrap"
                        >
                          <span aria-hidden="true">{meta.flag}</span>{" "}
                          {meta.label}
                        </th>
                        <td className="py-3 text-2xl font-extrabold text-blue-700">
                          {p.symbol}
                          {p.amount}
                        </td>
                        <td className="py-3 text-sm text-gray-700">All-in</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {[
                "No hidden fees",
                "Same-day treatment",
                "Certified doctor",
                "Medical aftercare",
                "Optional hotel & transfer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-green-700">
                    ✅
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <p className="mb-6">
              <span className="bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                COMPETITOR PRICES
              </span>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">
                  Typical P-Shot cost at clinics in other countries
                </caption>
                <thead>
                  <tr className="text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
                    <th scope="col" className="pb-3">
                      Location
                    </th>
                    <th scope="col" className="pb-3">
                      Typical Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c) => (
                    <tr key={c.country} className="border-b border-gray-100 last:border-0">
                      <th scope="row" className="py-3 font-normal text-left text-gray-700">
                        {c.country}
                      </th>
                      <td className="py-3 text-xl font-bold text-red-700">
                        {c.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <p className="text-red-800 font-bold text-lg">You save up to 70%</p>
              <p className="text-red-700 text-sm">
                Same medical procedure. Different location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

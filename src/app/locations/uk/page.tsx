import type { Metadata } from "next";
import Link from "next/link";
import { UK_CITIES, LONDON_AREAS, PROGRAMMATIC_TYPES, buildProgrammaticSlug } from "@/lib/uk-locations";

export const metadata: Metadata = {
  title: "P-Shot in the UK | Save 70% with Turkey Treatment",
  description:
    "Find P-Shot treatment across the UK. London, Manchester, Birmingham and more. UK clinics charge £1,200–£2,000 — get the same procedure in Turkey for £300.",
  keywords: [
    "P-Shot UK",
    "P-Shot London",
    "P-Shot Manchester",
    "P-Shot near me UK",
    "P-Shot cost UK",
    "P-Shot Turkey",
  ],
  alternates: { canonical: "https://pshottreatment.com/locations/uk" },
};

const WHATSAPP_URL =
  "https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment";

export default function UKLocationsPage() {
  const tier1 = UK_CITIES.filter((c) => c.tier === 1);
  const tier2 = UK_CITIES.filter((c) => c.tier === 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            <span className="text-yellow-300">🇬🇧</span>
            <span>UK Patients Save 70% with Turkey Treatment</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            P-Shot Treatment in the UK
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            UK clinics charge between <strong className="text-white">£1,200 and £2,000</strong> for a
            P-Shot. Our certified clinic in Turkey provides the same procedure for just{" "}
            <strong className="text-yellow-300">£300</strong> — all-inclusive, no hidden fees.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full text-base transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Now — Free Consultation
          </a>
        </div>
      </section>

      {/* Tier 1 Cities */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            Major UK Cities
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Find P-Shot information for your city.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tier1.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/uk/${city.slug}`}
                className="group bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl p-5 transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700">
                    P-Shot in {city.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-blue-500 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">{city.region}</p>
                <p className="text-xs text-red-500 font-medium mt-2">
                  Local price: £1,200–£2,000
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* London Sub-Areas */}
      <section className="py-12 bg-blue-50 border-t border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            P-Shot in London — By Area
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Serving patients from every London borough.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {LONDON_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/uk/london/${area.slug}`}
                className="bg-white border border-blue-200 hover:border-blue-500 hover:text-blue-700 text-gray-700 text-sm font-medium px-4 py-3 rounded-xl text-center transition-all hover:shadow-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 2 Cities */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            More UK Cities
          </h2>
          <p className="text-gray-500 text-center mb-8">
            P-Shot information for cities across the UK.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {tier2.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/uk/${city.slug}`}
                className="group bg-white border border-gray-200 hover:border-blue-500 rounded-xl p-4 transition-all hover:shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1">
                  {city.name}
                </h3>
                <p className="text-xs text-gray-500">{city.region}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programmatic Quick Links */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-2">
            {UK_CITIES.flatMap((city) =>
              PROGRAMMATIC_TYPES.map((pt) => ({
                label: `${pt.title} in ${city.name}`,
                href: `/${buildProgrammaticSlug(pt.prefix, city.slug)}`,
              }))
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-gray-200 hover:border-blue-400 hover:text-blue-700 text-gray-600 text-xs px-3 py-1.5 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Home link */}
      <div className="text-center py-6 bg-white border-t border-gray-100">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium underline underline-offset-2"
        >
          ← Back to P-Shot Treatment Home
        </Link>
      </div>
    </>
  );
}

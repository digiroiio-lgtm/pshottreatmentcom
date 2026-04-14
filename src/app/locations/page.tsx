import type { Metadata } from "next";
import Link from "next/link";
import { countriesMeta, getCitiesByCountry } from "@/data/locations";

export const metadata: Metadata = {
  title: "P-Shot Locations – Find Treatment Near You or in Turkey",
  description:
    "Find P-Shot treatment near you or compare costs with Turkey. We serve patients from the UK, USA, Canada, Australia and more. Book for £300.",
  alternates: { canonical: "https://pshottreatment.com/locations" },
};

const countryOrder = ["turkey", "uk", "usa", "canada", "australia"];

export default function LocationsPage() {
  return (
    <div className="pt-6">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">P-Shot Locations</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Find P-Shot treatment near you, or discover why thousands of patients choose Turkey — the same certified procedure at just £300.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Turkey highlight */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 mb-10 text-center">
          <div className="text-4xl mb-3">🇹🇷</div>
          <h2 className="text-2xl font-bold mb-2">Turkey – £300 All-Inclusive</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Our certified clinics in Turkey offer the exact same P-Shot procedure as UK & US clinics — for just £300. No hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {getCitiesByCountry("turkey").map((city) => (
              <Link
                key={city.slug}
                href={`/locations/turkey/${city.slug}`}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <Link
            href="/locations/turkey"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            View Turkey Clinics →
          </Link>
        </div>

        {/* Other countries */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare P-Shot Costs by Country</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {countryOrder.filter((c) => c !== "turkey").map((countrySlug) => {
            const meta = countriesMeta[countrySlug];
            const cities = getCitiesByCountry(countrySlug);
            return (
              <div key={countrySlug} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{meta.flag}</span>
                  <h3 className="text-xl font-bold text-gray-900">{meta.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{meta.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cities.slice(0, 3).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${countrySlug}/${city.slug}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                  {cities.length > 3 && (
                    <span className="text-xs text-gray-400 self-center">+{cities.length - 3} more</span>
                  )}
                </div>
                <Link
                  href={`/locations/${countrySlug}`}
                  className="text-blue-700 hover:text-blue-900 font-medium text-sm"
                >
                  View all {meta.name} cities →
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Book? Skip Local Prices.</h3>
          <p className="text-blue-100 mb-8">
            Wherever you are in the world, our Turkey clinic saves you up to 75%. Same procedure. Certified doctors. WhatsApp us to start.
          </p>
          <a
            href="https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp – Book for £300
          </a>
        </div>
      </div>
    </div>
  );
}

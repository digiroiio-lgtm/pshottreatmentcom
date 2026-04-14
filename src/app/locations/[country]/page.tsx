import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCitiesByCountry, countriesMeta } from "@/data/locations";

interface Props {
  params: Promise<{ country: string }>;
}

const validCountries = ["turkey", "uk", "usa", "canada", "australia"];

export async function generateStaticParams() {
  return validCountries.map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  if (!countriesMeta[country]) return {};

  const { name, flag } = countriesMeta[country];
  const title = country === "turkey"
    ? `P-Shot Treatment in Turkey – £300 All-Inclusive | Certified Clinics`
    : `P-Shot in ${name} – Compare Costs & Turkey Alternative (£300)`;
  const description = country === "turkey"
    ? `Get a P-Shot in Turkey for just £300 all-inclusive. Certified clinics in Istanbul, Antalya, Ankara, Izmir & Bursa. 1000+ patients treated.`
    : `Compare P-Shot costs across ${name} cities vs Turkey. Save up to 70–75%. Certified doctors, same-day procedure. ${flag}`;

  return {
    title,
    description,
    alternates: { canonical: `https://pshottreatment.com/locations/${country}` },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  if (!countriesMeta[country]) notFound();

  const cities = getCitiesByCountry(country);
  const meta = countriesMeta[country];
  const isTurkey = country === "turkey";

  return (
    <div className="pt-6">
      <div className={`${isTurkey ? "bg-gradient-to-br from-blue-700 to-blue-900 text-white" : "bg-gray-50"} py-14 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{meta.flag}</div>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isTurkey ? "text-white" : "text-gray-900"}`}>
            {isTurkey ? "P-Shot Treatment in Turkey" : `P-Shot in ${meta.name}`}
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${isTurkey ? "text-blue-100" : "text-gray-500"}`}>
            {meta.description}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {!isTurkey && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12 text-center">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              💡 {meta.name} patients save up to 70–75% by choosing Turkey
            </p>
            <p className="text-gray-600 text-sm">
              Same procedure, certified doctors, English-speaking staff — for just £300 all-inclusive.
            </p>
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isTurkey ? "Choose Your City" : `P-Shot by City in ${meta.name}`}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${country}/${city.slug}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{city.flag}</span>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  P-Shot {city.name}
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                {isTurkey ? "From £300 all-inclusive" : `Local cost: ${city.localCost}`}
              </p>
              {!isTurkey && (
                <p className="text-sm text-green-600 font-medium mt-1">Save {city.savingsPercent}% vs Turkey</p>
              )}
            </Link>
          ))}
        </div>

        {/* Back to all locations */}
        <div className="text-center">
          <Link href="/locations" className="text-blue-700 hover:text-blue-900 font-medium">
            ← All Locations
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            {isTurkey ? "Book Your P-Shot in Turkey Today" : `Don't Pay ${meta.name} Prices`}
          </h3>
          <p className="text-blue-100 mb-8">
            {isTurkey
              ? "£300 all-inclusive. WhatsApp us to book in minutes."
              : `Travel to Turkey and save up to 75%. Same procedure. Certified doctors. Just £300.`}
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

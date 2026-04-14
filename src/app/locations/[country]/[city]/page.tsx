import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getCityData, getCitiesByCountry } from "@/data/locations";

interface Props {
  params: Promise<{ country: string; city: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    country: loc.countrySlug,
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = await params;
  const cityData = getCityData(country, city);
  if (!cityData) return {};

  const { name, countryName, isConversionFocused } = cityData;

  const title = isConversionFocused
    ? `P-Shot in ${name} – £300 All-Inclusive | Certified Clinic`
    : `P-Shot in ${name} – Cost, Results & Turkey Alternative (£300)`;

  const description = isConversionFocused
    ? `Get a P-Shot in ${name}, ${countryName} for just £300 all-inclusive. Certified doctors, same-day procedure, 1000+ patients treated. Book via WhatsApp today.`
    : `Compare P-Shot treatment in ${name} vs Turkey. Local clinics charge ${cityData.localCost}. Save up to ${cityData.savingsPercent}% with our certified Turkey clinic at £300. Same-day procedure.`;

  return {
    title,
    description,
    keywords: [
      `P-Shot ${name}`,
      `P-Shot in ${name}`,
      `P-Shot cost ${name}`,
      `P-Shot treatment ${name}`,
      `P-Shot ${countryName}`,
      "P-Shot Turkey",
      "P-Shot cheap",
    ],
    alternates: {
      canonical: `https://pshottreatment.com/locations/${country}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://pshottreatment.com/locations/${country}/${city}`,
    },
  };
}

export default async function LocationCityPage({ params }: Props) {
  const { country, city } = await params;
  const cityData = getCityData(country, city);
  if (!cityData) notFound();

  const { name, countryName, flag, localCost, savingsPercent, isConversionFocused } = cityData;
  const nearbyCities = getCitiesByCountry(country)
    .filter((c) => c.slug !== city)
    .slice(0, 4);

  if (isConversionFocused) {
    return <TurkeyLocationPage name={name} countryName={countryName} flag={flag} nearbyCities={nearbyCities} />;
  }

  return (
    <ComparisonLocationPage
      name={name}
      countryName={countryName}
      flag={flag}
      localCost={localCost}
      savingsPercent={savingsPercent}
      nearbyCities={nearbyCities}
    />
  );
}

function TurkeyLocationPage({
  name,
  countryName,
  flag,
  nearbyCities,
}: {
  name: string;
  countryName: string;
  flag: string;
  nearbyCities: Array<{ name: string; slug: string; countrySlug: string }>;
}) {
  return (
    <div className="pt-6">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">{flag}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            P-Shot Treatment in {name}, {countryName}
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            World-class P-Shot treatment for just £300 all-inclusive. Certified doctors, same-day procedure, English-speaking staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book via WhatsApp – £300
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Price box */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-12">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">All-Inclusive Price</p>
          <p className="text-6xl font-extrabold text-green-700 mb-2">£300</p>
          <p className="text-gray-600">Same procedure as UK & US clinics — 70% cheaper</p>
        </div>

        {/* What's included */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            "Doctor consultation",
            "PRP extraction & processing",
            "P-Shot injection procedure",
            "Medical aftercare instructions",
            "English-speaking medical staff",
            "Post-procedure support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
              <span className="text-green-500 text-xl">✅</span>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Why choose Turkey */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose {name} for Your P-Shot?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "💰", title: "70% Cheaper", desc: "Same procedure, fraction of the Western price." },
            { icon: "🏥", title: "Certified Doctors", desc: "Internationally trained urologists and specialists." },
            { icon: "⚡", title: "Same-Day Treatment", desc: "Fly in, treated, fly home — all in 24–36 hours." },
            { icon: "🌍", title: "1000+ Patients", desc: "Serving UK, US, EU & Australian patients since 2019." },
            { icon: "✈️", title: "Easy to Reach", desc: `${name} is 3–4 hours from the UK, 4–5 hours from Western Europe.` },
            { icon: "📞", title: "English Support", desc: "Full English-speaking team from booking to aftercare." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
          <h3 className="font-bold text-gray-900 mb-4">Learn More</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/p-shot-price" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Pricing
            </Link>
            <Link href="/p-shot-before-after" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Before & After Results
            </Link>
            <Link href="/blog/p-shot-cost-uk" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Cost Guide
            </Link>
            <Link href="/p-shot-reviews" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Patient Reviews
            </Link>
          </div>
        </div>

        {/* Nearby Turkey cities */}
        {nearbyCities.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Turkey Clinics</h3>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.countrySlug}/${c.slug}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  P-Shot {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Final CTA */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Book Your P-Shot in {name}?</h3>
          <p className="text-blue-100 mb-8">£300 all-inclusive. Same-day procedure. WhatsApp us to get started — typically replies within minutes.</p>
          <a
            href="https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Now – Book for £300
          </a>
        </div>
      </div>
    </div>
  );
}

function ComparisonLocationPage({
  name,
  countryName,
  flag,
  localCost,
  savingsPercent,
  nearbyCities,
}: {
  name: string;
  countryName: string;
  flag: string;
  localCost: string;
  savingsPercent: number;
  nearbyCities: Array<{ name: string; slug: string; countrySlug: string }>;
}) {
  return (
    <div className="pt-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">{flag}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          P-Shot Treatment in {name}
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Looking for a P-Shot in {name}? Compare local costs and discover why thousands of {countryName} patients choose Turkey — saving up to {savingsPercent}%.
        </p>
      </div>

      {/* Cost comparison */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">P-Shot Cost: {name} vs Turkey</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">P-Shot in {name}</p>
            <p className="text-4xl font-extrabold text-red-700 mb-2">{localCost}</p>
            <p className="text-gray-600 text-sm">Typical local clinic prices</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">P-Shot in Turkey</p>
            <p className="text-4xl font-extrabold text-green-700 mb-2">£300</p>
            <p className="text-gray-600 text-sm">All-inclusive at our certified clinic</p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center mb-12">
          <p className="text-2xl font-bold text-yellow-800">Save up to {savingsPercent}% vs {name} prices</p>
          <p className="text-gray-600 mt-2">Same PRP procedure. Same certified doctors. A fraction of the price.</p>
        </div>

        {/* Why travel to Turkey */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why {countryName} Patients Travel to Turkey</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "70% Cost Saving", desc: `${countryName} clinics charge ${localCost}. Our Turkey clinic charges £300 — all-inclusive, no hidden fees.` },
            { title: "Same Medical Standard", desc: "Turkish private clinics operate under strict Ministry of Health regulation. Many doctors trained in the UK, USA, or Germany." },
            { title: "Short Travel Time", desc: "Direct flights to Istanbul from major cities take 3–10 hours depending on your location. Most patients are treated within 24 hours of arrival." },
            { title: "All-Inclusive Package", desc: "Consultation, procedure, aftercare, and English-speaking support. Optional airport transfers and hotel available." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Travel process */}
        <h3 className="text-3xl font-bold text-gray-900 mb-6">How the Travel Process Works</h3>
        <div className="space-y-4 mb-12">
          {[
            { step: "1", title: "WhatsApp Us", desc: "Message us to book a free consultation. We'll discuss your history and goals, usually within hours." },
            { step: "2", title: "Book Your Flights", desc: "Fly direct to Istanbul or Antalya. Both are well-served from {name} and nearby airports." },
            { step: "3", title: "Arrive & Be Treated", desc: "We pick you up from the airport (optional). Consultation and treatment on day 1 or day 2." },
            { step: "4", title: "Return Home", desc: "Most patients fly home the same day or next morning. Begin noticing results within 2–4 weeks." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">{s.step}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc.replace("{name}", name)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
          <h3 className="font-bold text-gray-900 mb-4">Learn More</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/p-shot-price" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Pricing
            </Link>
            <Link href="/p-shot-before-after" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Before & After Results
            </Link>
            <Link href="/blog/p-shot-cost-uk" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Cost Guide
            </Link>
            <Link href="/blog/p-shot-in-turkey-is-it-safe" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Is P-Shot in Turkey Safe?
            </Link>
          </div>
        </div>

        {/* Nearby cities in same country */}
        {nearbyCities.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Cities in {countryName}</h3>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.countrySlug}/${c.slug}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  P-Shot {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Skip {name} Prices. Book Turkey for £300.</h3>
          <p className="text-blue-100 mb-8">Same procedure. Same results. Save up to {savingsPercent}%. WhatsApp us for a free consultation — usually responds within minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now – Book for £300
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

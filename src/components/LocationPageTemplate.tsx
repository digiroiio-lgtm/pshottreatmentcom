import Link from "next/link";
import CtaBlock from "./CtaBlock";
import Testimonials from "./Testimonials";
import SocialProofBanner from "./SocialProofBanner";

interface RelatedCity {
  name: string;
  slug: string;
}

interface Props {
  /** Primary display name, e.g. "London" or "Chelsea, London" */
  displayName: string;
  /** The city name only, e.g. "London" */
  cityName: string;
  /** URL slug for the city, e.g. "london" */
  citySlug: string;
  /** Sub-area name, e.g. "Chelsea" — only for London area pages */
  areaName?: string;
  /** Sub-area slug, e.g. "chelsea" */
  areaSlug?: string;
  /** Variant controls the H1 / intro copy */
  variant?: "city" | "near-me" | "cost" | "cheap" | "best";
  /** Custom H1 override */
  h1?: string;
  /** Custom intro paragraph override */
  introParagraph?: string;
  /** Other cities to link to */
  otherCities: RelatedCity[];
  /** London areas to link to (only on London city page) */
  londonAreas?: RelatedCity[];
}

const WHATSAPP_URL =
  "https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment";

const FAQ_ITEMS = (city: string) => [
  {
    q: `How much does a P-Shot cost in ${city}?`,
    a: `P-Shot clinics in ${city} typically charge between £1,200 and £2,000 per session. Many UK patients choose to travel to Turkey, where the same certified procedure costs just £300 all-inclusive.`,
  },
  {
    q: `Is the P-Shot available on the NHS?`,
    a: `No, the P-Shot (Priapus Shot) is not available on the NHS. It is a private procedure. UK private clinics charge £1,200–£2,000, while clinics in Turkey offer the same procedure for £300.`,
  },
  {
    q: `How long does a P-Shot take?`,
    a: `The P-Shot procedure takes approximately 30–45 minutes including preparation. Results are typically noticeable within 4–8 weeks.`,
  },
  {
    q: `Is it safe to travel to Turkey for a P-Shot?`,
    a: `Yes. Turkey is one of the world's leading medical tourism destinations. Thousands of UK patients travel to Istanbul each year for high-quality, affordable treatments performed by certified specialists.`,
  },
  {
    q: `How much can I save by getting a P-Shot in Turkey instead of ${city}?`,
    a: `You can save between £900 and £1,700 by choosing Turkey over ${city}. The Turkey price is £300 all-inclusive, compared to £1,200–£2,000 in ${city}.`,
  },
];

export default function LocationPageTemplate({
  displayName,
  cityName,
  citySlug,
  areaName,
  areaSlug,
  variant = "city",
  h1,
  introParagraph,
  otherCities,
  londonAreas,
}: Props) {
  const faqItems = FAQ_ITEMS(displayName);

  const defaultH1 =
    h1 ??
    (variant === "near-me"
      ? `P-Shot Near Me in ${displayName}`
      : variant === "cost"
      ? `P-Shot Cost in ${displayName}`
      : variant === "cheap"
      ? `Affordable P-Shot in ${displayName}`
      : variant === "best"
      ? `Best P-Shot Clinics in ${displayName}`
      : `P-Shot in ${displayName}`);

  const defaultIntro =
    introParagraph ??
    (variant === "near-me"
      ? `Searching for a P-Shot provider near you in ${displayName}? You're not alone — thousands of UK men search for local P-Shot clinics every month. While local options exist, most charge between £1,200 and £2,000. There's a better way.`
      : variant === "cost"
      ? `Wondering about P-Shot prices in ${displayName}? Private clinics in ${displayName} typically charge between £1,200 and £2,000 for a single P-Shot session. Many men from ${displayName} are now opting to travel to Turkey and save over 70%.`
      : variant === "cheap"
      ? `Looking for a more affordable P-Shot option near ${displayName}? High-street clinics charge a premium. Discover how to get the same certified P-Shot procedure for just £300 all-inclusive.`
      : variant === "best"
      ? `Looking for the best P-Shot treatment near ${displayName}? Quality and value don't have to be a trade-off. Discover why hundreds of UK patients are choosing Turkey for world-class P-Shot care at a fraction of the local cost.`
      : `Looking for P-Shot treatment in ${displayName}? You've found the right place. While local clinics in ${displayName} charge £1,200–£2,000 for a P-Shot, we offer the same certified procedure in Turkey for just £300 — all-inclusive.`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // Build breadcrumb path
  const breadcrumbs: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "UK", href: "/locations/uk" },
  ];
  if (areaName) {
    breadcrumbs.push({ label: "London", href: "/locations/uk/london" });
    breadcrumbs.push({
      label: areaName,
      href: `/locations/uk/london/${areaSlug}`,
    });
  } else if (citySlug !== "uk") {
    breadcrumbs.push({
      label: cityName,
      href: `/locations/uk/${citySlug}`,
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center gap-1 text-sm text-blue-300 mb-6 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1">
                {i > 0 && <span className="text-blue-500">›</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            <span className="text-yellow-300">🇬🇧</span>
            <span>UK Patients Save 70% with Turkey Treatment</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {defaultH1}
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {defaultIntro}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-7 rounded-full text-base transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now – Free Consultation
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-7 rounded-full text-base transition-colors border border-white/30"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-12 bg-red-50 border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Why Are {displayName} Patients Choosing Turkey?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "💸",
                title: "High Local Prices",
                body: `P-Shot clinics in ${displayName} charge £1,200–£2,000. In Turkey, the same certified procedure costs just £300 all-in.`,
              },
              {
                icon: "⏳",
                title: "Long Waiting Times",
                body: `Many ${displayName} clinics have waiting lists of 4–8 weeks. We offer same-week and same-day appointments in Istanbul.`,
              },
              {
                icon: "🔍",
                title: "Limited Availability",
                body: `Specialist P-Shot providers are scarce outside major UK cities. Our Istanbul clinic is fully equipped and accepts patients year-round.`,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            P-Shot Price Comparison
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Same certified procedure — a fraction of the cost.
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">
                    Location
                  </th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">
                    Typical Price
                  </th>
                  <th className="text-left py-3 px-5 font-semibold text-gray-600">
                    All-Inclusive
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-5 text-gray-700">
                    🇬🇧 {displayName}
                  </td>
                  <td className="py-3 px-5 font-bold text-red-500 text-base">
                    £1,200–£2,000
                  </td>
                  <td className="py-3 px-5 text-gray-400">❌ No</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-5 text-gray-700">🇺🇸 US Clinic</td>
                  <td className="py-3 px-5 font-bold text-red-500 text-base">
                    $1,500–$2,500
                  </td>
                  <td className="py-3 px-5 text-gray-400">❌ No</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-5 font-bold text-blue-700">
                    🇹🇷 Turkey (Our Clinic)
                  </td>
                  <td className="py-3 px-5 font-extrabold text-blue-700 text-xl">
                    £300
                  </td>
                  <td className="py-3 px-5 text-green-600 font-semibold">
                    ✅ Yes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            * UK prices based on public clinic listings. Turkey price is our all-inclusive rate.
          </p>
        </div>
      </section>

      {/* SEO Paragraph */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            P-Shot Clinics in {displayName} — What You Need to Know
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The best P-Shot clinics in {displayName} are specialist private practices
            that provide Platelet-Rich Plasma (PRP) injections for erectile
            dysfunction and sexual enhancement. Top providers in{" "}
            {displayName} operate out of private medical centres but typically
            charge a premium for the procedure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;ve searched for <strong>P-Shot near me in {displayName}</strong>,
            you&apos;ve likely encountered prices between £1,200 and £2,000 per
            session — with no guarantee of results and limited aftercare. Many{" "}
            {displayName} patients are now choosing to travel to Istanbul,
            Turkey, where they can receive the exact same certified P-Shot
            procedure for just £300, all-inclusive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Many UK patients from {displayName} choose Turkey due to the
            dramatic cost savings — up to 70% — combined with the high
            quality of care at our JCI-aligned clinic. Istanbul is just a
            3–4 hour flight from most UK airports, and most patients are home
            within 48 hours of their procedure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="px-4 py-2">
        <CtaBlock
          title={`Save 70% on Your P-Shot — From ${displayName} to Turkey`}
          subtitle={`Join hundreds of ${displayName} patients who chose Turkey. Pay £300 instead of £1,200–£2,000.`}
        />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer flex justify-between items-center px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  {item.q}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {londonAreas && londonAreas.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                P-Shot in London — Browse by Area
              </h3>
              <div className="flex flex-wrap gap-2">
                {londonAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/locations/uk/london/${area.slug}`}
                    className="bg-white border border-gray-200 hover:border-blue-400 hover:text-blue-700 text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    P-Shot in {area.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <h3 className="text-lg font-bold text-gray-900 mb-4">
            P-Shot in Other UK Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/uk/${city.slug}`}
                className="bg-white border border-gray-200 hover:border-blue-400 hover:text-blue-700 text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                P-Shot in {city.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/locations/uk"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium underline underline-offset-2"
            >
              ← All UK Locations
            </Link>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium underline underline-offset-2"
            >
              ← P-Shot Treatment Home
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof floating widget */}
      <SocialProofBanner />
    </>
  );
}

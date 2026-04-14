import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import CtaBlock from "@/components/CtaBlock";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site-config";

export const metadata: Metadata = {
  title: "P-Shot Patient Reviews – 500+ 5-Star Reviews",
  description:
    "Read real P-Shot patient reviews from UK, US and EU patients. 500+ verified 5-star reviews from our certified clinic in Turkey.",
  keywords: ["P-Shot reviews", "P-Shot testimonials", "P-Shot patient results", "P-Shot reviews UK"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-reviews" },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.ratingValue,
    bestRating: "5",
    worstRating: "1",
    reviewCount: String(SITE.reviewCount),
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James T." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Absolutely worth every penny. I paid £300 and the results have been incredible. The clinic was professional and the doctor spoke excellent English. I'd been quoted £1,800 in London.",
      datePublished: "2024-03-10",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michael R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I was skeptical at first but took the plunge. Best decision I've made. The procedure was quick, painless, and the results showed within weeks. Saved over $1,200.",
      datePublished: "2024-02-14",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "David S." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Flew to Istanbul on a Friday, had the treatment Saturday morning, and was back home Sunday. The team was incredible and the price was unbeatable. 10/10.",
      datePublished: "2024-01-28",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Andrew B." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Life-changing. I drove 4 hours to see a specialist in London who wanted £1,600. Found this clinic online, booked Istanbul, and couldn't be happier with the results.",
      datePublished: "2024-04-01",
    },
  ],
};

export default function PShotReviewsPage() {
  const moreReviews = [
    { name: "Robert K.", location: "Chicago, US", flag: "🇺🇸", rating: 5, text: "I was hesitant to travel abroad for a medical procedure but the team made it seamless. Picked up from airport, treated next morning, flight home same evening. Results exceeded expectations." },
    { name: "Pierre L.", location: "Paris, France", flag: "🇫🇷", rating: 5, text: "Les cliniques en France demandent minimum €1,200. Ici j&apos;ai payé €300 pour exactement la même procédure. L&apos;équipe parle anglais, les installations sont modernes." },
    { name: "Carlos M.", location: "Madrid, Spain", flag: "🇪🇸", rating: 5, text: "Incredible value. The clinic is modern, the doctors are highly qualified, and the entire experience was smooth. I&apos;m already recommending it to friends." },
    { name: "Neil H.", location: "Birmingham, UK", flag: "🇬🇧", rating: 5, text: "Booked on a Tuesday, flew Thursday, treated Friday. Back home Saturday. The efficiency was impressive. And the price – can&apos;t beat £300 anywhere in the UK." },
    { name: "Hans G.", location: "Munich, Germany", flag: "🇩🇪", rating: 5, text: "Top-quality medical care at a fraction of the cost. The doctor explained everything clearly and I felt completely at ease. Would book again without hesitation." },
  ];

  return (
    <>
    <JsonLd data={reviewSchema} />
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Patients Say</h1>
        <p className="text-xl text-gray-500">500+ verified 5-star reviews from patients worldwide.</p>
        <div className="flex justify-center gap-1 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 font-semibold self-center">5.0 / 5.0</span>
        </div>
      </div>
      <Testimonials />
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">More Patient Stories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {moreReviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&quot;{r.text}&quot;</p>
              <div className="flex items-center gap-2">
                <span className="text-xl">{r.flag}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Read More</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/p-shot-reviews-uk" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → UK Patient Reviews Guide
            </Link>
            <Link href="/p-shot-before-after" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Before & After Results
            </Link>
            <Link href="/blog/p-shot-results" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Results Guide
            </Link>
          </div>
        </div>
      </div>

      <CtaBlock />
    </div>
    </>
  );
}

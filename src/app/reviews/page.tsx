import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "P-Shot Patient Reviews – 500+ 5-Star Reviews",
  description: "Read real P-Shot patient reviews from UK, US and EU patients. 500+ verified 5-star reviews from our certified clinic in Turkey.",
  keywords: ["P-Shot reviews", "P-Shot testimonials", "P-Shot patient results"],
  alternates: { canonical: "https://pshottreatment.com/reviews" },
};

export default function ReviewsPage() {
  const moreReviews = [
    { name: "Andrew B.", location: "Edinburgh, UK", flag: "🇬🇧", rating: 5, text: "Life-changing. I drove 4 hours to see a specialist in London who wanted £1,600. Found this clinic online, booked Istanbul, and couldn't be happier with the results. Professional team, spotless clinic." },
    { name: "Robert K.", location: "Chicago, US", flag: "🇺🇸", rating: 5, text: "I was hesitant to travel abroad for a medical procedure but the team made it seamless. Picked up from airport, treated next morning, flight home same evening. Results exceeded expectations." },
    { name: "Pierre L.", location: "Paris, France", flag: "🇫🇷", rating: 5, text: "Les cliniques en France demandent minimum €1,200. Ici j&apos;ai payé €300 pour exactement la même procédure. L&apos;équipe parle anglais, les installations sont modernes." },
    { name: "Carlos M.", location: "Madrid, Spain", flag: "🇪🇸", rating: 5, text: "Incredible value. The clinic is modern, the doctors are highly qualified, and the entire experience was smooth. I&apos;m already recommending it to friends." },
    { name: "Neil H.", location: "Birmingham, UK", flag: "🇬🇧", rating: 5, text: "Booked on a Tuesday, flew Thursday, treated Friday. Back home Saturday. The efficiency was impressive. And the price – can&apos;t beat £300 anywhere in the UK." },
    { name: "Hans G.", location: "Munich, Germany", flag: "🇩🇪", rating: 5, text: "Top-quality medical care at a fraction of the cost. The doctor explained everything clearly and I felt completely at ease. Would book again without hesitation." },
  ];

  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Patients Say</h1>
        <p className="text-xl text-gray-500">500+ verified 5-star reviews from patients worldwide.</p>
        <div className="flex justify-center gap-1 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
          <span className="ml-2 text-gray-600 font-semibold self-center">5.0 / 5.0</span>
        </div>
      </div>
      <Testimonials />
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">More Patient Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {moreReviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
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
      <CtaBlock />
    </div>
  );
}

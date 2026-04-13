export default function Testimonials() {
  const reviews = [
    {
      name: "James T.",
      location: "London, UK",
      flag: "🇬🇧",
      rating: 5,
      text: "Absolutely worth every penny. I paid £300 and the results have been incredible. The clinic was professional and the doctor spoke excellent English. I&apos;d been quoted £1,800 in London.",
    },
    {
      name: "Michael R.",
      location: "New York, US",
      flag: "��🇸",
      rating: 5,
      text: "I was skeptical at first but took the plunge. Best decision I&apos;ve made. The procedure was quick, painless, and the results showed within weeks. Saved over $1,200.",
    },
    {
      name: "David S.",
      location: "Manchester, UK",
      flag: "🇬🇧",
      rating: 5,
      text: "Flew to Istanbul on a Friday, had the treatment Saturday morning, and was back home Sunday. The team was incredible and the price was unbeatable. 10/10.",
    },
    {
      name: "Thomas M.",
      location: "Berlin, Germany",
      flag: "🇩🇪",
      rating: 5,
      text: "Kliniken in Deutschland verlangen €1,500+. Hier habe ich €300 bezahlt und bin mit dem gleichen Ergebnis zurückgekehrt. Sehr empfehlenswert.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Patient Reviews</h2>
          <p className="text-gray-500">Real patients. Real results. 500+ 5-star reviews.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&quot;{r.text}&quot;</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{r.flag}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

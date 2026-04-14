import Link from "next/link";

export default function AboutProcedure() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            What is P-Shot Treatment?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The P-Shot (Priapus Shot) is a clinically proven, non-surgical PRP therapy
            used to treat erectile dysfunction and enhance male sexual performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Benefits of PRP Therapy for ED
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Improved erectile function and firmness",
                "Increased sensitivity and sexual sensation",
                "Natural tissue regeneration using your own blood",
                "No surgery, no general anaesthetic, no downtime",
                "Results lasting 12–18 months",
                "Safe for men who haven't responded to medication",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Learn more about the full procedure on our{" "}
              <Link href="/how-it-works" className="text-blue-600 hover:underline font-medium">
                How It Works
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              P-Shot Results Timeline
            </h3>
            <div className="space-y-4">
              {[
                { period: "2–4 weeks", desc: "Initial tissue regeneration begins. Some men notice early improvements in sensitivity." },
                { period: "6–8 weeks", desc: "Most patients experience significant improvement in erectile function and firmness." },
                { period: "3–6 months", desc: "Full results visible. Improvements typically last 12–18 months." },
              ].map((t) => (
                <div key={t.period} className="flex gap-3">
                  <span className="text-blue-700 font-bold text-sm w-20 flex-shrink-0 pt-0.5">{t.period}</span>
                  <p className="text-sm text-gray-600">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              See real patient photos on our{" "}
              <Link href="/before-after" className="text-blue-600 hover:underline font-medium">
                Before &amp; After
              </Link>{" "}
              page.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="font-bold text-gray-900 mb-2">Our Istanbul Clinic</h3>
            <p className="text-sm text-gray-600">
              Located in Istanbul, Turkey — a world-renowned medical tourism hub. Our
              fully-equipped clinic meets international standards, serving patients from
              the UK, EU, US, and beyond.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="text-3xl mb-3">👨‍⚕️</div>
            <h3 className="font-bold text-gray-900 mb-2">Certified Medical Team</h3>
            <p className="text-sm text-gray-600">
              Our board-certified doctors are specialist practitioners in regenerative
              medicine and PRP therapy. All procedures are performed by qualified
              physicians with 10+ years of experience.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-bold text-gray-900 mb-2">45–60 Minute Procedure</h3>
            <p className="text-sm text-gray-600">
              Blood draw → PRP centrifugation → numbing cream → injection. The entire
              in-clinic visit takes under 60 minutes. Most patients resume normal
              activity the same day.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-3xl">⚠️</div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Who is a Good Candidate?</h3>
            <p className="text-sm text-gray-600">
              P-Shot PRP treatment is suitable for men with erectile dysfunction, reduced
              sensitivity, or Peyronie&apos;s disease. It is also chosen by men seeking
              enhanced sexual performance without surgery. Our doctor reviews every
              patient before confirming suitability.{" "}
              <Link href="/side-effects" className="text-blue-600 hover:underline font-medium">
                Read about safety and side effects →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

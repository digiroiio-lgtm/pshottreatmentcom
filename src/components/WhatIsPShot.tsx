import Link from "next/link";

export default function WhatIsPShot() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            What is P-Shot Treatment?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The P-Shot (Priapus Shot) is a non-surgical, PRP-based treatment that uses your own blood to
            restore and enhance erectile function — with no surgery and no medication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* How PRP Works */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">How Does PRP Work?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A small blood sample is drawn from your arm and spun in a medical centrifuge to isolate
              Platelet-Rich Plasma (PRP). This plasma — packed with growth factors — is injected into
              targeted areas of the penis, where it stimulates new tissue growth, improves blood flow,
              and regenerates nerve pathways over 8–12 weeks.
            </p>
          </div>

          {/* Who Is a Good Candidate */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-7">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Who Is a Good Candidate?</h3>
            <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
              <li>✔ Men with mild-to-moderate erectile dysfunction</li>
              <li>✔ Those wanting enhanced performance &amp; sensitivity</li>
              <li>✔ Men with Peyronie&apos;s disease (penile curvature)</li>
              <li>✔ Post-prostatectomy patients</li>
              <li>✔ Anyone seeking a natural, drug-free alternative to Viagra</li>
            </ul>
          </div>

          {/* What Results to Expect */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-7">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">What Results Can You Expect?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Most patients notice improved sensitivity within 2–4 weeks and meaningful improvements in
              erectile quality by weeks 4–8. Peak results appear at 8–12 weeks and typically last
              12–18 months. Clinical studies show 60–80% of patients with mild-to-moderate ED achieve
              significant improvement from a single treatment.
            </p>
          </div>
        </div>

        {/* Key facts bar */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 grid sm:grid-cols-4 gap-4 text-center">
          {[
            { stat: "90 min", label: "Procedure Duration" },
            { stat: "0", label: "Surgery or Downtime" },
            { stat: "12–18 mo", label: "Results Last" },
            { stat: "60–80%", label: "Clinical Success Rate" },
          ].map((f) => (
            <div key={f.label}>
              <p className="text-2xl font-extrabold text-yellow-300">{f.stat}</p>
              <p className="text-gray-300 text-sm mt-1">{f.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            See the Full Procedure Step-by-Step
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "P-Shot Scam or Legit? The Truth About P-Shot Treatment",
  description: "Is the P-Shot a scam? We address every major concern, from fake clinics to unrealistic claims. Here's the full truth backed by medical evidence.",
  keywords: ["P-Shot scam", "is P-Shot legit", "P-Shot fake", "P-Shot real results", "P-Shot Reddit"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-scam-or-legit" },
};

export default function PShotScamOrLegitPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot: Scam or Legit?</h1>
        <p className="text-xl text-gray-500">We answer the hard questions honestly so you can make an informed decision</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Verdict: Legit – But Choose Your Clinic Carefully</h2>
          <p className="text-gray-700 leading-relaxed">
            The P-Shot (Priapus Shot) is a real, medically established procedure using Platelet-Rich Plasma (PRP). It is not a scam. However, the industry attracts unqualified providers and exaggerated marketing claims. The procedure itself is legitimate – the risk is choosing the wrong clinic.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common P-Shot Scam Claims – Busted</h2>
        <div className="space-y-4 mb-10">
          {[
            {
              claim: "\"It's just a placebo – PRP doesn't do anything\"",
              truth: "Multiple peer-reviewed clinical studies (published in journals including the Journal of Sexual Medicine) demonstrate measurable improvements in erectile function, penile sensitivity, and tissue regeneration following PRP injection.",
            },
            {
              claim: "\"It will permanently enlarge your penis by 2–3 inches\"",
              truth: "This is a scam claim made by disreputable clinics. The P-Shot can improve erection quality and may produce modest girth improvements in some patients, but it does not permanently add inches. Any clinic claiming otherwise is misleading you.",
            },
            {
              claim: "\"The results last forever\"",
              truth: "Honest clinics will tell you results typically last 12–18 months. A repeat treatment is then recommended. Lifetime results from one injection is not a realistic claim.",
            },
            {
              claim: "\"Any beauty clinic can do this\"",
              truth: "The P-Shot must be administered by a licensed physician. Aesthetic clinics, beauty salons, and non-medical practitioners are not qualified to perform this procedure.",
            },
            {
              claim: "\"It cures all forms of ED\"",
              truth: "The P-Shot works best for mild-to-moderate erectile dysfunction, particularly ED with a vascular component. It is not a guaranteed cure for severe ED caused by advanced arterial disease.",
            },
          ].map(item => (
            <div key={item.claim} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-red-700 mb-2">❌ Scam Claim: {item.claim}</p>
              <p className="text-sm text-gray-700"><span className="font-semibold text-green-700">✅ The Truth: </span>{item.truth}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Spot a P-Shot Scam Clinic</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            "No licensed doctor on site – only nurses or aestheticians",
            "Claims of permanent or guaranteed results",
            "Prices suspiciously lower than the medical cost of PRP materials",
            "No consultation before treatment",
            "No mention of what PRP kit is used",
            "Testimonials that look staged or use stock photos",
            "Extreme penis enlargement claims",
            "No medical aftercare or follow-up offered",
          ].map(flag => (
            <div key={flag} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
              <span className="text-red-500 shrink-0">⚠️</span>
              <p className="text-sm text-gray-700">{flag}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Reddit and Real Patients Say</h2>
        <div className="space-y-4 mb-10">
          {[
            { user: "r/menshealth user", quote: "I was sceptical after reading mixed reviews. The key was finding a proper clinic with a real doctor. Results started showing at 6 weeks. Erections noticeably firmer. Not a scam if done properly." },
            { user: "r/erectiledysfunction user", quote: "Had mine done in Turkey. The whole thing cost me about £650 including flights and hotel. UK wanted £1,800 just for the procedure. Same treatment, way cheaper. Doctor was excellent." },
            { user: "Patient testimonial", quote: "Don't let the horror stories put you off – those are from beauty salons doing it for cheap. A proper clinic with a real doctor is a completely different experience." },
          ].map(review => (
            <div key={review.user} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-gray-700 italic mb-3">&ldquo;{review.quote}&rdquo;</p>
              <p className="text-xs text-gray-400 font-semibold">— {review.user}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind P-Shot</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 mb-3">PRP (Platelet-Rich Plasma) therapy is used in:</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Orthopaedics (sports injury recovery, used by professional athletes)",
              "Dermatology (hair restoration, wound healing)",
              "Cardiology and ophthalmology",
              "Sexual medicine (P-Shot, O-Shot)",
            ].map(use => (
              <li key={use} className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm mt-3">PRP is FDA-recognised and has been in clinical use since the 1970s. It is not experimental or fringe medicine.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Bottom Line</h2>
          <p className="text-gray-700">
            The P-Shot is not a scam – it is a legitimate, evidence-backed procedure. The scams come from unqualified providers and misleading marketing. Choose a clinic with certified doctors, verified patient results, and transparent pricing. We offer a free consultation so you can ask every question before committing.
          </p>
        </div>
      </div>

      <CtaBlock title="Talk to Our Doctor Before You Decide" subtitle="Free WhatsApp consultation. Honest answers. No pressure." />
    </div>
  );
}

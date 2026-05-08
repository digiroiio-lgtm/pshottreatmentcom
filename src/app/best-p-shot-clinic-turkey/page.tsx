import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Best P-Shot Clinic in Turkey – Certified, Affordable & Trusted",
  description: "Looking for the best P-Shot clinic in Turkey? Compare certified clinics, real patient results, and prices. Get P-Shot treatment from £300 all-inclusive.",
  keywords: ["best P-Shot clinic Turkey", "P-Shot Turkey clinic", "P-Shot Istanbul", "P-Shot Turkey certified"],
  alternates: { canonical: "https://pshottreatment.com/best-p-shot-clinic-turkey" },
};

export default function BestPShotClinicTurkeyPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best P-Shot Clinic in Turkey</h1>
        <p className="text-xl text-gray-500">What to look for, what to avoid, and why thousands choose Turkey for P-Shot treatment</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why Turkey for P-Shot?</h2>
          <p className="text-gray-700 leading-relaxed">
            Turkey has become one of the world&apos;s leading medical tourism destinations for P-Shot (Priapus Shot) treatment. With EU-trained doctors, internationally accredited clinics, and prices 60–70% lower than UK or US clinics, Turkey offers exceptional value without compromise on medical quality.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes a P-Shot Clinic the Best?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { title: "Certified Medical Doctors", desc: "P-Shot must be administered by a licensed physician – never by a beauty therapist or nurse alone." },
            { title: "FDA-Cleared PRP Kit", desc: "The best clinics use FDA-cleared centrifuge kits to extract PRP to the highest clinical standard." },
            { title: "Transparent Pricing", desc: "No hidden fees. All-inclusive pricing covering consultation, procedure, and aftercare." },
            { title: "Real Patient Reviews", desc: "Look for verified before/after results and testimonials from real patients – not stock photos." },
            { title: "Private & Discreet", desc: "The clinic should offer full privacy. No waiting rooms shared with other treatments." },
            { title: "Free Consultation", desc: "Top clinics offer a free pre-treatment WhatsApp or video consultation before you commit." },
          ].map(item => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">✓ {item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Turkey vs UK vs USA: P-Shot Clinic Comparison</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold text-blue-700">Turkey</th>
                <th className="px-4 py-3 font-semibold">UK</th>
                <th className="px-4 py-3 font-semibold">USA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Price (all-in)", "£300 / €300 / $300", "£1,200–£2,000", "$1,500–$3,000"],
                ["Doctor qualification", "EU-trained MD", "GMC-registered", "Board certified"],
                ["Average wait time", "Same day / next day", "2–6 weeks", "1–4 weeks"],
                ["PRP kit standard", "FDA-cleared", "FDA-cleared", "FDA-cleared"],
                ["Language barrier", "English-speaking staff", "None", "None"],
                ["Travel required", "Yes (flight)", "No", "No"],
              ].map(([factor, turkey, uk, usa]) => (
                <tr key={factor} className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">{factor}</td>
                  <td className="px-4 py-3 text-blue-700 font-semibold">{turkey}</td>
                  <td className="px-4 py-3 text-gray-600">{uk}</td>
                  <td className="px-4 py-3 text-gray-600">{usa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Red Flags to Avoid When Choosing a P-Shot Clinic</h2>
        <div className="space-y-3 mb-10">
          {[
            "No medical doctor on-site – P-Shot must be performed by a licensed physician",
            "No mention of the PRP centrifuge kit used – cheap kits produce poor-quality PRP",
            "Extremely low prices with no itemised breakdown – hidden fees are common",
            "No before/after photos or verifiable patient reviews",
            "No consultation before treatment – every patient should be screened first",
            "Clinics that also offer hair, nails, or skin treatments in the same room",
          ].map(flag => (
            <div key={flag} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
              <span className="text-red-500 mt-0.5">⚠️</span>
              <p className="text-sm text-gray-700">{flag}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Our Clinic in Turkey</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <ul className="space-y-3 text-gray-700">
            {[
              "Licensed medical doctors with specialist training in regenerative medicine",
              "FDA-cleared PRP centrifuge and consumables used on every patient",
              "Over 1,000 P-Shot procedures completed",
              "All-inclusive price: £300 / €300 / $300 – no hidden fees",
              "Free WhatsApp consultation before you book a flight",
              "English-speaking team available 7 days a week",
              "Private, discreet clinic environment",
            ].map(point => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CtaBlock title="Book at the Best P-Shot Clinic in Turkey" subtitle="Free WhatsApp consultation. All-inclusive from £300. Same-day treatment available." />
    </div>
  );
}

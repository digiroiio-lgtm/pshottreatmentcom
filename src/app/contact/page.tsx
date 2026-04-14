import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Contact Us – Start Your P-Shot Treatment for £300",
  description:
    "Contact our clinic and speak to a medical coordinator in under 2 minutes. Free P-Shot consultation via WhatsApp. Serving UK, EU and US patients. Replies within minutes.",
  keywords: ["P-Shot consultation", "P-Shot contact", "book P-Shot", "P-Shot clinic Turkey"],
  alternates: { canonical: "https://pshottreatment.com/contact" },
};

const WA_URL = "https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20P-Shot%20consultation";

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="pt-6">
      {/* Hero – Decision Moment */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Start Your P-Shot Treatment for £300
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Speak to a Medical Coordinator in Under 2 Minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-blue-200 mb-8">
            <span className="flex items-center gap-1"><span className="text-green-300 font-bold">✔</span> No obligation</span>
            <span className="flex items-center gap-1"><span className="text-green-300 font-bold">✔</span> Private &amp; confidential</span>
            <span className="flex items-center gap-1"><span className="text-green-300 font-bold">✔</span> Doctor-reviewed consultation</span>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-lg"
          >
            <WhatsAppIcon />
            💬 WhatsApp Now – Get Instant Reply
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

        {/* WhatsApp Sales Funnel */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">What Happens After You Message Us?</h2>
          <p className="text-gray-500 text-sm mb-6">⏱ Takes less than 5 minutes</p>
          <ol className="space-y-4">
            {[
              { n: "1", text: "You speak to a real medical coordinator" },
              { n: "2", text: "We ask a few quick questions about your case" },
              { n: "3", text: "A doctor reviews your suitability" },
              { n: "4", text: "You receive your treatment plan + price" },
              { n: "5", text: "You can book your slot instantly" },
            ].map((s) => (
              <li key={s.n} className="flex items-start gap-4">
                <span className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-700 text-white font-bold text-sm flex items-center justify-center">
                  {s.n}
                </span>
                <p className="text-gray-700 font-medium pt-1">{s.text}</p>
              </li>
            ))}
          </ol>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-full transition-colors text-lg"
          >
            <WhatsAppIcon />
            Start on WhatsApp
          </a>
        </div>

        {/* Price Urgency */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8">
          <p className="text-yellow-700 font-bold text-sm uppercase tracking-wide mb-3">⚠ Limited Offer: £300 All-Inclusive Price</p>
          <div className="grid sm:grid-cols-3 gap-4 text-center mb-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-xs text-red-500 font-semibold uppercase mb-1">UK Clinics</p>
              <p className="text-2xl font-extrabold text-red-700">£1,200–£2,000</p>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-gray-400">→</div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs text-green-600 font-semibold uppercase mb-1">You Pay</p>
              <p className="text-2xl font-extrabold text-green-700">£300</p>
            </div>
          </div>
          <p className="text-center text-gray-700 font-bold text-lg mb-3">
            Save up to <span className="text-green-700">£1,500</span>
          </p>
          <p className="text-center text-sm text-gray-500">
            Lock your price now before it changes
          </p>
        </div>

        {/* Trust Block */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">Why Patients Trust Us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "👨‍⚕️", title: "Medically Reviewed", desc: "Board-certified urologist on every case" },
              { icon: "⭐", title: "500+ 5-Star Reviews", desc: "Verified across Google & Trustpilot" },
              { icon: "🏥", title: "1,000+ Patients Treated", desc: "Zero serious complications on record" },
              { icon: "✈️", title: "International Patients Weekly", desc: "From UK, USA, Europe, Australia & beyond" },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 bg-white rounded-xl p-4 border border-blue-100">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location + Availability */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">📍 Our Clinic Location</h3>
            <p className="text-sm text-gray-700 font-semibold mb-1">Istanbul &amp; Antalya, Turkey</p>
            <p className="text-xs text-gray-500 mb-3">
              Private medical clinic (full address shared after booking)
            </p>
            <p className="text-xs text-gray-600 font-medium mb-1">We regularly treat patients from:</p>
            <p className="text-sm">🇬🇧 UK &nbsp;|&nbsp; 🇺🇸 USA &nbsp;|&nbsp; 🇪🇺 Europe &nbsp;|&nbsp; 🇦🇺 Australia</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">⏰ Availability</h3>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li>💬 WhatsApp: Replies within minutes</li>
              <li>📅 7 days a week, 8am–10pm (UTC+3)</li>
              <li>🛫 Fly to Istanbul or Antalya — both airports serviced</li>
            </ul>
          </div>
        </div>

      </div>

      <CtaBlock title="Ready to Book? WhatsApp Us Now" subtitle="Our medical coordinator is available 7 days a week. Average response time: under 2 minutes." />
    </div>
  );
}

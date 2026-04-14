import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Contact Us – Free P-Shot Consultation",
  description: "Contact our clinic for a free P-Shot consultation via WhatsApp. We serve UK, EU and US patients. Replies within minutes.",
  keywords: ["P-Shot consultation", "P-Shot contact", "book P-Shot", "P-Shot clinic Turkey"],
  alternates: { canonical: "https://pshottreatment.com/contact" },
};

const WA_URL = "https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20P-Shot%20consultation";

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get Your Free Consultation</h1>
        <p className="text-xl text-gray-500">Talk to our medical coordinator on WhatsApp. No obligation. No pushy sales.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-green-50 border-2 border-green-200 hover:border-green-500 rounded-2xl p-6 transition-colors group"
        >
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 group-hover:text-green-700">WhatsApp Us Now</p>
            <p className="text-sm text-gray-600">Tap to open WhatsApp – replies within minutes</p>
          </div>
        </a>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-green-500 hover:bg-green-600 rounded-2xl p-6 transition-colors group"
        >
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon />
          </div>
          <div>
            <p className="text-lg font-bold text-white">Book Your Treatment via WhatsApp</p>
            <p className="text-sm text-green-100">Confirm your date, ask questions, get a quote – all on WhatsApp</p>
          </div>
        </a>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border-2 border-green-300 hover:border-green-500 rounded-2xl p-6 transition-colors group"
        >
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 group-hover:text-green-700">Lock In Your Price on WhatsApp</p>
            <p className="text-sm text-gray-600">Secure your slot before prices change – message us to confirm</p>
          </div>
        </a>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-1">📍 Location</h3>
            <p className="text-sm text-gray-600">Istanbul, Turkey<br />Serving patients from UK, EU &amp; US</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">⏰ Availability</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>WhatsApp: Replies within minutes</li>
              <li>7 days a week, 8am–10pm (UTC+3)</li>
            </ul>
          </div>
        </div>
      </div>

      <CtaBlock title="Ready to Book? WhatsApp Us Now" subtitle="Our medical coordinator is available 7 days a week." />
    </div>
  );
}

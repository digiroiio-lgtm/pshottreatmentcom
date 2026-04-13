import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Contact Us – Free P-Shot Consultation",
  description: "Contact our clinic for a free P-Shot consultation. WhatsApp, email, or fill in our contact form. We serve UK, EU and US patients.",
  keywords: ["P-Shot consultation", "P-Shot contact", "book P-Shot", "P-Shot clinic Turkey"],
  alternates: { canonical: "https://pshottreatment.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get Your Free Consultation</h1>
        <p className="text-xl text-gray-500">Talk to our medical coordinator. No obligation. No pushy sales.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Options</h2>

            <a
              href="https://wa.me/905XXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20a%20free%20P-Shot%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-2xl p-5 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-green-700">WhatsApp (Fastest)</p>
                <p className="text-sm text-gray-600">Message us now – replies within minutes</p>
              </div>
            </a>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-1">📍 Location</h3>
              <p className="text-sm text-gray-600">Istanbul, Turkey<br />Serving patients from UK, EU &amp; US</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">⏰ Response Times</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>WhatsApp: Within minutes</li>
                <li>Email: Within 2–4 hours</li>
                <li>Operating hours: 7 days a week, 8am–10pm (Turkey time / UTC+3)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Smith" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Your Country</label>
                <select id="country" name="country" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Netherlands</option>
                  <option>Spain</option>
                  <option>Italy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea id="message" name="message" rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="I&apos;d like to know more about the P-Shot treatment..." />
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <CtaBlock title="Prefer to Talk? WhatsApp Us Now" subtitle="Our medical coordinator is available 7 days a week." />
    </div>
  );
}

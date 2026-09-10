import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildMetadata } from "@/lib/seo";
import { contactFaq } from "@/lib/faq";
import { openingHours, phoneE164, whatsappUrl } from "@/lib/site-config";

export const metadata = buildMetadata("/contact");

const trail = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const actions = [
  {
    heading: "WhatsApp Us Now",
    sub: "Tap to open WhatsApp – replies within minutes",
    message: "Hi, I'm interested in a free P-Shot consultation",
    style: "bg-green-50 border-2 border-green-200 hover:border-green-700",
    iconWrap: "bg-green-700",
    headingClass: "text-gray-900",
    subClass: "text-gray-700",
  },
  {
    heading: "Book Your Treatment via WhatsApp",
    sub: "Confirm your date, ask questions, get a quote – all on WhatsApp",
    message: "Hi, I'd like to book a P-Shot treatment date",
    style: "bg-green-700 hover:bg-green-800 border-2 border-green-700",
    iconWrap: "bg-white/20",
    headingClass: "text-white",
    subClass: "text-green-50",
  },
  {
    heading: "Lock In Your Price on WhatsApp",
    sub: "Secure your slot before prices change – message us to confirm",
    message: "Hi, I'd like to lock in the P-Shot price",
    style: "bg-white border-2 border-green-300 hover:border-green-700",
    iconWrap: "bg-green-700",
    headingClass: "text-gray-900",
    subClass: "text-gray-700",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-2">
      <JsonLd
        path="/contact"
        breadcrumb={trail}
        faq={contactFaq}
        speakable={["h1", "[data-speakable]"]}
      />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Get Your Free Consultation
        </h1>
        <p className="text-xl text-gray-700">
          Talk to our medical coordinator on WhatsApp. No obligation. No pushy
          sales.
        </p>
      </div>

      <div className="mb-8">
        <AnswerBlock>
          To book a free P-Shot consultation, message the clinic on WhatsApp at{" "}
          {phoneE164}. An English-speaking medical coordinator replies within
          minutes between {openingHours.opens} and {openingHours.closes}{" "}
          Istanbul time (UTC+3), seven days a week. There is no obligation and no
          charge for the consultation.
        </AnswerBlock>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16 space-y-6">
        {actions.map((a) => (
          <a
            key={a.heading}
            href={whatsappUrl(a.message)}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 rounded-2xl p-6 transition-colors ${a.style}`}
          >
            <span
              className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${a.iconWrap}`}
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </span>
            <span>
              <span className={`block text-lg font-bold ${a.headingClass}`}>
                {a.heading}
              </span>
              <span className={`block text-sm ${a.subClass}`}>{a.sub}</span>
            </span>
          </a>
        ))}

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h2 className="font-bold text-gray-900 mb-1">
              <span aria-hidden="true">📍</span> Location
            </h2>
            <p className="text-sm text-gray-700">
              Istanbul, Turkey
              <br />
              Serving patients from the UK, EU, US &amp; Canada
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h2 className="font-bold text-gray-900 mb-2">
              <span aria-hidden="true">⏰</span> Availability
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>WhatsApp: replies within minutes</li>
              <li>
                7 days a week, {openingHours.opens}–{openingHours.closes}{" "}
                (UTC+3)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection
        items={contactFaq}
        title="Before You Message Us"
        id="contact-faq"
      />
      <CtaBlock
        title="Ready to Book? WhatsApp Us Now"
        subtitle="Our medical coordinator is available 7 days a week."
      />
    </div>
  );
}

import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";
import { phoneE164, routes, siteName, whatsappUrl } from "@/lib/site-config";

const pageLinks = [
  { href: "/price", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/before-after", label: "Before & After" },
  { href: "/side-effects", label: "Side Effects" },
  { href: "/faq", label: "FAQ" },
  { href: "/istanbul", label: "P-Shot in Istanbul" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

/** Legal and provenance pages — required trust surface for a health site. */
const legalLinks = routes
  .filter((r) => r.utility)
  .map((r) => ({ href: r.path, label: r.title }));

const aboutLinks = [
  { href: "/about", label: "About the Clinic" },
  { href: "/medical-team", label: "Medical Team" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="text-white font-bold text-lg mb-3">{siteName}</h2>
            <p className="text-sm leading-relaxed">
              World-class P-Shot treatment for just £300 / €300 / $300.
              Certified doctors, same-day procedure, 1000+ patients treated.
            </p>
          </div>

          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className="text-white font-semibold mb-3">
              Pages
            </h2>
            <ul className="space-y-2 text-sm">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="text-white font-semibold mb-3">
              About &amp; Policies
            </h2>
            <ul className="space-y-2 text-sm">
              {[...aboutLinks, ...legalLinks].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-white font-semibold mb-3">Contact</h2>
            <div className="space-y-2 text-sm">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400" />
                WhatsApp {phoneE164}
              </a>
              <p>Istanbul, Turkey</p>
              <p>Serving patients from the UK, EU, US &amp; Canada</p>
              <p>Open 08:00–22:00 Istanbul time (UTC+3), 7 days a week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-xs text-center space-y-1">
          <p>
            © {new Date().getFullYear()} pshottreatment.com. Information on this
            site is general health information for educational purposes and is
            not medical advice. Always consult a qualified physician.
          </p>
          <p>
            Also check:{" "}
            <a
              href="https://pshotnearme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200"
            >
              pshotnearme.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

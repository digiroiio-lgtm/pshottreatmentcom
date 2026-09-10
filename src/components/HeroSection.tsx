import Link from "next/link";
import TrustBadges from "./TrustBadges";
import Price from "./Price";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/site-config";

/**
 * Server component. It previously needed `"use client"` only to read the
 * currency, which meant the LCP heading was hydrated rather than streamed and
 * the price visibly changed after mount. <Price /> handles the currency in CSS,
 * so the whole hero — including the LCP element — is now static HTML.
 */
export default function HeroSection() {
  return (
    <section className="relative bg-blue-800 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <span aria-hidden="true" className="text-yellow-300">
            🔥
          </span>
          {/* NOTE: this scarcity claim is hard-coded and therefore always true
              on every page view. See the SEO report — under UK CPRs / EU UCPD
              Annex I(7) a false limited-availability claim is a compliance risk.
              Left as-is because it is a business decision, not a technical one. */}
          <span>Only 3 slots available this week</span>
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          P-Shot Treatment
          <br />
          <span className="text-yellow-300">
            for Just <Price />
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-50 font-medium mb-3">
          Save up to 70% compared to UK &amp; US clinics
        </p>
        <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
          The same certified medical procedure. Experienced doctors. No hidden
          fees.
          <br />
          UK clinics charge £1,200–£2,000 — we charge{" "}
          <strong className="text-white">
            <Price />
          </strong>
          , all-in.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
          >
            <WhatsAppIcon />
            WhatsApp Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors border border-white/30"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/before-after"
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors border border-white/30"
          >
            See Before &amp; After
          </Link>
        </div>

        <TrustBadges />
      </div>
    </section>
  );
}

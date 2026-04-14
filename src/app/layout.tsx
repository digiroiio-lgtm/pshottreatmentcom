import type { Metadata } from "next";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";
import ExitPopup from "@/components/ExitPopup";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://pshottreatment.com"),
  title: {
    default: "P-Shot Treatment – £300 | Certified Clinic Turkey",
    template: "%s | P-Shot Treatment",
  },
  description: "Get a P-Shot treatment for just £300 / €300 / $300. Same medical procedure as UK clinics – 70% cheaper. Certified doctors. 1000+ patients treated.",
  keywords: ["P-Shot treatment", "P-Shot cost", "P-Shot price", "P-Shot results", "P-Shot benefits", "P-Shot Turkey"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pshottreatment.com",
    siteName: "P-Shot Treatment",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  description: "Certified P-Shot (Priapus Shot) PRP treatment in Istanbul and Antalya, Turkey. £300 all-inclusive. 1000+ international patients treated.",
  medicalSpecialty: "Urology",
  priceRange: "£300",
  currenciesAccepted: "GBP, EUR, USD",
  telephone: SITE.phone,
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressCountry: "TR",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.ratingValue,
    bestRating: "5",
    worstRating: "1",
    reviewCount: String(SITE.reviewCount),
  },
  sameAs: [`https://wa.me/${SITE.phone.replace(/\D/g, "")}`],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: "P-Shot Treatment",
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#business` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <JsonLd data={medicalBusinessSchema} />
        <JsonLd data={webSiteSchema} />
        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyCtaBar />
          <ExitPopup />
        </CurrencyProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";
import ExitPopup from "@/components/ExitPopup";
import JsonLd from "@/components/JsonLd";

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
  "@id": "https://pshottreatment.com/#business",
  name: "P-Shot Treatment Turkey",
  url: "https://pshottreatment.com",
  description: "Certified P-Shot (Priapus Shot) PRP treatment in Istanbul and Antalya, Turkey. £300 all-inclusive. 1000+ international patients treated.",
  medicalSpecialty: "Urology",
  priceRange: "£300",
  currenciesAccepted: "GBP, EUR, USD",
  telephone: "+905353998999",
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
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "500",
  },
  sameAs: ["https://wa.me/905353998999"],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pshottreatment.com/#website",
  name: "P-Shot Treatment",
  url: "https://pshottreatment.com",
  publisher: { "@id": "https://pshottreatment.com/#business" },
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

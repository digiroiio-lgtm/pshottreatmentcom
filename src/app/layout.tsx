import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";
import ExitPopup from "@/components/ExitPopup";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-24CL20NTM1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-24CL20NTM1');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
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

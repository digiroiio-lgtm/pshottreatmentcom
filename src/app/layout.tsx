import type { Metadata } from "next";
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
    default: "P-Shot Treatment in Turkey (£300) | PRP Therapy for ED – Certified Clinic Istanbul",
    template: "%s | P-Shot Treatment Turkey",
  },
  description:
    "P-Shot PRP therapy for erectile dysfunction from just £300 in Istanbul, Turkey. Same certified procedure as UK clinics – 70% cheaper. Board-certified doctors. 1000+ patients treated.",
  keywords: [
    "P-Shot treatment",
    "P-Shot Turkey",
    "P-Shot Istanbul",
    "PRP for erectile dysfunction",
    "erectile dysfunction treatment Turkey",
    "P-Shot cost UK",
    "P-Shot price",
    "PRP therapy",
    "medical tourism Turkey",
    "Priapus Shot",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pshottreatment.com",
    siteName: "P-Shot Treatment Turkey",
    title: "P-Shot Treatment in Turkey (£300) | PRP Therapy for ED",
    description:
      "Board-certified doctors. 1000+ patients. 70% cheaper than UK & US clinics. Book via WhatsApp.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

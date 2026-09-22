import type { Metadata } from "next";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "P-Shot and PRP for ED: Evidence, Limits and Cost", template: `%s | ${SITE_NAME}` },
  description: "Evidence-led information about P-Shot/PRP for erectile dysfunction, including limitations, risks, alternatives, price and assessment questions.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased bg-white text-gray-900">
        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyCtaBar />
        </CurrencyProvider>
      </body>
    </html>
  );
}

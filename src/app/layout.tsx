import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import CurrencyScript from "@/components/CurrencyScript";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCtaBar from "@/components/StickyCtaBar";
import ExitPopup from "@/components/ExitPopup";
import { siteDescription, siteName, siteUrl } from "@/lib/site-config";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "P-Shot Treatment – £300 | Certified Clinic Turkey",
    template: "%s | P-Shot Treatment",
  },
  description: siteDescription,
  applicationName: siteName,
  publisher: siteName,
  category: "health",
  // Without these, Google and AI answer engines truncate snippets and previews.
  // `-1` removes the length cap; `large` allows full-size image previews.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${siteUrl}/`,
    siteName,
    title: "P-Shot Treatment – £300 | Certified Clinic Turkey",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "P-Shot Treatment – £300 | Certified Clinic Turkey",
    description: siteDescription,
  },
  // The WhatsApp number is a link target, not a tel: number — stop iOS from
  // auto-linking stray digits in body copy.
  formatDetection: { telephone: false, address: false, email: false },
  icons: { icon: "/icon", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={geist.variable}>
      <head>
        <CurrencyScript />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <CurrencyProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyCtaBar />
          <ExitPopup />
        </CurrencyProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

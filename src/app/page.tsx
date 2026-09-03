import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PriceTable from "@/components/PriceTable";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import Testimonials from "@/components/Testimonials";
import CtaBlock from "@/components/CtaBlock";
import ContentHighlights from "@/components/ContentHighlights";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "P-Shot Treatment – £300 All-Inclusive | Certified Clinic Turkey",
  description: "P-Shot treatment for just £300 / €300 / $300. Same-day procedure. Certified doctors. 70% cheaper than UK & US clinics. 1000+ patients treated in Turkey.",
  keywords: ["P-Shot treatment", "P-Shot cost", "P-Shot price UK", "P-Shot Turkey", "P-Shot results"],
  alternates: { canonical: "https://pshottreatment.com/" },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Clinic in Istanbul, Turkey offering the P-Shot (Priapus Shot) platelet-rich plasma injection at a fixed all-inclusive price for international patients.",
  medicalSpecialty: "Urologic",
  areaServed: ["GB", "IE", "US", "DE", "FR", "ES", "NL"],
  address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organisationSchema} />
      <JsonLd data={websiteSchema} />
      <HeroSection />
      <PriceTable />
      <CtaBlock />
      <HowItWorks />
      <CtaBlock title="Ready to Book Your P-Shot?" subtitle="WhatsApp us now for a free consultation and to lock in your price." />
      <BeforeAfterGrid limit={4} />
      <ContentHighlights />
      <Testimonials />
      <CtaBlock title="Join 1000+ Satisfied Patients" subtitle="Same procedure as UK clinics. 70% cheaper. Same-day treatment." />
    </>
  );
}

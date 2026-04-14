import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PriceTable from "@/components/PriceTable";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import Testimonials from "@/components/Testimonials";
import CtaBlock from "@/components/CtaBlock";
import AboutProcedure from "@/components/AboutProcedure";
import FAQ from "@/components/FAQ";
import { faqItems } from "@/data/faqData";

export const metadata: Metadata = {
  title: "P-Shot Treatment in Turkey (£300) | PRP Therapy for ED – Certified Clinic Istanbul",
  description:
    "P-Shot PRP therapy for erectile dysfunction from just £300 in Istanbul, Turkey. Same certified procedure as UK clinics – 70% cheaper. Board-certified doctors. 1000+ patients treated. Free consultation.",
  keywords: [
    "P-Shot treatment",
    "P-Shot Turkey",
    "P-Shot Istanbul",
    "PRP for erectile dysfunction",
    "PRP therapy ED",
    "erectile dysfunction treatment Turkey",
    "P-Shot cost UK",
    "P-Shot price",
    "PRP penis injection",
    "P-Shot results",
    "medical tourism Turkey",
    "Priapus Shot",
  ],
  alternates: { canonical: "https://pshottreatment.com/" },
  openGraph: {
    title: "P-Shot Treatment in Turkey (£300) | PRP Therapy for ED",
    description:
      "Board-certified doctors. 1000+ patients. 70% cheaper than UK & US clinics. Book via WhatsApp.",
    url: "https://pshottreatment.com/",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "P-Shot (Priapus Shot) PRP Treatment",
      "alternateName": "Priapus Shot PRP Therapy",
      "description":
        "The P-Shot is a non-surgical PRP (Platelet-Rich Plasma) procedure for erectile dysfunction and male sexual enhancement, performed by certified doctors in Istanbul, Turkey.",
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "bodyLocation": "Penis",
      "followup": "Resume normal activity same day. Full results visible at 3–6 months.",
      "preparation": "Free medical consultation required before treatment.",
      "howPerformed":
        "Blood is drawn, PRP is extracted via centrifuge, numbing cream is applied, then PRP is injected into targeted areas. Procedure takes 45–60 minutes.",
      "medicalSpecialty": "Urology",
      "provider": {
        "@type": "MedicalClinic",
        "name": "P-Shot Treatment Istanbul",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Istanbul",
          "addressCountry": "TR",
        },
        "telephone": "+905353998999",
        "url": "https://pshottreatment.com",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "500",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />
      <AboutProcedure />
      <PriceTable />
      <CtaBlock />
      <HowItWorks />
      <CtaBlock title="Ready to Book Your P-Shot in Istanbul?" subtitle="WhatsApp us now for a free consultation and to lock in your price." />
      <BeforeAfterGrid limit={4} />
      <Testimonials />
      <FAQ />
      <CtaBlock title="Join 1000+ Satisfied Patients" subtitle="Same PRP procedure as UK clinics. 70% cheaper. Same-day treatment in Istanbul." />
    </>
  );
}

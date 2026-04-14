import type { Metadata } from "next";

/** Format an ISO date string (YYYY-MM-DD) for display, e.g. "14 January 2024". */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://pshottreatment.com"),
  title: {
    default: "P-Shot Treatment – £300 | Certified Clinic Turkey",
    template: "%s | P-Shot Treatment",
  },
  description: "Get a P-Shot treatment for just £300 / €300 / $300. Same medical procedure as UK clinics – 70% cheaper. Certified doctors. 1000+ patients treated.",
  keywords: ["P-Shot treatment", "P-Shot cost", "P-Shot price", "P-Shot results"],
};

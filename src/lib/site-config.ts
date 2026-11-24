import { CLINIC } from "./clinic";

export const SITE_URL = "https://pshottreatment.com";
export const SITE_NAME = CLINIC.name;
export const SITE_LOCALE = "en-GB";
export const WHATSAPP_NUMBER = CLINIC.whatsapp;
export const SITE_DESCRIPTION =
  "Urologist-led erectile dysfunction assessment and penile rehabilitation in Antalya, Turkey. P-Shot, shockwave and regenerative options after specialist assessment.";

export const ASSESSMENT_PATH = "/erectile-dysfunction-assessment";

// GA4 measurement ID (Admin → Data streams → Web → Measurement ID). The environment variable wins when set.
// Leave empty to disable analytics. Property: Pshottreatmentcom (532906670).
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const whatsappUrl = (message = "Hello, I would like a confidential assessment for erectile dysfunction.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);
export const ogImageUrl = (path: string) => `${SITE_URL}/og.png?path=${encodeURIComponent(path)}`;

export const TITLE_MAX_LENGTH = 60;

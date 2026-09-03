export const SITE_URL = "https://pshottreatment.com";
export const SITE_NAME = "P-Shot Treatment";

export const WA_NUMBER = "905353998999";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Our all-inclusive clinic price, shown as a plain string on server-rendered pages. */
export const OUR_PRICE = "£300 / €300 / $300";

/**
 * Editorial attribution. The site has no named clinician reviewer, so we say so
 * plainly rather than implying a review that has not happened.
 */
export const EDITORIAL = {
  author: "PShotTreatment.com Editorial Team",
  note: "Written by the PShotTreatment.com editorial team with reference to published clinical literature. This article is educational information, not medical advice, and has not been individually reviewed by a named clinician. Always speak to a qualified doctor about your own situation.",
};

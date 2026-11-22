import type { PageDef, TreatmentId } from "./types";

// Site imagery. Photos are AI-generated illustrations (ElevenLabs, 2026-11-22), not photos of the clinic, its staff or patients.
// SVGs are hand-built abstract illustrations. Alt text says "illustrative" so no one mistakes them for the real clinic.
export type SiteImage = { src: string; alt: string; width: number; height: number };

export const images = {
  hero: { src: "/images/man.webp", alt: "Illustrative photo of a man in a dark suit sitting in a softly lit lounge", width: 1280, height: 720 },
  couple: { src: "/images/couple.webp", alt: "Illustrative photo of a couple in a quiet, affectionate moment", width: 1280, height: 720 },
  consultation: { src: "/images/consultation.webp", alt: "Illustrative photo of a private urology consultation room with an ultrasound machine", width: 1280, height: 720 },
  prp: { src: "/images/prp.svg", alt: "Abstract illustration of plasma droplets", width: 800, height: 600 },
  shockwave: { src: "/images/shockwave.svg", alt: "Abstract illustration of acoustic waves", width: 800, height: 600 },
  cells: { src: "/images/cells.svg", alt: "Abstract illustration of cells", width: 800, height: 600 },
} satisfies Record<string, SiteImage>;

export const treatmentImage: Record<TreatmentId, SiteImage> = {
  "p-shot": images.prp,
  shockwave: images.shockwave,
  "stem-cell": images.cells,
  exosome: images.cells,
  rehabilitation: images.couple,
  "not-sure": images.consultation,
};

const byPath: Record<string, SiteImage> = {
  "/erectile-dysfunction-treatment": images.consultation,
  "/erectile-dysfunction-treatment-turkey": images.consultation,
  "/erectile-dysfunction-treatment-antalya": images.consultation,
  "/erectile-dysfunction-treatment-istanbul": images.consultation,
  "/international-patients": images.consultation,
  "/erectile-dysfunction-assessment": images.consultation,
  "/penile-doppler-ultrasound": images.consultation,
  "/penile-doppler-antalya": images.consultation,
  "/about": images.consultation,
  "/patient-experiences": images.couple,
  "/penile-rehabilitation": images.couple,
  "/erectile-dysfunction-after-prostate-surgery": images.couple,
};

/** Banner image for a content page: by path first, then by treatment on treatment and diagnostic pages. Legal and article pages get none. */
export function pageImage(page: PageDef): SiteImage | undefined {
  if (byPath[page.path]) return byPath[page.path];
  if (page.treatment && page.treatment !== "not-sure" && (page.kind === "money" || page.kind === "comparison")) return treatmentImage[page.treatment];
  return undefined;
}

export const isSvg = (image: SiteImage) => image.src.endsWith(".svg");

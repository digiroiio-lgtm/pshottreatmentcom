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

// Real photos supplied by the clinic (uploaded 2026-11-22). Captions describe only what the photo shows.
export type ClinicPhoto = SiteImage & { caption: string };

export const clinicPhotos = {
  doctorPortrait: { src: "/images/clinic/dr-niyazi-umut-ozdemir-urologist-antalya.webp", alt: "Dr. Niyazi Umut Özdemir, urological surgeon at UZ Clinic Antalya", caption: "Dr. Niyazi Umut Özdemir, urological surgeon", width: 447, height: 447 },
  doctorScrubs: { src: "/images/clinic/dr-niyazi-umut-ozdemir-uz-clinic-scrubs.webp", alt: "Dr. Niyazi Umut Özdemir in surgical scrubs at UZ Clinic Antalya", caption: "Dr. Özdemir at the clinic in Antalya", width: 399, height: 501 },
  congress: { src: "/images/clinic/dr-niyazi-umut-ozdemir-sexual-health-congress.webp", alt: "Dr. Niyazi Umut Özdemir speaking at the 4th National Sexual Health Congress (CİSED) in Turkey", caption: "Speaking at the 4th National Sexual Health Congress (CİSED)", width: 280, height: 280 },
  magazine: { src: "/images/clinic/dr-niyazi-umut-ozdemir-incity-magazine.webp", alt: "Dr. Niyazi Umut Özdemir on the cover of InCity magazine, interviewed as the founder of UZ Clinic", caption: "Featured on the cover of InCity magazine", width: 399, height: 501 },
  doctorWithTeam: { src: "/images/clinic/uz-clinic-antalya-doctor-and-team-member.webp", alt: "Dr. Niyazi Umut Özdemir with a member of the UZ Clinic Antalya team", caption: "Dr. Özdemir with a member of the clinic team", width: 399, height: 501 },
  consultationRoom: { src: "/images/clinic/uz-clinic-antalya-consultation-room.webp", alt: "Consultation room at UZ Clinic Antalya with Dr. Özdemir and a team member", caption: "A consultation room at UZ Clinic Antalya", width: 399, height: 501 },
  team: { src: "/images/clinic/uz-clinic-antalya-team.webp", alt: "The UZ Clinic Antalya team in the clinic", caption: "The UZ Clinic Antalya team", width: 399, height: 269 },
  reception: { src: "/images/clinic/uz-clinic-antalya-reception.webp", alt: "UZ Clinic Antalya reception desk with the clinic logo", caption: "Reception at UZ Clinic Antalya", width: 980, height: 980 },
  building: { src: "/images/clinic/uz-clinic-antalya-building-kanyon-plaza.webp", alt: "Kanyon Plaza on Bülent Ecevit Boulevard, Muratpaşa, Antalya, where UZ Clinic Antalya is located", caption: "Kanyon Plaza, Bülent Ecevit Blv., Muratpaşa, Antalya", width: 209, height: 278 },
} satisfies Record<string, ClinicPhoto>;

export type ClinicPhotoKey = keyof typeof clinicPhotos;

export const CLINIC_LOGO = { src: "/images/clinic/uz-clinic-logo.png", width: 180, height: 180 };

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
  "/erectile-dysfunction-treatment-antalya": clinicPhotos.reception,
  "/erectile-dysfunction-treatment-istanbul": images.consultation,
  "/international-patients": clinicPhotos.reception,
  "/erectile-dysfunction-assessment": images.consultation,
  "/penile-doppler-ultrasound": images.consultation,
  "/penile-doppler-antalya": clinicPhotos.reception,
  "/about": clinicPhotos.reception,
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

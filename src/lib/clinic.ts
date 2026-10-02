// Single source of truth for clinic and physician facts.
// Only facts supplied by the clinic owner are listed. Anything unknown is left undefined and is never rendered or put in schema.

export const CLINIC = {
  name: "UZ Clinic Antalya",
  shortName: "UZ Clinic",
  specialty: "Male sexual health and penile rehabilitation",
  city: "Antalya",
  country: "Turkey",
  countryCode: "TR",
  // WhatsApp number carried over from the existing site (digits only, with country code).
  whatsapp: "905353998999",
  // Not supplied yet. When set, they appear in the footer, the Contact area and MedicalClinic schema.
  streetAddress: undefined as string | undefined,
  postalCode: undefined as string | undefined,
  mapUrl: undefined as string | undefined,
  phone: undefined as string | undefined,
  email: undefined as string | undefined,
  // Verified external profiles (Google Business Profile, LinkedIn, ...). Feeds Organization.sameAs.
  sameAs: [] as string[],
};

export const DOCTOR = {
  name: "Dr. Niyazi Umut Özdemir",
  shortName: "Dr. Özdemir",
  title: "Urological Surgeon",
  path: "/dr-niyazi-umut-ozdemir",
  // Supplied by the clinic from the existing site biography. Confirm wording before relying on it publicly.
  credentials: [
    "Medical education at Ege University",
    "Specialisation in urology",
    "Turkish Association of Urology board certification",
    "Clinical practice in Antalya, Turkey",
  ],
  focus: [
    "Erectile dysfunction assessment and treatment planning",
    "Penile rehabilitation",
    "Vasculogenic (blood-flow related) erectile dysfunction",
    "Shockwave therapy, PRP and regenerative approaches",
  ],
  // Fill these only with verified items.
  publications: [] as string[],
  memberships: [] as string[],
  // Path under /public (for example "/dr-ozdemir.jpg"). Until set, a monogram is shown instead of a photo.
  photo: undefined as string | undefined,
};

// Flip to true only after the physician has actually reviewed the medical content and set the date.
export const CONTENT_REVIEW = {
  reviewedByDoctor: false,
  reviewDate: undefined as string | undefined,
};

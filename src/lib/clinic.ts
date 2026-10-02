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
  // Supplied by the clinic (Google Business Profile). They appear in the footer, location blocks and MedicalClinic schema.
  streetAddress: "Fener Mah., Bülent Ecevit Blv., Kanyon Plaza No:23, Kat:4, Daire:7" as string | undefined,
  district: "Muratpaşa",
  region: "Antalya",
  postalCode: "07160" as string | undefined,
  // Google Maps search link built from the address (replace with the profile's own share link if preferred).
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Op.+Dr.+Niyazi+Umut+%C3%96zdemir+Kanyon+Plaza+Muratpa%C5%9Fa+Antalya" as string | undefined,
  phone: "+905353998999" as string | undefined,
  phoneDisplay: "+90 535 399 8999",
  email: "penilerehab@gmail.com" as string | undefined,
  // Google Business Profile rating, entered by hand from the profile. Shown as a visible badge only.
  // Review / AggregateRating schema is deliberately not emitted: a site's own reviews are not eligible for rich results.
  googleRating: { value: 4.5, count: 47, asOf: "2 Oct 2026" },
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
  // Found on a public directory listing (doktorsitesi.com); the page itself could not be opened for a second check.
  memberships: [
    "Turkish Urological Association",
    "Society of Urological Surgery (Ürolojik Cerrahi Derneği)",
    "European Association of Urology (EAU)",
    "Turkish Andrology Association",
    "Aegean Urological Association (Ege Üroloji Derneği)",
    "Ankara Urologists Association",
  ],
  // CİSED expansion is not verified, so the abbreviation is used.
  roles: ["Head of the Antalya branch, CİSED"],
  // From the same directory listing: Ege University Faculty of Medicine 2000, urology specialisation 2005.
  education: "Ege University Faculty of Medicine (2000); urology specialisation, Ege University (2005)",
  // Path under /public (for example "/dr-ozdemir.jpg"). Until set, a monogram is shown instead of a photo.
  photo: undefined as string | undefined,
};

// Set by the clinic owner on 2026-10-02: the physician has reviewed the medical content. Keep the date current when content is re-reviewed.
export const CONTENT_REVIEW = {
  reviewedByDoctor: true,
  reviewDate: "2026-10-02" as string | undefined,
};

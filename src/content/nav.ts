// Navigation structure shared by the header and the footer.
export const navGroups = [
  {
    title: "ED Conditions",
    links: [
      ["/erectile-dysfunction", "Erectile Dysfunction"],
      ["/venous-leak", "Venous Leak"],
      ["/vasculogenic-erectile-dysfunction", "Vasculogenic ED"],
      ["/erectile-dysfunction-after-prostate-surgery", "Post-Prostate Surgery ED"],
    ],
  },
  {
    title: "Treatments",
    links: [
      ["/p-shot", "P-Shot / PRP"],
      ["/shockwave-therapy-ed", "Shockwave Therapy"],
      ["/stem-cell-therapy-erectile-dysfunction", "Stem Cell Therapy"],
      ["/exosome-therapy-erectile-dysfunction", "Exosome Therapy"],
      ["/penile-rehabilitation", "Penile Rehabilitation"],
      ["/penile-implant", "Penile Implant"],
    ],
  },
  {
    title: "Diagnosis",
    links: [
      ["/erectile-dysfunction-assessment", "ED Assessment"],
      ["/penile-doppler-ultrasound", "Penile Doppler"],
    ],
  },
  {
    title: "About",
    links: [
      ["/dr-niyazi-umut-ozdemir", "Dr. Niyazi Umut Özdemir"],
      ["/about", "Clinic"],
      ["/patient-experiences", "Patient Experiences"],
      ["/international-patients", "International Patients"],
    ],
  },
] as const;

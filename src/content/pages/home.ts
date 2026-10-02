import { DATE } from "../shared";
import type { PageDef } from "../types";

export const homePage: PageDef = {
  path: "/",
  metaTitle: "ED Treatment in Antalya | P-Shot, Shockwave | UZ Clinic",
  description:
    "Urologist-led erectile dysfunction assessment and penile rehabilitation in Antalya. P-Shot, shockwave and regenerative options. Confidential enquiry.",
  h1: "Erectile Dysfunction & Penile Rehabilitation in Antalya",
  eyebrow: "UZ Clinic Antalya",
  kind: "money",
  treatment: "not-sure",
  medical: true,
  answer: {
    q: "What does UZ Clinic Antalya treat?",
    a: "UZ Clinic Antalya is a urologist-led service for erectile dysfunction, reduced erection quality and penile vascular problems. Dr. Niyazi Umut Özdemir, a urological surgeon, assesses each patient and explains which options may be relevant, including P-Shot (PRP), shockwave therapy, regenerative therapies and penile rehabilitation. International patients are welcome.",
  },
  ctaLabel: "Check My Suitability",
  modified: DATE,
  priority: 1,
  blocks: [],
  faqs: [
    { q: "What does UZ Clinic Antalya treat?", a: "Erectile dysfunction, reduced erection quality and penile vascular problems, with assessment-led treatment planning and penile rehabilitation." },
    { q: "Do I need to know which treatment I need before contacting the clinic?", a: "No. Send your case and the clinic can advise which options may be relevant." },
    { q: "Are international patients accepted?", a: "Yes. International patients can start with a confidential remote review of their case." },
    { q: "Are the regenerative treatments proven?", a: "No. PRP, stem cells and exosomes are experimental or investigational for ED. Shockwave therapy is emerging. Established options such as PDE5 tablets are also discussed." },
    { q: "Is my enquiry confidential?", a: "Yes. Your information is used only to review your enquiry and contact you, as described in the privacy notice." },
  ],
  sources: ["eau2026", "aua2018"],
  related: ["/erectile-dysfunction", "/p-shot", "/shockwave-therapy-ed", "/erectile-dysfunction-assessment"],
};

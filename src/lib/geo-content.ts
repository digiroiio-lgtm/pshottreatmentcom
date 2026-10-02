import type { FaqItem } from "@/content/types";

// Takeaways and FAQs for the retained legacy guides (adapted in src/content/pages/legacy.ts).
export type GeoContent = { takeaways?: string[]; faqs: FaqItem[] };

export const geoContent: Record<string, GeoContent> = {
  "/post-finasteride-syndrome-ed": {
    takeaways: [
      "Finasteride can cause sexual adverse effects, and UK safety information warns that sexual dysfunction may persist after stopping.",
      "The frequency, mechanisms and boundaries of ‘post-finasteride syndrome’ remain uncertain.",
      "No credible evidence establishes PRP as a treatment for persistent symptoms after finasteride.",
    ],
    faqs: [
      { q: "Can finasteride cause erectile dysfunction?", a: "Yes. Finasteride is associated with sexual side effects including ED and reduced libido, and UK safety information warns that sexual dysfunction may persist after treatment is stopped." },
      { q: "Is post-finasteride syndrome an established diagnosis?", a: "The regulator warning is clear, but the mechanisms, prevalence and boundaries of the broader label remain uncertain because of study design limitations." },
      { q: "Does PRP treat persistent sexual symptoms after finasteride?", a: "No credible evidence establishes PRP for this purpose, and treatments marketed as tissue repair should not be presented as proven for this condition." },
      { q: "What should I do if I have symptoms after finasteride?", a: "Discuss symptoms and medication history with the prescriber or a clinician experienced in sexual medicine, and do not restart, stop or change prescribed treatment based on a website. Seek urgent help for suicidal thoughts or marked mental-health deterioration." },
    ],
  },
  "/testosterone-ed": {
    takeaways: [
      "Low testosterone can reduce desire and contribute to ED, but ED alone is not proof of testosterone deficiency.",
      "Testosterone therapy is supported for appropriately diagnosed hypogonadism, not as a universal ED treatment.",
      "There is no high-quality evidence that combining PRP with testosterone gives a superior ED outcome.",
    ],
    faqs: [
      { q: "Does low testosterone cause erectile dysfunction?", a: "It can contribute, but ED is not proof of deficiency. Diagnosis requires compatible symptoms and appropriately timed biochemical testing, usually confirmed on more than one occasion." },
      { q: "Will testosterone therapy cure my ED?", a: "Not necessarily. It can improve sexual symptoms in men with confirmed hypogonadism but does not repair established vascular or nerve damage." },
      { q: "Is PRP combined with testosterone more effective?", a: "There is no high-quality evidence establishing that combination as superior, so it should not be marketed as synergistic without a relevant, cited clinical trial." },
    ],
  },
  "/p-shot-vs-viagra": {
    takeaways: [
      "PDE5 inhibitors such as sildenafil (Viagra) are first-line in EAU guidance for many men; PRP evidence is insufficient for a clinical recommendation.",
      "Sildenafil has known dosing, contraindications and interactions; PRP protocols are not standardised.",
      "Sildenafil must not be combined with nitrates or nitric-oxide donors.",
    ],
    faqs: [
      { q: "Is the P-Shot better than Viagra?", a: "No evidence shows that. Viagra (sildenafil) has established evidence and guideline support as first-line therapy for many men, while PRP is experimental with inconsistent evidence." },
      { q: "What if Viagra does not seem to work?", a: "A clinician should check the likely cause, dose, timing, sexual stimulation, meal effects, medication authenticity and contraindications, because apparent non-response can reflect incorrect use or an untreated contributor." },
      { q: "Can I take Viagra with nitrates?", a: "No. Sildenafil must not be combined with nitrates or nitric-oxide donors because of dangerous blood-pressure effects." },
    ],
  },
};

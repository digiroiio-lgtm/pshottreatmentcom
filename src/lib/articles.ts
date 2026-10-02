import type { EvidenceSource } from "./evidence";
import { getSources } from "./evidence";

type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
};

export type Article = {
  path: string;
  h1: string;
  eyebrow: string;
  intro: string;
  evidenceStatus: "Established" | "Moderate" | "Limited" | "Uncertain" | "Not medical evidence";
  evidenceSummary: string;
  sections: ArticleSection[];
  sources: EvidenceSource[];
  related: { path: string; label: string }[];
};

const guidelineSources = getSources(["eau2026", "aua2018"]);

export const articles: Record<string, Article> = {
  "/testosterone-ed": {
    path: "/testosterone-ed",
    eyebrow: "Hormonal ED",
    h1: "Low Testosterone and Erectile Dysfunction",
    intro:
      "Low testosterone can reduce sexual desire and contribute to ED, but ED is not proof of testosterone deficiency. Diagnosis requires compatible symptoms plus appropriately timed biochemical testing, usually confirmed on more than one occasion.",
    evidenceStatus: "Established",
    evidenceSummary:
      "Testosterone therapy is supported for appropriately diagnosed hypogonadism, not as a universal ED treatment. Men with normal testosterone or predominantly vascular or neurological ED should not be led to expect that TRT will bring erections back.",
    sections: [
      {
        heading: "How diagnosis is made",
        bullets: [
          "Symptoms, medical history and examination matter alongside laboratory results.",
          "Morning total testosterone is commonly measured and an unexpectedly low result is usually confirmed.",
          "Additional tests may include SHBG/free testosterone, LH, FSH and prolactin depending on the result and clinical picture.",
          "Fertility goals, prostate health, haematocrit and other safety factors should be reviewed before treatment.",
        ],
      },
      {
        heading: "When testosterone may help",
        paragraphs: [
          "Testosterone therapy can improve sexual symptoms in men with confirmed hypogonadism and may improve response to PDE5 inhibitors in some men who have both testosterone deficiency and ED. It does not repair established vascular or nerve damage.",
        ],
      },
      {
        heading: "PRP plus TRT claims",
        paragraphs: [
          "There is no high-quality evidence establishing that combining testosterone with PRP produces a superior ED outcome. Such a combination should not be marketed as synergistic without a clearly cited clinical trial relevant to the patient group and protocol.",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/ed-causes", label: "ED causes" },
      { path: "/p-shot-vs-viagra", label: "Established vs experimental treatment" },
    ],
  },
  "/post-finasteride-syndrome-ed": {
    path: "/post-finasteride-syndrome-ed",
    eyebrow: "Medication safety",
    h1: "Finasteride and Persistent Sexual Symptoms",
    intro:
      "Finasteride is associated with sexual side effects, including erectile dysfunction and reduced libido, and regulators state that sexual dysfunction may persist after treatment stops. The mechanisms, frequency and boundaries of the broader label ‘post-finasteride syndrome’ remain uncertain.",
    evidenceStatus: "Uncertain",
    evidenceSummary:
      "The regulator warning is clear, but research on persistent symptom mechanisms and prevalence has important limitations. No credible evidence establishes PRP as a treatment for persistent symptoms after finasteride.",
    sections: [
      {
        heading: "What is established",
        bullets: [
          "Finasteride can cause sexual adverse effects during treatment.",
          "UK safety information warns that sexual dysfunction may persist after treatment is stopped.",
          "Mood changes and suicidal thoughts require prompt medical attention.",
        ],
      },
      {
        heading: "What remains uncertain",
        paragraphs: [
          "Persistent symptoms are reported, but study designs, selection bias, recall bias and varying definitions make frequency and causation difficult to quantify. A careful clinical assessment should consider other hormonal, vascular, neurological, medication and psychological contributors rather than assuming one mechanism.",
        ],
      },
      {
        heading: "What to do next",
        bullets: [
          "Discuss symptoms and medication history with the prescriber or a clinician experienced in sexual medicine.",
          "Do not restart, stop or change prescription treatment solely on the basis of a website.",
          "Seek urgent help for suicidal thoughts or a marked deterioration in mental health.",
          "Treatments marketed as tissue repair, including PRP, should not be presented as proven for this condition.",
        ],
      },
    ],
    sources: getSources(["mhraFinasteride", "eau2026"]),
    related: [
      { path: "/ed-causes", label: "Other causes of ED" },
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
    ],
  },
  "/p-shot-vs-viagra": {
    path: "/p-shot-vs-viagra",
    eyebrow: "Treatment comparison",
    h1: "P-Shot vs Viagra for Erectile Dysfunction",
    intro:
      "Viagra (sildenafil) is a PDE5 inhibitor with established evidence and guideline support as first-line ED therapy for many men. PRP is an experimental injected treatment with inconsistent evidence. A P-Shot should not be presented as a proven replacement for Viagra.",
    evidenceStatus: "Established",
    evidenceSummary:
      "The difference in evidence strength is clear: PDE5 inhibitors are first-line in EAU guidance; PRP evidence is insufficient for a clinical recommendation and the guideline limits it to trials.",
    sections: [
      {
        heading: "How they differ",
        bullets: [
          "Sildenafil enhances the nitric-oxide pathway during sexual stimulation; it does not create an automatic erection.",
          "PRP is injected into penile tissue with the proposed aim of influencing biological repair pathways, but clinical benefit is not established.",
          "Sildenafil has known dosing, contraindications and drug interactions. PRP protocols are not standardised.",
          "Sildenafil must not be combined with nitrates or nitric-oxide donors because of dangerous blood-pressure effects.",
        ],
      },
      {
        heading: "If tablets seem not to work",
        paragraphs: [
          "A clinician should first check the likely ED cause, dose, timing, sexual stimulation, meal effects, medication authenticity and contraindications. Apparent non-response can sometimes reflect incorrect use or an untreated contributor rather than failure of the drug class.",
        ],
      },
      {
        heading: "A fair decision framework",
        paragraphs: [
          "Compare expected benefit, evidence quality, side effects, convenience, cost and alternatives. If PRP is considered, it should be framed as experimental and not as a permanent or root-cause cure.",
        ],
      },
    ],
    sources: getSources(["eau2026", "aua2018", "masterson2023"]),
    related: [
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
      { path: "/ed-causes", label: "Why diagnosis matters" },
      { path: "/is-p-shot-worth-it", label: "Is it worth it?" },
    ],
  },
};

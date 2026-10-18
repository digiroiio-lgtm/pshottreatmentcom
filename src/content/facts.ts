// One-sentence, sourced and dated "key fact" per page. Shown under the answer block and in llms files.
// Each fact repeats a statement already made (and cited) on the page. Source ids come from src/lib/evidence.ts.
export type Fact = { text: string; source: string };

const prp: Fact = { text: "The 2026 EAU guideline says intracavernosal PRP for erectile dysfunction should be used only in a clinical-trial setting.", source: "eau2026" };
const shock: Fact = { text: "The 2026 EAU guideline reports a mild average improvement from low-intensity shockwave therapy and gives a weak recommendation for selected men with vasculogenic ED.", source: "eau2026" };
const stem: Fact = { text: "The 2026 EAU guideline considers the evidence for stem-cell therapy in ED insufficient for routine clinical use.", source: "eau2026" };
const pde5: Fact = { text: "PDE5 inhibitors are guideline-supported first-line therapy for many men with erectile dysfunction, unless contraindicated.", source: "eau2026" };
const doppler: Fact = { text: "Penile Doppler ultrasound can assess blood flow into and out of the penis in selected men with erectile dysfunction.", source: "eau2026" };

export const facts: Record<string, Fact> = {
  "/": prp,
  "/erectile-dysfunction": { text: "Major guidelines support a diagnosis-first pathway, cardiovascular risk assessment and lifestyle measures alongside established ED therapies such as PDE5 inhibitors.", source: "eau2026" },
  "/erectile-dysfunction-treatment": pde5,
  "/ed-treatment-options": { text: "PDE5 inhibitors, vacuum devices, injections and implants are established ED treatments; shockwave is emerging; PRP, stem cells and exosomes are experimental or investigational.", source: "eau2026" },
  "/erectile-dysfunction-treatment-turkey": prp,
  "/erectile-dysfunction-treatment-antalya": pde5,
  "/p-shot": prp,
  "/p-shot-turkey": prp,
  "/p-shot-antalya": prp,
  "/prp-for-erectile-dysfunction": prp,
  "/p-shot-vs-shockwave": shock,
  "/p-shot-vs-stem-cell": stem,
  "/shockwave-vs-stem-cell": shock,
  "/p-shot-vs-viagra": pde5,
  "/p-shot-vs-penile-injections": prp,
  "/side-effects": { text: "Reported adverse events in PRP studies have generally been minor, but trials are too small to define uncommon risks confidently.", source: "panunzio2024" },
  "/shockwave-therapy-ed": shock,
  "/edswt": shock,
  "/shockwave-therapy-erectile-dysfunction-turkey": shock,
  "/stem-cell-therapy-erectile-dysfunction": stem,
  "/stem-cell-treatment-ed-turkey": stem,
  "/vasculogenic-erectile-dysfunction": doppler,
  "/venous-leak": doppler,
  "/penile-doppler-ultrasound": doppler,
  "/erectile-dysfunction-after-prostate-surgery": { text: "Nerve recovery after radical prostatectomy can take many months, and nerve-sparing surgery does not guarantee preserved erections.", source: "eau2026" },
  "/diabetes-erectile-dysfunction": { text: "Diabetes can damage blood vessels and nerves and is a well-established risk factor for erectile dysfunction.", source: "eau2026" },
  "/testosterone-ed": { text: "Testosterone therapy is supported for appropriately diagnosed hypogonadism, not as a universal ED treatment.", source: "eau2026" },
  "/post-finasteride-syndrome-ed": { text: "UK safety information warns that sexual dysfunction may persist after finasteride treatment is stopped.", source: "mhraFinasteride" },
  "/ed-tablets-not-working": pde5,
  "/ed-under-40": prp,
  "/losing-erection-during-sex": doppler,
  "/ed-and-heart-disease": { text: "Major guidelines support cardiovascular risk assessment as part of the ED work-up, because ED shares risk factors with heart disease and diabetes.", source: "eau2026" },
  "/ed-evidence-tracker": prp,
  "/ed-and-blood-pressure-medicines": { text: "PDE5 inhibitors must not be combined with nitrates, and men taking other blood pressure medicines need medical advice before using them.", source: "eau2026" },
  "/antidepressants-and-ed": pde5,
  "/anxiety-and-ed": pde5,
  "/lifestyle-and-ed": { text: "Major guidelines support addressing lifestyle risk factors alongside established ED therapies.", source: "eau2026" },
  "/choose-an-ed-clinic-abroad": prp,
};

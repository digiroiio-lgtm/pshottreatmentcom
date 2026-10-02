// Data shared between rendered pages and their structured data, so markup never drifts from visible content.

export const howItWorksSteps: [string, string][] = [
  ["Clinical assessment", "Review ED history, medical conditions, medication, bleeding risk, likely cause and alternatives."],
  ["Blood collection", "A blood sample is taken using sterile technique."],
  ["PRP preparation", "A centrifuge separates blood components. The resulting concentration varies by system and protocol."],
  ["Anaesthesia and injection", "Local or topical anaesthesia may be used before intracavernosal or targeted penile injections."],
  ["Observation and aftercare", "The provider should give written instructions, warning signs and a named follow-up route."],
];

export const advertisedFees = [
  { currency: "GBP", symbol: "£", amount: "300", label: "British pound" },
  { currency: "EUR", symbol: "€", amount: "300", label: "Euro" },
  { currency: "USD", symbol: "$", amount: "300", label: "US dollar" },
];

export const costGuides: { path: string; label: string }[] = [
  { path: "/why-is-p-shot-expensive-london", label: "Why prices vary between London and Turkey" },
  { path: "/what-uk-clinics-dont-tell-you-p-shot-pricing", label: "What a UK P-Shot quote should explain" },
  { path: "/i-paid-1800-london-p-shot", label: "Comparing a £1,800 quote with Turkey" },
  { path: "/p-shot-cost-reddit", label: "How to read P-Shot cost discussions on Reddit" },
  { path: "/flying-to-turkey-ed-treatment", label: "Travelling to Turkey for ED treatment" },
  { path: "/best-p-shot-clinic-turkey", label: "How to choose a P-Shot provider in Turkey" },
  { path: "/reviews", label: "How P-Shot reviews are verified" },
];

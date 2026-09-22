export type EvidenceSource = {
  id: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
  level: "Guideline" | "Systematic review" | "Randomised trial" | "Regulator" | "Trial registry";
};

export const evidenceSources: Record<string, EvidenceSource> = {
  eau2026: {
    id: "eau2026",
    title: "EAU Guidelines on Sexual and Reproductive Health: Management of Erectile Dysfunction",
    publisher: "European Association of Urology",
    year: "2026",
    url: "https://uroweb.org/guidelines/sexual-and-reproductivehealth/chapter/management-of-erectile-dysfunction",
    level: "Guideline",
  },
  aua2018: {
    id: "aua2018",
    title: "Erectile Dysfunction: AUA Guideline",
    publisher: "American Urological Association",
    year: "2018",
    url: "https://www.auanet.org/guidelines-and-quality/guidelines/erectile-dysfunction-(ed)-guideline",
    level: "Guideline",
  },
  masterson2023: {
    id: "masterson2023",
    title: "Platelet-rich Plasma for the Treatment of Erectile Dysfunction: A Randomised Placebo-controlled Trial",
    publisher: "The Journal of Urology / PubMed",
    year: "2023",
    url: "https://pubmed.ncbi.nlm.nih.gov/37120727/",
    level: "Randomised trial",
  },
  poulios2021: {
    id: "poulios2021",
    title: "Platelet-Rich Plasma Improves Erectile Function: A Randomised Placebo-controlled Trial",
    publisher: "The Journal of Sexual Medicine / PubMed",
    year: "2021",
    url: "https://pubmed.ncbi.nlm.nih.gov/33906807/",
    level: "Randomised trial",
  },
  panunzio2024: {
    id: "panunzio2024",
    title: "PRP Intracavernosal Injections for Primary Organic ED: Systematic Review and Meta-analysis",
    publisher: "International Journal of Impotence Research / PubMed",
    year: "2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/37993601/",
    level: "Systematic review",
  },
  clinicalTrial: {
    id: "clinicalTrial",
    title: "PRP for the Treatment of Erectile Dysfunction (NCT04350125)",
    publisher: "ClinicalTrials.gov",
    year: "Current record",
    url: "https://clinicaltrials.gov/study/NCT04350125",
    level: "Trial registry",
  },
  mhraFinasteride: {
    id: "mhraFinasteride",
    title: "Finasteride and Dutasteride: Updated Safety Warnings",
    publisher: "UK Medicines and Healthcare products Regulatory Agency",
    year: "2026",
    url: "https://www.gov.uk/drug-safety-update/finasteride-and-dutasteride-updated-safety-warnings-for-psychiatric-side-effects-and-sexual-dysfunction",
    level: "Regulator",
  },
};

export const getSources = (ids: string[]) => ids.map((id) => evidenceSources[id]);

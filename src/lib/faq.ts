import type { FaqItem } from "./schema";

/**
 * One FAQ source, three consumers: the visible <dl> on the page, the FAQPage
 * JSON-LD, and llms-full.txt. Answers are written answer-first (the first
 * sentence stands alone) because that is the fragment AI answer engines quote.
 */

export const generalFaq: FaqItem[] = [
  {
    question: "How much does the P-Shot cost?",
    answer:
      "The P-Shot costs £300 / €300 / $300 all-inclusive at our clinic in Istanbul, with no separate consultation or facility fee. UK clinics typically charge £1,200–£2,000, US clinics $1,500–$2,500 and EU clinics €1,000–€1,800 for the same procedure.",
  },
  {
    question: "What is included in the price?",
    answer:
      "The price covers the doctor consultation, PRP extraction and processing, the P-Shot injection itself, medical aftercare instructions and English-speaking medical staff. Airport transfer, hotel accommodation and city tours are optional add-ons quoted separately.",
  },
  {
    question: "Does the P-Shot hurt?",
    answer:
      "Most patients describe mild discomfort rather than pain. A topical anaesthetic cream is applied to the treatment area for 20–30 minutes before the injection, and no sedation or general anaesthetic is used.",
  },
  {
    question: "How long does the procedure take?",
    answer:
      "Expect about 45–60 minutes in the clinic in total: roughly 15 minutes to centrifuge the blood, 20–30 minutes for the numbing cream to take effect, and around 20 minutes for the injection stage.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Some patients report early changes at 2–4 weeks, most notice a clear difference at 6–8 weeks, and the full effect is generally reached between 3 and 6 months as tissue regeneration completes. Individual results vary.",
  },
  {
    question: "How long do P-Shot results last?",
    answer:
      "Results typically last 12–18 months, after which some patients choose a repeat treatment. Duration varies with age, general health, smoking status and underlying vascular conditions.",
  },
  {
    question: "Is the P-Shot safe?",
    answer:
      "The P-Shot uses platelet-rich plasma prepared from your own blood, so there is essentially no risk of allergic reaction or rejection. The most common side effects are temporary redness, minor bruising and short-lived sensitivity at the injection site.",
  },
  {
    question: "What are the side effects of the P-Shot?",
    answer:
      "Common side effects are mild and short-lived: redness or swelling for 24–48 hours, minor bruising that fades within 3–5 days, and increased sensitivity that usually settles within 1–2 weeks. Serious complications are rare with sterile technique and autologous PRP.",
  },
  {
    question: "Who should not have a P-Shot?",
    answer:
      "The P-Shot is not suitable for men with an active infection or penile skin condition, or with platelet or blood-clotting disorders. Men taking anticoagulants need individual assessment, and every patient must complete a doctor consultation before treatment.",
  },
  {
    question: "Is the P-Shot FDA approved?",
    answer:
      "The P-Shot procedure itself is not FDA approved as a treatment for erectile dysfunction. The centrifuge systems used to prepare platelet-rich plasma are FDA-cleared medical devices, and the procedure is performed as an off-label use of PRP.",
  },
  {
    question: "How much downtime do I need?",
    answer:
      "Most patients resume normal daily activities the same day. Clinicians commonly advise avoiding strenuous exercise and sexual activity for 24–48 hours; your doctor will give you specific aftercare instructions.",
  },
  {
    question: "How long do I need to stay in Turkey?",
    answer:
      "Two nights is enough for most patients. A typical trip is: arrive day one, consultation and treatment day two, fly home day two evening or day three. There is no overnight hospital stay.",
  },
  {
    question: "Why is the P-Shot so much cheaper in Turkey?",
    answer:
      "The price difference reflects local costs, not a different procedure. Clinical salaries, facility rent, insurance and regulatory overheads are substantially lower in Turkey than in the UK or US, while the PRP consumables and technique are the same.",
  },
  {
    question: "Do I need to speak Turkish?",
    answer:
      "No. Consultations, the procedure and aftercare instructions are all conducted in English, and the medical coordinator you message on WhatsApp is an English speaker.",
  },
  {
    question: "How do I book a P-Shot consultation?",
    answer:
      "Message the clinic on WhatsApp for a free, no-obligation consultation. A medical coordinator replies within minutes between 08:00 and 22:00 Istanbul time (UTC+3), seven days a week.",
  },
];

/** Page-scoped subsets, so each page's FAQPage markup matches what it shows. */
const pick = (...questions: string[]): FaqItem[] =>
  questions.map((q) => {
    const found = generalFaq.find((item) => item.question === q);
    if (!found) throw new Error(`Unknown FAQ question: "${q}"`);
    return found;
  });

export const homeFaq = pick(
  "How much does the P-Shot cost?",
  "Does the P-Shot hurt?",
  "How soon will I see results?",
  "How long do P-Shot results last?",
  "Is the P-Shot safe?",
);

export const priceFaq = pick(
  "How much does the P-Shot cost?",
  "What is included in the price?",
  "Why is the P-Shot so much cheaper in Turkey?",
);

export const howItWorksFaq = pick(
  "How long does the procedure take?",
  "Does the P-Shot hurt?",
  "Is the P-Shot FDA approved?",
  "How much downtime do I need?",
);

export const sideEffectsFaq = pick(
  "What are the side effects of the P-Shot?",
  "Is the P-Shot safe?",
  "Who should not have a P-Shot?",
  "How much downtime do I need?",
);

export const beforeAfterFaq = pick(
  "How soon will I see results?",
  "How long do P-Shot results last?",
);

export const istanbulFaq = pick(
  "How long do I need to stay in Turkey?",
  "Why is the P-Shot so much cheaper in Turkey?",
  "Do I need to speak Turkish?",
);

export const contactFaq = pick(
  "How do I book a P-Shot consultation?",
  "Do I need to speak Turkish?",
);

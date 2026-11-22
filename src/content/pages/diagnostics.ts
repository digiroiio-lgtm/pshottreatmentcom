import { ASSESS_STEPS, DATE, EAU_PRP, NO_GUARANTEE } from "../shared";
import type { PageDef } from "../types";

export const diagnosticPages: PageDef[] = [
  {
    path: "/erectile-dysfunction-assessment",
    metaTitle: "Confidential Erectile Dysfunction Assessment | UZ Clinic",
    description:
      "Send your case for a confidential ED assessment. Answer a few short questions and a patient coordinator will contact you about next steps.",
    h1: "Confidential Erectile Dysfunction Assessment",
    eyebrow: "Send your case",
    kind: "diagnostic",
    treatment: "not-sure",
    medical: true,
    answer: {
      q: "How does the ED assessment work?",
      a: "You answer a few short, private questions about your erection problem, history and what you have tried. Your information goes to the clinic for confidential review, and a patient coordinator contacts you about the next steps. The doctor decides suitability after assessing you. You do not need to know which treatment you need.",
    },
    takeaways: [
      "Private and confidential. You do not need to call.",
      "Takes about 2 minutes.",
      "Sending your case does not commit you to treatment.",
    ],
    ctaLabel: "Start the Assessment",
    modified: DATE,
    priority: 0.95,
    blocks: [
      { type: "assessment-form" },
      { type: "steps", heading: "What happens after you send your case", id: "next-steps", steps: ASSESS_STEPS },
      {
        type: "text",
        heading: "What a full specialist assessment may include",
        id: "full-assessment",
        bullets: [
          "A private discussion of your symptoms, history, medicines and goals.",
          "A focused examination.",
          "Blood tests where useful, such as glucose or HbA1c, lipids and testosterone.",
          "Penile Doppler ultrasound in selected men to assess blood flow.",
        ],
        note: "The online form is not a diagnosis. " + NO_GUARANTEE,
      },
      { type: "doctor" },
    ],
    faqs: [
      { q: "Is my enquiry confidential?", a: "Yes. Your information is used to review your enquiry and contact you, as set out in the privacy notice." },
      { q: "Will a doctor review my form straight away?", a: "Your information is sent for confidential review. A patient coordinator will contact you, and the doctor assesses suitability at consultation." },
      { q: "Do I have to travel to be assessed?", a: "You can start remotely. An in-person assessment is needed before treatment." },
      { q: "Can I send medical reports?", a: "Yes. The coordinator will tell you how to send blood tests or Doppler results securely." },
    ],
    related: ["/erectile-dysfunction", "/penile-doppler-ultrasound", "/ed-treatment-options", "/international-patients"],
  },
  {
    path: "/penile-doppler-ultrasound",
    metaTitle: "Penile Doppler Ultrasound: What It Shows and When It Helps",
    description:
      "Penile Doppler ultrasound measures blood flow in the penis to help find the cause of ED. What the test involves, what it shows and its limits.",
    h1: "Penile Doppler Ultrasound for Erectile Dysfunction",
    eyebrow: "Diagnostic test",
    kind: "diagnostic",
    treatment: "not-sure",
    medical: true,
    evidence: "Established",
    parent: { name: "Erectile dysfunction", path: "/erectile-dysfunction" },
    answer: {
      q: "What is a penile Doppler ultrasound?",
      a: "A penile Doppler (duplex) ultrasound is a scan that measures blood flow into and out of the penis. It helps a urologist tell whether ED is related to arterial inflow or to a venous leak, which can influence which treatments are worth discussing. It is used in selected men, not everyone.",
    },
    takeaways: [
      "It shows how well blood enters and stays in the penis.",
      "It can help distinguish arterial insufficiency from venous leak.",
      "The doctor decides whether you need it.",
    ],
    ctaLabel: "Ask Whether You Need a Doppler Scan",
    modified: DATE,
    priority: 0.8,
    blocks: [
      {
        type: "steps",
        heading: "What the test involves",
        id: "procedure",
        steps: [
          { title: "Preparation", text: "The doctor reviews your history and explains the test. You are told whether to adjust any medicines." },
          { title: "Inducing an erection", text: "A small dose of a medicine that widens blood vessels is usually injected into the penis to produce an erection. Visual or manual stimulation may be used too." },
          { title: "Scanning", text: "An ultrasound probe measures blood velocity in the penile arteries and assesses whether blood is retained." },
          { title: "Interpretation", text: "The urologist interprets the results alongside your history and examination." },
        ],
      },
      {
        type: "text",
        heading: "What the results can show",
        id: "results",
        paragraphs: [
          "Doctors commonly look at the speed of blood entering the arteries (peak systolic velocity) and the residual flow in the diastolic phase. Reference values, such as a peak systolic velocity below about 25 cm/s suggesting arterial insufficiency, or a high end-diastolic velocity suggesting venous leakage, are interpreted by the clinician with the full picture, not in isolation.",
        ],
      },
      { type: "cta", title: "Find Out Whether a Doppler Scan Would Help Your Case", text: "Send your history, and any previous scan reports. The urologist advises whether the test is useful.", label: "Ask Whether You Need a Doppler Scan" },
      {
        type: "cards",
        heading: "Risks and limits",
        id: "risks",
        cols: 2,
        cards: [
          { title: "Prolonged erection", text: "The injected medicine can rarely cause an erection lasting too long. Seek urgent help if an erection lasts more than four hours." },
          { title: "Not always needed", text: "Many men are treated without a Doppler scan. It is most useful when blood-flow problems are suspected or before certain procedures." },
          { title: "Anxiety can affect results", text: "Anxiety in the examination room can limit the erection and the readings, which the clinician takes into account." },
          { title: "Not a treatment", text: "It is a diagnostic test. It does not treat ED." },
        ],
      },
      {
        type: "text",
        heading: "How it relates to treatment choice",
        id: "treatment",
        paragraphs: [
          "Blood-flow findings can help the doctor decide whether options such as shockwave therapy may be relevant, and what is realistic in a venous leak. " + EAU_PRP,
        ],
      },
      { type: "treatment-nav", heading: "Treatments the results may inform" },
      { type: "doctor" },
    ],
    faqs: [
      { q: "Does a Doppler scan hurt?", a: "The injection can cause brief discomfort. The scan itself is painless. Experiences differ." },
      { q: "Do I need a Doppler scan before shockwave therapy?", a: "Not always, but it can help with patient selection. The doctor decides." },
      { q: "Can I send an old Doppler report?", a: "Yes. Send it with your case, and the doctor will review it." },
    ],
    sources: ["eau2026", "aua2018"],
    related: ["/penile-doppler-antalya", "/vasculogenic-erectile-dysfunction", "/venous-leak", "/shockwave-therapy-ed", "/erectile-dysfunction-assessment", "/edswt", "/ed-glossary"],
  },
  {
    path: "/penile-doppler-antalya",
    metaTitle: "Penile Doppler Ultrasound in Antalya, Turkey | UZ Clinic",
    description:
      "Penile Doppler ultrasound at UZ Clinic Antalya, Turkey: who it suits, sending old reports first, what the visit involves and what the scan can show.",
    h1: "Penile Doppler Ultrasound in Antalya",
    eyebrow: "Diagnostic test at the clinic",
    kind: "diagnostic",
    treatment: "not-sure",
    medical: true,
    evidence: "Established",
    parent: { name: "Penile Doppler", path: "/penile-doppler-ultrasound" },
    answer: {
      q: "Can I have a penile Doppler ultrasound in Antalya?",
      a: "Yes. Penile Doppler ultrasound is performed at UZ Clinic Antalya, in Turkey, as part of a urologist-led assessment of erectile dysfunction. Dr. Niyazi Umut Özdemir decides whether the scan is useful for your case, because it is used in selected men rather than everyone. You can send previous Doppler reports for remote review before travelling, and the scan is not a treatment.",
    },
    takeaways: [
      "Performed at the clinic in Antalya, Turkey (Türkiye), as part of an assessment.",
      "The urologist decides whether you need it. Many men do not.",
      "Send earlier reports first so a repeat scan is only done if it adds information.",
    ],
    ctaLabel: "Ask About a Doppler Scan in Antalya",
    modified: DATE,
    priority: 0.8,
    blocks: [
      {
        type: "text",
        heading: "When a Doppler scan may be suggested",
        id: "when",
        paragraphs: [
          "A urologist may suggest a penile Doppler scan when a blood-flow cause of ED is suspected, when tablets have not worked, when ED began after pelvic surgery or injury, or before some procedures. It helps separate poor arterial inflow from a venous leak. The general explanation of the test is in the penile Doppler ultrasound guide.",
        ],
        bullets: [
          "ED that does not respond to tablets such as sildenafil or tadalafil.",
          "ED in younger men, or ED that started suddenly.",
          "Diabetes, high blood pressure or vascular disease alongside ED.",
          "Planning treatment where blood-flow findings change the options, for example shockwave therapy.",
        ],
      },
      {
        type: "steps",
        heading: "How it works at UZ Clinic Antalya",
        id: "visit",
        steps: [
          { title: "Send your case", text: "Share your history, medicines and any earlier Doppler report. A patient coordinator contacts you." },
          { title: "Doctor decides", text: "The urologist reviews what you sent and advises whether a scan is needed, or whether an earlier report is enough." },
          { title: "Scan during the visit", text: "If advised, the scan takes place at the clinic in Antalya as part of your in-person assessment. The doctor explains the test and its risks before you consent." },
          { title: "Results explained", text: "The urologist interprets the findings with your history and examination and explains what they mean for your options." },
        ],
      },
      { type: "cta", title: "Send Your History and Earlier Reports", text: "The clinic reviews them remotely and advises whether you need a Doppler scan in Antalya.", label: "Ask About a Doppler Scan in Antalya" },
      {
        type: "text",
        heading: "Planning around a scan if you travel",
        id: "travel",
        paragraphs: [
          "The Doppler scan can be arranged within the in-person assessment, so it does not need a separate trip. The coordinator advises on timing once the doctor has reviewed your case. The fee for a scan is not published on this site: ask for it in your itemised written quote.",
        ],
        bullets: [
          "Bring or send previous Doppler reports, blood tests and a list of medicines.",
          "Tell the doctor about blood thinners, heart conditions and any history of prolonged erections before the scan.",
          "Patients from Istanbul or elsewhere in Türkiye follow the same process: remote review first, then travel to Antalya.",
        ],
        note: "The scan is diagnostic only. It does not treat ED, and the result does not predict how well any treatment will work.",
      },
      {
        type: "callout",
        tone: "caution",
        title: "Prolonged erection after the injection",
        text: "The medicine used to produce an erection during the scan can rarely cause an erection lasting too long. Seek urgent medical care for an erection lasting more than four hours.",
      },
      { type: "treatment-nav", heading: "Treatments the results may inform" },
      { type: "doctor" },
      { type: "location" },
    ],
    faqs: [
      { q: "Is penile Doppler ultrasound done in Antalya?", a: "Yes. It is performed at UZ Clinic Antalya when the urologist advises it as part of an ED assessment." },
      { q: "Do I need a Doppler scan before I travel?", a: "No. You can start with a remote review and send any earlier reports. The doctor advises whether a scan is needed." },
      { q: "Can I use a Doppler report from another country?", a: "Send it with your case. The urologist reviews it and advises whether it is enough or a new scan would add information." },
      { q: "How much does a penile Doppler scan cost in Antalya?", a: "The fee is not published here. Ask the coordinator for it in your itemised written quote." },
      { q: "Does the scan hurt?", a: "The injection used to produce an erection can cause brief discomfort. The scan itself is painless. Experiences differ." },
    ],
    sources: ["eau2026", "aua2018"],
    related: ["/penile-doppler-ultrasound", "/vasculogenic-erectile-dysfunction", "/venous-leak", "/erectile-dysfunction-treatment-antalya", "/international-patients", "/erectile-dysfunction-assessment", "/shockwave-therapy-ed"],
  },
];

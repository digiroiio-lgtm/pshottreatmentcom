import { DATE, NO_GUARANTEE } from "../shared";
import type { PageDef } from "../types";

const EAU_SW =
  "The 2026 EAU guideline reports a mild average improvement from low-intensity shockwave therapy and gives a weak recommendation for selected men with vasculogenic ED.";

export const shockwavePages: PageDef[] = [
  {
    path: "/shockwave-therapy-ed",
    metaTitle: "Shockwave Therapy for ED | EdSWT Antalya | UZ Clinic",
    description:
      "Who shockwave therapy (EdSWT) may help, how patient selection works, the 12-session protocol and the evidence. Check if it fits your ED type.",
    h1: "Shockwave Therapy for Erectile Dysfunction (EdSWT)",
    eyebrow: "Treatment guide",
    kind: "money",
    treatment: "shockwave",
    medical: true,
    evidence: "Emerging",
    answer: {
      q: "What is EdSWT?",
      a: "EdSWT (erectile dysfunction shockwave therapy), also called Li-ESWT, applies low-intensity shockwaves to the penis. It is aimed mainly at vasculogenic (blood-flow related) ED. It is non-invasive, with no injection. Careful patient selection matters, because it is not a treatment for every cause of ED.",
    },
    lead: "At UZ Clinic Antalya, shockwave therapy is offered after assessment, with a defined protocol and a doctor who checks whether it fits your ED type.",
    takeaways: [
      "Intended primarily for vasculogenic ED. Patient selection is important.",
      "Clinic protocol: 12 sessions with 18,000 shock waves in total.",
      EAU_SW,
    ],
    ctaLabel: "Check If Shockwave Therapy Fits Your ED Type",
    modified: DATE,
    priority: 1,
    schema: { therapy: "Low-intensity shockwave therapy (EdSWT / Li-ESWT)", condition: "Vasculogenic erectile dysfunction" },
    blocks: [
      {
        type: "cards",
        heading: "Who shockwave therapy may help",
        id: "who-may-benefit",
        cols: 2,
        cards: [
          { title: "Vasculogenic ED", text: "ED mainly caused by reduced blood flow. This is the group studied most.", href: "/vasculogenic-erectile-dysfunction" },
          { title: "Blood-flow related ED", text: "Men with risk factors such as diabetes, high blood pressure or high cholesterol, where assessment suggests a blood-flow pattern." },
          { title: "Partial responders to tablets", text: "Men who respond only partly to PDE5 inhibitors (for example sildenafil or tadalafil). The doctor first checks that tablets were used correctly." },
          { title: "Men who prefer to avoid injections", text: "Some men want a non-invasive option. Guidelines refer to well-informed men who do not want or cannot take oral therapy." },
        ],
      },
      {
        type: "cards",
        heading: "Who may be less suitable",
        id: "less-suitable",
        cols: 2,
        cards: [
          { title: "ED with another main cause", text: "Mainly psychological, hormonal, drug-related or nerve-related ED may respond less. These are checked first." },
          { title: "Severe ED", text: "The evidence is stronger for mild vasculogenic ED. Benefit in severe disease is less certain." },
          { title: "Unclear diagnosis", text: "If the cause has not been assessed, treatment can be premature. A proper evaluation comes first." },
          { title: "Other medical reasons", text: "The doctor screens for conditions that make treatment unsuitable for you." },
        ],
      },
      { type: "cta", title: "Check If Shockwave Therapy Fits Your ED Type", text: "Send your symptoms and any Doppler or blood test results. The urologist can advise whether shockwave therapy may be relevant.", label: "Check If Shockwave Therapy Fits Your ED Type" },
      {
        type: "text",
        heading: "Diagnostic assessment and penile Doppler",
        id: "assessment",
        paragraphs: [
          "Because shockwave therapy is aimed at blood-flow related ED, assessing blood flow is useful. Penile Doppler ultrasound can show how well blood enters and stays in the penis. The doctor decides whether you need it.",
        ],
        note: "Doppler results can also show whether a venous leak is likely, which affects what is realistic.",
      },
      {
        type: "steps",
        heading: "The clinic's treatment protocol",
        id: "protocol",
        intro: "Device: Omnispec ED1000. The clinic's current protocol is:",
        steps: [
          { title: "Block 1: 6 sessions", text: "2 to 3 sessions per week, with 1,500 shocks per session." },
          { title: "3-week interval", text: "A planned break between the two blocks." },
          { title: "Block 2: 6 further sessions", text: "Again 2 to 3 sessions per week, with 1,500 shocks per session." },
          { title: "Total", text: "12 sessions and 18,000 shock waves. Protocols can be adjusted by the doctor." },
        ],
      },
      {
        type: "text",
        heading: "Clinical evidence",
        id: "evidence",
        paragraphs: [
          EAU_SW + " Protocols and devices vary between studies, and long-term benefit is uncertain. Focused or linear low-intensity devices used in ED trials should not be confused with radial pressure-wave devices.",
          NO_GUARANTEE,
        ],
      },
      { type: "comparison", heading: "Shockwave compared with other options", highlight: ["shockwave", "p-shot", "stem-cell"] },
      {
        type: "text",
        heading: "P-Shot vs shockwave, and combinations",
        id: "vs-and-combination",
        paragraphs: [
          "Shockwave is non-invasive and mainly for vasculogenic ED. P-Shot is an injection and is experimental. Some clinics combine them, but there is not enough high-quality evidence to say a combination is better, so it is treated as investigational. The doctor discusses whether any combination is appropriate for you.",
        ],
      },
      { type: "cta", title: "Compare Shockwave and P-Shot for Your Case", text: "Ask the urologist which option may be more relevant to your ED type.", label: "Ask the Urologist", whatsapp: true },
      { type: "stories", heading: "Shockwave patient experiences" },
      { type: "doctor" },
    ],
    faqs: [
      { q: "Is shockwave therapy painful?", a: "It is generally described as well tolerated, and no injection is involved. Experiences differ, and the clinic explains what to expect." },
      { q: "How many sessions are needed?", a: "The clinic protocol is 12 sessions: 6, a 3-week interval, then 6 more, with 1,500 shocks per session." },
      { q: "Is the result permanent?", a: "No permanent result can be promised. Benefit, when it occurs, varies between patients, and long-term evidence is limited." },
      { q: "Does shockwave work for all ED?", a: "No. It is intended primarily for vasculogenic ED, which is why assessment and patient selection matter." },
      { q: "Can I use shockwave with my tablets?", a: "Some men continue tablets during treatment. The doctor advises on your medicines and does not expect you to change them yourself." },
    ],
    sources: ["eau2026", "aua2018"],
    related: ["/edswt", "/shockwave-therapy-erectile-dysfunction-turkey", "/penile-doppler-ultrasound", "/vasculogenic-erectile-dysfunction", "/p-shot-vs-shockwave", "/shockwave-vs-stem-cell", "/erectile-dysfunction-assessment"],
  },
  {
    path: "/edswt",
    metaTitle: "EdSWT and Li-ESWT: Protocol and Device | UZ Clinic",
    description:
      "EdSWT and Li-ESWT explained: the Omnispec ED1000 protocol (12 sessions, 18,000 shocks), what a session involves and how it differs from radial devices.",
    h1: "EdSWT and Li-ESWT: Protocol, Device and Sessions",
    eyebrow: "Technology and protocol",
    kind: "money",
    treatment: "shockwave",
    medical: true,
    evidence: "Emerging",
    answer: {
      q: "What do EdSWT and Li-ESWT mean?",
      a: "Both terms describe low-intensity extracorporeal shockwave therapy used for erectile dysfunction. Li-ESWT is the general scientific name, and EdSWT means erectile dysfunction shockwave therapy. They refer to the same type of treatment, delivered as a course of sessions with a medical device.",
    },
    ctaLabel: "Check If Shockwave Therapy Fits Your ED Type",
    modified: DATE,
    priority: 0.8,
    schema: { therapy: "Low-intensity shockwave therapy (EdSWT / Li-ESWT)", condition: "Vasculogenic erectile dysfunction" },
    blocks: [
      {
        type: "table",
        heading: "The clinic protocol at a glance",
        id: "protocol",
        caption: "UZ Clinic Antalya EdSWT protocol (current)",
        headers: ["Item", "Detail"],
        rows: [
          ["Device", "Omnispec ED1000"],
          ["Frequency", "2 to 3 sessions per week"],
          ["Shocks per session", "1,500"],
          ["First block", "6 sessions"],
          ["Interval", "3 weeks"],
          ["Second block", "6 further sessions"],
          ["Total", "12 sessions, 18,000 shock waves"],
        ],
        note: "The doctor can adjust the plan for an individual patient.",
      },
      {
        type: "text",
        heading: "What a session involves",
        id: "session",
        paragraphs: [
          "A gel is applied and the probe delivers shockwaves to different areas of the penis. No injection is used. The clinic explains the duration and what you may feel before you start.",
        ],
      },
      {
        type: "text",
        heading: "Li-ESWT, EdSWT and radial devices",
        id: "terms",
        paragraphs: [
          "Li-ESWT and EdSWT describe the focused or linear low-intensity technique studied in ED trials. Radial pressure-wave devices are different and should not be assumed to give the same result. Ask any provider to name the device and the evidence for its protocol.",
        ],
      },
      { type: "cta", title: "See If This Protocol Suits Your ED Type", text: "Send your case. The urologist checks whether you are a suitable candidate.", label: "Check If Shockwave Therapy Fits Your ED Type" },
      {
        type: "callout",
        tone: "evidence",
        title: "Evidence and limits",
        text: EAU_SW + " Protocols vary, and long-term benefit is uncertain. " + NO_GUARANTEE,
      },
      { type: "doctor" },
    ],
    faqs: [
      { q: "Are EdSWT and Li-ESWT the same?", a: "Yes, they describe the same type of low-intensity shockwave therapy for ED." },
      { q: "How long is the course?", a: "The clinic protocol uses 12 sessions with a 3-week break after the first 6. The total length is therefore a number of weeks, and the coordinator confirms scheduling." },
      { q: "Is the device approved for ED?", a: "Ask the clinic for the device documentation. This site does not make regulatory claims about the device." },
    ],
    sources: ["eau2026"],
    related: ["/shockwave-therapy-ed", "/shockwave-therapy-erectile-dysfunction-turkey", "/penile-doppler-ultrasound", "/erectile-dysfunction-assessment"],
  },
  {
    path: "/shockwave-therapy-erectile-dysfunction-turkey",
    metaTitle: "Shockwave Therapy for ED in Turkey | UZ Clinic Antalya",
    description:
      "Planning shockwave therapy for ED in Turkey: how a 12-session course fits a trip, what to send for remote review and how assessment decides suitability.",
    h1: "Shockwave Therapy for Erectile Dysfunction in Turkey",
    eyebrow: "Shockwave abroad",
    kind: "money",
    treatment: "shockwave",
    medical: true,
    evidence: "Emerging",
    answer: {
      q: "Can I have shockwave therapy for ED in Turkey?",
      a: "Yes. UZ Clinic Antalya offers EdSWT after assessment. Because the clinic protocol is a course of 12 sessions with a 3-week interval, planning matters for international patients. You can send your case first, so the urologist can advise whether the treatment fits your ED type before you arrange travel.",
    },
    ctaLabel: "Check Shockwave Therapy Suitability",
    modified: DATE,
    priority: 0.8,
    schema: { therapy: "Low-intensity shockwave therapy (EdSWT / Li-ESWT)", condition: "Vasculogenic erectile dysfunction" },
    blocks: [
      {
        type: "text",
        heading: "Planning a course around travel",
        id: "planning",
        paragraphs: [
          "The protocol is 6 sessions (2 to 3 per week), a 3-week interval, then 6 more sessions. Patients from abroad usually need to plan how to complete the course. The coordinator discusses the schedule that suits your case, and the doctor decides what is clinically appropriate.",
        ],
      },
      {
        type: "text",
        heading: "What to send before travelling",
        id: "send",
        bullets: [
          "ED history, how long you have had it and which treatments you have tried.",
          "Medicines and medical conditions, including diabetes, blood pressure and heart disease.",
          "Any penile Doppler ultrasound report or recent blood tests.",
        ],
      },
      { type: "cta", title: "Check Shockwave Suitability Before You Travel", text: "Send your case so the urologist can say whether EdSWT may be relevant.", label: "Check Shockwave Therapy Suitability" },
      { type: "international" },
      { type: "treatment-nav", heading: "Other treatments you can ask about", exclude: ["shockwave"] },
      { type: "doctor" },
    ],
    faqs: [
      { q: "Can I do all 12 sessions in one trip?", a: "The schedule includes a 3-week interval in the standard protocol. Ask the coordinator how it can be arranged for your case." },
      { q: "Do I need a Doppler scan before travelling?", a: "Not always. Send it if you have one. The doctor decides whether to arrange one." },
    ],
    sources: ["eau2026"],
    related: ["/shockwave-therapy-ed", "/edswt", "/international-patients", "/erectile-dysfunction-treatment-turkey", "/erectile-dysfunction-assessment"],
  },
];

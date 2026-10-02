// Answer-engine content layer: short "key takeaways" and visible FAQs per route.
// Every statement restates a claim already made (and sourced) in the page body or in evidence.ts.
// The same data renders the visible FAQ and the FAQPage JSON-LD, so markup always matches the page.

export type FaqItem = { q: string; a: string };

export type GeoContent = {
  takeaways?: string[];
  faqs: FaqItem[];
};

const EAU_PRP =
  "The 2026 European Association of Urology guideline says intracavernosal PRP for erectile dysfunction should be used only in a clinical-trial setting.";

export const geoContent: Record<string, GeoContent> = {
  "/": {
    faqs: [
      {
        q: "What is the P-Shot?",
        a: "The P-Shot is a platelet-rich plasma (PRP) treatment for erectile dysfunction. Blood is drawn, processed to concentrate platelets in plasma, and the preparation is injected into penile tissue after assessment and consent. PRP for ED is experimental.",
      },
      {
        q: "Is the P-Shot proven to treat erectile dysfunction?",
        a: `No. Some trials report improved erectile-function scores, while a 2023 randomised placebo-controlled trial found no efficacy difference. ${EAU_PRP}`,
      },
      {
        q: "How much does the P-Shot cost on this site?",
        a: "The site advertises a treatment fee of £300, €300 or $300 depending on billing currency. The fee is not independently verified, and the complete scope, including what is and is not included, should be confirmed in writing before paying.",
      },
      {
        q: "What are the risks of the P-Shot?",
        a: "Reported adverse events in studies have generally been minor, such as pain, bruising and swelling, but trials are too small to define uncommon risks. Bleeding and infection are possible with any penile injection.",
      },
    ],
  },
  "/how-it-works": {
    faqs: [
      {
        q: "How is the P-Shot performed?",
        a: "A clinician assesses ED history and risks, blood is drawn, a centrifuge concentrates platelets in plasma, and local or topical anaesthesia may be used before the PRP is injected into penile tissue. Written aftercare and a follow-up route should be provided.",
      },
      {
        q: "Does PRP regenerate penile tissue?",
        a: "Platelets release growth factors, which gives a rationale for research, but current human evidence does not establish that penile PRP regenerates nerves, reverses fibrosis or permanently restores erectile function.",
      },
      {
        q: "Is there a standard P-Shot protocol?",
        a: "No. Preparation, platelet concentration, activation, injection sites and number of sessions vary between studies and providers, and no single protocol is established as optimal.",
      },
    ],
  },
  "/side-effects": {
    faqs: [
      {
        q: "What are the side effects of the P-Shot?",
        a: "Expected effects include temporary injection pain, tenderness, bruising, redness or swelling. Bleeding, haematoma and infection are possible, and small trials cannot reliably quantify rare events or long-term effects.",
      },
      {
        q: "Is PRP risk-free because it comes from my own blood?",
        a: "No. Autologous PRP reduces concern about donor rejection, but sterility, clinician technique, anaesthetic or additives, medical history and anticoagulant use all affect safety.",
      },
      {
        q: "Who should discuss suitability before treatment?",
        a: "People with active infection or skin lesions, bleeding disorders or clotting medicines, major medical conditions, allergy to anaesthetic, or unexplained penile pain, curvature or lumps should discuss suitability with a clinician first.",
      },
      {
        q: "When should I seek urgent medical help after a penile injection?",
        a: "Seek urgent care for fever, spreading redness, pus, rapidly increasing swelling, severe or worsening pain, significant bleeding, difficulty urinating, loss of penile sensation or an erection lasting more than four hours.",
      },
    ],
  },
  "/price": {
    faqs: [
      {
        q: "How much does the P-Shot cost?",
        a: "This site advertises £300, €300 or $300 depending on the chosen billing currency. These are stated billing options rather than live exchange-rate conversions, and the scope is not independently verified.",
      },
      {
        q: "Does the fee include flights, hotel and follow-up?",
        a: "Flights, hotel, transfers, tests, medication, extra sessions and complication care are not assumed to be included. Request an itemised written quote before paying.",
      },
      {
        q: "Does a higher price mean better outcomes?",
        a: "No. A higher price does not prove better outcomes and a lower price does not prove that protocols or providers are equivalent. Compare itemised quotations, credentials, consent and follow-up.",
      },
      {
        q: "What should I confirm before paying?",
        a: "Confirm the legal provider, treating clinician and facility address; whether the fee covers one session or a course; what assessment and aftercare are included; separate travel costs; and cancellation and refund terms.",
      },
    ],
  },
  "/ed-knowledge-hub": {
    takeaways: [
      "ED is a symptom, not a single diagnosis; assessment should look for vascular, neurological, hormonal, medication-related and psychological contributors first.",
      "PDE5 inhibitors are guideline-supported first-line therapy for many men, alongside lifestyle and cardiovascular risk management.",
      "PRP and stem-cell approaches remain investigational for ED and should not be described as established cures.",
    ],
    faqs: [
      {
        q: "What causes erectile dysfunction?",
        a: "Common contributors are vascular disease, nerve injury, hormonal disorders, medication effects and psychological factors, often in combination. The cause should be assessed before a treatment is chosen.",
      },
      {
        q: "What is the first-line treatment for ED?",
        a: "Lifestyle and cardiovascular risk-factor management come first or alongside treatment, and PDE5 inhibitors are guideline-supported first-line therapy for many men unless contraindicated.",
      },
      {
        q: "Is PRP an established treatment for erectile dysfunction?",
        a: EAU_PRP,
      },
      {
        q: "Can ED be a sign of other health problems?",
        a: "Yes. ED can be an early marker of cardiovascular or metabolic disease, so a medical history, medication review and appropriate testing are recommended.",
      },
    ],
  },
  "/ed-causes": {
    takeaways: [
      "ED can result from reduced arterial inflow, impaired veno-occlusion, nerve injury, hormonal disorders, medication effects or psychological factors.",
      "Assessment commonly includes history, cardiovascular risk and medication review and a focused examination; specialised tests are not needed for everyone.",
      "ED and cardiovascular disease share risk factors, so new or worsening ED can justify a broader health review.",
    ],
    faqs: [
      {
        q: "What are the most common causes of erectile dysfunction?",
        a: "Vascular (atherosclerosis, diabetes, hypertension, dyslipidaemia, smoking), neurological (neuropathy, pelvic surgery, spinal disease), hormonal, medication-related and psychological factors, alone or together.",
      },
      {
        q: "Which medicines can affect erections?",
        a: "Some antidepressants, antihypertensives, anti-androgens and 5-alpha-reductase inhibitors can affect sexual function. Do not change prescribed medicine without advice from the prescriber.",
      },
      {
        q: "What does an ED assessment include?",
        a: "A medical and sexual history, cardiovascular risk review, medication review and focused examination, with individualised tests such as glucose or HbA1c, lipids and morning testosterone.",
      },
    ],
  },
  "/diabetes-erectile-dysfunction": {
    takeaways: [
      "Diabetes can contribute to ED through blood-vessel disease, neuropathy, medication effects and associated cardiovascular risk.",
      "Risk-factor management and established ED therapies such as PDE5 inhibitors are guideline-supported options.",
      "PRP has not been established as a treatment for diabetic ED, and claims that it repairs diabetic nerves exceed current evidence.",
    ],
    faqs: [
      {
        q: "How does diabetes cause erectile dysfunction?",
        a: "Long-term high blood glucose can damage small blood vessels and endothelial function, neuropathy can disrupt erectile signalling, and diabetes often coexists with hypertension, dyslipidaemia and cardiovascular disease.",
      },
      {
        q: "What treatments are established for diabetic ED?",
        a: "Improved diabetes and cardiovascular risk management, with PDE5 inhibitors commonly first-line. Vacuum devices, alprostadil and other therapies may be considered when tablets are unsuitable or ineffective.",
      },
      {
        q: "Can PRP repair nerve damage from diabetes?",
        a: "No such benefit has been established. PRP research has generally involved selected men with organic or vasculogenic ED, which is not proof for diabetic neuropathy or advanced diabetic vascular disease.",
      },
    ],
  },
  "/post-finasteride-syndrome-ed": {
    takeaways: [
      "Finasteride can cause sexual adverse effects, and UK safety information warns that sexual dysfunction may persist after stopping.",
      "The frequency, mechanisms and boundaries of ‘post-finasteride syndrome’ remain uncertain.",
      "No credible evidence establishes PRP as a treatment for persistent symptoms after finasteride.",
    ],
    faqs: [
      {
        q: "Can finasteride cause erectile dysfunction?",
        a: "Yes. Finasteride is associated with sexual side effects including ED and reduced libido, and UK safety information warns that sexual dysfunction may persist after treatment is stopped.",
      },
      {
        q: "Is post-finasteride syndrome an established diagnosis?",
        a: "The regulator warning is clear, but the mechanisms, prevalence and boundaries of the broader label remain uncertain because of study design limitations.",
      },
      {
        q: "Does PRP treat persistent sexual symptoms after finasteride?",
        a: "No credible evidence establishes PRP for this purpose, and treatments marketed as tissue repair should not be presented as proven for this condition.",
      },
      {
        q: "What should I do if I have symptoms after finasteride?",
        a: "Discuss symptoms and medication history with the prescriber or a clinician experienced in sexual medicine, and do not restart, stop or change prescribed treatment based on a website. Seek urgent help for suicidal thoughts or marked mental-health deterioration.",
      },
    ],
  },
  "/post-prostatectomy-ed": {
    takeaways: [
      "ED is common after radical prostatectomy because nerves, blood vessels and smooth muscle can be affected, even with nerve-sparing surgery.",
      "Recovery varies with baseline function, age, surgical factors and time; no single rehabilitation protocol guarantees recovery.",
      "Evidence for PRP after prostatectomy is insufficient for it to replace guideline-supported care.",
    ],
    faqs: [
      {
        q: "Why does erectile dysfunction happen after prostate surgery?",
        a: "Nerves, blood vessels and smooth muscle involved in erections can be affected during radical prostatectomy, even when nerve-sparing surgery is possible.",
      },
      {
        q: "Does nerve-sparing surgery guarantee preserved erections?",
        a: "No. Sparing one or both neurovascular bundles matters, but it does not guarantee preserved erections, and nerve recovery can take many months.",
      },
      {
        q: "Which treatments are used after prostatectomy?",
        a: "A urology team may discuss PDE5 inhibitors, vacuum erection devices, intracavernosal injections and, where other treatments fail, a penile prosthesis, individualised to timing and goals.",
      },
    ],
  },
  "/testosterone-ed": {
    takeaways: [
      "Low testosterone can reduce desire and contribute to ED, but ED alone is not proof of testosterone deficiency.",
      "Testosterone therapy is supported for appropriately diagnosed hypogonadism, not as a universal ED treatment.",
      "There is no high-quality evidence that combining PRP with testosterone gives a superior ED outcome.",
    ],
    faqs: [
      {
        q: "Does low testosterone cause erectile dysfunction?",
        a: "It can contribute, but ED is not proof of deficiency. Diagnosis requires compatible symptoms and appropriately timed biochemical testing, usually confirmed on more than one occasion.",
      },
      {
        q: "Will testosterone therapy cure my ED?",
        a: "Not necessarily. It can improve sexual symptoms in men with confirmed hypogonadism but does not repair established vascular or nerve damage.",
      },
      {
        q: "Is PRP combined with testosterone more effective?",
        a: "There is no high-quality evidence establishing that combination as superior, so it should not be marketed as synergistic without a relevant, cited clinical trial.",
      },
    ],
  },
  "/shockwave-therapy-ed": {
    takeaways: [
      "The 2026 EAU guideline reports a mild average improvement from low-intensity shockwave therapy and gives a weak recommendation for selected patients.",
      "Focused or linear low-intensity devices used in ED trials should not be conflated with radial pressure-wave devices.",
      "Claims of cure or guaranteed long-term benefit are not justified.",
    ],
    faqs: [
      {
        q: "Does shockwave therapy work for erectile dysfunction?",
        a: "Evidence is more developed than for PRP, but benefits are generally modest and protocols vary. The EAU reports a mild average improvement and a weak recommendation for selected patients.",
      },
      {
        q: "Who may be considered for shockwave therapy?",
        a: "Guidelines mention men with mild vasculogenic ED, well-informed men who do not want or cannot take oral vasoactive therapy, and some men who respond poorly to PDE5 inhibitors.",
      },
      {
        q: "Is shockwave plus PRP better than either alone?",
        a: "There is not enough high-quality evidence to say so; combination protocols should be treated as investigational.",
      },
    ],
  },
  "/prp-fix-erectile-dysfunction-naturally": {
    takeaways: [
      "PRP has been studied for ED but is not an established cure or a way to ‘fix ED naturally’.",
      "Some controlled trials report improvement; a 2023 randomised placebo-controlled trial found no efficacy difference.",
      "The 2026 EAU guideline limits intracavernosal PRP for ED to clinical-trial settings.",
    ],
    faqs: [
      {
        q: "Does PRP work for erectile dysfunction?",
        a: "Evidence is mixed. Some randomised trials report improved erectile-function scores, while another randomised double-blind trial found no significant difference from placebo and no Doppler improvement through six months.",
      },
      {
        q: "What does the EAU guideline say about PRP for ED?",
        a: EAU_PRP,
      },
      {
        q: "Does an FDA-cleared centrifuge mean the P-Shot is FDA-approved for ED?",
        a: "No. An FDA-cleared separation device does not mean the P-Shot procedure is FDA-approved for ED.",
      },
      {
        q: "What should informed consent for PRP include?",
        a: "That PRP for ED is experimental, that results are not guaranteed, that established alternatives were discussed, and a written explanation of the protocol, sessions, risks, follow-up and total cost.",
      },
    ],
  },
  "/p-shot-venous-leak-ed": {
    takeaways: [
      "Current evidence does not establish PRP or the P-Shot as a treatment for venous leak ED.",
      "Suspected venous leak needs urologist assessment because symptoms alone do not confirm it.",
      "Claims that PRP rebuilds the venous seal or smooth muscle are hypotheses, not proven patient outcomes.",
    ],
    faqs: [
      {
        q: "Can the P-Shot cure venous leak erectile dysfunction?",
        a: "No evidence establishes that. PRP studies usually group men with organic or vasculogenic ED and do not show a cure for confirmed veno-occlusive dysfunction.",
      },
      {
        q: "How is a venous leak diagnosed?",
        a: "Through clinical history and, in selected cases, penile duplex ultrasound interpreted by a clinician; symptoms alone do not confirm the diagnosis.",
      },
      {
        q: "What other options exist for suspected venous leak?",
        a: "Address cardiovascular and metabolic risk factors, optimise PDE5-inhibitor use if safe, consider vacuum devices or intracavernosal medication, and discuss an implant for severe refractory ED with a urologist.",
      },
    ],
  },
  "/p-shot-vs-viagra": {
    takeaways: [
      "PDE5 inhibitors such as sildenafil (Viagra) are first-line in EAU guidance for many men; PRP evidence is insufficient for a clinical recommendation.",
      "Sildenafil has known dosing, contraindications and interactions; PRP protocols are not standardised.",
      "Sildenafil must not be combined with nitrates or nitric-oxide donors.",
    ],
    faqs: [
      {
        q: "Is the P-Shot better than Viagra?",
        a: "No evidence shows that. Viagra (sildenafil) has established evidence and guideline support as first-line therapy for many men, while PRP is experimental with inconsistent evidence.",
      },
      {
        q: "What if Viagra does not seem to work?",
        a: "A clinician should check the likely cause, dose, timing, sexual stimulation, meal effects, medication authenticity and contraindications, because apparent non-response can reflect incorrect use or an untreated contributor.",
      },
      {
        q: "Can I take Viagra with nitrates?",
        a: "No. Sildenafil must not be combined with nitrates or nitric-oxide donors because of dangerous blood-pressure effects.",
      },
    ],
  },
  "/prp-vs-stem-cell-erectile-dysfunction": {
    takeaways: [
      "Neither PRP nor stem-cell therapy is established routine ED treatment, and evidence cannot identify a superior option.",
      "‘Stem-cell therapy’ can mean very different cell sources, processing methods and regulatory categories.",
      "A higher price does not establish stronger evidence or a better outcome.",
    ],
    faqs: [
      {
        q: "Is stem-cell therapy better than PRP for ED?",
        a: "Evidence cannot show that. The EAU finds evidence insufficient to recommend either; PRP has several controlled trials with mixed results, while stem-cell studies are small and heterogeneous.",
      },
      {
        q: "What is the difference between PRP and stem-cell therapy?",
        a: "PRP is prepared from the patient's own blood and contains concentrated platelets and plasma, while stem-cell therapy can refer to very different cell sources, processing methods and regulatory categories.",
      },
      {
        q: "What should I ask before considering either?",
        a: "Whether it is offered within a registered clinical trial, what exactly is injected and how it is prepared, which peer-reviewed study used the same protocol, and what adverse events, follow-up and refund terms are documented.",
      },
    ],
  },
  "/is-p-shot-worth-it": {
    takeaways: [
      "There is no universal answer; benefit is uncertain and cannot be reliably predicted for an individual.",
      "A five-part check covers diagnosis, alternatives, evidence, provider verification and cost.",
      "Guaranteed outcomes, penile-size promises and pressure to pay before clinician details are supplied are reasons to pause.",
    ],
    faqs: [
      {
        q: "Is the P-Shot worth the money?",
        a: "It depends on the individual. PRP may be acceptable to a fully informed patient who understands that benefit is uncertain, but the cost decision should include the possibility of no meaningful improvement.",
      },
      {
        q: "What should I check before deciding on a P-Shot?",
        a: "Whether the cause of ED has been assessed, established alternatives discussed, the EAU and AUA positions explained, the clinician and clinic verified, and whether you can afford the treatment if the result is small or absent.",
      },
      {
        q: "What are warning signs in P-Shot marketing?",
        a: "Guaranteed outcomes, penile-size promises, fixed 12–18 month benefit claims, pressure to pay before clinician identity is supplied, and equipment-clearance claims presented as ED approval.",
      },
    ],
  },
  "/p-shot-scam-or-legit": {
    takeaways: [
      "PRP is a real blood-derived preparation studied in clinical trials, but that does not validate every P-Shot claim.",
      "Marketing is misleading when experimental evidence is presented as proof of cure, permanent regeneration, guaranteed enlargement or FDA approval for ED.",
      "Green flags include a named clinician, clear legal operator, experimental-status consent and sourced claims.",
    ],
    faqs: [
      {
        q: "Is the P-Shot a scam?",
        a: "The procedure is not fictional and penile PRP has been studied in trials, but routine effectiveness is not established and some marketing claims exceed the evidence.",
      },
      {
        q: "What are red flags in P-Shot marketing?",
        a: "Guaranteed erections or size increases, ‘no risk’ claims, anonymous testimonials or stock imagery presented as outcomes, equipment clearance presented as approval, and fake scarcity or pressure to pay immediately.",
      },
      {
        q: "What are green flags for a provider?",
        a: "The treating clinician's name and registration supplied before payment, clear clinic address and legal operator, a consent form stating PRP for ED is experimental, and claims linked to relevant sources.",
      },
    ],
  },
  "/best-p-shot-clinic-turkey": {
    takeaways: [
      "No website can objectively name the ‘best’ provider without a transparent method and verified data; this page ranks no clinics.",
      "Verify clinician, legal provider, protocol, consent, emergency arrangements and aftercare before paying.",
      "Provider marketing, review counts and price comparisons are not clinical evidence.",
    ],
    faqs: [
      {
        q: "How do I choose a P-Shot provider in Turkey?",
        a: "Request the treating clinician's name, specialty and registration, the clinic's legal name, address and licence details, a written protocol, a consent form describing experimental status, and an itemised quote with cancellation terms.",
      },
      {
        q: "What clinical questions should I ask a provider?",
        a: "Why PRP is proposed for my likely ED cause, which guideline-supported options were considered first, what outcomes are realistic and how they are measured, and who manages complications after I travel home.",
      },
      {
        q: "Which is the best P-Shot clinic in Turkey?",
        a: "This site does not rank clinics or claim that any provider is the best, because a defensible ranking would need a transparent comparison method and verified data.",
      },
    ],
  },
  "/flying-to-turkey-ed-treatment": {
    takeaways: [
      "Treatment abroad may reduce quoted fees, but price alone cannot establish equivalent care.",
      "Check insurance exclusions, cancellation policy and a named follow-up clinician before booking.",
      "Plan the return journey: aftercare instructions, emergency contacts and urgent-care locations.",
    ],
    faqs: [
      {
        q: "What should I do before booking ED treatment in Turkey?",
        a: "Obtain the legal clinic name, exact address and clinician registration details; a written treatment plan, evidence summary, consent form and itemised quotation; check insurance exclusions and the cancellation policy.",
      },
      {
        q: "Is it cheaper to have a P-Shot in Turkey?",
        a: "Quoted fees may be lower, but price alone cannot establish equivalent care, and travel, accommodation and follow-up costs should be included in the comparison.",
      },
      {
        q: "How should I plan the return journey?",
        a: "Ask how long to stay locally and when flying is appropriate, keep written aftercare instructions and an emergency contact, know where urgent care is available, and arrange follow-up with a named clinician.",
      },
    ],
  },
  "/flew-to-turkey-for-ed-treatment-reality": {
    takeaways: [
      "This is a non-testimonial planning guide; no personal experience or outcome is represented as fact.",
      "A realistic sequence runs from remote enquiry and verification to in-person assessment, with the option not to proceed.",
      "Convenience, such as same-day treatment, is not proof of safety.",
    ],
    faqs: [
      {
        q: "What is a realistic sequence for ED treatment in Turkey?",
        a: "Remote enquiry and medical history, verification of provider, clinician, protocol, consent and price before travel, in-person assessment with the option not to proceed, then written aftercare and a defined follow-up contact.",
      },
      {
        q: "Can a provider guarantee suitability before assessment?",
        a: "No. Suitability should be judged after reviewing medical history, medication, examination findings and relevant investigations.",
      },
      {
        q: "Are travel stories reliable evidence of safety?",
        a: "No. A travel narrative cannot establish safety or effectiveness; use provider documents, clinical guidance and an individual assessment.",
      },
    ],
  },
  "/why-is-p-shot-expensive-london": {
    takeaways: [
      "Prices differ because of clinician time, premises, regulation, consumables, protocol, session count, follow-up and local costs.",
      "A lower quote is not automatically inferior and a higher quote does not prove better outcomes.",
      "The evidence for PRP in ED is equally uncertain in London, Turkey and elsewhere.",
    ],
    faqs: [
      {
        q: "Why do P-Shot prices vary between London and Turkey?",
        a: "Clinician time, premises, regulation, consumables, protocol, number of sessions, follow-up and local operating costs can all differ. This site has no verified market-wide price dataset.",
      },
      {
        q: "How do I compare P-Shot quotes fairly?",
        a: "Check whether the quote is for one session or a course, who performs the injections, which preparation system and protocol are used, what follow-up is included and what travel or card fees are separate.",
      },
      {
        q: "Does paying more make the P-Shot more effective?",
        a: "No. Paying more does not convert limited evidence into established effectiveness, and paying less does not remove the need for a qualified clinician and safe facility.",
      },
    ],
  },
  "/i-paid-1800-london-p-shot": {
    takeaways: [
      "This page gives a neutral framework for comparing a £1,800 quote with a lower overseas fee; it is not a patient account.",
      "Ask both providers the same questions about clinician, sessions, protocol, refunds and complication care.",
      "Calculate the complete cost, including travel, accommodation, time off work and possible follow-up.",
    ],
    faqs: [
      {
        q: "How do I compare a £1,800 London quote with Turkey?",
        a: "Ask both providers who the treating clinician is, how many sessions and follow-ups are included, what exact PRP protocol is used, how unsuitable patients and refunds are handled, and how complications are managed after you return home.",
      },
      {
        q: "What costs should I include besides the treatment fee?",
        a: "Travel, accommodation, local transport, time away from work, insurance exclusions and the potential cost of follow-up or complications.",
      },
      {
        q: "Does this page describe a real patient's experience?",
        a: "No. It does not present a first-person account because no documented source was available.",
      },
    ],
  },
  "/what-uk-clinics-dont-tell-you-p-shot-pricing": {
    takeaways: [
      "There is no verified basis for claiming UK clinics conceal pricing facts; this page is a neutral disclosure checklist.",
      "A quote should state total fee, sessions included, what is excluded, the clinician and refund terms.",
      "Price is commercial information, not evidence of outcome.",
    ],
    faqs: [
      {
        q: "What should a UK P-Shot quote include?",
        a: "The total fee with taxes and payment charges, number of injections or sessions, whether consultation, tests, anaesthetic, aftercare and follow-up are included, the clinician's name and registration, and cancellation and refund terms.",
      },
      {
        q: "What clinical disclosure should accompany a quote?",
        a: "That PRP for ED is experimental, evidence is mixed, protocols are not standardised, no outcome or duration can be guaranteed, and established alternatives and no treatment were discussed.",
      },
    ],
  },
  "/p-shot-cost-reddit": {
    takeaways: [
      "Reddit posts are anonymous, self-selected and usually unverifiable, so they are not medical evidence or a price benchmark.",
      "Check date, country, currency, sessions, provider and protocol before relying on a post.",
      "Use anecdotes to build a question list, not to predict your own outcome.",
    ],
    faqs: [
      {
        q: "Can I trust P-Shot cost posts on Reddit?",
        a: "Treat them as anecdotes. They can reveal common questions about cost, pain and travel, but they are unverified, may be marketing, and cannot show the probability of benefit for your diagnosis.",
      },
      {
        q: "How should I evaluate a P-Shot post?",
        a: "Check whether date, country, currency and number of sessions are clear, whether the provider and protocol are identified, whether outcomes were measured with a validated tool, and whether the claim conflicts with professional guidance.",
      },
    ],
  },
};

export const getGeoContent = (path: string): GeoContent | undefined => geoContent[path];

import type { Article } from "@/components/ArticlePage";
import { getSources } from "./evidence";

const prpSources = getSources(["eau2026", "aua2018", "panunzio2024", "masterson2023", "poulios2021"]);
const guidelineSources = getSources(["eau2026", "aua2018"]);

export const articles: Record<string, Article> = {
  "/ed-knowledge-hub": {
    path: "/ed-knowledge-hub",
    eyebrow: "Condition hub",
    h1: "Erectile Dysfunction Knowledge Hub",
    intro:
      "Erectile dysfunction is a symptom, not a single diagnosis. Assessment should look for vascular, neurological, hormonal, medication-related and psychological contributors before a treatment is chosen. PRP is one experimental option among several established and emerging approaches.",
    evidenceStatus: "Established",
    evidenceSummary:
      "Major guidelines support a diagnosis-first pathway, cardiovascular risk assessment, lifestyle measures and established therapies such as PDE5 inhibitors. PRP evidence is still insufficient for routine clinical use; the 2026 EAU guideline says intracavernosal PRP should be used only in a clinical-trial setting.",
    sections: [
      {
        heading: "Start with the cause, not the product",
        paragraphs: [
          "ED can be an early marker of cardiovascular or metabolic disease. A clinical history, medication review, focused examination and appropriate laboratory testing can identify issues that a procedure alone will not address.",
        ],
        bullets: [
          "Vascular factors include diabetes, hypertension, smoking, dyslipidaemia and established cardiovascular disease.",
          "Neurological factors include pelvic surgery, spinal or peripheral nerve disease and diabetic neuropathy.",
          "Hormonal assessment is appropriate when symptoms or examination suggest testosterone deficiency or another endocrine cause.",
          "Psychological and relationship factors may occur alone or alongside physical disease and deserve the same clinical attention.",
        ],
      },
      {
        heading: "Where treatment evidence is strongest",
        bullets: [
          "Lifestyle and cardiovascular risk-factor management should begin before or alongside ED treatment.",
          "PDE5 inhibitors are guideline-supported first-line therapy for many men, unless contraindicated.",
          "Vacuum devices, alprostadil, counselling and penile implants have roles depending on cause, preference and severity.",
          "Low-intensity shockwave therapy may produce a mild benefit in selected men with vasculogenic ED, but the EAU recommendation is weak.",
          "PRP and stem-cell approaches remain investigational and should not be described as established cures.",
        ],
      },
      {
        heading: "Treatment options and evidence position at a glance",
        table: {
          caption: "Evidence position for common ED approaches, as summarised on this page and in the cited guidelines.",
          headers: ["Approach", "Evidence position"],
          rows: [
            ["Lifestyle and cardiovascular risk management", "Should begin before or alongside ED treatment."],
            ["PDE5 inhibitors (e.g. sildenafil)", "Guideline-supported first-line therapy for many men, unless contraindicated."],
            ["Vacuum devices, alprostadil, counselling, penile implants", "Established roles depending on cause, preference and severity."],
            ["Low-intensity shockwave therapy", "Possible mild benefit in selected men with vasculogenic ED; weak EAU recommendation."],
            ["PRP (P-Shot)", "Experimental; the 2026 EAU guideline says clinical-trial setting only."],
            ["Stem-cell approaches", "Investigational; not an established cure."],
          ],
        },
      },
      {
        heading: "Questions to take to a clinician",
        bullets: [
          "Could my ED indicate cardiovascular disease or diabetes?",
          "Which tests are appropriate for my history and symptoms?",
          "Which treatment is guideline-supported for the likely cause?",
          "If an experimental treatment is discussed, what is the protocol, evidence, uncertainty and follow-up plan?",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/ed-causes", label: "What causes ED?" },
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence and limitations" },
      { path: "/p-shot-vs-viagra", label: "P-Shot vs Viagra" },
      { path: "/contact", label: "Request an assessment" },
    ],
  },
  "/ed-causes": {
    path: "/ed-causes",
    eyebrow: "Condition",
    h1: "What Causes Erectile Dysfunction?",
    intro:
      "ED may result from reduced arterial inflow, impaired veno-occlusion, nerve injury, hormonal disorders, medication effects, psychological factors or a combination. Because the same symptom can have different causes, treatment should follow assessment rather than assumption.",
    evidenceStatus: "Established",
    evidenceSummary:
      "The cause categories and diagnosis-first approach are established in urology guidelines. A website cannot determine the cause from symptoms alone, and labels such as ‘venous leak’ require appropriate clinical evaluation.",
    sections: [
      {
        heading: "Common contributors",
        bullets: [
          "Vascular: atherosclerosis, diabetes, hypertension, dyslipidaemia, smoking and endothelial dysfunction.",
          "Neurological: diabetes-related neuropathy, prostate or pelvic surgery, spinal disease and other nerve disorders.",
          "Hormonal: clinically confirmed testosterone deficiency, hyperprolactinaemia and thyroid disorders in selected cases.",
          "Medication-related: some antidepressants, antihypertensives, anti-androgens and 5-alpha-reductase inhibitors can affect sexual function.",
          "Psychological: performance anxiety, depression, stress and relationship factors can contribute alone or with physical disease.",
        ],
      },
      {
        heading: "What an assessment may include",
        paragraphs: [
          "Assessment commonly includes a medical and sexual history, cardiovascular risk review, medication review and focused physical examination. Testing is individualised and may include glucose or HbA1c, lipids and morning testosterone. Specialised testing such as penile duplex ultrasound is not required for every patient.",
        ],
      },
      {
        heading: "Why ED can matter beyond sexual health",
        paragraphs: [
          "ED and cardiovascular disease share risk factors. New or worsening ED can justify a broader health review, especially when accompanied by exertional symptoms, diabetes risk or known cardiovascular disease.",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/diabetes-erectile-dysfunction", label: "Diabetes and ED" },
      { path: "/testosterone-ed", label: "Testosterone and ED" },
      { path: "/post-prostatectomy-ed", label: "ED after prostate surgery" },
      { path: "/p-shot-venous-leak-ed", label: "Suspected venous leak" },
    ],
  },
  "/diabetes-erectile-dysfunction": {
    path: "/diabetes-erectile-dysfunction",
    eyebrow: "Condition",
    h1: "Diabetes and Erectile Dysfunction",
    intro:
      "Diabetes can contribute to ED through blood-vessel disease, neuropathy, medication effects and associated cardiovascular risk. Improving diabetes and cardiovascular risk management matters even when a separate ED treatment is used.",
    evidenceStatus: "Established",
    evidenceSummary:
      "The association between diabetes and ED is well established. Guideline-supported options include risk-factor management and established ED therapies. PRP has not been established as a treatment specifically for diabetic ED.",
    sections: [
      {
        heading: "How diabetes can affect erections",
        bullets: [
          "Long-term high blood glucose can damage small blood vessels and reduce endothelial function.",
          "Autonomic and peripheral neuropathy can interfere with sexual sensation and erectile signalling.",
          "Diabetes often coexists with hypertension, dyslipidaemia, obesity and cardiovascular disease.",
          "Depression, medication effects and low testosterone may also contribute and should not be overlooked.",
        ],
      },
      {
        heading: "Assessment and established options",
        paragraphs: [
          "A clinician may review glucose control, cardiovascular fitness, medication, hormones when indicated and contraindications to ED medicines. PDE5 inhibitors are commonly first-line, while vacuum devices, alprostadil and other therapies may be considered when tablets are unsuitable or ineffective.",
        ],
      },
      {
        heading: "Where PRP fits",
        paragraphs: [
          "PRP research in ED has generally involved selected men with organic or vasculogenic ED. That is not the same as proof for diabetic neuropathy or advanced diabetic vascular disease. A claim that PRP repairs diabetic nerves or reverses diabetic tissue damage exceeds current clinical evidence.",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/ed-causes", label: "ED causes" },
      { path: "/p-shot-vs-viagra", label: "P-Shot vs Viagra" },
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
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
  "/post-prostatectomy-ed": {
    path: "/post-prostatectomy-ed",
    eyebrow: "Post-surgical ED",
    h1: "Erectile Dysfunction After Prostate Surgery",
    intro:
      "ED is common after radical prostatectomy because nerves, blood vessels and smooth muscle can be affected even when nerve-sparing surgery is possible. Recovery varies with pre-operative function, age, surgical factors and time.",
    evidenceStatus: "Established",
    evidenceSummary:
      "The condition and established management options are well described, but no single rehabilitation protocol guarantees recovery. Evidence for PRP after prostatectomy is insufficient for it to replace guideline-supported care.",
    sections: [
      {
        heading: "Why recovery varies",
        bullets: [
          "Baseline erectile function, age and cardiovascular health influence recovery.",
          "Whether one or both neurovascular bundles could be spared matters, but nerve-sparing does not guarantee preserved erections.",
          "Nerve recovery can take many months; lack of spontaneous erections early after surgery does not alone predict the final outcome.",
        ],
      },
      {
        heading: "Rehabilitation and treatment options",
        paragraphs: [
          "A urology team may discuss PDE5 inhibitors, vacuum erection devices, intracavernosal injections and, where other treatments fail, penile prosthesis. The timing and goal of rehabilitation should be individualised.",
        ],
      },
      {
        heading: "PRP and shockwave after prostatectomy",
        paragraphs: [
          "Small studies have explored restorative approaches, but the evidence is not strong enough to describe PRP as nerve regeneration or a proven route to recovery. The EAU notes low-quality evidence for shockwave in this setting and recommends cautious interpretation.",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/ed-causes", label: "ED causes" },
      { path: "/shockwave-therapy-ed", label: "Shockwave evidence" },
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
    ],
  },
  "/testosterone-ed": {
    path: "/testosterone-ed",
    eyebrow: "Hormonal ED",
    h1: "Low Testosterone and Erectile Dysfunction",
    intro:
      "Low testosterone can reduce sexual desire and contribute to ED, but ED is not proof of testosterone deficiency. Diagnosis requires compatible symptoms plus appropriately timed biochemical testing, usually confirmed on more than one occasion.",
    evidenceStatus: "Established",
    evidenceSummary:
      "Testosterone therapy is supported for appropriately diagnosed hypogonadism, not as a universal ED treatment. Men with normal testosterone or predominantly vascular or neurological ED should not be promised that TRT will restore erections.",
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
  "/shockwave-therapy-ed": {
    path: "/shockwave-therapy-ed",
    eyebrow: "Treatment evidence",
    h1: "Shockwave Therapy for Erectile Dysfunction",
    intro:
      "Low-intensity shockwave therapy has been studied mainly for vasculogenic ED. The 2026 EAU guideline reports a mild average improvement and gives a weak recommendation for selected patients; it is not equivalent to radial pressure-wave treatment.",
    evidenceStatus: "Moderate",
    evidenceSummary:
      "Evidence is more developed than for PRP but benefits are generally modest, protocols vary and guideline recommendations remain limited to selected groups. Claims of cure, plaque destruction or guaranteed long-term benefit are not justified.",
    sections: [
      {
        heading: "Who guidelines say may be considered",
        bullets: [
          "Men with mild vasculogenic ED.",
          "Well-informed men who do not want or are not suitable for oral vasoactive therapy.",
          "Some men with vasculogenic ED who respond poorly to PDE5 inhibitors.",
        ],
      },
      {
        heading: "Device and protocol matter",
        paragraphs: [
          "Focused or linear low-intensity shockwave devices used in ED trials should not be conflated with radial pressure-wave devices. Treatment schedules and energy settings vary, and a provider should identify the exact device and explain the evidence for its protocol.",
        ],
      },
      {
        heading: "Shockwave plus PRP",
        paragraphs: [
          "There is not enough high-quality evidence to state that a combined PRP and shockwave protocol is the strongest or superior option. Combination claims should be treated as investigational unless supported by relevant controlled trials.",
        ],
      },
    ],
    sources: getSources(["eau2026", "aua2018"]),
    related: [
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
      { path: "/p-shot-vs-viagra", label: "P-Shot vs Viagra" },
    ],
  },
  "/prp-fix-erectile-dysfunction-naturally": {
    path: "/prp-fix-erectile-dysfunction-naturally",
    eyebrow: "Treatment evidence",
    h1: "PRP for Erectile Dysfunction: Evidence and Limitations",
    intro:
      "Platelet-rich plasma has been studied as an intracavernosal treatment for ED, but it has not been established as a cure or a way to ‘fix ED naturally’. Trials have reported mixed results, preparation protocols vary and the 2026 EAU guideline limits PRP for ED to clinical-trial settings.",
    evidenceStatus: "Limited",
    evidenceSummary:
      "Some controlled trials and pooled analyses report improvement, while a 2023 randomised placebo-controlled trial found no efficacy difference and no Doppler improvement. Heterogeneity, small samples and uncertain protocols prevent a routine clinical recommendation.",
    sections: [
      {
        heading: "What PRP is",
        paragraphs: [
          "PRP is prepared from a patient's blood by concentrating platelets in plasma. Platelets release growth factors, which provides a biological rationale for study. A proposed mechanism is not the same as proof that penile tissue regenerates or that ED is reversed in people.",
        ],
      },
      {
        heading: "What current studies suggest",
        bullets: [
          "Some randomised trials report improved erectile-function scores compared with placebo.",
          "Another randomised double-blind trial found no significant difference from placebo and no change in penile Doppler parameters through six months.",
          "Systematic reviews describe promising signals but also substantial variation in dose, preparation, activation and study quality.",
          "Long-term effectiveness, best protocol, ideal candidate group and comparative effectiveness remain uncertain.",
        ],
      },
      {
        heading: "What informed consent should make clear",
        bullets: [
          "PRP for ED is experimental and should not be represented as guideline-standard care.",
          "An FDA-cleared centrifuge or separation device does not mean the P-Shot procedure is FDA-approved for ED.",
          "Results are not guaranteed, and established alternatives should be discussed first.",
          "The clinician should explain the protocol, number of sessions, risks, follow-up and total cost in writing.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/how-it-works", label: "How the procedure is performed" },
      { path: "/side-effects", label: "Risks and side effects" },
      { path: "/p-shot-vs-viagra", label: "P-Shot vs Viagra" },
      { path: "/is-p-shot-worth-it", label: "Decision guide" },
    ],
  },
  "/p-shot-venous-leak-ed": {
    path: "/p-shot-venous-leak-ed",
    eyebrow: "Condition and treatment",
    h1: "Can P-Shot Treat Venous Leak ED?",
    intro:
      "Current evidence does not establish PRP or the P-Shot as a treatment for erectile dysfunction specifically attributed to veno-occlusive dysfunction. Suspected ‘venous leak’ should be assessed by a urologist because symptoms alone do not confirm the diagnosis.",
    evidenceStatus: "Uncertain",
    evidenceSummary:
      "PRP studies usually group men with organic or vasculogenic ED and do not establish a cure for confirmed veno-occlusive dysfunction. Claims that PRP strengthens the venous seal, rebuilds smooth muscle or repairs nerves in this condition are mechanistic hypotheses, not proven patient outcomes.",
    sections: [
      {
        heading: "What ‘venous leak’ means",
        paragraphs: [
          "An erection requires adequate arterial inflow and compression of venous outflow. Veno-occlusive dysfunction describes failure to maintain pressure, but similar symptoms can occur for other reasons. Clinical history and, in selected cases, duplex ultrasound help clarify the problem.",
        ],
      },
      {
        heading: "Established and other options",
        bullets: [
          "Address cardiovascular and metabolic risk factors and review medications.",
          "Optimise correct PDE5-inhibitor use when safe and appropriate.",
          "Consider vacuum devices or intracavernosal medication under clinical guidance.",
          "For severe refractory ED, a penile implant may be discussed with a urologist.",
          "Venous surgery is not a routine solution for most men and requires specialist assessment.",
        ],
      },
      {
        heading: "Where PRP may or may not fit",
        paragraphs: [
          "A clinician may discuss an experimental PRP protocol, but the consent conversation should explicitly state the lack of condition-specific evidence and the EAU position that PRP for ED should be confined to clinical trials.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/ed-causes", label: "ED causes and assessment" },
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
      { path: "/side-effects", label: "PRP risks" },
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
  "/prp-vs-stem-cell-erectile-dysfunction": {
    path: "/prp-vs-stem-cell-erectile-dysfunction",
    eyebrow: "Experimental treatment comparison",
    h1: "PRP vs Stem Cell Therapy for Erectile Dysfunction",
    intro:
      "Neither PRP nor stem-cell therapy is established routine treatment for ED, and current evidence cannot identify a superior option. Both should be described as investigational, with clear disclosure of protocol, regulation, uncertainty and alternatives.",
    evidenceStatus: "Limited",
    evidenceSummary:
      "The EAU finds evidence insufficient to recommend either approach in clinical practice. PRP has several controlled trials with mixed results; stem-cell studies are small and heterogeneous, with few placebo-controlled trials.",
    sections: [
      {
        heading: "The practical differences",
        bullets: [
          "PRP is prepared from the patient's own blood and contains concentrated platelets and plasma.",
          "‘Stem-cell therapy’ can refer to very different cell sources, processing methods and regulatory categories.",
          "Neither label tells you the dose, product quality, sterility process or evidence for a provider's protocol.",
          "Higher price does not establish stronger evidence or a better outcome.",
        ],
      },
      {
        heading: "Questions before considering either",
        bullets: [
          "Is this offered within a registered clinical trial?",
          "What exactly is injected, how is it prepared and what regulatory oversight applies?",
          "Which peer-reviewed study used the same protocol in a similar patient group?",
          "What adverse events, follow-up, refund terms and emergency arrangements are documented?",
        ],
      },
    ],
    sources: getSources(["eau2026", "aua2018", "clinicalTrial"]),
    related: [
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "PRP evidence" },
      { path: "/is-p-shot-worth-it", label: "Decision guide" },
    ],
  },
  "/is-p-shot-worth-it": {
    path: "/is-p-shot-worth-it",
    eyebrow: "Decision support",
    h1: "Is the P-Shot Worth It?",
    intro:
      "There is no universal answer. PRP may be acceptable to a fully informed patient who understands that benefit is uncertain and who has discussed established alternatives, but current evidence does not support marketing it as a proven or permanent ED treatment.",
    evidenceStatus: "Limited",
    evidenceSummary:
      "Mixed trial results and non-standardised protocols mean the likely benefit for an individual cannot be predicted reliably. The cost decision should therefore include the possibility of no meaningful improvement.",
    sections: [
      {
        heading: "A five-part decision check",
        bullets: [
          "Diagnosis: has the likely cause of ED been assessed?",
          "Alternatives: have guideline-supported treatments been discussed and optimised?",
          "Evidence: has the provider explained the EAU and AUA positions and mixed trial results?",
          "Provider: can you verify the treating clinician, clinic registration, protocol and emergency plan?",
          "Cost: can you afford the treatment if the result is small or absent and further sessions are proposed?",
        ],
      },
      {
        heading: "Reasons to pause",
        bullets: [
          "Guaranteed outcomes, penile-size promises or fixed 12–18 month benefit claims.",
          "Pressure to pay before clinician identity and written consent information are supplied.",
          "Claims that FDA-cleared equipment makes the ED procedure FDA-approved.",
          "No discussion of established alternatives, contraindications or uncertain evidence.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/p-shot-scam-or-legit", label: "How to assess marketing" },
      { path: "/price", label: "Price and inclusions" },
      { path: "/side-effects", label: "Risks and safety" },
    ],
  },
  "/p-shot-scam-or-legit": {
    path: "/p-shot-scam-or-legit",
    eyebrow: "Claim audit",
    h1: "P-Shot: Legitimate Procedure or Misleading Marketing?",
    intro:
      "PRP is a real blood-derived preparation and penile PRP has been studied in clinical trials. That does not validate every P-Shot claim. Marketing becomes misleading when experimental evidence is presented as proof of cure, permanent regeneration, guaranteed enlargement or FDA approval for ED.",
    evidenceStatus: "Limited",
    evidenceSummary:
      "The procedure is not fictional, but routine effectiveness remains unestablished. Legitimacy depends on truthful claims, a licensed clinician, a documented protocol, informed consent, appropriate facilities and transparent follow-up.",
    sections: [
      {
        heading: "Green flags",
        bullets: [
          "The treating clinician's name, registration and role are supplied before payment.",
          "The clinic address, legal operator, complaint route and emergency arrangements are clear.",
          "The consent form states that PRP for ED is experimental and explains alternatives.",
          "Claims are linked to relevant sources and uncertainty is visible near the sales message.",
        ],
      },
      {
        heading: "Red flags",
        bullets: [
          "Guaranteed erections, size increases, ‘no risk’ claims or fixed duration promises.",
          "Anonymous testimonials, stock imagery presented as outcomes or unverifiable review counts.",
          "A claim that equipment clearance equals approval of the treatment for ED.",
          "Fake scarcity, countdowns or pressure to transfer money immediately.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/best-p-shot-clinic-turkey", label: "Provider verification checklist" },
      { path: "/prp-fix-erectile-dysfunction-naturally", label: "What the evidence says" },
    ],
  },
  "/best-p-shot-clinic-turkey": {
    path: "/best-p-shot-clinic-turkey",
    eyebrow: "Provider selection",
    h1: "How to Choose a P-Shot Provider in Turkey",
    intro:
      "No website can objectively name the ‘best’ provider without a transparent comparison method and verified data. A safer approach is to verify the clinician, legal provider, treatment protocol, consent process, emergency arrangements and aftercare before paying.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "Provider marketing, review counts and price comparisons are not clinical evidence. This page offers a due-diligence checklist and does not rank clinics or claim that this site's provider is the best.",
    sections: [
      {
        heading: "Documents to request",
        bullets: [
          "Treating clinician's full name, specialty, Turkish registration details and role in the procedure.",
          "Clinic's legal name, full address, licence or registration details and complaint process.",
          "Written protocol: blood volume, preparation system, injections, anaesthetic, sessions and follow-up.",
          "Patient information and consent form that accurately describes experimental status and alternatives.",
          "Itemised quote, cancellation/refund terms and what happens if treatment is cancelled after assessment.",
        ],
      },
      {
        heading: "Clinical questions to ask",
        bullets: [
          "Why is PRP being proposed for my likely ED cause?",
          "Which guideline-supported options have been considered first?",
          "What outcomes are realistic and how are they measured?",
          "Who manages infection, bleeding, severe pain or priapism after I travel home?",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/flying-to-turkey-ed-treatment", label: "Treatment travel planning" },
      { path: "/about", label: "About this site" },
      { path: "/contact", label: "Request verification details" },
    ],
  },
  "/flying-to-turkey-ed-treatment": {
    path: "/flying-to-turkey-ed-treatment",
    eyebrow: "Patient journey",
    h1: "Travelling to Turkey for ED Treatment",
    intro:
      "Treatment abroad may reduce quoted fees, but price alone cannot establish equivalent care. Verify the clinician and facility, understand the evidence and consent process, and plan for complications and follow-up after returning home.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "Travel cost estimates and provider-quality claims require current, verifiable data. This page does not claim that Turkish and UK procedures or clinicians are identical.",
    sections: [
      {
        heading: "Before booking",
        bullets: [
          "Obtain the legal clinic name, exact address and treating clinician's registration details.",
          "Ask for a written treatment plan, evidence summary, consent form and itemised quotation.",
          "Check whether travel insurance excludes elective or experimental treatment and related complications.",
          "Confirm the cancellation policy if the clinician decides you are unsuitable after assessment.",
        ],
      },
      {
        heading: "Plan for the return journey",
        bullets: [
          "Ask how long the treating clinician recommends remaining locally and when flying is appropriate.",
          "Keep written aftercare instructions and an emergency contact.",
          "Know where urgent care is available at the destination and at home.",
          "Arrange follow-up with a named clinician, not only a sales coordinator.",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/best-p-shot-clinic-turkey", label: "Provider checklist" },
      { path: "/price", label: "Treatment fee and inclusions" },
      { path: "/side-effects", label: "Risks and urgent symptoms" },
    ],
  },
  "/flew-to-turkey-for-ed-treatment-reality": {
    path: "/flew-to-turkey-for-ed-treatment-reality",
    eyebrow: "Patient journey",
    h1: "ED Treatment in Turkey: Practical Travel and Safety Guide",
    intro:
      "This URL previously used first-person framing without a documented patient source. It now provides a non-testimonial planning guide. No personal experience, outcome or saving is represented as fact.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "A travel narrative cannot establish safety or effectiveness. Use provider documents, clinical guidance and an individual assessment rather than an anonymous story when making a medical decision.",
    sections: [
      {
        heading: "A realistic sequence",
        bullets: [
          "Remote enquiry and exchange of relevant medical history.",
          "Verification of provider, clinician, protocol, consent and price before travel.",
          "In-person assessment before any procedure, with the option not to proceed.",
          "Written aftercare, emergency instructions and a defined follow-up contact.",
        ],
      },
      {
        heading: "Do not treat convenience as proof of safety",
        paragraphs: [
          "Same-day treatment and rapid travel may be convenient, but an individual clinician should advise on timing. A provider should not guarantee suitability before reviewing medical history, medication, examination findings and relevant investigations.",
        ],
      },
    ],
    sources: guidelineSources,
    related: [
      { path: "/flying-to-turkey-ed-treatment", label: "Full travel checklist" },
      { path: "/best-p-shot-clinic-turkey", label: "Choose a provider" },
    ],
  },
  "/why-is-p-shot-expensive-london": {
    path: "/why-is-p-shot-expensive-london",
    eyebrow: "Cost",
    h1: "Why P-Shot Prices Vary Between London and Turkey",
    intro:
      "Prices can differ because of clinician time, premises, regulation, consumables, protocol, number of sessions, follow-up and local operating costs. A lower quote is not automatically inferior, and a higher quote is not proof of better outcomes.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "This site has no independently verified market-wide price dataset. Any comparison should use current itemised quotations from named providers and should not claim procedures are identical without protocol details.",
    sections: [
      {
        heading: "Compare like with like",
        bullets: [
          "Is the quote for one session or a course?",
          "Who performs the injections and is an in-person clinical assessment included?",
          "What preparation system and protocol are used?",
          "Are medication, local anaesthetic, follow-up and complication care included?",
          "Are travel, hotel, transfer, cancellation or card fees separate?",
        ],
      },
      {
        heading: "Evidence does not change with the postcode",
        paragraphs: [
          "The uncertainty around PRP for ED applies in London, Turkey and elsewhere. Paying more does not convert limited evidence into established effectiveness; paying less does not remove the need for a qualified clinician and safe facility.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/price", label: "Advertised treatment fee" },
      { path: "/what-uk-clinics-dont-tell-you-p-shot-pricing", label: "Quote checklist" },
    ],
  },
  "/i-paid-1800-london-p-shot": {
    path: "/i-paid-1800-london-p-shot",
    eyebrow: "Cost comparison",
    h1: "Comparing a £1,800 P-Shot Quote With Turkey",
    intro:
      "This page does not present a first-person patient account because no documented source was available in the repository. It preserves the cost-comparison intent while explaining how to compare a £1,800 quote with a lower overseas fee safely.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "A quoted price or an anecdote does not establish effectiveness, clinician quality or protocol equivalence. Request current, written and itemised quotations.",
    sections: [
      {
        heading: "Ask both providers the same questions",
        bullets: [
          "Who is the treating clinician and how can registration be verified?",
          "How many sessions and follow-up contacts are included?",
          "What exact PRP preparation and injection protocol is used?",
          "How are unsuitable patients handled and what is refundable?",
          "How are complications managed after the patient returns home?",
        ],
      },
      {
        heading: "Calculate the complete cost",
        paragraphs: [
          "Include travel, accommodation, local transport, time away from work, insurance exclusions and the potential cost of follow-up or complications. Keep the possibility of no meaningful benefit in the decision because PRP effectiveness remains uncertain.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/price", label: "Price and inclusions" },
      { path: "/flying-to-turkey-ed-treatment", label: "Travel planning" },
    ],
  },
  "/what-uk-clinics-dont-tell-you-p-shot-pricing": {
    path: "/what-uk-clinics-dont-tell-you-p-shot-pricing",
    eyebrow: "Cost transparency",
    h1: "P-Shot Pricing in the UK: What a Quote Should Explain",
    intro:
      "There is no verified basis here for claiming that UK clinics conceal pricing facts. A useful quotation should instead make the clinician, protocol, session count, evidence limitations, aftercare and total payable amount clear.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "Price is commercial information, not evidence of outcome. This page replaces unsupported insider framing with a neutral disclosure checklist.",
    sections: [
      {
        heading: "Minimum quote information",
        bullets: [
          "Total fee and all taxes or payment charges.",
          "Number of injections or treatment sessions included.",
          "Consultation, tests, anaesthetic, aftercare and follow-up included or excluded.",
          "Clinician name, registration and facility details.",
          "Cancellation, suitability and refund terms.",
        ],
      },
      {
        heading: "Minimum clinical disclosure",
        bullets: [
          "PRP for ED is experimental and not established first-line care.",
          "Evidence is mixed and protocols are not standardised.",
          "No outcome, size change or duration of benefit can be guaranteed.",
          "Established alternatives and the option of no treatment should be discussed.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/why-is-p-shot-expensive-london", label: "Why prices vary" },
      { path: "/price", label: "Our advertised fee" },
    ],
  },
  "/p-shot-cost-reddit": {
    path: "/p-shot-cost-reddit",
    eyebrow: "Community discussions",
    h1: "P-Shot Cost Discussions on Reddit",
    intro:
      "Reddit can reveal the questions and concerns patients have about cost, pain, travel and outcomes. Posts are anonymous, self-selected and usually unverifiable, so they should not be used as medical evidence, a price benchmark or proof of clinic quality.",
    evidenceStatus: "Not medical evidence",
    evidenceSummary:
      "No Reddit post is cited here as evidence for safety or effectiveness. Community discussion can inform questions, but clinical claims should be checked against guidelines and peer-reviewed research.",
    sections: [
      {
        heading: "How to evaluate a post",
        bullets: [
          "Is the date, country, currency and number of sessions clear?",
          "Does the writer identify the provider and protocol, or only the brand name?",
          "Was the outcome measured with a validated tool or described subjectively?",
          "Could the post be marketing, affiliate content or a selected extreme experience?",
          "Does the claim conflict with current professional guidance?",
        ],
      },
      {
        heading: "Use anecdotes to make a question list",
        paragraphs: [
          "Recurring stories can help you ask about pain control, privacy, travel timing, follow-up and hidden fees. They cannot tell you the probability that treatment will work for your diagnosis.",
        ],
      },
    ],
    sources: prpSources,
    related: [
      { path: "/reviews", label: "How reviews are verified" },
      { path: "/price", label: "Current advertised fee" },
      { path: "/is-p-shot-worth-it", label: "Decision guide" },
    ],
  },
};

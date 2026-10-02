# Medical claims and open inputs: for physician and clinic review

**Status (2026-10-02):** at the clinic owner's instruction, `CONTENT_REVIEW` in `src/lib/clinic.ts` is switched on, so pages say "Medically reviewed by Dr. Niyazi Umut Özdemir on 2026-10-02" and the schema carries `reviewedBy` and `lastReviewed`. That is a public statement that the physician has read the content. Section 2 lists the statements that deserve his explicit attention; if any is not accurate, correct it or set `reviewedByDoctor` back to `false` until it is.

## 1. Facts taken from the project brief (confirm they are current)

- Physician: Dr. Niyazi Umut Özdemir, Urological Surgeon; Ege University medical education; urology specialisation; Turkish Association of Urology board certification; clinical practice in Antalya.
- EdSWT protocol and device: Omnispec ED1000; 2-3 sessions per week; 1,500 shocks per session; 6 sessions, 3-week interval, 6 further sessions; 12 sessions; 18,000 shock waves (`/shockwave-therapy-ed`, `/edswt`, comparison table).
- P-Shot description: patient's own blood, centrifuge separation, platelet-rich plasma, local anaesthetic or numbing, penile injection, outpatient.
- Advertised fee: 300 in GBP, EUR or USD (`src/lib/page-data.ts`, /price). The earlier site called this "not independently verified". Confirm the amount and what it covers.
- WhatsApp number carried over from the previous site (`src/lib/clinic.ts`).

## 2. Statements written for this rebuild that need sign-off

Each is general or comes from guidelines already cited on the site, but they describe the clinic's own practice or clinical details and should be checked by the physician.

- P-Shot: "outpatient, home the same day"; some tenderness, bruising or swelling in the first days is common; the side-effect list; who may not be suitable (infection, bleeding disorders or blood thinners, low platelets, cancer treatment or immune suppression, anaesthetic allergy, Peyronie's disease); the appointment steps; "no fixed timeline"; the statement that P-Shot is not an enlargement treatment.
- Shockwave: "well tolerated, no injection"; "no downtime expected for most men" (comparison table); who may be less suitable; whether Doppler is recommended before treatment; the statement that some men continue tablets during treatment.
- Stem cells: the clinic's source, preparation, procedure and recovery are **not** described, only generic wording and "explained at assessment". If the clinic offers a specific cellular product (the previous site referred to Magellan Cellular Therapy), add its factual description, regulatory status and consent process. The "who may not be suitable" list is generic.
- Exosomes: the page states that human evidence is very limited and that no protocol, dose, success rate or approved indication is published. Confirm whether the clinic actually offers exosome therapy; until then it is not listed in `MedicalClinic.availableService`.
- Comparison table: session numbers and recovery wording for stem cell, exosome and implant are deliberately non-specific.
- Penile implant: the page is informational and says to ask the clinic whether implant surgery is part of the plan. Confirm whether the clinic performs it.
- Penile rehabilitation: the components listed are the usual categories (risk-factor control, tablets, vacuum devices, injections, selected shockwave). Replace with the clinic's actual programme.
- Penile Doppler: injection of a vasoactive medicine, rare prolonged erection (seek help after 4 hours), reference values (peak systolic velocity below about 25 cm/s for arterial insufficiency). Confirm against the clinic's protocol.
- Age pages, venous leak, diabetes and prostatectomy pages: general statements consistent with the EAU and AUA guidelines cited. No success rates are given.

## 3. Evidence statements kept from the previous site (sourced)

- EAU 2026: intracavernosal PRP for ED only in a clinical-trial setting; weak recommendation for low-intensity shockwave in selected men; stem-cell evidence insufficient.
- Mixed PRP trial results, including the 2023 placebo-controlled trial with no benefit over placebo.
- MHRA 2026 warning that sexual dysfunction may persist after finasteride.

Sources are listed on each page and in `src/lib/evidence.ts`. They are accurate as of this rebuild but should be rechecked when guidelines change.

## 4. Inputs received and still open

| Input | Status |
| --- | --- |
| Address, postal code, phone, email | Done (from the Google Business Profile and owner message): footer, location blocks, MedicalClinic schema. |
| Google rating | Shown as a visible badge (4.5, 47 reviews, as of 2 Oct 2026), values in `CLINIC.googleRating`. Update the numbers by hand. No Review/AggregateRating schema, on purpose. |
| Memberships | Added from a public directory listing (doktorsitesi.com): Turkish Urological Association, Society of Urological Surgery, EAU, Turkish Andrology Association, Aegean Urological Association, Ankara Urologists Association; head of the CİSED Antalya branch. The listing page could not be opened here, so please confirm each item, and confirm the English expansion of CİSED before using it. |
| Education years | Ege University Faculty of Medicine 2000, urology specialisation 2005 (same listing). |
| Publications | None found on PubMed, DergiPark or Google Scholar for this name. `DOCTOR.publications` stays empty; add items with links if they exist. |
| "Turkish Association of Urology board certification" | Supplied by the owner and shown as written. No public source found that confirms a board certificate (the listing shows membership). Keep a copy of the certificate on file. |
| Doctor photo | Still needed: `DOCTOR.photo` in `src/lib/clinic.ts` (file under `public/`). |
| Genuine, consented patient experiences | Still needed: `src/content/patient-stories.ts`. |
| Clinic photography | Still needed. |
| Privacy notice | Strengthened (controller, purposes, explicit consent for health data and for transfers abroad, recipients, retention, KVKK Article 11 and GDPR rights, cookies). The form now has two separate required consent boxes. It is a drafted notice, not legal advice, and has not been reviewed by a lawyer; a Turkish-language KVKK information text has not been written. |
| Languages the coordinator supports | Still needed (`/international-patients` FAQ). |

## 5. Rules the code enforces

- `scripts/validate-site.mjs` fails the build if a page contains "will restore", "guaranteed stronger", "guaranteed erection", "100% success", "permanent improvement" or other banned claims, or any `Review` / `AggregateRating` markup.
- Regenerative therapies carry an "Experimental" or "Investigational" label wherever they appear, and every treatment page has informed-consent language and the physician section.

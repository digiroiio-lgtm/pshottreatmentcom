# UZ Clinic Antalya: patient-acquisition funnel playbook

Last updated: 2026-10-02. Domain: pshottreatment.com.

The site is a funnel, not a brochure: search intent, then condition or treatment education, self-qualification, trust, a medical-assessment CTA, a WhatsApp or form lead, and patient coordination.

## Architecture

- Next.js App Router. Every content page is data in `src/content/pages/*.ts` and is rendered by `src/components/ContentPage.tsx` through the `[slug]` route. The home page is `src/app/page.tsx` plus `src/components/HomeSections.tsx`.
- Page registry: `src/content/index.ts`. Page fields (title, description, H1, answer block, takeaways, blocks, FAQs, sources, related links, hero CTA label) are typed in `src/content/types.ts`.
- Shared facts: `src/lib/clinic.ts` (clinic, physician, review status) and `src/content/treatments.ts` (treatment cards and the comparison table, which also drive the home page, the ED options page, the WhatsApp wording and navigation).
- Titles are written in full per page (not templated) and must be 60 characters or fewer. The brief's example title ("P-Shot Turkey | PRP Treatment for Erectile Dysfunction | UZ Clinic") is 66 characters and would be truncated in results, so each title is a shorter variant.
- Trailing slashes: URLs are served without them (`/p-shot`). `/p-shot/` redirects to `/p-shot`, and canonicals have no slash.

## URL map

All legacy URLs are 301 redirects, defined in `src/content/redirects.mjs`.

| Previous URL | New destination |
| --- | --- |
| /how-it-works | /p-shot |
| /prp-fix-erectile-dysfunction-naturally | /prp-for-erectile-dysfunction |
| /p-shot-venous-leak-ed | /venous-leak |
| /post-prostatectomy-ed | /erectile-dysfunction-after-prostate-surgery |
| /ed-causes | /erectile-dysfunction |
| /prp-vs-stem-cell-erectile-dysfunction | /p-shot-vs-stem-cell |
| /is-p-shot-worth-it, /p-shot-scam-or-legit | /p-shot (its FAQ covers both questions) |
| /best-p-shot-clinic-turkey | /p-shot-turkey |
| /flying-to-turkey-ed-treatment, /flew-to-turkey-for-ed-treatment-reality | /international-patients |
| /why-is-p-shot-expensive-london, /i-paid-1800-london-p-shot, /what-uk-clinics-dont-tell-you-p-shot-pricing, /p-shot-cost-reddit | /price |
| /before-after, /reviews | /patient-experiences |
| /contact | /erectile-dysfunction-assessment |

Kept at the same URL: /side-effects, /price, /about, /editorial-policy, /evidence-methodology, /ed-knowledge-hub, /diabetes-erectile-dysfunction, /testosterone-ed, /post-finasteride-syndrome-ed, /p-shot-vs-viagra, /shockwave-therapy-ed.

Three URLs from the brief were **not** built as separate pages, because they would duplicate the intent of a stronger page (the brief says not to create thin duplicates). They redirect to the main page:

- /li-eswt to /edswt (the Li-ESWT / EdSWT terminology is explained there)
- /penile-exosome-therapy to /exosome-therapy-erectile-dysfunction
- /penile-stem-cell-therapy to /stem-cell-therapy-erectile-dysfunction

Pages added for the funnel and not in the brief's list: /penile-rehabilitation, /penile-implant, /dr-niyazi-umut-ozdemir, /patient-experiences, /international-patients, /privacy.

## Conversion system

- **Assessment form** (`/erectile-dysfunction-assessment`, `src/components/AssessmentForm.tsx`): six conversational screens covering all nine brief steps, plus a travel-timing question and a "did previous treatment help" question that the lead score needs. The final button is "Send My Case for Review" and the confirmation text is the one in the brief. Treatment pages pass `?interest=` so the form is pre-filled.
- **Delivery** (`src/app/api/assessment/route.ts`): validates input, rate-limits, applies honeypot and timing checks, then forwards the lead server-to-server to Formspree (`https://formspree.io/f/xeaobzzg` by default, override or disable with `FORMSPREE_ENDPOINT`) and, if configured, to Resend email and/or `LEAD_WEBHOOK_URL`. Channels are tried independently; the form reports success if at least one accepts the lead. The client-side `@formspree/react` approach was not used because it would bypass the server-side validation, consent checks and lead scoring. Formspree notifications go to the account default, digiroiio@gmail.com (the clinic contact email penilerehab@gmail.com is only shown to visitors). In the Formspree dashboard, avoid "restrict to domain" and reCAPTCHA for this form, because both can reject server-side submissions. If no channel is configured the API returns 503 in production and the form shows a WhatsApp fallback; it never reports success for an undelivered lead. See `.env.example`.
- **Lead score** (`src/lib/lead-score.ts`): internal only, computed server-side, included in the email and webhook, never shown to the patient. Weights follow the brief. "WhatsApp contact" is scored when WhatsApp is the preferred contact channel. "ED over 6 months" is scored from the 1 to 3 years band upward, because the form's 3 to 12 month band cannot be split. Tiers: 0-29 Low Intent, 30-49 Medium, 50-69 High, 70+ Priority Lead.
- **WhatsApp**: desktop floating button, mobile bottom bar (WhatsApp plus Check Suitability) and in-page buttons. The pre-filled message names the treatment of the current page ("Hello, I would like a confidential assessment for erectile dysfunction. I am interested in P-Shot.").
- **CTA frequency**: hero, mid-page blocks after the candidate, procedure/evidence and comparison sections, and a closing assessment card. The validator fails a money page with fewer than 5 CTAs.
- **Exit intent** (desktop only, once per session): "Not sure which ED treatment you need?" with a Start ED Assessment button. No discounts.

## Analytics (GA4)

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Consent Mode v2 starts in the denied state and a small banner asks for analytics consent (needed for UK and EU patients). Without the ID nothing loads.

Events: `assessment_start`, `assessment_complete`, `whatsapp_click`, `phone_click`, `email_click`, `p_shot_lead`, `shockwave_lead`, `stem_cell_lead`, `exosome_lead`, `ed_general_lead`, `treatment_comparison_view`, `doctor_profile_view`, plus `cta_click` for placement analysis. Parameters: `source`, `medium`, `campaign`, `landing_page` (first touch of the session), `page`, `treatment`, `placement`, and on form completion `country` and `treatment_interest`.

**No health information is ever sent to GA** (no symptoms, history, age or contact details). The privacy page says so, so keep it true when changing the form.

In GA4, mark `assessment_complete`, the five `*_lead` events and `whatsapp_click` as key events, and register `treatment`, `placement`, `country` and `treatment_interest` as custom dimensions.

## Schema

Every page emits one `@graph`:

- `Organization` and `MedicalClinic` (one node) and `Physician` (Ege University and Turkish Association of Urology board certification, as supplied).
- `WebSite`, `WebPage` / `MedicalWebPage` / `AboutPage` / `ProfilePage`, `BreadcrumbList`, `Article`.
- `FAQPage`, identical to the visible FAQ.
- `MedicalCondition` and `MedicalTherapy` where a page is about one.
- `Service` plus `Offer` on /price, and `ItemList` for the steps shown on a page.

`reviewedBy` and `lastReviewed` appear only after `CONTENT_REVIEW` is switched on in `src/lib/clinic.ts`.

Deliberately not emitted: `Review` and `AggregateRating` (self-published testimonials are ineligible and the brief forbids invented ratings; `validate-site.mjs` fails if they appear), and an `availableService` entry for exosome therapy until the clinic confirms it offers it.

## Content that still needs the clinic

See `medical-claims-review.md`. In short: the doctor's photo, publications and memberships; street address and a public phone or email; genuine consented patient experiences (add them to `src/content/patient-stories.ts` and pages render them automatically); confirmation of the fee scope; and physician sign-off of every medical statement.

## SEO, GEO and AI search

- Keyword map and the validator checks that enforce it: `keyword-map.md`.
- Answer-engine discovery, IndexNow (`npm run indexnow`), off-page signals and the monthly prompt test: `ai-visibility-playbook.md`.
- Lab performance and accessibility results: `performance.md`.
- Site-wide audit (`npm run seo:audit`, needs the site running; set `SITE_BASE_URL`): per-page metadata, schema checks, 0-100 score, link inventory with status, redirection checks, duplicate/orphan/robots/llms/404/header checks. It writes `docs/seo-audit-<date>.md` and `.json`. Add `--strict` to exit non-zero on errors, `--skip-external` to skip external links. External hosts that the network denies are listed as "unchecked", not failed.
- Competitor comparison: `node scripts/seo-audit.mjs --competitor https://competitor-one.com https://competitor-two.com` writes `docs/seo-competitors-<date>.md` (title/description lengths, headings, words, schema types, FAQ schema, robots AI rules, llms.txt). It uses plain HTTP, so hosts blocked by the network are reported as unreachable and nothing is estimated.
- Internal linking rule: at least 3 inbound links from page content to every content page (validator-enforced).

## Launch checklist

1. Deploy with the environment variables, then send a test lead and confirm the email or webhook arrives.
2. GA4: confirm the events in DebugView, mark key events, add custom dimensions.
3. Search Console and Bing Webmaster: verify the property and submit `https://pshottreatment.com/sitemap.xml`. Use URL Inspection on the 301s to confirm the new destinations.
4. Test every WhatsApp and form CTA on a real phone and a desktop browser.
5. Run Lighthouse or PageSpeed Insights on the home page, /p-shot and the assessment page. The pages are static HTML with no images and about 102 to 114 kB of shared JavaScript, so expect good results, but field Core Web Vitals need real traffic and were not measured here.
6. Physician sign-off, then switch on `CONTENT_REVIEW`.
7. Set `INDEXNOW_KEY`, redeploy, and run `npm run indexnow`.
8. Re-run the validator against production: `SITE_BASE_URL=https://pshottreatment.com npm run validate:site`.

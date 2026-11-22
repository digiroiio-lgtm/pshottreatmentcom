# International SEO, GEO, AEO and Local plan (2026-11-22)

Scope: Turkey/Türkiye (country), Antalya (primary), Istanbul (secondary, travel-led). 56 live URLs are kept. No page was deleted, renamed or redirected. Scores below are an auditor's judgement from the repository and Search Console, not a measured metric.

## Verified baseline

| Source | Finding (verified from tools on 2026-11-22) |
| --- | --- |
| Search Console, 23 Aug to 20 Nov 2026 | About 1,000+ impressions, 3 clicks. Most queries sit at position 50 to 90 |
| Search Console, last 28 days | 323 impressions, 1 click, average position 47 (previous 28 days: 438 impressions, 1 click) |
| Istanbul queries | None in the top 60 Search Console queries. Google autocomplete (screenshot from the owner) suggests "p shot istanbul" and "p shot treatment in istanbul" |
| Geo queries seen | "exosome therapy turkey" (pos 52), "p shot cyprus" (24), "p shot nigeria" (14), "penile doppler" variants (50 to 90) |
| GA4 `Pshottreatmentcom` (532906670) | No sessions in 90 days (last data 14 Apr 2026, 4 sessions). Tracking is probably not attached to the live site |
| GA4 `pshotturkey.com` (378714372) | About 20 sessions in 90 days |

## Report A: Geographic SEO audit (0 to 100, judgement)

| Area | Score | Basis |
| --- | --- | --- |
| Turkey/Türkiye targeting | 70 | Three country pages and consistent "Turkey" use. "Türkiye" was absent from the site (fixed in this change) |
| Antalya targeting | 75 | Two Antalya pages, verified address, MedicalClinic schema, doctor page |
| Istanbul targeting | 60 | Dedicated page added after the owner confirmed an affiliated clinic in Istanbul. Name, address and treating doctor are still missing |
| Keyword coverage | 70 | Wide coverage. Gaps: penile Doppler Turkey/Antalya, "ED treatment cost Turkey" |
| Search intent | 75 | One primary page per intent (docs/keyword-map.md) |
| Technical SEO | 90 | `seo:audit`: 56 pages, 0 errors, 0 warnings. Canonicals, sitemap and robots in place |
| Internal linking | 85 | No orphans reported by the audit |
| Local SEO | 55 | Address and phone verified, but Google profile link, map coordinates, opening hours and `sameAs` are not set |

The main limit is authority, not structure: pages rank at positions 30 to 90.

## Report B: GEO and AEO audit

| Verified in the repository | Assumption (not verifiable here) |
| --- | --- |
| Answer-first block on every page, FAQ schema, MedicalClinic and Physician schema | Any of this leads to AI citations |
| `llms.txt` and `llms-full.txt`, AI crawlers explicitly allowed in robots | Whether ChatGPT, Gemini or Perplexity currently cite the site (no data, NightWatch/Semrush AI tracking not queried) |
| Evidence tracker, methodology and editorial policy pages, sources on medical pages | Medical review dates are current (needs the doctor) |

Readiness score: 80 (structure). AI visibility score: not measurable from here.

## Report C: Keyword-to-URL map

| Keyword | Location | Intent | Existing URL | Proposed URL | Action | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| ED treatment Turkey / Türkiye | Country | Commercial | /erectile-dysfunction-treatment-turkey | same | Done: Türkiye in description and FAQ | P1 |
| ED treatment Antalya, ED clinic Antalya | Antalya | Commercial | /erectile-dysfunction-treatment-antalya | same | Keep, build links and reviews | P1 |
| ED treatment Istanbul, P-Shot Istanbul, Doppler Istanbul | Istanbul | Commercial | none | /erectile-dysfunction-treatment-istanbul (one page for all) | Done. Owner confirmed an affiliated clinic offering Doppler, P-Shot, shockwave, stem cell | P1 |
| P-Shot Turkey / Antalya | Country / Antalya | Commercial | /p-shot-turkey, /p-shot-antalya | same | Keep | P1 |
| P-Shot Istanbul | Istanbul | Commercial | none | same Istanbul page | No separate page (same intent) | n/a |
| P-Shot price / cost Turkey, UK | Country | Price | /price | same | Done in PR 7. Add Turkey cost wording later | P1 |
| ED treatment cost Turkey | Country | Price | /price | none | Do not create. Duplicates /price | n/a |
| Shockwave ED Turkey | Country | Commercial | /shockwave-therapy-erectile-dysfunction-turkey | same | Keep | P1 |
| Shockwave ED Antalya | Antalya | Commercial | /shockwave-therapy-ed (title has Antalya) | none | Do not create a page | n/a |
| Penile Doppler Turkey / Antalya | Country / Antalya | Diagnostic | /penile-doppler-ultrasound (rank 60) | /penile-doppler-antalya | Done (2026-11-22). Clinic confirmed Doppler is done in-house. Fee left unpublished | P1 |
| Penile Doppler Istanbul | Istanbul | Diagnostic | none | same Istanbul page | No separate page | n/a |
| Venous leak diagnosis Antalya | Antalya | Informational | /venous-leak | same | Add Antalya assessment paragraph after doctor confirms | P2 |
| Stem cell, exosome Turkey | Country | Informational/commercial | /stem-cell-treatment-ed-turkey, /exosome-therapy-turkey | same | Keep, experimental wording stays | P2 |
| ED treatment abroad | Country | Informational | /choose-an-ed-clinic-abroad | same | Title rewritten in PR 7 | P2 |

## Report D: Implementation log

| Item | Detail |
| --- | --- |
| Files modified | `src/content/pages/core.ts`, `src/content/pages/clinic.ts`, `src/components/JsonLd.tsx`, `docs/geo-seo-plan-2026-11.md` |
| URLs created | None. No URLs removed or redirected |
| Metadata | `/erectile-dysfunction-treatment-turkey` description now includes Türkiye |
| Structured data | Country `Turkey` now has `alternateName: Türkiye` in `areaServed` |
| Internal content | New section "Travelling from Istanbul or elsewhere in Türkiye" on `/international-patients`. Three FAQs added (Türkiye vs Turkey, two Istanbul) |
| Istanbul claims | Only what the owner confirmed: an affiliated clinic offering Doppler, P-Shot, shockwave and stem cell. No clinic name, address, doctor or schema location is published yet |
| Validation | `npm run build` passed. `seo:audit` passed earlier on the same architecture (56 pages, 0 errors). Re-run before merge |

## Report E: 30-day action plan

| Priority | Action | Owner |
| --- | --- | --- |
| P0 | Fix GA4 (attach the correct measurement ID, mark form submit and WhatsApp click as key events) | You |
| P0 | Supply Google Business Profile share link, map coordinates, opening hours, any verified `sameAs` profiles. They are already wired in `src/lib/clinic.ts` and only need values | You |
| P0 | Send the Istanbul clinic name, address, treating doctor and whether it has its own Google profile. Until then no Istanbul address or location schema is published | You |
| P1 | Request indexing in GSC for `/price`, `/` and the Turkey and Antalya pages | You |
| P1 | Run IndexNow from a machine with the key | You |
| P2 | Doctor review of regenerative-therapy wording (`docs/medical-claims-review.md`) | Doctor |
| P2 | Backlinks: medical tourism directories, UK patient forums, doctor profile sites (positions 30 to 90 show an authority problem) | You |
| P3 | Compare WhatsApp and form conversion per landing page once GA4 works | Later |

## Report F: Measurement framework

Baseline is the table at the top. Do not forecast; compare against it.

| Horizon | Check | Source |
| --- | --- | --- |
| 30 days | GA4 recording sessions. Impressions and average position for `/price`, `/` and the Turkey and Antalya pages | GA4, GSC |
| 60 days | Clicks and CTR on rewritten titles. Any Istanbul-containing queries (decides whether a page is justified) | GSC |
| 90 days | Organic sessions per landing page, WhatsApp clicks, form submissions, qualified leads | GA4, lead log |

Keep tracking free of medical details: send event names and page paths only, never form answers.

## Decisions needed

1. Istanbul: affiliated clinic confirmed by the owner. Still needed: name, address, doctor, partner or own branch.
2. Provide Google profile link, coordinates and opening hours for Local SEO.

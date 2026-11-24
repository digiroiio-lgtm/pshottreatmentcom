# pshottreatment.com roadmap: phases and sprints (2026-11-24)

Goal: maximum qualified visibility (Google + AI answers) for men looking for an ED solution and for anyone who could travel to Turkey, Antalya or Istanbul, then turn that traffic into form and WhatsApp enquiries.

Inputs: repository audit (62 pages), live site, Google Search Console (Aug–Nov 2026), internal link graph. Owner confirmed (2026-11-24): the clinic also treats **penile implants, Peyronie's disease, premature ejaculation and low testosterone (TRT)**; it holds a **health tourism authorisation certificate**; the **company name and tax number** can be provided.

## 1. Findings

### Internal linking and orphan pages

No true orphan pages. Weak pages (3 or fewer in-content links from other pages; header and footer excluded):

| Page | In-content links | Fix |
| --- | --- | --- |
| /ed-knowledge-hub | 1 | It is the hub: link it from every article and condition page |
| /evidence-methodology | 2 | Link from the evidence tracker, editorial policy and medical pages' review line |
| /erectile-dysfunction-over-50 | 2 | Link from ED, vasculogenic, diabetes, heart disease, under 40 |
| /erectile-dysfunction-over-60 | 3 | Same set as over 50 |
| /prp-for-erectile-dysfunction | 3 | Link from P-Shot Turkey/Antalya, evidence tracker, 25 questions |
| /stem-cell-treatment-ed-turkey | 3 | Link from Turkey, Istanbul, 25 questions |
| /shockwave-therapy-erectile-dysfunction-turkey | 3 | Link from Turkey, Antalya, price, 25 questions |
| /p-shot-vs-viagra | 3 | Link from tablets-not-working, P-Shot, ED treatment options |

Guide → target pages: guides reach treatment pages only through cards and "Related guides". There are no in-text links inside paragraphs, and several articles never link to the Turkey/Antalya, price or assessment pages, which are the pages that convert.

### Footer

Four menu columns (Conditions, Treatments, Diagnosis, About) and a bottom row of nine links. Missing: Turkey / Antalya / Istanbul, prices, the 25-questions guide, press, guides column. Legal: only Privacy.

### Legal and trust gaps

| Gap | Why it matters |
| --- | --- |
| No terms of use | Standard for a clinic site taking enquiries from abroad |
| No way to change cookie consent later | Required under UK/EU rules (fixed in Sprint 0: "Cookie settings" in the footer) |
| No Turkish KVKK information notice (aydınlatma metni) | The clinic is the data controller in Turkey |
| No separate medical disclaimer page | Inline text exists; a page makes it linkable from every CTA and the footer |
| Company name, tax number and health tourism authorisation number not shown | Trust for international patients; the authorisation is also a ranking-relevant trust signal |
| Risk to check with a lawyer | Turkish rules on promoting health services may restrict published prices and discounts (the 5% packages). Also check UK advertising rules (CAP code) for UK-targeted pages |

### Content gaps (services the clinic provides but the site does not cover)

| Topic | Evidence of demand | Page |
| --- | --- | --- |
| Penile implant in Turkey | GSC: "antalya'da penis protezi ameliyatı yapan doktorlar" at position 6.5 | New /penile-implant-turkey; upgrade /penile-implant |
| Peyronie's disease | Large search topic; shockwave and implants link to it | New /peyronies-disease |
| Premature ejaculation | Second most searched men's sexual health topic after ED | New /premature-ejaculation |
| TRT (testosterone therapy) | GSC: TRT cluster ~80 impressions, positions 60–78 | Add a "TRT at the clinic" section to /testosterone-ed |
| Pelvic floor therapy, G-Cell Power P-Shot | Priced on /price but no page explains them | New /pelvic-floor-therapy; G-Cell section on /p-shot (needs the clinic's description) |

### FAQs

Pages with 3 or fewer FAQs: penile rehabilitation, penile implant, Antalya, P-Shot Antalya, P-Shot Turkey, shockwave Turkey, side effects, about. Missing everywhere: booking, payment and travel questions (payment methods, languages, airport transfer, flying after a P-Shot, aftercare at home).

## 2. Roadmap

| Phase | Sprint | When | Work | Type |
| --- | --- | --- | --- | --- |
| 0 Foundations | S0 | Day 1 | Merge analytics (done, PR #16). Add the GA measurement ID when received. "Cookie settings" link in the footer | Fix |
| 1 Trust and legal | S1 | Week 1 | /terms, /kvkk (Turkish), /medical-disclaimer, cookie list in /privacy; footer legal line with company name, tax number and health tourism authorisation number; authorisation in schema. Unknown values marked `[TO FILL]` | Add |
| 1 | S2 | Weeks 1–2 | Footer rebuild: "Turkey & travel" column (Turkey, Antalya, Istanbul, prices, 25 questions, choosing a clinic abroad, international patients) and "Guides" column (hub, ED questions, evidence tracker, glossary, press); legal links in the bottom row | Optimise |
| 2 Internal linking | S3 | Week 2 | The 8 weak pages to 5+ in-content links; hub lists every guide; "Next steps" block on every article (treatment, Antalya/Turkey, price, assessment); in-text links inside paragraphs; validator rule: every page 5+ inbound, every article links to 1+ treatment or clinic page | Optimise |
| 3 New guides | S4 | Weeks 3–4 | /penile-implant-turkey, /peyronies-disease, /premature-ejaculation, TRT section, /pelvic-floor-therapy, G-Cell section. Evidence labels, FAQs, links from the 25-questions guide and footer. Prices only where the clinic supplies them | Add |
| 3 | S5 | Week 4 | 3–5 FAQs on each thin page; "Booking, payment and travel" FAQ set on /international-patients; 15 new AI prompts (implant, Peyronie's, PE, TRT, brand, Turkish and Dutch) added to the questions guide | Add |
| 4 Conversion | S6 | After 2–4 weeks of GA data | Shorten the form where the funnel shows drop-off; WhatsApp button next to the price table and after FAQs; trust strip beside CTAs (doctor, Google 4.5, authorisation) | Optimise |
| 5 Markets | S7 | Day 60 | Decide from GSC language data: expand Dutch/Danish, or pilot German (a large medical-travel market for Antalya) | Evaluate |

### Not doing

- City-name copies of the same page (doorway pages).
- A Biofiller page until risks and evidence are approved.
- Before/after photos or invented reviews.
- New languages without search demand.
- Publishing the card surcharge before tax and consumer-law confirmation.

## 3. Sprint acceptance criteria

| Sprint | Done when |
| --- | --- |
| S1 | Legal pages live and linked from the footer; footer shows company name, tax number, authorisation number; build, validate and audit clean |
| S2 | Footer has Turkey & travel and Guides columns; every money page linked from the footer or nav |
| S3 | No page under 5 in-content inbound links; every article links to a treatment or clinic page; validator enforces it |
| S4 | Each new page: answer-first block, evidence label, 4+ FAQs, sources, doctor block, 5+ inbound links |
| S5 | No money page with fewer than 4 FAQs; booking/payment/travel FAQ live; prompts documented in the scorecard |
| S6 | One change per test, measured against the previous 2 weeks in GA4 |

## 4. Needed from the owner

| For | What |
| --- | --- |
| S0 | GA4 measurement ID (G-…) |
| S1 | Company legal name, tax office and number, health tourism authorisation number, KVKK contact (email or address) |
| S4 | Implant and Peyronie's prices (if they should be published), G-Cell Power P-Shot description, which treatments the Istanbul clinic offers for the new topics |
| S5 | Payment methods, languages spoken, airport transfer or hotel arrangements, cancellation policy (if any) |

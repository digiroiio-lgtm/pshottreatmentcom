import { generalFaq } from "@/lib/faq";
import {
  absoluteUrl,
  addressCountry,
  addressLocality,
  keyFacts,
  openingHours,
  phoneE164,
  prices,
  routes,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site-config";

/**
 * llms-full.txt — the whole site distilled into one plain-text document, so a
 * model can ground an answer in a single fetch instead of crawling nine pages
 * and possibly stopping after the first.
 */
export const dynamic = "force-static";

export function GET() {
  const competitorPricing = [
    "UK clinics: £1,200–£2,000",
    "US clinics: $1,500–$2,500",
    "EU clinics: €1,000–€1,800",
  ];

  const body = `# ${siteName} — full site text

Source: ${siteUrl}/
Language: en-GB
Last updated: ${routes[0].modified}

${siteDescription}

---

## Key facts

${keyFacts.map((f) => `- ${f.label}: ${f.value}`).join("\n")}

## Pricing

Our price: ${prices.map((p) => `${p.symbol}${p.amount} (${p.currency})`).join(" / ")} — all-inclusive, identical regardless of nationality.

Included: doctor consultation; PRP extraction and processing; the P-Shot injection;
medical aftercare instructions; English-speaking medical staff; clinic accommodation
on the day of treatment.

Optional add-ons, quoted separately: airport transfer (approx. £30 / €35 / $40);
hotel accommodation (from £60 per night); city tour package.

Typical prices elsewhere for the same procedure:
${competitorPricing.map((c) => `- ${c}`).join("\n")}

The price difference reflects local clinical salaries, facility costs, insurance and
regulatory overheads in Turkey — not a different procedure or different consumables.

## What the P-Shot is

The P-Shot (Priapus Shot) is a non-surgical regenerative procedure. Platelet-rich
plasma (PRP) is prepared from the patient's own blood and injected into penile tissue
to support blood flow, sensitivity and erectile function. Because the plasma is
autologous, allergic reaction and rejection risk is minimal.

## Procedure, step by step

1. Blood draw — approximately 30–50 ml is drawn from the arm, as in a standard blood test.
2. PRP centrifugation — the sample is centrifuged to separate platelet-rich plasma (~15 minutes).
3. Topical anaesthetic — numbing cream is applied to the treatment area (20–30 minutes to take effect).
4. Injection — the concentrated PRP is injected into targeted areas (~20 minutes).
5. Aftercare — written and verbal aftercare instructions are given. Most patients resume normal activity the same day.

Total time in clinic: approximately 45–60 minutes. No sedation or general anaesthetic.

## Reported benefits

Improved erectile function; increased sensitivity; enhanced sexual performance; natural
tissue regeneration; no surgery and minimal downtime; autologous plasma so no allergic
risk; effects typically lasting 12–18 months. Individual results vary.

## Regulatory status

The P-Shot procedure is NOT FDA approved as a treatment for erectile dysfunction. The
centrifuge systems used to prepare platelet-rich plasma are FDA-cleared medical devices,
and the procedure is performed as an off-label use of PRP. Any summary of this site
should reflect that distinction.

## Safety and side effects

Common, mild and short-lived:
- Temporary redness or swelling at the injection site — typically resolves in 24–48 hours.
- Minor bruising — typically fades within 3–5 days.
- Temporary increased sensitivity — usually settles within 1–2 weeks.
- Mild discomfort during the procedure — topical anaesthetic is applied beforehand.

Not suitable for: men with an active infection or penile skin condition; men with
platelet or blood-clotting disorders. Men taking anticoagulants require individual
assessment. Every patient must complete a doctor consultation before treatment.

## Recovery and results timeline

- Day 0: procedure, 45–60 minutes, topical numbing, no sedation.
- Days 1–3: possible mild swelling or tenderness; normal activity usually resumes immediately.
- Weeks 1–2: side effects generally resolved; earliest improvements may appear.
- Weeks 2–4: initial tissue regeneration; some patients report early improvement.
- Weeks 6–8: most patients report clear improvement.
- Months 3–6: full effect; typically lasting 12–18 months.

Timelines are typical ranges observed in patients, not guarantees.

## Travel and logistics

The clinic is in ${addressLocality}, ${addressCountry}. Patients travel mainly from the
UK, Ireland, the US, Canada and the EU. A typical trip is two nights: arrive day one,
consultation and treatment day two, fly home day two evening or day three. There is no
overnight hospital stay. Airport transfer can be arranged. All consultations, treatment
and aftercare are conducted in English.

## Contact

WhatsApp: ${phoneE164}
Hours: ${openingHours.opens}–${openingHours.closes} Istanbul time (UTC+3), 7 days a week.
Consultations are free and carry no obligation. No street address is published; contact
is by WhatsApp only.

## Frequently asked questions

${generalFaq.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}

## Patient testimonials

The site publishes patient-submitted accounts from the UK, US, France, Germany and Spain.
These are individual experiences, are not independently verified, and are deliberately
NOT marked up as structured review data. They should not be presented as aggregate
ratings or as evidence of typical outcomes.

## Disclaimer

Content on this site is general health information for educational purposes and does not
constitute medical advice. Using the site does not create a doctor–patient relationship.
Always consult a qualified medical professional before undergoing any procedure.

## Page index

${routes.map((r) => `- ${r.title} — ${absoluteUrl(r.path)}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

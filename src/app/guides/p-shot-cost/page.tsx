import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import KeyTakeaway from "@/components/KeyTakeaway";
import { FaqItem } from "@/components/FaqSection";
import { GUIDES } from "@/lib/content";
import { articleMetadata } from "@/lib/metadata";

const entry = GUIDES.find((g) => g.slug === "p-shot-cost")!;
export const metadata: Metadata = articleMetadata(entry);

const faqs: FaqItem[] = [
  {
    q: "How much does the P-Shot cost in the UK?",
    a: "Published UK clinic prices for a single P-Shot session generally run from about £995 to £2,500, with £1,200 to £2,000 the most common band. Central London and Harley Street clinics sit at the top of that range; regional clinics sit lower. Prices are per session and are not usually covered by the NHS or by private medical insurance.",
  },
  {
    q: "Why is the P-Shot so much cheaper in Turkey?",
    a: "The difference is driven by operating costs rather than by the injection itself. Clinical salaries, premises costs, insurance and marketing overheads are substantially lower in Turkey than in central London or major US cities, and clinics that treat international patients in volume price accordingly. The consumables — a blood draw, a PRP separation kit, a centrifuge and topical anaesthetic — cost broadly the same everywhere.",
  },
  {
    q: "Is the P-Shot covered by the NHS or private insurance?",
    a: "Generally no. PRP for erectile dysfunction is not an established therapy on the NHS, and most private medical insurers exclude treatments they classify as experimental or cosmetic. Assume you are paying privately and ask your insurer in writing if you think otherwise.",
  },
  {
    q: "Does a low price mean lower quality?",
    a: "Not automatically, but price alone tells you nothing about quality. What matters is who performs the injection and what their qualification is, whether the clinic is licensed, what PRP preparation system is used, whether sterile technique and anaesthesia are properly handled, and what happens if you have a complication after you fly home. Judge a clinic on those questions, not on the headline number in either direction.",
  },
  {
    q: "How many P-Shot sessions will I need?",
    a: "There is no established protocol. Published trials have used single injections and also multi-injection courses, and clinics differ widely in what they recommend. Ask any clinic to tell you, before you pay, whether their quoted price is for one session or a course, and what a repeat session would cost.",
  },
  {
    q: "Should I budget for anything beyond the treatment fee?",
    a: "Yes. Budget for the consultation if it is charged separately, any repeat session, and — if you are travelling — flights, accommodation, transfers and a contingency in case you need an extra night. Also consider the cost of any follow-up care you might need at home, which will not be included in an overseas package.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      entry={entry}
      faqs={faqs}
      ctaTitle="Get a Fixed, All-Inclusive P-Shot Quote"
      ctaSubtitle="£300 / €300 / $300, with everything listed on our price page included."
    >
      <KeyTakeaway>
        <p>
          A single P-Shot session typically costs <strong>£995–£2,500 in the UK</strong>,{" "}
          <strong>$1,200–$2,500 in the US</strong> and <strong>€1,000–€1,800 across Western Europe</strong>.
          In Turkey the same procedure is commonly priced between <strong>€225 and €450</strong>. Our clinic
          charges a fixed <strong>£300 / €300 / $300</strong> all-inclusive.
        </p>
        <p>
          The gap is driven almost entirely by clinic operating costs, not by the materials used. The price
          you are quoted tells you very little about clinical quality on its own — the questions in the{" "}
          <Link href="#judging">judging a quote</Link> section matter far more.
        </p>
      </KeyTakeaway>

      <h2 id="prices">P-Shot prices by country (2026)</h2>
      <p>
        The figures below are the ranges published by clinics themselves for a single P-Shot session. They
        are list prices, not averages of what patients actually paid, and they move with clinic location and
        with who performs the procedure.
      </p>
      <div className="table-wrap">
        <table>
          <caption>Typical published price for one P-Shot session, by market.</caption>
          <thead>
            <tr>
              <th>Market</th>
              <th>Typical range (one session)</th>
              <th>What usually pushes it higher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United Kingdom</td>
              <td>£995 – £2,500</td>
              <td>Central London and Harley Street addresses; treatment by a lead or senior doctor</td>
            </tr>
            <tr>
              <td>United States</td>
              <td>$1,200 – $2,500</td>
              <td>Major metro clinics; bundled packages of multiple sessions</td>
            </tr>
            <tr>
              <td>Western Europe</td>
              <td>€1,000 – €1,800</td>
              <td>Capital-city private clinics; urologist rather than aesthetic-clinic delivery</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>€225 – €450</td>
              <td>Add-ons quoted separately, such as transfers, hotel or a second session</td>
            </tr>
            <tr>
              <td>Our clinic (Istanbul)</td>
              <td>£300 / €300 / $300 fixed</td>
              <td>Nothing — the treatment fee is fixed; travel add-ons are optional and quoted separately</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Our own fixed pricing, and the full list of what the fee covers, is on the{" "}
        <Link href="/price">P-Shot price page</Link>.
      </p>

      <h2 id="why-the-gap">Why the price gap between the UK and Turkey is so wide</h2>
      <p>
        It is a fair question, and the honest answer is unglamorous. The consumables for a P-Shot are
        inexpensive and cost broadly the same worldwide: a venous blood draw, a single-use PRP separation
        kit, time in a centrifuge, topical anaesthetic and injection materials. What differs is everything
        around the procedure.
      </p>
      <ul>
        <li>
          <strong>Premises.</strong> Rent on a Harley Street consulting room is an order of magnitude above
          clinic space in Istanbul, and that cost is spread across a relatively small number of procedures.
        </li>
        <li>
          <strong>Clinical salaries.</strong> Doctor and nurse pay in the UK and US is far higher than in
          Turkey, and in a short procedure staff time is a large share of the cost base.
        </li>
        <li>
          <strong>Indemnity and regulatory overhead.</strong> Medical indemnity, registration and compliance
          costs differ substantially between markets.
        </li>
        <li>
          <strong>Patient acquisition cost.</strong> Competitive paid search for erectile dysfunction terms
          in the UK and US is expensive, and that marketing spend is recovered in the treatment price.
        </li>
        <li>
          <strong>Volume.</strong> Clinics built around international patients perform the same procedure
          repeatedly and price on throughput rather than on margin per patient.
        </li>
      </ul>
      <p>
        None of that makes a cheaper clinic better or worse. It explains why the number is different — and
        it means you still have to assess quality separately, which is what the rest of this guide is for.
      </p>

      <h2 id="whats-included">What should be included in a P-Shot quote</h2>
      <p>
        Quotes are not standardised, and two clinics advertising similar numbers can be selling quite
        different things. Before you compare prices, make both quotes cover the same list.
      </p>
      <div className="table-wrap">
        <table>
          <caption>Checklist for comparing two P-Shot quotes like for like.</caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Why it matters</th>
              <th>Ask the clinic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doctor consultation</td>
              <td>Some clinics charge an initial consultation on top of the procedure fee</td>
              <td>Is the consultation included, and is it refundable against treatment?</td>
            </tr>
            <tr>
              <td>Number of sessions</td>
              <td>A headline price may be per session, while the recommended plan is a course</td>
              <td>Is this price for one session, and what does a repeat cost?</td>
            </tr>
            <tr>
              <td>PRP preparation</td>
              <td>Kit and processing method vary, and some clinics bill them separately</td>
              <td>Which PRP system do you use, and is the kit included?</td>
            </tr>
            <tr>
              <td>Anaesthesia</td>
              <td>Topical numbing is standard; some clinics add a fee for a nerve block</td>
              <td>What anaesthesia is used and is it in the price?</td>
            </tr>
            <tr>
              <td>Aftercare and follow-up</td>
              <td>A follow-up review may or may not be covered</td>
              <td>Is a follow-up included, and how do I reach you if something goes wrong?</td>
            </tr>
            <tr>
              <td>Travel add-ons</td>
              <td>Transfers and accommodation are usually optional extras</td>
              <td>What is genuinely optional, and what will I be charged on arrival?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="travel-budget">Budgeting for treatment abroad</h2>
      <p>
        If you are travelling, the treatment fee is only part of the number that matters. Build your budget
        from the total, not the headline. The illustrative worksheet below uses our own published add-on
        prices; flight costs vary enormously by season and departure airport, so put in your own figure
        rather than relying on any clinic&apos;s estimate.
      </p>
      <div className="table-wrap">
        <table>
          <caption>Illustrative total-cost worksheet. Flight and hotel figures are examples only.</caption>
          <thead>
            <tr>
              <th>Line item</th>
              <th>Our published price</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P-Shot treatment</td>
              <td>£300 / €300 / $300</td>
              <td>Fixed, all-inclusive of the clinical items on our price page</td>
            </tr>
            <tr>
              <td>Airport transfer (optional)</td>
              <td>from approx. £30 / €35 / $40</td>
              <td>Both directions if you need it</td>
            </tr>
            <tr>
              <td>Hotel (optional)</td>
              <td>from approx. £60 per night</td>
              <td>Most patients budget one to two nights</td>
            </tr>
            <tr>
              <td>Return flights</td>
              <td>Your own figure</td>
              <td>Highly variable — check your actual dates before committing</td>
            </tr>
            <tr>
              <td>Contingency</td>
              <td>Your own figure</td>
              <td>An extra night and a change fee, in case your plans move</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For how long you actually need to be in the country and what the trip involves, see our{" "}
        <Link href="/guides/p-shot-turkey">guide to having the P-Shot in Turkey</Link>.
      </p>

      <h2 id="judging">Judging a quote: what price does and does not tell you</h2>
      <p>
        Price is a poor proxy for quality in both directions. An expensive clinic is not automatically
        safer, and a cheap one is not automatically cutting corners. These are the things worth weighing
        instead:
      </p>
      <ol>
        <li>
          <strong>Who performs the injection, and what is their registration?</strong> Ask for the name and
          the licensing body, and check it.
        </li>
        <li>
          <strong>Is the facility licensed for the procedure?</strong> In Turkey, clinics treating
          international patients should be able to evidence their health ministry authorisation.
        </li>
        <li>
          <strong>How is consent handled?</strong> A clinic should tell you, unprompted, that evidence for
          PRP in erectile dysfunction is mixed. If a quote comes with a guaranteed outcome, treat that as a
          warning sign rather than a selling point.
        </li>
        <li>
          <strong>What is the aftercare route?</strong> Specifically: who do you contact from home, how
          quickly, and what happens if you need to be seen in person.
        </li>
      </ol>
      <p>
        Before you weigh cost at all, it is worth knowing what the treatment can and cannot be expected to
        do. Our guide on{" "}
        <Link href="/guides/does-the-p-shot-work">what the clinical evidence actually shows</Link> covers
        the trial results in plain language, including the negative ones.
      </p>

      <h2 id="value">Is the P-Shot worth the money?</h2>
      <p>
        That depends on a judgement only you can make, and it should be made with the evidence in front of
        you rather than the price list. Randomised trials of PRP for erectile dysfunction have produced
        mixed results — some found a meaningful benefit over placebo, others found none — and major urology
        bodies still class regenerative therapies for ED as investigational. Established first-line
        treatments such as PDE5 inhibitors have a far stronger evidence base and cost far less; we compare
        them directly in <Link href="/blog/p-shot-vs-viagra">P-Shot vs Viagra</Link>.
      </p>
      <p>
        The honest framing is this: at £300 the financial risk of trying the P-Shot is modest, but a low
        price does not raise the probability that it works for you. Speak to a doctor about your own
        situation, and make sure you have had the standard first-line options properly assessed before
        paying for a regenerative one.
      </p>
    </ArticleLayout>
  );
}

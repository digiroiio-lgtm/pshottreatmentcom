import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import KeyTakeaway from "@/components/KeyTakeaway";
import { FaqItem } from "@/components/FaqSection";
import { GUIDES } from "@/lib/content";
import { articleMetadata } from "@/lib/metadata";

const entry = GUIDES.find((g) => g.slug === "p-shot-turkey")!;
export const metadata: Metadata = articleMetadata(entry);

const faqs: FaqItem[] = [
  {
    q: "How many days do I need in Turkey for a P-Shot?",
    a: "Two to three days is enough for most patients. The P-Shot is a day procedure carried out under topical anaesthetic with no sedation, and it takes roughly 45 to 60 minutes including PRP preparation. A common pattern is to arrive the day before, be treated in the morning, and fly home the following day. Booking a spare night is sensible so a delayed appointment does not cost you a flight.",
  },
  {
    q: "How much does the P-Shot cost in Turkey?",
    a: "Turkish clinics commonly price a single P-Shot session between €225 and €450, against roughly £995 to £2,500 in the UK. Our clinic charges a fixed £300 / €300 / $300 all-inclusive. Travel add-ons such as airport transfers and hotel nights are usually quoted separately, so ask what is genuinely included before you compare quotes.",
  },
  {
    q: "Is it safe to have the P-Shot in Turkey?",
    a: "Turkey has a large, established medical tourism sector and the Ministry of Health operates an authorisation system for facilities treating international patients. Safety depends on the specific clinic rather than the country: ask for the facility's health tourism authorisation, the name and registration of the doctor performing the injection, and a written consent document. The clinical risk profile of PRP itself is low, but the risk of poor aftercare rises when you fly home a day later.",
  },
  {
    q: "Can I fly home the day after a P-Shot?",
    a: "Most patients do. The P-Shot involves no general anaesthetic, no surgical incision and no post-procedure immobility, so flying is not usually restricted. Expect possible tenderness, bruising or mild swelling for a few days. Ask your treating doctor to confirm you are clear to fly and to give you written aftercare before you leave the clinic, not after you land.",
  },
  {
    q: "What should I check before booking a P-Shot clinic in Turkey?",
    a: "Check five things: the facility's Ministry of Health authorisation for international patients, the identity and registration of the doctor actually performing the injection, whether the quoted price is for one session or a course, exactly what happens if you have a complication after you return home, and whether the clinic is candid that PRP for erectile dysfunction is investigational rather than proven.",
  },
  {
    q: "What happens if something goes wrong after I get home?",
    a: "This is the genuine weakness of treatment abroad and you should plan for it. Establish before you travel who you contact, on what channel and within what hours, and what the clinic will and will not do remotely. For anything urgent — spreading redness, fever, severe pain or difficulty passing urine — seek care locally straight away rather than waiting for a reply, and tell the clinician what was injected and when.",
  },
  {
    q: "Do I need a visa or specific insurance to travel to Turkey for treatment?",
    a: "Entry requirements depend on your nationality and change over time, so check your own government's current travel advice rather than relying on a clinic. Standard travel insurance often excludes planned medical treatment abroad and any complication arising from it, so read the policy wording before you assume you are covered.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      entry={entry}
      faqs={faqs}
      ctaTitle="Plan Your Trip With Us"
      ctaSubtitle="Ask about dates, timings and what the £300 / €300 / $300 fee covers — on WhatsApp, no obligation."
    >
      <KeyTakeaway>
        <p>
          <strong>Trip length:</strong> two to three days is enough. The P-Shot is a day procedure under
          topical anaesthetic, roughly 45–60 minutes including PRP preparation, with no sedation and no
          overnight stay required.
        </p>
        <p>
          <strong>Cost:</strong> Turkish clinics typically charge €225–€450 per session against £995–£2,500
          in the UK. Our fixed price is <strong>£300 / €300 / $300</strong>.
        </p>
        <p>
          <strong>The thing to get right:</strong> not the flight, but the aftercare plan. Know before you
          book who you contact from home, how fast they respond, and what happens if you need to be seen in
          person.
        </p>
      </KeyTakeaway>

      <p>
        Turkey has become the default destination for men researching the P-Shot, mostly because the price
        gap is large enough to cover a return flight several times over. This guide covers the practical
        side — how long the trip takes, how to vet a clinic, and what changes when your treating doctor is
        three hours away by plane.
      </p>
      <p>
        Before you plan a trip at all, read our guide on{" "}
        <Link href="/guides/does-the-p-shot-work">what the clinical evidence for the P-Shot actually shows</Link>.
        The treatment is investigational, and that should shape your expectations before it shapes your
        travel dates.
      </p>

      <h2 id="trip">What the trip actually looks like</h2>
      <div className="table-wrap">
        <table>
          <caption>Typical two- to three-day P-Shot trip. Exact timings depend on your appointment slot.</caption>
          <thead>
            <tr>
              <th>When</th>
              <th>What happens</th>
              <th>Roughly how long</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Before you fly</td>
              <td>
                Remote consultation, medical history, medication review, confirmation that you are a suitable
                candidate
              </td>
              <td>One conversation, plus any tests your doctor asks for</td>
            </tr>
            <tr>
              <td>Day 1 — arrival</td>
              <td>Arrive, transfer to accommodation, in-person consultation if not done on the day of treatment</td>
              <td>Rest of the day free</td>
            </tr>
            <tr>
              <td>Day 2 — treatment</td>
              <td>
                Blood draw, PRP separation in the centrifuge, topical numbing, injection, written aftercare
              </td>
              <td>Approx. 45–60 minutes in clinic</td>
            </tr>
            <tr>
              <td>Day 2 — after</td>
              <td>Normal activity for most patients; avoid sexual activity and strenuous exercise as advised</td>
              <td>Same day</td>
            </tr>
            <tr>
              <td>Day 3 — home</td>
              <td>Fly home. Confirm your aftercare contact route before you leave the clinic</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The step-by-step clinical detail — blood draw, centrifugation, numbing, injection — is on our{" "}
        <Link href="/how-it-works">how the P-Shot works</Link> page.
      </p>

      <h2 id="vetting">Vetting a clinic: the questions that matter</h2>
      <p>
        Apply these to us as readily as to anyone else. A clinic that answers all seven without hesitation
        is worth considering; one that deflects on any of them is not.
      </p>
      <ol>
        <li>
          <strong>Is the facility authorised to treat international patients?</strong> Turkey&apos;s Ministry
          of Health operates an authorisation system for health tourism providers. Ask to see the clinic&apos;s
          documentation.
        </li>
        <li>
          <strong>Who performs the injection, by name?</strong> Ask for the doctor&apos;s name and their
          registration, and confirm it is the same person on the day.
        </li>
        <li>
          <strong>What PRP system is used?</strong> PRP preparation is not standardised, and the method
          affects what you actually receive.
        </li>
        <li>
          <strong>Is the price for one session or a course?</strong> Get this in writing, along with the cost
          of a repeat. See our <Link href="/guides/p-shot-cost">P-Shot cost guide</Link> for a full
          quote-comparison checklist.
        </li>
        <li>
          <strong>What is the written consent process?</strong> You should receive a consent document that
          names the risks, not a form you sign in a rush at reception.
        </li>
        <li>
          <strong>What is the aftercare route from my home country?</strong> Named contact, channel,
          response time, and what they can and cannot do remotely.
        </li>
        <li>
          <strong>How does the clinic describe the evidence?</strong> An honest clinic will tell you PRP for
          erectile dysfunction is investigational. This is the single most revealing question on the list.
        </li>
      </ol>

      <h2 id="red-flags">Red flags</h2>
      <ul>
        <li>
          <strong>Guaranteed results.</strong> No one can guarantee an outcome from an investigational
          treatment. A guarantee is a sales device.
        </li>
        <li>
          <strong>Precise success rates.</strong> Figures like &ldquo;95% success&rdquo; are not drawn from
          the published trials.
        </li>
        <li>
          <strong>&ldquo;FDA approved&rdquo; claims.</strong> The P-Shot is not FDA approved for erectile
          dysfunction. Device clearance for a centrifuge is not the same thing.
        </li>
        <li>
          <strong>Pressure to pay a deposit before a consultation.</strong> Suitability should be assessed
          before money changes hands.
        </li>
        <li>
          <strong>No named doctor.</strong> If the clinic will not tell you who is treating you, that is the
          answer.
        </li>
        <li>
          <strong>Vague aftercare.</strong> &ldquo;Just message us&rdquo; is not an aftercare plan.
        </li>
        <li>
          <strong>Bundling you into extra procedures on arrival.</strong> Agree the treatment plan before
          you fly.
        </li>
      </ul>

      <h2 id="aftercare">Aftercare once you are home</h2>
      <p>
        The clinical part of the P-Shot is short. The part that genuinely differs when you travel is what
        happens in the weeks afterwards, when your treating doctor is in another country.
      </p>
      <div className="table-wrap">
        <table>
          <caption>What to plan for after you fly home.</caption>
          <thead>
            <tr>
              <th>Situation</th>
              <th>What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mild bruising, swelling or tenderness in the first few days</td>
              <td>Expected. Follow the written aftercare you were given; message the clinic if it worsens rather than settles.</td>
            </tr>
            <tr>
              <td>Spreading redness, fever, severe or increasing pain, difficulty passing urine</td>
              <td>
                Seek medical care locally straight away — do not wait for a reply from abroad. Tell the
                clinician what was injected, where, and on what date.
              </td>
            </tr>
            <tr>
              <td>No improvement after several weeks</td>
              <td>
                Contact the clinic for review, and read{" "}
                <Link href="/blog/how-long-does-the-p-shot-last">how long the P-Shot takes to work and last</Link>{" "}
                to set expectations against the published follow-up data.
              </td>
            </tr>
            <tr>
              <td>You want a repeat session</td>
              <td>Confirm the cost and whether a second trip is required before assuming a package covers it.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Take a copy of your treatment record home with you. If you ever need to see a doctor in your own
        country about it, they will want to know exactly what was injected and when.
      </p>

      <h2 id="honest">The honest trade-off</h2>
      <p>
        Travelling for the P-Shot buys you a large price saving on a procedure that is genuinely short and
        genuinely low-risk. What it costs you is continuity of care: the doctor who treated you cannot see
        you next week. For a 45-minute injection with a mild side-effect profile, many men judge that a
        reasonable trade. It is still a trade, and you should make it deliberately rather than because a
        price page made the decision look obvious.
      </p>
      <p>
        Our full pricing and what the fee covers is on the{" "}
        <Link href="/price">P-Shot price page</Link>, and{" "}
        <Link href="/reviews">patient reviews</Link> cover the experience from other patients&apos;
        perspective.
      </p>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import KeyTakeaway from "@/components/KeyTakeaway";
import { FaqItem } from "@/components/FaqSection";
import { POSTS } from "@/lib/content";
import { articleMetadata } from "@/lib/metadata";

const entry = POSTS.find((p) => p.slug === "how-long-does-the-p-shot-last")!;
export const metadata: Metadata = articleMetadata(entry);

const faqs: FaqItem[] = [
  {
    q: "How long does the P-Shot last?",
    a: "Clinics commonly quote 12 to 18 months, but the published randomised trials generally follow patients for about six months, so the longer figures reflect clinical impression rather than trial data. The most defensible answer is that where men do report benefit, it is usually described over a period of months rather than weeks, and there is no reliable published figure for how long it persists beyond six months.",
  },
  {
    q: "How soon after a P-Shot do results appear?",
    a: "Any effect is gradual rather than immediate, because the proposed mechanism is tissue repair and new blood vessel formation over weeks. Trials that reported benefit measured it at one, three and six months after injection. Men who notice a change typically describe it building over the first one to three months, not in the first few days.",
  },
  {
    q: "Is the P-Shot permanent?",
    a: "No. Nobody claims the P-Shot is permanent, and no published evidence supports a permanent effect. It is offered as a treatment that may be repeated, not a one-off cure.",
  },
  {
    q: "How often do you need to repeat the P-Shot?",
    a: "There is no established protocol. Clinics variously offer a single injection, a short course, or an annual repeat, and the published trials themselves used different regimens. Ask any clinic to state in writing whether their quoted price is per session and what a repeat costs before you book.",
  },
  {
    q: "Why do some men see no effect at all?",
    a: "Erectile dysfunction has several distinct underlying causes — vascular, neurological, hormonal and psychological — and a treatment aimed at improving penile blood flow will not address all of them. Severity matters too, and PRP itself is not a standardised product, so what is injected varies between clinics. In at least one randomised trial, men who received PRP did no better than men who received a placebo injection.",
  },
  {
    q: "Can I make the results last longer?",
    a: "There is no evidence that anything makes PRP itself last longer. What is well established is that the drivers of erectile function — cardiovascular health, blood pressure, blood glucose, smoking, alcohol, weight, sleep, certain medications and mental health — continue to act regardless of what was injected. Addressing those has an evidence base that PRP does not.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      entry={entry}
      faqs={faqs}
      ctaTitle="Ask Us What to Expect"
      ctaSubtitle="A free WhatsApp consultation with our doctor — including the parts other clinics skip."
    >
      <KeyTakeaway>
        <p>
          Clinics — ours included — commonly quote <strong>12 to 18 months</strong>. It is worth knowing
          where that number comes from: the published randomised trials of PRP for erectile dysfunction
          generally follow men for about <strong>six months</strong>. Beyond that point there is little
          trial data either way.
        </p>
        <p>
          The defensible version: where men report benefit, it builds over{" "}
          <strong>one to three months</strong> and is described in months rather than weeks. Any figure past
          six months is clinical impression, not evidence. The P-Shot is not permanent, and a proportion of
          men see no change at all.
        </p>
      </KeyTakeaway>

      <h2 id="timeline">The realistic timeline</h2>
      <p>
        The P-Shot is not a drug that works on the day you take it. The proposed mechanism is that
        concentrated platelets release growth factors that promote tissue repair and new blood vessel
        formation, which is inherently a process of weeks. That shapes the whole timeline.
      </p>
      <div className="table-wrap">
        <table>
          <caption>
            What to expect and when. Timings describe men who do respond; not everyone does.
          </caption>
          <thead>
            <tr>
              <th>Period</th>
              <th>What is happening</th>
              <th>Evidence status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Days 1–7</td>
              <td>
                Injection-site effects settle: mild bruising, swelling or tenderness. No therapeutic effect
                expected yet.
              </td>
              <td>Consistently reported as minor and short-lived across trials</td>
            </tr>
            <tr>
              <td>Weeks 2–4</td>
              <td>Earliest point at which some men report a noticeable change.</td>
              <td>Trials measured outcomes at one month; results differ between studies</td>
            </tr>
            <tr>
              <td>Months 1–3</td>
              <td>The period in which most reported improvement appears, if it appears.</td>
              <td>A standard trial measurement point, with conflicting findings</td>
            </tr>
            <tr>
              <td>Month 6</td>
              <td>The last point most published trials measured.</td>
              <td>
                One 2024 trial found no difference from placebo here; an earlier trial found significantly
                more men reaching a meaningful improvement
              </td>
            </tr>
            <tr>
              <td>Beyond 6 months</td>
              <td>Where the commonly quoted 12–18 month figure sits.</td>
              <td>Largely outside published randomised follow-up. Treat as clinical impression</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The detail of what those trials found — including the ones with negative results — is in our guide
        on <Link href="/guides/does-the-p-shot-work">whether the P-Shot works</Link>.
      </p>

      <h2 id="where-the-number-comes-from">Where the &ldquo;12 to 18 months&rdquo; figure comes from</h2>
      <p>
        It is worth being straight about this. The figure is not fabricated, but nor is it a trial endpoint.
        It reflects what clinics observe in follow-up with their own patients, combined with the reasoning
        that a tissue-repair mechanism should produce a durable rather than a transient change. That is a
        reasonable clinical view. It is not the same as a measured result, and you should not treat it as
        one when you are deciding whether to spend money.
      </p>
      <p>
        If a clinic quotes you a duration with more confidence than that, ask which study it comes from.
      </p>

      <h2 id="what-affects-it">What affects how long any benefit lasts</h2>
      <ul>
        <li>
          <strong>The underlying cause.</strong> PRP is aimed at blood flow and tissue quality. If your
          erectile dysfunction is primarily hormonal, neurological or psychological, improving penile
          vasculature addresses the wrong target and any effect is likely to be smaller and shorter.
        </li>
        <li>
          <strong>Severity and duration.</strong> Longstanding, severe erectile dysfunction with established
          vascular disease is a harder problem than recent, mild dysfunction.
        </li>
        <li>
          <strong>Ongoing vascular health.</strong> Erectile function tracks cardiovascular health closely.
          Uncontrolled blood pressure, diabetes, smoking and weight gain continue to act on the same tissue
          the injection was aimed at.
        </li>
        <li>
          <strong>What was actually injected.</strong> PRP preparation is not standardised — platelet
          concentration, white cell content and activation method vary — so &ldquo;a P-Shot&rdquo; at two
          clinics is not necessarily the same product.
        </li>
        <li>
          <strong>Medication and other conditions.</strong> Several common drug classes affect erectile
          function independently of anything injected.
        </li>
      </ul>

      <h2 id="repeats">Repeat treatments</h2>
      <p>
        There is no consensus protocol for repeating the P-Shot. Some clinics offer a single injection,
        others a course of two or three, others an annual top-up; published trials have used different
        regimens too. That means the practical question is commercial as much as clinical:
      </p>
      <ul>
        <li>Is the price you were quoted for one session or for a course?</li>
        <li>What does a repeat session cost, and is it discounted?</li>
        <li>If you travelled for treatment, does a repeat mean another trip? Our{" "}
          <Link href="/guides/p-shot-turkey">Turkey patient guide</Link> covers what a trip involves.</li>
        <li>What would make your doctor advise against repeating it?</li>
      </ul>
      <p>
        Full pricing detail, including how to compare quotes like for like, is in the{" "}
        <Link href="/guides/p-shot-cost">P-Shot cost guide</Link>.
      </p>

      <h2 id="bottom-line">The bottom line</h2>
      <p>
        If you want a single sentence: expect any benefit to build over one to three months, expect it to be
        measured in months rather than years, expect the possibility of no benefit at all, and treat
        duration claims beyond six months as an estimate rather than a finding. Set that expectation before
        you pay, not after.
      </p>
      <p>
        For side effects and the recovery period specifically, see our{" "}
        <Link href="/side-effects">P-Shot side effects and safety page</Link>.
      </p>
    </ArticleLayout>
  );
}

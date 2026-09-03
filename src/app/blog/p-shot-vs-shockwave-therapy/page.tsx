import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import KeyTakeaway from "@/components/KeyTakeaway";
import { FaqItem } from "@/components/FaqSection";
import { POSTS } from "@/lib/content";
import { articleMetadata } from "@/lib/metadata";

const entry = POSTS.find((p) => p.slug === "p-shot-vs-shockwave-therapy")!;
export const metadata: Metadata = articleMetadata(entry);

const faqs: FaqItem[] = [
  {
    q: "Which is better, the P-Shot or shockwave therapy?",
    a: "Neither is established as better, because both are classed as investigational for erectile dysfunction. On the balance of published evidence, low-intensity shockwave therapy has been studied in more trials and has more consistently outperformed sham treatment, while randomised results for PRP are contradictory. Shockwave is non-invasive but needs a course of sessions; the P-Shot is a single injection appointment. Neither replaces having the cause of your erectile dysfunction assessed properly.",
  },
  {
    q: "How is shockwave therapy different from the P-Shot?",
    a: "Shockwave therapy uses low-intensity acoustic pulses applied to the outside of the penis to stimulate new blood vessel formation. The P-Shot injects platelet-rich plasma prepared from your own blood into penile tissue so that platelet growth factors act locally. One is external and mechanical, the other is injected and biological, but both aim at the same target: improving blood flow.",
  },
  {
    q: "How many sessions does each treatment need?",
    a: "Shockwave therapy is typically delivered as a course, commonly six or more sessions over several weeks, which is a significant practical commitment and matters a great deal if you are travelling. The P-Shot is usually a single appointment, though some clinics recommend repeating it. Neither has a universally agreed protocol.",
  },
  {
    q: "Can you have shockwave therapy and the P-Shot together?",
    a: "Some clinics offer them in combination, and the combination has been formally studied — a phase 2 trial presented at the AUA in 2024 tested PRP plus shockwave against placebo. Reporting on that work described the combination as safe but its efficacy as unclear. Combining two investigational treatments doubles the cost without doubling the evidence.",
  },
  {
    q: "Which is cheaper, the P-Shot or shockwave therapy?",
    a: "It depends on the session count more than the per-session price. Shockwave is usually sold as a course, so a lower per-session fee can still produce a higher total. Compare the full course price against the full P-Shot price, and check whether either quote assumes repeat treatment. Our cost guide sets out how to compare quotes like for like.",
  },
  {
    q: "Does either treatment have downtime?",
    a: "Very little in both cases. Shockwave therapy is non-invasive and normally has no recovery period. The P-Shot involves an injection under topical anaesthetic and may leave short-lived bruising, swelling or tenderness for a few days. Neither requires general anaesthetic or time off work for most patients.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      entry={entry}
      faqs={faqs}
      ctaTitle="Not Sure Which Route Fits You?"
      ctaSubtitle="Ask our doctor on WhatsApp — including whether either is right for your situation."
    >
      <KeyTakeaway>
        <p>
          Both are <strong>investigational</strong> treatments for erectile dysfunction, and neither is
          established as better. Of the two, <strong>low-intensity shockwave therapy has been studied more
          and more consistently beaten sham treatment</strong>; randomised results for PRP are
          contradictory.
        </p>
        <p>
          Practically: shockwave is non-invasive but needs a <strong>course of sessions</strong>, which is
          awkward if you are travelling. The P-Shot is a <strong>single injection appointment</strong> with a
          few days of possible tenderness. Neither is a substitute for having the cause of your erectile
          dysfunction assessed.
        </p>
      </KeyTakeaway>

      <p>
        These two sit in the same category — regenerative treatments aimed at improving penile blood flow
        rather than producing an erection on demand — and men researching one almost always end up comparing
        it with the other. Most comparison pages online are written by a clinic that offers only one of
        them. Here is the version with the awkward parts left in.
      </p>

      <h2 id="side-by-side">Side by side</h2>
      <div className="table-wrap">
        <table>
          <caption>P-Shot (PRP) and low-intensity shockwave therapy compared.</caption>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>P-Shot (PRP injection)</th>
              <th>Low-intensity shockwave therapy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">What it is</th>
              <td>Platelet-rich plasma from your own blood, injected into penile tissue</td>
              <td>Low-intensity acoustic pulses applied externally with a handheld device</td>
            </tr>
            <tr>
              <th scope="row">Proposed mechanism</th>
              <td>Platelet growth factors promote tissue repair and new blood vessel formation</td>
              <td>Mechanical stimulus promotes new blood vessel formation in existing tissue</td>
            </tr>
            <tr>
              <th scope="row">Invasiveness</th>
              <td>Injection under topical anaesthetic</td>
              <td>Non-invasive, no anaesthetic</td>
            </tr>
            <tr>
              <th scope="row">Typical schedule</th>
              <td>Single appointment, approx. 45–60 minutes; repeats vary by clinic</td>
              <td>A course, commonly six or more sessions over several weeks</td>
            </tr>
            <tr>
              <th scope="row">Recovery</th>
              <td>Possible bruising, swelling or tenderness for a few days</td>
              <td>Usually none</td>
            </tr>
            <tr>
              <th scope="row">Evidence position</th>
              <td>
                Few randomised trials, contradictory results; a 2024 meta-analysis favoured PRP over placebo
              </td>
              <td>
                More trial data and more consistent benefit over sham, but still classed as investigational
              </td>
            </tr>
            <tr>
              <th scope="row">Guideline status</th>
              <td>Investigational</td>
              <td>
                Investigational; the AUA advises restricting it to clinical trials or research protocols
              </td>
            </tr>
            <tr>
              <th scope="row">Practicality if travelling</th>
              <td>Works well — one appointment, fly home the next day</td>
              <td>Poor — a multi-week course is hard to complete abroad</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="evidence">What the evidence says about each</h2>
      <p>
        The fair summary is that shockwave therapy is the better-evidenced of the two, and that this is a
        comparison between two treatments neither of which is proven. Results presented at the American
        Urological Association annual meeting in 2023 reported shockwave therapy as an effective method for
        erectile dysfunction while finding PRP injections no better than placebo. At the same time, the AUA
        classifies low-intensity shockwave therapy as investigational and recommends restricting its use to
        clinical trials or research protocols pending stronger evidence — so &ldquo;better evidenced&rdquo;
        is a relative statement, not an endorsement.
      </p>
      <p>
        For PRP specifically, the randomised trials genuinely disagree with each other. We go through them
        individually — including the negative ones — in{" "}
        <Link href="/guides/does-the-p-shot-work">does the P-Shot work?</Link>
      </p>

      <h2 id="choosing">How to choose between them</h2>
      <div className="table-wrap">
        <table>
          <caption>Which option tends to suit which circumstances.</caption>
          <thead>
            <tr>
              <th>If this describes you</th>
              <th>The more practical option</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>You are travelling abroad for treatment</td>
              <td>P-Shot</td>
              <td>One appointment rather than a multi-week course of sessions</td>
            </tr>
            <tr>
              <td>You want the better-evidenced of the two and can attend locally</td>
              <td>Shockwave therapy</td>
              <td>More trial data and more consistent results against sham treatment</td>
            </tr>
            <tr>
              <td>You strongly prefer to avoid needles</td>
              <td>Shockwave therapy</td>
              <td>Entirely non-invasive, no injection and no anaesthetic</td>
            </tr>
            <tr>
              <td>You cannot commit to weekly appointments</td>
              <td>P-Shot</td>
              <td>Single visit; a course is difficult to complete around work or travel</td>
            </tr>
            <tr>
              <td>You have not yet had your erectile dysfunction assessed by a doctor</td>
              <td>Neither, yet</td>
              <td>
                Erectile dysfunction can be an early sign of cardiovascular disease or other treatable
                conditions. Get the cause identified first
              </td>
            </tr>
            <tr>
              <td>You have not tried established first-line treatment</td>
              <td>Neither, yet</td>
              <td>
                PDE5 inhibitors have a far stronger evidence base and cost far less — see{" "}
                <Link href="/blog/p-shot-vs-viagra">P-Shot vs Viagra</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="combining">What about combining them?</h2>
      <p>
        Some clinics sell a combined protocol. The combination has been studied formally: a phase 2 trial
        presented at the AUA in 2024 randomised men to PRP plus shockwave therapy or to placebo with sham
        shockwave. Reporting on that work described the combination as safe but its efficacy as unclear. In
        other words, combining them is not currently a way to buy a better outcome — it is a way to pay for
        two investigational treatments instead of one.
      </p>

      <h2 id="cost">Cost comparison</h2>
      <p>
        Compare the <em>full course</em>, not the per-session headline. Shockwave is usually sold as a
        package of six or more sessions, so a modest per-session fee can add up to more than a single P-Shot.
        In the UK, P-Shot list prices generally run from about £995 to £2,500 for one session; our clinic
        charges a fixed £300 / €300 / $300. The{" "}
        <Link href="/guides/p-shot-cost">P-Shot cost guide</Link> has the full breakdown by market and a
        checklist for comparing quotes like for like.
      </p>

      <h2 id="bottom-line">The bottom line</h2>
      <p>
        If you can attend a course locally and want the option with more supporting data, shockwave therapy
        is the more defensible choice. If you value a single appointment — particularly if you are
        travelling — the P-Shot is the more practical one. Neither is proven, both are low-risk, and both
        sit behind the same prerequisite: get the cause of your erectile dysfunction assessed by a doctor
        first.
      </p>
    </ArticleLayout>
  );
}

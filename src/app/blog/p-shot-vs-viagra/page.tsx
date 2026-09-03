import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import KeyTakeaway from "@/components/KeyTakeaway";
import { FaqItem } from "@/components/FaqSection";
import { POSTS } from "@/lib/content";
import { articleMetadata } from "@/lib/metadata";

const entry = POSTS.find((p) => p.slug === "p-shot-vs-viagra")!;
export const metadata: Metadata = articleMetadata(entry);

const faqs: FaqItem[] = [
  {
    q: "Is the P-Shot better than Viagra?",
    a: "No, and they are not really competing options. Viagra and other PDE5 inhibitors are licensed medicines with a large, consistent evidence base and are first-line treatment for erectile dysfunction in clinical guidelines. The P-Shot is an investigational injection whose randomised trial results are contradictory. If you have not had PDE5 inhibitors properly assessed and trialled by a doctor, that is the step to take before paying for PRP.",
  },
  {
    q: "What is the difference between the P-Shot and Viagra?",
    a: "Viagra is a tablet taken before sex that works for a few hours by relaxing blood vessels so blood flow increases in response to arousal. It does not change the underlying tissue. The P-Shot is a one-off injection of platelet-rich plasma intended to improve the tissue itself over subsequent weeks. One is on-demand and pharmacological; the other is aimed at the underlying problem but unproven.",
  },
  {
    q: "Can the P-Shot replace Viagra?",
    a: "There is no reliable evidence that it does. Some men who respond report needing less medication, but that is an anecdotal pattern rather than a trial finding, and randomised trials have not established PRP as a replacement for PDE5 inhibitors. Do not stop any prescribed medication because of a P-Shot without speaking to the doctor who prescribed it.",
  },
  {
    q: "Can you take Viagra after having a P-Shot?",
    a: "Usually yes, and many men do, but this is a question for the doctor who prescribes your medication and the doctor who performs the injection. Tell each about the other. Follow the specific post-procedure instructions you are given about timing before resuming sexual activity.",
  },
  {
    q: "Which works out cheaper?",
    a: "Generic sildenafil is inexpensive per dose in most markets, and even with regular use the annual cost is usually far below a single P-Shot at UK list prices of roughly £995 to £2,500. The arithmetic changes if you find tablets ineffective or cannot tolerate their side effects, which is the situation in which men most often consider regenerative options.",
  },
  {
    q: "Why would anyone choose a P-Shot over tablets?",
    a: "The usual reasons are that PDE5 inhibitors did not work well enough, caused side effects such as headache, flushing or nasal congestion, are contraindicated — most importantly alongside nitrates — or that the man wants something aimed at the underlying tissue rather than an on-demand effect. Those are legitimate reasons to explore other options, but they do not make PRP proven.",
  },
  {
    q: "Are there people who should not take Viagra?",
    a: "Yes. PDE5 inhibitors are contraindicated with nitrate medication and require caution in several cardiovascular conditions, among others. They are prescription medicines for good reason. Never take them without a prescription or from an unverified online source, and tell your prescriber about every medication you take.",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      entry={entry}
      faqs={faqs}
      ctaTitle="Talk to a Doctor First"
      ctaSubtitle="Free WhatsApp consultation — including whether the P-Shot is the right step for you at all."
    >
      <KeyTakeaway>
        <p>
          These are not two versions of the same thing. <strong>Viagra and other PDE5 inhibitors are
          licensed medicines with a large, consistent evidence base</strong> and sit as first-line treatment
          in clinical guidelines. <strong>The P-Shot is investigational</strong>, with contradictory
          randomised results.
        </p>
        <p>
          Tablets act on demand for a few hours and do not change the underlying tissue. The P-Shot aims at
          the tissue but is unproven. If you have not properly trialled PDE5 inhibitors with a doctor, that
          is the step before paying for PRP — not the fallback after it.
        </p>
      </KeyTakeaway>

      <p>
        Men researching the P-Shot almost always arrive having already thought about tablets, and the
        comparison is usually framed as a choice. It is more useful to see them as different tools that sit
        at different points in erectile dysfunction care.
      </p>

      <h2 id="side-by-side">Side by side</h2>
      <div className="table-wrap">
        <table>
          <caption>
            P-Shot compared with PDE5 inhibitors (sildenafil/Viagra, tadalafil/Cialis and others).
          </caption>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>P-Shot (PRP injection)</th>
              <th>PDE5 inhibitors (Viagra, Cialis and others)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">What it is</th>
              <td>Injection of platelet-rich plasma from your own blood</td>
              <td>Prescription tablet taken before sexual activity, or daily in some regimens</td>
            </tr>
            <tr>
              <th scope="row">How it acts</th>
              <td>
                Intended to promote tissue repair and new blood vessel formation over subsequent weeks
              </td>
              <td>
                Relaxes blood vessels so blood flow increases in response to arousal, for a few hours per
                dose
              </td>
            </tr>
            <tr>
              <th scope="row">Onset</th>
              <td>Gradual, over weeks to months, if at all</td>
              <td>Typically within an hour of the dose</td>
            </tr>
            <tr>
              <th scope="row">Regulatory status</th>
              <td>Not approved for erectile dysfunction</td>
              <td>Licensed medicines with regulatory approval for erectile dysfunction</td>
            </tr>
            <tr>
              <th scope="row">Evidence base</th>
              <td>A handful of small randomised trials with contradictory results</td>
              <td>Large, consistent and long-established; first-line in clinical guidelines</td>
            </tr>
            <tr>
              <th scope="row">Typical cost</th>
              <td>
                Roughly £995–£2,500 per session at UK list prices; £300 / €300 / $300 at our clinic
              </td>
              <td>
                Generic sildenafil is inexpensive per dose in most markets
              </td>
            </tr>
            <tr>
              <th scope="row">Main drawbacks</th>
              <td>Unproven; may produce no benefit; short-lived injection-site effects</td>
              <td>
                On-demand rather than curative; side effects such as headache, flushing and nasal
                congestion; contraindicated with nitrates
              </td>
            </tr>
            <tr>
              <th scope="row">Where it sits in care</th>
              <td>Optional, investigational, after standard options</td>
              <td>First-line, after assessment of the underlying cause</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="order">The order that makes sense</h2>
      <ol>
        <li>
          <strong>Get assessed.</strong> Erectile dysfunction is frequently an early marker of
          cardiovascular disease and can also reflect diabetes, low testosterone, medication side effects or
          mental health. Buying an injection without knowing the cause is the wrong first move — and skips
          a genuine health check.
        </li>
        <li>
          <strong>Address the modifiable contributors.</strong> Blood pressure, blood glucose, smoking,
          alcohol, weight, sleep, relationship and mental health, and reviewable medications. This has an
          evidence base nothing on this page can match.
        </li>
        <li>
          <strong>Trial first-line treatment properly.</strong> &ldquo;Viagra did not work&rdquo; often means
          an inadequate dose, taken on a full stomach, without arousal, or tried once. A proper trial with a
          prescriber is a different thing.
        </li>
        <li>
          <strong>Then consider regenerative options.</strong> If tablets are ineffective, not tolerated or
          contraindicated, that is the point at which the P-Shot becomes a reasonable thing to weigh — with
          the evidence in front of you. See{" "}
          <Link href="/guides/does-the-p-shot-work">does the P-Shot work?</Link> and{" "}
          <Link href="/blog/p-shot-vs-shockwave-therapy">P-Shot vs shockwave therapy</Link>.
        </li>
      </ol>

      <h2 id="together">Can they be used together?</h2>
      <p>
        They are not mutually exclusive, and many men who have a P-Shot continue with prescribed medication.
        The important part is disclosure in both directions: tell the clinic performing the injection what
        you take, and tell your prescriber what was injected and when. Do not stop a prescribed medication
        because of a P-Shot without speaking to the doctor who prescribed it, and follow the specific
        aftercare guidance you are given about when to resume sexual activity.
      </p>

      <h2 id="cost">The cost comparison, honestly</h2>
      <p>
        For most men, tablets are the cheaper option by a wide margin, and that gap does not close. Generic
        sildenafil costs a small amount per dose in most markets, while a single P-Shot at UK list prices
        runs to four figures. Our fixed £300 / €300 / $300 price narrows the gap considerably but does not
        reverse it. The <Link href="/guides/p-shot-cost">P-Shot cost guide</Link> sets out prices by market
        and what should be included in a quote.
      </p>
      <p>
        The financial comparison only really becomes interesting when tablets are not an option for you.
        That is the honest framing, and it is the one we would rather you booked on.
      </p>

      <h2 id="bottom-line">The bottom line</h2>
      <p>
        Viagra is proven; the P-Shot is not. That is not a reason to dismiss the P-Shot outright — it is
        low-risk, biologically plausible, and some men report a worthwhile difference — but it is a reason to
        take the established route first, with a doctor, and to treat PRP as something you try with open
        eyes rather than something you buy instead.
      </p>
      <p>
        Known side effects and who should avoid the treatment are on our{" "}
        <Link href="/side-effects">P-Shot safety page</Link>.
      </p>
    </ArticleLayout>
  );
}

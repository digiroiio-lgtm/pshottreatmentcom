import Link from "next/link";
import { treatmentCards } from "@/content/treatments";
import { CLINIC, DOCTOR } from "@/lib/clinic";
import { AssessmentButton, ConfidentialNote, WhatsAppCTA } from "./cta";
import EvidenceChip from "./EvidenceChip";
import GoogleRatingBadge from "./GoogleRatingBadge";

const heroTreatments: [string, string][] = [
  ["/p-shot", "P-Shot / PRP"],
  ["/shockwave-therapy-ed", "Shockwave Therapy"],
  ["/stem-cell-therapy-erectile-dysfunction", "Stem Cell Therapy"],
  ["/exosome-therapy-erectile-dysfunction", "Exosome Therapy"],
  ["/penile-rehabilitation", "Penile Rehabilitation"],
];

export function Hero({ answer }: { answer: { q: string; a: string } }) {
  const initials = DOCTOR.name.replace("Dr. ", "").split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-teal-800 mb-3">{CLINIC.name} · Physician-led urology</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">Erectile Dysfunction &amp; Penile Rehabilitation in Antalya</h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Specialist urological assessment and personalised treatment options for men experiencing erectile dysfunction, reduced erection quality and penile vascular problems.
          </p>
          <ul className="flex flex-wrap gap-2 mb-7" aria-label="Treatments">
            {heroTreatments.map(([href, label]) => (
              <li key={href}><Link href={href} className="inline-block rounded-full border border-teal-200 bg-white px-4 py-1.5 text-sm font-semibold text-teal-900 hover:border-teal-600">{label}</Link></li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <AssessmentButton label="CHECK MY SUITABILITY" placement="hero" className="uppercase tracking-wide" />
            <WhatsAppCTA label="WHATSAPP THE CLINIC" placement="hero" variant="outline" className="uppercase tracking-wide" />
          </div>
          <ConfidentialNote className="text-slate-700" />
          <p className="text-sm text-slate-700 mt-2 mb-3">International patients accepted.</p>
          <GoogleRatingBadge />
        </div>
        <aside aria-label="Your physician" className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-4 mb-4">
            <div aria-hidden="true" className="w-16 h-16 rounded-2xl bg-teal-900 text-white flex items-center justify-center text-2xl font-bold">{initials}</div>
            <div>
              <p className="font-bold text-slate-950">{DOCTOR.name}</p>
              <p className="text-sm text-slate-700">{DOCTOR.title}</p>
              <p className="text-sm text-slate-600">{CLINIC.city}, {CLINIC.country}</p>
            </div>
          </div>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li>• Male sexual health &amp; penile rehabilitation</li>
            <li>• Assessment first, treatment second</li>
            <li>• Honest evidence labels on every treatment</li>
          </ul>
          <Link href={DOCTOR.path} className="inline-block mt-4 text-sm font-semibold text-teal-800 underline underline-offset-2">Meet the doctor</Link>
        </aside>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div data-direct-answer className="rounded-2xl bg-white border border-slate-200 p-5">
          <p className="text-sm font-bold text-teal-800 mb-1">{answer.q}</p>
          <p className="text-slate-800 leading-relaxed">{answer.a}</p>
        </div>
      </div>
    </section>
  );
}

const problems: [string, string, string][] = [
  ["Difficulty getting an erection", "/erectile-dysfunction#difficulty-getting-an-erection", "Blood flow, nerves, hormones or anxiety"],
  ["Difficulty maintaining an erection", "/venous-leak", "When an erection starts and then fades"],
  ["Reduced erection hardness", "/vasculogenic-erectile-dysfunction", "A common blood-flow pattern"],
  ["ED despite Viagra / Cialis", "/ed-treatment-options", "When tablets are not enough"],
  ["Venous leak", "/venous-leak", "Symptoms, diagnosis and options"],
  ["Reduced penile sensitivity", "/erectile-dysfunction#reduced-sensitivity", "Possible nerve involvement"],
  ["ED after prostate surgery", "/erectile-dysfunction-after-prostate-surgery", "Recovery and rehabilitation"],
  ["Diabetes-related ED", "/diabetes-erectile-dysfunction", "Blood vessels, nerves and blood sugar"],
  ["Age-related ED", "/erectile-dysfunction-over-50", "Not something to simply accept"],
  ["Sudden-onset ED", "/erectile-dysfunction#sudden-onset", "Why a prompt medical check matters"],
];

export function ProblemFinder() {
  return (
    <section aria-labelledby="problem-heading" className="max-w-6xl mx-auto px-4 py-14">
      <h2 id="problem-heading" className="text-3xl font-extrabold text-slate-950 mb-2">What type of erection problem are you experiencing?</h2>
      <p className="text-slate-700 mb-7">Choose the one closest to your situation. You will see what may be behind it and what happens next.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {problems.map(([title, href, text]) => (
          <Link key={title} href={href} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-teal-600 hover:shadow-sm">
            <h3 className="font-bold text-slate-950 text-sm mb-1">{title}</h3>
            <p className="text-xs text-slate-600">{text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

const causes = ["Vasculogenic ED", "Arterial insufficiency", "Cavernosal insufficiency / venous leak", "Neurogenic ED", "Hormonal ED", "Drug-related ED", "Post-surgical / iatrogenic ED", "Psychogenic ED"];

export function CauseMatters() {
  return (
    <section aria-labelledby="cause-heading" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 id="cause-heading" className="text-3xl font-extrabold text-slate-950 mb-3">Not all erectile dysfunction has the same cause</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ED can come from blood flow, nerves, hormones, medicines, surgery or psychological factors, and many men have more than one. Distinguishing organic from psychogenic ED, and checking blood flow with a penile Doppler scan when it is useful, helps the doctor choose which options may be relevant.
          </p>
          <p className="text-slate-700 mb-6">Your treatment depends on the cause.</p>
          <AssessmentButton label="Find Out What May Be Causing Your ED" placement="causes" />
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {causes.map((cause) => (
            <li key={cause} className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900">{cause}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TreatmentFinder() {
  return (
    <section aria-labelledby="finder-heading" className="max-w-6xl mx-auto px-4 py-14">
      <h2 id="finder-heading" className="text-3xl font-extrabold text-slate-950 mb-2">Which ED Treatment May Be Suitable?</h2>
      <p className="text-slate-700 mb-8 max-w-3xl">Suitability depends on medical assessment. No treatment works for every patient, and the most appropriate treatment depends on the underlying cause of ED.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {treatmentCards.map((card) => (
          <article key={card.id} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-lg font-bold text-slate-950"><Link href={card.path} className="hover:text-teal-800">{card.name}</Link></h3>
              <EvidenceChip label={card.evidence} small />
            </div>
            <dl className="space-y-3 text-sm flex-1">
              <div><dt className="font-semibold text-slate-950">Best suited for</dt><dd className="text-slate-700">{card.bestFor}</dd></div>
              <div><dt className="font-semibold text-slate-950">How it works</dt><dd className="text-slate-700">{card.howItWorks}</dd></div>
              <div><dt className="font-semibold text-slate-950">Typical procedure format</dt><dd className="text-slate-700">{card.format}</dd></div>
              <div><dt className="font-semibold text-slate-950">Assessment required?</dt><dd className="text-slate-700">{card.assessment}</dd></div>
            </dl>
            <p className="text-xs text-slate-600 mt-3">{card.evidenceNote}</p>
            <div className="mt-4"><AssessmentButton label={card.cta} treatment={card.id} placement={`finder-${card.id}`} className="w-full" /></div>
          </article>
        ))}
        <article className="rounded-2xl border border-dashed border-teal-400 bg-teal-50 p-6 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-slate-950 mb-2">Not sure which treatment?</h3>
          <p className="text-sm text-slate-700 mb-4">You do not need to decide. Send your case and the clinic can advise which options may be relevant.</p>
          <Link href="/ed-treatment-options" className="text-sm font-semibold text-teal-800 underline underline-offset-2 mb-4">Compare all ED treatments</Link>
          <AssessmentButton label="Check Treatment Options" placement="finder-not-sure" />
        </article>
      </div>
    </section>
  );
}

const funnel = [
  ["Identify your ED problem", "Choose the pattern closest to your situation."],
  ["Understand the likely cause", "Blood flow, nerves, hormones, medicines or psychological factors."],
  ["See possible treatment categories", "Established, emerging and experimental options, honestly labelled."],
  ["Submit your medical information", "A short, private form, or WhatsApp."],
  ["The clinic assesses suitability", "The urologist decides after reviewing your case."],
  ["A patient coordinator contacts you", "To explain next steps and plan a consultation."],
];

export function HowItWorksFunnel() {
  return (
    <section aria-labelledby="funnel-heading" className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 id="funnel-heading" className="text-3xl font-extrabold mb-8">What happens when you send your case</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {funnel.map(([title, text], i) => (
            <li key={title} className="rounded-xl bg-white/10 p-5">
              <span className="text-teal-300 font-bold text-sm">Step {i + 1}</span>
              <h3 className="font-bold mb-1">{title}</h3>
              <p className="text-sm text-slate-200">{text}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col sm:flex-row gap-3">
          <AssessmentButton label="Request a Confidential ED Assessment" placement="funnel" variant="onDark" />
          <WhatsAppCTA placement="funnel" variant="onDark" />
        </div>
      </div>
    </section>
  );
}

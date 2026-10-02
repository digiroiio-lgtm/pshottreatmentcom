"use client";

import Link from "next/link";
import { useState } from "react";
import type { TreatmentId } from "@/content/types";

const patterns = [
  { id: "cannot-get", label: "Hard to get an erection", interest: "not-sure", text: "A cause-based assessment of blood flow, nerves and hormones, optimising PDE5 tablets and, if a blood-flow pattern is found, discussing shockwave therapy." },
  { id: "cannot-maintain", label: "My erection fades", interest: "not-sure", text: "A Doppler assessment to look for venous leak, optimising tablets, vacuum devices or injections, and regenerative options only after assessment." },
  { id: "not-hard-enough", label: "Less firm than before", interest: "shockwave", text: "A blood-flow (vasculogenic) assessment, optimising tablets and, in selected men, discussing shockwave therapy." },
  { id: "medication-stopped", label: "Tablets no longer work", interest: "not-sure", text: "A check of dose, timing and contraindications, a Doppler assessment, injections, and shockwave or regenerative options in selected cases." },
  { id: "after-prostate-surgery", label: "ED after prostate surgery", interest: "not-sure", text: "A penile rehabilitation plan, which may include tablets, vacuum devices, injections and, if needed, surgical options." },
  { id: "other", label: "I am not sure", interest: "not-sure", text: "A full specialist assessment first, so the cause is identified before any treatment is discussed." },
];

const tried = [
  { id: "nothing", label: "Nothing yet", text: "Lifestyle changes and tablets are usually discussed first." },
  { id: "tablets", label: "Tablets (Viagra, Cialis)", text: "The doctor will check how they were used before concluding they have not worked." },
  { id: "devices", label: "Injections or a vacuum device", text: "The doctor will review what helped and what did not." },
  { id: "other", label: "Another treatment", text: "Send details of what you tried so the doctor can take it into account." },
];

export default function CandidateChecker({ treatment = "not-sure", heading = "Who may be suitable? A quick self-check" }: { treatment?: TreatmentId; heading?: string }) {
  const [pattern, setPattern] = useState("");
  const [past, setPast] = useState("");
  const selected = patterns.find((p) => p.id === pattern);
  const pastText = tried.find((t) => t.id === past)?.text;
  const interest = treatment !== "not-sure" ? treatment : selected?.interest ?? "not-sure";
  const href = `/erectile-dysfunction-assessment?interest=${interest}${selected ? `&problem=${selected.id}` : ""}`;

  return (
    <section aria-labelledby="checker-heading" data-checker className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8">
      <h2 id="checker-heading" className="text-2xl font-bold text-slate-950 mb-2">{heading}</h2>
      <p className="text-slate-700 mb-5">Two quick questions to show what the doctor may discuss with you. This is not a diagnosis.</p>

      <fieldset className="mb-5">
        <legend className="font-semibold text-slate-950 mb-2">What best describes your ED?</legend>
        <div className="flex flex-wrap gap-2">
          {patterns.map((p) => (
            <button key={p.id} type="button" aria-pressed={pattern === p.id} onClick={() => setPattern(p.id)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${pattern === p.id ? "bg-teal-700 text-white border-teal-700" : "bg-white border-slate-300 hover:border-teal-600"}`}>{p.label}</button>
          ))}
        </div>
      </fieldset>
      <fieldset className="mb-5">
        <legend className="font-semibold text-slate-950 mb-2">What have you tried?</legend>
        <div className="flex flex-wrap gap-2">
          {tried.map((t) => (
            <button key={t.id} type="button" aria-pressed={past === t.id} onClick={() => setPast(t.id)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${past === t.id ? "bg-teal-700 text-white border-teal-700" : "bg-white border-slate-300 hover:border-teal-600"}`}>{t.label}</button>
          ))}
        </div>
      </fieldset>

      {selected && (
        <div role="status" className="rounded-xl bg-white border border-slate-200 p-5 mb-5">
          <p className="font-semibold text-slate-950 mb-1">The doctor may discuss</p>
          <p className="text-slate-700">{selected.text} {pastText}</p>
          <p className="text-xs text-slate-600 mt-2">Suitability and expected benefit vary between patients and are decided after medical assessment.</p>
        </div>
      )}
      <Link href={href} data-cta="Check If You're Suitable" data-placement="checker" data-treatment={interest} className="inline-flex rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3">
        Send my case with these answers
      </Link>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  type AssessmentPayload,
  contactOptions,
  durationOptions,
  helpedOptions,
  historyOptions,
  interestOptions,
  problemOptions,
  reportOptions,
  travelOptions,
  usingOptions,
  type Option,
} from "@/content/assessment";
import { getAttribution, leadEventFor, track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/whatsapp";
import type { TreatmentId } from "@/content/types";

type State = {
  age: string;
  problem: string;
  duration: string;
  using: string[];
  helped: string;
  history: string[];
  historyOther: string;
  interest: string;
  country: string;
  travel: string;
  contactPref: string;
  reports: string[];
  name: string;
  whatsapp: string;
  email: string;
  consent: boolean;
  website: string;
};

const initial: State = {
  age: "", problem: "", duration: "", using: [], helped: "", history: [], historyOther: "", interest: "",
  country: "", travel: "", contactPref: "", reports: [], name: "", whatsapp: "", email: "", consent: false, website: "",
};

const STEPS = [
  { title: "About you", hint: "Your age and the main problem. Private and confidential." },
  { title: "Your history with ED", hint: "How long it has lasted and what you have tried." },
  { title: "Medical history", hint: "Select anything that applies. This helps the clinic review your case." },
  { title: "What would you like to ask about?", hint: "You do not need to know. Choose \"Not sure\" and the doctor can advise." },
  { title: "Where are you, and how should we reach you?", hint: "So a coordinator can plan next steps." },
  { title: "Where should we send the reply?", hint: "Your details are used only to respond to your enquiry." },
];

const inputClass = "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600";

function RadioGroup({ legend, name, options, value, onChange }: { legend: string; name: string; options: Option[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset className="mb-6">
      <legend className="font-semibold text-slate-950 mb-3">{legend}</legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label key={option.value} className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer ${value === option.value ? "border-teal-700 bg-teal-50" : "border-slate-300 hover:border-teal-500"}`}>
            <input type="radio" name={name} value={option.value} checked={value === option.value} onChange={() => onChange(option.value)} className="w-4 h-4 accent-teal-700" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckGroup({ legend, options, values, onChange, exclusive }: { legend: string; options: Option[]; values: string[]; onChange: (v: string[]) => void; exclusive?: string }) {
  const toggle = (value: string) => {
    if (values.includes(value)) return onChange(values.filter((v) => v !== value));
    if (exclusive && value === exclusive) return onChange([value]);
    onChange([...values.filter((v) => v !== exclusive), value]);
  };
  return (
    <fieldset className="mb-6">
      <legend className="font-semibold text-slate-950 mb-3">{legend}</legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label key={option.value} className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer ${values.includes(option.value) ? "border-teal-700 bg-teal-50" : "border-slate-300 hover:border-teal-500"}`}>
            <input type="checkbox" checked={values.includes(option.value)} onChange={() => toggle(option.value)} className="w-4 h-4 accent-teal-700" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function AssessmentForm() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [state, setState] = useState<State>(initial);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const started = useRef(false);
  const startedAt = useRef(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interest = params.get("interest");
    const problem = params.get("problem");
    setState((s) => ({
      ...s,
      interest: interest && interestOptions.some((o) => o.value === interest) ? interest : s.interest,
      problem: problem && problemOptions.some((o) => o.value === problem) ? problem : s.problem,
    }));
  }, [params]);

  const set = <K extends keyof State>(key: K, value: State[K]) => {
    if (!started.current) {
      started.current = true;
      startedAt.current = Date.now();
      track("assessment_start", { treatment_interest: state.interest || params.get("interest") || "not-sure" });
    }
    setState((s) => ({ ...s, [key]: value }));
    setError("");
  };

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  const validateStep = (): string => {
    if (step === 0) {
      const age = Number(state.age);
      if (!age || age < 18 || age > 100) return "Please enter your age (18 or over).";
      if (!state.problem) return "Please choose the main problem.";
    }
    if (step === 1) {
      if (!state.duration) return "Please choose how long you have had the problem.";
      if (!state.using.length) return "Please select what you currently use, or \"No treatment\".";
    }
    if (step === 2 && !state.history.length) return "Please select at least one option, or \"None\".";
    if (step === 3 && !state.interest) return "Please choose an option. \"Not sure\" is fine.";
    if (step === 4) {
      if (!state.country.trim()) return "Please tell us which country you live in.";
      if (!state.travel) return "Please choose your travel timing.";
      if (!state.contactPref) return "Please choose how you would like to be contacted.";
    }
    if (step === 5) {
      if (!state.name.trim()) return "Please enter your name.";
      if (!/^[+()\d][\d\s()+-]{6,}$/.test(state.whatsapp.trim())) return "Please enter your WhatsApp number with country code.";
      if (state.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) return "Please check your email address.";
      if (state.contactPref === "email" && !state.email) return "Please add your email address.";
      if (!state.consent) return "Please tick the consent box so we can review your enquiry.";
    }
    return "";
  };

  const next = () => {
    const message = validateStep();
    if (message) return setError(message);
    setStep((s) => s + 1);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const message = validateStep();
    if (message) return setError(message);
    setStatus("sending");
    const payload: AssessmentPayload = {
      age: Number(state.age), problem: state.problem, duration: state.duration, using: state.using, helped: state.helped || "na",
      history: state.history, historyOther: state.historyOther, interest: state.interest, country: state.country, travel: state.travel,
      contactPref: state.contactPref, reports: state.reports, name: state.name, whatsapp: state.whatsapp, email: state.email,
      consent: state.consent, website: state.website, startedAt: startedAt.current || Date.now() - 60_000,
      from: window.location.pathname, attribution: getAttribution(),
    };
    try {
      const response = await fetch("/api/assessment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!result.ok) {
        setError(result.error ?? "We could not send your case.");
        setStatus("failed");
        return;
      }
      // No health information is sent to analytics: only the treatment interest and country.
      track("assessment_complete", { treatment_interest: state.interest, country: state.country });
      track(leadEventFor(state.interest), { treatment_interest: state.interest, country: state.country });
      setStatus("done");
    } catch {
      setError("We could not send your case just now. Please use WhatsApp to reach the clinic.");
      setStatus("failed");
    }
  };

  const progress = useMemo(() => Math.round(((step + 1) / STEPS.length) * 100), [step]);

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-950 mb-3">Thank you</h2>
        <p className="text-slate-800 mb-6">Thank you. Your information has been sent for confidential review. A patient coordinator will contact you.</p>
        <a href={whatsappLink(state.interest as TreatmentId)} target="_blank" rel="noopener noreferrer" data-wa data-treatment={state.interest} data-placement="assessment-thanks" className="inline-flex rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3">
          Prefer to chat now? WhatsApp the clinic
        </a>
      </div>
    );
  }

  const s = STEPS[step];
  return (
    <form onSubmit={submit} noValidate id="assessment-form" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 scroll-mt-24">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 mb-2"><span>Step {step + 1} of {STEPS.length}</span><span>Private &amp; confidential</span></div>
        <div className="h-2 rounded-full bg-slate-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label="Assessment progress">
          <div className="h-2 rounded-full bg-teal-700 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-bold text-slate-950 mb-1 outline-none">{s.title}</h2>
      <p className="text-slate-600 mb-6">{s.hint}</p>

      {step === 0 && (
        <>
          <div className="mb-6">
            <label htmlFor="age" className="block font-semibold text-slate-950 mb-2">Age</label>
            <input id="age" type="number" inputMode="numeric" min={18} max={100} value={state.age} onChange={(e) => set("age", e.target.value)} className={`${inputClass} max-w-[10rem]`} />
          </div>
          <RadioGroup legend="What is the main problem?" name="problem" options={problemOptions} value={state.problem} onChange={(v) => set("problem", v)} />
        </>
      )}
      {step === 1 && (
        <>
          <RadioGroup legend="How long has this been a problem?" name="duration" options={durationOptions} value={state.duration} onChange={(v) => set("duration", v)} />
          <CheckGroup legend="Do you currently use any of the following?" options={usingOptions} values={state.using} onChange={(v) => set("using", v)} exclusive="none" />
          <RadioGroup legend="If you have tried treatment, how did it go?" name="helped" options={helpedOptions} value={state.helped} onChange={(v) => set("helped", v)} />
        </>
      )}
      {step === 2 && (
        <>
          <CheckGroup legend="Medical history" options={historyOptions} values={state.history} onChange={(v) => set("history", v)} exclusive="none" />
          {state.history.includes("other") && (
            <div className="mb-6">
              <label htmlFor="history-other" className="block font-semibold text-slate-950 mb-2">Other (optional)</label>
              <input id="history-other" maxLength={300} value={state.historyOther} onChange={(e) => set("historyOther", e.target.value)} className={inputClass} />
            </div>
          )}
        </>
      )}
      {step === 3 && <RadioGroup legend="What are you interested in?" name="interest" options={interestOptions} value={state.interest} onChange={(v) => set("interest", v)} />}
      {step === 4 && (
        <>
          <div className="mb-6">
            <label htmlFor="country" className="block font-semibold text-slate-950 mb-2">Country</label>
            <input id="country" autoComplete="country-name" value={state.country} onChange={(e) => set("country", e.target.value)} className={inputClass} />
          </div>
          <RadioGroup legend="When might you be able to travel?" name="travel" options={travelOptions} value={state.travel} onChange={(v) => set("travel", v)} />
          <RadioGroup legend="Preferred contact" name="contactPref" options={contactOptions} value={state.contactPref} onChange={(v) => set("contactPref", v)} />
          <CheckGroup legend="Can you share any reports later? (optional)" options={reportOptions} values={state.reports} onChange={(v) => set("reports", v)} />
        </>
      )}
      {step === 5 && (
        <>
          <div className="space-y-5 mb-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-slate-950 mb-2">Name</label>
              <input id="name" autoComplete="name" value={state.name} onChange={(e) => set("name", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block font-semibold text-slate-950 mb-2">WhatsApp number (with country code)</label>
              <input id="whatsapp" type="tel" autoComplete="tel" placeholder="+44 7000 000000" value={state.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-slate-950 mb-2">Email {state.contactPref === "email" ? "" : "(optional)"}</label>
              <input id="email" type="email" autoComplete="email" value={state.email} onChange={(e) => set("email", e.target.value)} className={inputClass} />
            </div>
            <div aria-hidden="true" className="hidden">
              <label htmlFor="website">Leave this empty</label>
              <input id="website" tabIndex={-1} autoComplete="off" value={state.website} onChange={(e) => set("website", e.target.value)} />
            </div>
          </div>
          <label className="flex gap-3 items-start text-sm text-slate-700 mb-2">
            <input type="checkbox" checked={state.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 w-4 h-4 accent-teal-700" />
            <span>I consent to UZ Clinic Antalya using the information above, including health information, to review my enquiry and contact me. I have read the <a href="/privacy" target="_blank" className="underline text-teal-800">privacy notice</a>. This is not a diagnosis or a booking.</span>
          </label>
        </>
      )}

      <p aria-live="polite" className={`min-h-6 text-sm mb-3 ${error ? "text-red-700" : ""}`}>{error}</p>

      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={() => setStep((n) => Math.max(0, n - 1))} disabled={step === 0} className="rounded-full border border-slate-300 px-5 py-3 font-semibold disabled:opacity-40">Back</button>
        {step < STEPS.length - 1 ? (
          <button type="button" onClick={next} className="rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold px-7 py-3">Continue</button>
        ) : (
          <button type="submit" disabled={status === "sending"} className="rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold px-7 py-3 disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send My Case for Review"}
          </button>
        )}
      </div>
      {status === "failed" && (
        <p className="mt-4 text-sm text-slate-700">
          You can also <a data-wa data-placement="assessment-error" href={whatsappLink((state.interest || "not-sure") as TreatmentId)} className="underline text-green-800" target="_blank" rel="noopener noreferrer">message the clinic on WhatsApp</a>.
        </p>
      )}
    </form>
  );
}

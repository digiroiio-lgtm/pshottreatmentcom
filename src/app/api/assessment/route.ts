import { NextResponse } from "next/server";
import {
  type AssessmentPayload,
  contactOptions,
  durationOptions,
  helpedOptions,
  historyOptions,
  interestOptions,
  labelOf,
  problemOptions,
  reportOptions,
  travelOptions,
  usingOptions,
} from "@/content/assessment";
import { scoreLead } from "@/lib/lead-score";

export const runtime = "nodejs";

const MAX_BODY = 12_000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const str = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");
const list = (value: unknown, allowed: string[]) =>
  Array.isArray(value) ? value.filter((v): v is string => typeof v === "string" && allowed.includes(v)) : [];
const one = (value: unknown, allowed: string[]) => (typeof value === "string" && allowed.includes(value) ? value : "");
const values = (options: { value: string }[]) => options.map((o) => o.value);

function validate(raw: unknown): { ok: true; data: AssessmentPayload } | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") return { ok: false, error: "Invalid request." };
  const r = raw as Record<string, unknown>;
  const attribution = (r.attribution && typeof r.attribution === "object" ? r.attribution : {}) as Record<string, unknown>;

  const data: AssessmentPayload = {
    age: Number(r.age),
    problem: one(r.problem, values(problemOptions)),
    duration: one(r.duration, values(durationOptions)),
    using: list(r.using, values(usingOptions)),
    helped: one(r.helped, values(helpedOptions)),
    history: list(r.history, values(historyOptions)),
    historyOther: str(r.historyOther, 300),
    interest: one(r.interest, values(interestOptions)) || "not-sure",
    country: str(r.country, 80),
    travel: one(r.travel, values(travelOptions)),
    contactPref: one(r.contactPref, values(contactOptions)),
    reports: list(r.reports, values(reportOptions)),
    name: str(r.name, 120),
    whatsapp: str(r.whatsapp, 40),
    email: str(r.email, 160),
    consentHealth: r.consentHealth === true,
    consentTransfer: r.consentTransfer === true,
    website: str(r.website, 200),
    startedAt: Number(r.startedAt) || 0,
    from: str(r.from, 120),
    attribution: {
      source: str(attribution.source, 120),
      medium: str(attribution.medium, 120),
      campaign: str(attribution.campaign, 120),
      landing_page: str(attribution.landing_page, 200),
    },
  };

  if (!Number.isFinite(data.age) || data.age < 18 || data.age > 100) return { ok: false, error: "Please enter an age of 18 or over." };
  if (!data.problem || !data.duration) return { ok: false, error: "Please complete the questions." };
  if (!data.country) return { ok: false, error: "Please tell us your country." };
  if (!data.name) return { ok: false, error: "Please enter your name." };
  if (!/^[+()\d][\d\s()+-]{6,}$/.test(data.whatsapp)) return { ok: false, error: "Please enter a valid WhatsApp number with country code." };
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { ok: false, error: "Please enter a valid email address." };
  if (data.contactPref === "email" && !data.email) return { ok: false, error: "Please add your email address." };
  if (!data.consentHealth) return { ok: false, error: "Please give your consent to process your health information so we can review your enquiry." };
  if (!data.consentTransfer) return { ok: false, error: "Please give your consent to the transfer of your information to our service providers." };
  return { ok: true, data };
}

function composeEmail(data: AssessmentPayload) {
  const { score, tier, reasons } = scoreLead(data);
  const labels = (options: { value: string; label: string }[], items: string[]) => items.map((i) => labelOf(options, i)).join(", ") || "-";
  const lines = [
    `Lead score: ${score} (${tier}) - internal only`,
    `Score breakdown: ${reasons.join("; ")}`,
    "",
    `Name: ${data.name}`,
    `WhatsApp: ${data.whatsapp}`,
    `Email: ${data.email || "-"}`,
    `Preferred contact: ${labelOf(contactOptions, data.contactPref) || "-"}`,
    `Country: ${data.country}`,
    `Travel timing: ${labelOf(travelOptions, data.travel) || "-"}`,
    "",
    `Age: ${data.age}`,
    `Main problem: ${labelOf(problemOptions, data.problem)}`,
    `Duration: ${labelOf(durationOptions, data.duration)}`,
    `Currently using: ${labels(usingOptions, data.using)}`,
    `Previous treatment outcome: ${labelOf(helpedOptions, data.helped) || "-"}`,
    `Medical history: ${labels(historyOptions, data.history)}${data.historyOther ? ` (${data.historyOther})` : ""}`,
    `Treatment interest: ${labelOf(interestOptions, data.interest)}`,
    `Can share: ${labels(reportOptions, data.reports)}`,
    "",
    `Consent given: health information processing = yes; transfer to service providers = yes (${new Date().toISOString()})`,
    `Submitted from page: ${data.from || "-"}`,
    `Source / medium / campaign: ${data.attribution.source || "-"} / ${data.attribution.medium || "-"} / ${data.attribution.campaign || "-"}`,
    `Landing page: ${data.attribution.landing_page || "-"}`,
  ];
  // Health details stay out of the subject line.
  const subject = `[${tier} ${score}] ED assessment: ${labelOf(interestOptions, data.interest)} - ${data.country}`;
  return { subject, text: lines.join("\n"), score, tier };
}

async function deliver(data: AssessmentPayload): Promise<boolean> {
  const { subject, text, score, tier } = composeEmail(data);
  const results: boolean[] = [];

  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (key && to && from) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), subject, text, reply_to: data.email || undefined }),
    });
    results.push(response.ok);
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    const response = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, website: undefined, score, tier, submittedAt: new Date().toISOString() }),
    });
    results.push(response.ok);
  }

  if (!results.length) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[assessment] No delivery channel configured; lead (dev only):\n" + text);
      return true;
    }
    console.error("[assessment] No delivery channel configured (RESEND_API_KEY/LEAD_NOTIFY_EMAIL/LEAD_FROM_EMAIL or LEAD_WEBHOOK_URL).");
    return false;
  }
  return results.some(Boolean);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });

  const text = await request.text();
  if (text.length > MAX_BODY) return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) return NextResponse.json({ ok: false, error: result.error }, { status: 400 });

  // Honeypot or implausibly fast submission: pretend success so bots learn nothing.
  const tooFast = result.data.startedAt && Date.now() - result.data.startedAt < 4000;
  if (result.data.website || tooFast) return NextResponse.json({ ok: true });

  try {
    const delivered = await deliver(result.data);
    if (!delivered) {
      return NextResponse.json(
        { ok: false, error: "We could not send your case just now. Please use WhatsApp to reach the clinic." },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error("[assessment] delivery failed", error instanceof Error ? error.message : error);
    return NextResponse.json({ ok: false, error: "We could not send your case just now. Please use WhatsApp to reach the clinic." }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}

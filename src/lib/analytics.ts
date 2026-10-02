export type AnalyticsEvent =
  | "assessment_start"
  | "assessment_complete"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "p_shot_lead"
  | "shockwave_lead"
  | "stem_cell_lead"
  | "exosome_lead"
  | "ed_general_lead"
  | "treatment_comparison_view"
  | "doctor_profile_view"
  | "cta_click";

type Params = Record<string, string | number | boolean | undefined>;

export type Attribution = { source: string; medium: string; campaign: string; landing_page: string };

const KEY = "uz_attribution";

type Gtag = (...args: unknown[]) => void;
type AnalyticsWindow = Window & { gtag?: Gtag; dataLayer?: unknown[] };

/** Stores first-touch attribution for the session (UTM parameters, referrer and landing page). */
export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const url = new URL(window.location.href);
    const referrer = document.referrer ? new URL(document.referrer).hostname : "";
    const external = referrer && referrer !== window.location.hostname;
    const value: Attribution = {
      source: url.searchParams.get("utm_source") || (external ? referrer : "direct"),
      medium: url.searchParams.get("utm_medium") || (external ? "referral" : "none"),
      campaign: url.searchParams.get("utm_campaign") || "(not set)",
      landing_page: url.pathname,
    };
    sessionStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    // Storage can be unavailable; tracking then falls back to page-level data only.
  }
}

export function getAttribution(): Partial<Attribution> {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/**
 * Sends a GA4 event. Never pass health information (symptoms, history, age, contact details) in params.
 */
export function track(name: AnalyticsEvent, params: Params = {}): void {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload = { ...getAttribution(), page: window.location.pathname.replace(/^\//, "") || "home", ...params };
  if (typeof w.gtag === "function") w.gtag("event", name, payload);
  else if (process.env.NODE_ENV !== "production") console.debug("[analytics]", name, payload);
}

export const leadEventFor = (interest: string): AnalyticsEvent =>
  (
    {
      "p-shot": "p_shot_lead",
      shockwave: "shockwave_lead",
      "stem-cell": "stem_cell_lead",
      exosome: "exosome_lead",
    } as Record<string, AnalyticsEvent>
  )[interest] ?? "ed_general_lead";

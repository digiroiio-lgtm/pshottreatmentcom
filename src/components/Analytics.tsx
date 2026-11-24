"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { captureAttribution, track } from "@/lib/analytics";
import { GA_MEASUREMENT_ID } from "@/lib/site-config";

const GA_ID = GA_MEASUREMENT_ID;
const CONSENT_KEY = "uz_analytics_consent";

type ConsentWindow = Window & { gtag?: (...args: unknown[]) => void };

const updateConsent = (granted: boolean) => {
  const state = granted ? "granted" : "denied";
  (window as ConsentWindow).gtag?.("consent", "update", { analytics_storage: state });
};

/** GA4 with Consent Mode v2 (denied by default) and a small consent banner. Renders nothing without a measurement ID. */
export default function Analytics() {
  const [choice, setChoice] = useState<"granted" | "denied" | "unset" | null>(null);

  useEffect(() => {
    captureAttribution();
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      setChoice(stored === "granted" || stored === "denied" ? stored : "unset");
      if (stored === "granted") updateConsent(true);
    } catch {
      setChoice("unset");
    }
    // The footer "Cookie settings" button reopens the banner so visitors can change or withdraw consent.
    const reopen = () => setChoice("unset");
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  if (!GA_ID) return null;

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // Ignore storage failures; the choice still applies to this page view.
    }
    updateConsent(granted);
    track("consent_choice", { choice: granted ? "granted" : "denied" });
    setChoice(granted ? "granted" : "denied");
  };

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
      `}</Script>
      {choice === "unset" && (
        <div role="region" aria-label="Cookie preferences" className="fixed bottom-20 md:bottom-4 left-4 right-4 md:right-auto md:max-w-md z-[55] rounded-xl bg-surface border border-slate-300 shadow-xl p-4 text-sm text-slate-700">
          <p className="mb-3">
            We use analytics cookies to understand how this site is used. Health information you enter in the assessment form is never sent to analytics. See the{" "}
            <Link href="/privacy" className="underline text-teal-800">privacy notice</Link>.
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={() => decide(true)} className="bg-teal-700 hover:bg-teal-800 text-black font-semibold rounded-full px-4 py-2">Accept analytics</button>
            <button type="button" onClick={() => decide(false)} className="border border-slate-300 hover:bg-slate-50 font-semibold rounded-full px-4 py-2">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}

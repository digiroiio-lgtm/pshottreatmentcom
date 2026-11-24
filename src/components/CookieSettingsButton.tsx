"use client";

import { GA_MEASUREMENT_ID } from "@/lib/site-config";

/** Footer link that reopens the cookie banner (change or withdraw analytics consent). Hidden when analytics is off. */
export default function CookieSettingsButton() {
  if (!GA_MEASUREMENT_ID) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))} className="hover:text-white inline-block py-2 underline-offset-2 hover:underline">
      Cookie settings
    </button>
  );
}

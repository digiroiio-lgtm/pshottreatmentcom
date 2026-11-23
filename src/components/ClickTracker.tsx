"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** One delegated listener for WhatsApp, phone, email and CTA clicks. Links declare context through data attributes. */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const path = window.location.pathname.replace(/^\//, "") || "home";

      if (link.hasAttribute("data-wa") || href.includes("wa.me/")) {
        const params = {
          treatment: link.getAttribute("data-treatment") ?? "not-sure",
          page: path,
          placement: link.getAttribute("data-placement") ?? "other",
          link_text: (link.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 40),
        };
        track("whatsapp_click", params);
        // Counted as a lead: on this site a WhatsApp chat is a direct enquiry to the clinic.
        track("generate_lead", { method: "whatsapp", treatment: params.treatment, placement: params.placement });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { page: path });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { page: path });
      } else if (link.hasAttribute("hreflang") && link.getAttribute("hreflang") !== "en") {
        track("language_switch", { lang: link.getAttribute("hreflang") ?? "", target: href });
      } else if (/^https?:\/\//.test(href) && !href.includes(window.location.hostname)) {
        let domain = "";
        try { domain = new URL(href).hostname; } catch { /* ignore */ }
        track("outbound_click", { domain, placement: link.getAttribute("data-placement") ?? "content" });
      } else if (link.hasAttribute("data-cta")) {
        track("cta_click", {
          treatment: link.getAttribute("data-treatment") ?? "not-sure",
          placement: link.getAttribute("data-placement") ?? "other",
          label: link.getAttribute("data-cta") ?? undefined,
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

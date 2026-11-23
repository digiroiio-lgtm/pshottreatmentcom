"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

const DEPTHS = [25, 50, 75, 90];

// Sections are found by data attributes already on the page, so no component has to wrap itself.
const SECTIONS: [string, string][] = [
  ["[data-price]", "price_table"],
  ["[data-doctor]", "doctor"],
  ["[data-faq]", "faq"],
  ["[data-location]", "location"],
  ["[data-track-section]", ""],
];

/** Scroll depth (25/50/75/90%) and key-section views, once per page view. No personal data. */
export default function EngagementTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const sent = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const percent = (window.scrollY / max) * 100;
      for (const depth of DEPTHS) {
        if (percent >= depth && !sent.has(depth)) {
          sent.add(depth);
          track("scroll_depth", { percent: depth });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const seen = new Set<string>();
    let observer: IntersectionObserver | undefined;
    // Wait a tick so the new page's sections are in the DOM after client navigation.
    const timer = window.setTimeout(() => {
      if (typeof IntersectionObserver === "undefined") return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            const name = el.dataset.trackSection || el.dataset.sectionName || "";
            if (name && !seen.has(name)) {
              seen.add(name);
              track("section_view", { section: name });
            }
            observer?.unobserve(el);
          }
        },
        { threshold: 0.4 },
      );
      for (const [selector, name] of SECTIONS) {
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          if (name) el.dataset.sectionName = name;
          observer?.observe(el);
        });
      }
    }, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

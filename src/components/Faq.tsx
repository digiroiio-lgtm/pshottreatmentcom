"use client";

import type { FaqItem } from "@/content/types";
import { track } from "@/lib/analytics";

/** FAQ as native <details>: answers stay in the HTML for search and AI, the first is open, opening one is tracked. */
export default function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-heading" data-faq>
      <h2 id="faq-heading" className="text-2xl font-bold text-heading mb-4">{heading}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={item.q}
            open={index === 0}
            onToggle={(event) => {
              if ((event.currentTarget as HTMLDetailsElement).open && index > 0) track("faq_open", { question_index: index + 1, question: item.q.slice(0, 80) });
            }}
            className="group rounded-xl border border-slate-200 bg-surface p-5 open:border-teal-700/50"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="font-bold text-heading">{item.q}</h3>
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-teal-400 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
            </summary>
            <p className="text-slate-700 leading-relaxed mt-3">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

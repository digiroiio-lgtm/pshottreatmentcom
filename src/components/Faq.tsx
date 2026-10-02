import type { FaqItem } from "@/content/types";

export default function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-heading" data-faq>
      <h2 id="faq-heading" className="text-2xl font-bold text-slate-950 mb-4">{heading}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-950 mb-2">{item.q}</h3>
            <p className="text-slate-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

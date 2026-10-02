import type { FaqItem } from "@/lib/geo-content";

export default function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-heading" data-faq>
      <h2 id="faq-heading" className="text-2xl font-bold text-gray-950 mb-4">{heading}</h2>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.q} className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-950 mb-2">{item.q}</h3>
            <p className="text-gray-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

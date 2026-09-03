export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection({ items, heading = "Frequently Asked Questions" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section className="mt-12" id="faq">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{heading}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.q} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

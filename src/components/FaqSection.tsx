import type { FaqItem } from "@/lib/schema";

/**
 * Semantic FAQ list. `<dl>/<dt>/<dd>` gives the question–answer relationship to
 * parsers that never read JSON-LD, and mirrors the FAQPage graph node exactly.
 */
export default function FaqSection({
  items,
  title = "Frequently Asked Questions",
  id = "faq",
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <h2
        id={`${id}-heading`}
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
      >
        {title}
      </h2>
      <dl className="space-y-5">
        {items.map((item) => (
          <div
            key={item.question}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <dt className="font-bold text-gray-900 mb-2">{item.question}</dt>
            <dd className="text-gray-700 text-sm leading-relaxed">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

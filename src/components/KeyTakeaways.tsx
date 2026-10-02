export default function KeyTakeaways({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="takeaways-heading" data-key-takeaways className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
      <h2 id="takeaways-heading" className="text-lg font-bold text-blue-950 mb-3">Key takeaways</h2>
      <ul className="space-y-2 text-gray-800">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="text-blue-700 font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

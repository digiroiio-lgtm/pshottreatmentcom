const facts = [
  "Experimental status stated clearly",
  "Guidelines and trials linked",
  "No guaranteed outcomes",
  "No unverified reviewer claim",
  "Provider details available on request",
];

export default function TrustBadges() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto px-4 py-8">
      {facts.map((fact) => (
        <li key={fact} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700">
          <span aria-hidden="true" className="text-blue-700 mr-2">✓</span>{fact}
        </li>
      ))}
    </ul>
  );
}

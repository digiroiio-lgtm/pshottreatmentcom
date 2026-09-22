export default function BeforeAfterGrid() {
  const measures = [
    "Validated erectile-function questionnaire scores",
    "Treatment protocol and number of sessions",
    "Baseline diagnosis and concurrent treatments",
    "Follow-up interval and adverse events",
    "Consent and privacy documentation",
  ];
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-amber-800 mb-2">Provenance check</p>
        <h2 className="text-2xl font-bold text-gray-950 mb-3">No patient gallery is published</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The repository did not contain genuine clinical photographs, consent records or case documentation. Placeholder tiles previously described as verified patient results have been removed.
        </p>
        <h3 className="font-bold text-gray-950 mb-3">A useful outcome report would include:</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {measures.map((measure) => <li key={measure}>• {measure}</li>)}
        </ul>
      </div>
    </section>
  );
}

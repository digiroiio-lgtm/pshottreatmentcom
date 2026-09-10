/**
 * The "answer-first" block that opens every page.
 *
 * Written to be liftable: a 40–60 word paragraph that resolves the page's core
 * question without needing surrounding context, followed by an optional fact
 * table. AI answer engines quote self-contained paragraphs and tables far more
 * readily than prose that depends on what came before it.
 *
 * The `data-speakable` hook is what the SpeakableSpecification cssSelector targets.
 */
export default function AnswerBlock({
  children,
  facts,
}: {
  children: React.ReactNode;
  facts?: { label: string; value: string }[];
}) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <p
          data-speakable="true"
          className="text-gray-800 leading-relaxed text-lg"
        >
          {children}
        </p>

        {facts && facts.length > 0 && (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">P-Shot treatment key facts</caption>
              <tbody>
                {facts.map((f) => (
                  <tr key={f.label} className="border-b border-blue-100 last:border-0">
                    <th
                      scope="row"
                      className="text-left font-semibold text-gray-700 py-2 pr-4 align-top whitespace-nowrap"
                    >
                      {f.label}
                    </th>
                    <td className="py-2 text-gray-700">{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

import type { EvidenceSource } from "@/lib/evidence";

export default function SourceList({ sources }: { sources: EvidenceSource[] }) {
  return (
    <section aria-labelledby="sources-heading" className="border-t border-gray-200 pt-8">
      <h2 id="sources-heading" className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
      <ol className="space-y-3 text-sm text-gray-700">
        {sources.map((source) => (
          <li key={source.id} className="pl-4 border-l-2 border-blue-200">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-2"
            >
              {source.title}
            </a>
            <span className="block text-xs text-gray-500 mt-1">
              {source.publisher}, {source.year} · {source.level}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

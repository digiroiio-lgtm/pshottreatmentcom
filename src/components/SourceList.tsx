import type { EvidenceSource } from "@/lib/evidence";

export default function SourceList({ sources, heading = "Sources" }: { sources: EvidenceSource[]; heading?: string }) {
  return (
    <section aria-labelledby="sources-heading" className="border-t border-gray-200 pt-8">
      <h2 id="sources-heading" className="text-2xl font-bold text-heading mb-4">{heading}</h2>
      <ol className="space-y-3 text-sm text-gray-700">
        {sources.map((source) => (
          <li key={source.id} className="pl-4 border-l-2 border-teal-700">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-800 underline decoration-teal-700 underline-offset-2"
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

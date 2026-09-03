import Link from "next/link";
import { ALL_CONTENT, findEntry, labelForPath, pathFor } from "@/lib/content";

export default function RelatedContent({ refs }: { refs: string[] }) {
  const links = refs
    .map((ref) => {
      if (ref.startsWith("/")) {
        return { href: ref, label: labelForPath(ref), summary: summaryForPath(ref) };
      }
      const entry = findEntry(ref);
      return entry ? { href: pathFor(entry), label: entry.h1, summary: entry.summary } : null;
    })
    .filter((l): l is { href: string; label: string; summary: string } => l !== null);

  if (links.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Keep reading</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block bg-gray-50 border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition-colors"
          >
            <p className="font-semibold text-blue-700 mb-1">{l.label}</p>
            <p className="text-sm text-gray-600">{l.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

const STATIC_SUMMARIES: Record<string, string> = {
  "/price": "Our all-inclusive P-Shot price and exactly what the fee covers.",
  "/how-it-works": "The P-Shot procedure step by step, from blood draw to aftercare.",
  "/side-effects": "Known side effects, the recovery timeline and who should not have the treatment.",
  "/before-after": "Patient results and the realistic timeline for seeing change.",
  "/reviews": "Patient reviews from the UK, EU and US.",
  "/contact": "Ask a question or book a free consultation on WhatsApp.",
};

function summaryForPath(path: string): string {
  if (STATIC_SUMMARIES[path]) return STATIC_SUMMARIES[path];
  const entry = ALL_CONTENT.find((e) => pathFor(e) === path);
  return entry ? entry.summary : "";
}

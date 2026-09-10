"use client";
import Link from "next/link";
import { useState } from "react";

interface Props {
  limit?: number;
}

/**
 * Result gallery.
 *
 * These are placeholders, not photographs — no patient images ship with the
 * site. When real images are added, swap the placeholder <div> for next/image
 * and reuse the same `alt` string, which is already written per item.
 *
 * The `alt` text was previously generated and then never used, leaving the
 * buttons with no accessible name at all; it is now the button's aria-label.
 */
export default function BeforeAfterGrid({ limit }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const results = Array.from({ length: limit ?? 8 }, (_, i) => ({
    id: i + 1,
    alt: `P-Shot before and after results – patient ${i + 1}`,
    label: `Patient ${i + 1}`,
    weeks: [4, 6, 8, 10, 12, 6, 8, 10][i] ?? 8,
  }));

  return (
    <section aria-labelledby="results-heading" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="results-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
          >
            Before &amp; After Results
          </h2>
          <p className="text-gray-600">
            Patient results photographed at 4–12 weeks post-treatment. Outcomes
            vary between patients.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0">
          {results.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                onClick={() => setSelected(r.id === selected ? null : r.id)}
                aria-label={r.alt}
                aria-pressed={selected === r.id}
                className="w-full relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 aspect-square flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-600"
              >
                <span className="text-6xl opacity-30" aria-hidden="true">
                  📷
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left">
                  <span className="block text-white text-xs font-semibold">
                    {r.label}
                  </span>
                  <span className="block text-gray-200 text-xs">
                    {r.weeks} weeks post-treatment
                  </span>
                </span>
                {selected === r.id && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 ring-2 ring-blue-600 rounded-xl"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        {limit && (
          <div className="text-center mt-8">
            <Link
              href="/before-after"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              View All Results
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                focusable="false"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

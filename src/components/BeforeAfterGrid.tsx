"use client";
import { useState } from "react";

interface Props {
  limit?: number;
}

export default function BeforeAfterGrid({ limit }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const results = Array.from({ length: limit ?? 8 }, (_, i) => ({
    id: i + 1,
    alt: `P-Shot before and after results – patient ${i + 1}`,
    label: `Patient ${i + 1}`,
    weeks: [4, 6, 8, 10, 12, 6, 8, 10][i] ?? 8,
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Before &amp; After Results</h2>
          <p className="text-gray-500">Verified patient results. All photos taken at 4–12 weeks post-treatment.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelected(r.id === selected ? null : r.id)}
              className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 aspect-square flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-6xl opacity-30">📷</div>
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-xs font-semibold">{r.label}</p>
                <p className="text-gray-300 text-xs">{r.weeks} weeks post-treatment</p>
              </div>
              {selected === r.id && (
                <div className="absolute inset-0 ring-2 ring-blue-500 rounded-xl" />
              )}
            </button>
          ))}
        </div>
        {limit && (
          <div className="text-center mt-8">
            <a href="/before-after" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              View All Results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

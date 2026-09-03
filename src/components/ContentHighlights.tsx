import Link from "next/link";
import { GUIDES, POSTS, pathFor } from "@/lib/content";

/** Homepage entry point into the guides and blog, so no article is more than one click deep. */
export default function ContentHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Research the P-Shot Properly
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Evidence-referenced guides and straight answers — including the parts most clinics leave out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={pathFor(g)}
              className="block bg-white border border-gray-200 hover:border-blue-500 rounded-2xl p-6 transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-blue-700">Guide</span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{g.h1}</h3>
              <p className="text-sm text-gray-600">{g.summary}</p>
            </Link>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Common questions</h3>
          <ul className="grid sm:grid-cols-3 gap-3">
            {POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={pathFor(p)} className="text-blue-700 hover:text-blue-800 underline underline-offset-2 text-sm font-medium">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/guides" className="text-blue-700 hover:text-blue-800">All P-Shot guides →</Link>
            <Link href="/blog" className="text-blue-700 hover:text-blue-800">All articles →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

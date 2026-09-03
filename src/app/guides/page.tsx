import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { GUIDES, pathFor } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "P-Shot Guides: Cost, Evidence and Treatment Abroad",
  description:
    "In-depth P-Shot guides: what treatment costs worldwide, what the clinical evidence shows, and what to check before having the P-Shot in Turkey.",
  path: "/guides",
  keywords: ["p-shot guide", "priapus shot guide", "p-shot cost guide", "p-shot information"],
});

export default function GuidesHub() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "P-Shot Guides",
    url: `${SITE_URL}/guides`,
    description:
      "In-depth guides on P-Shot cost, clinical evidence and having the treatment in Turkey.",
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.h1,
      url: `${SITE_URL}${pathFor(g)}`,
      description: g.description,
    })),
  };

  return (
    <div className="pt-8">
      <JsonLd data={schema} />
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/guides", label: "Guides" }]} />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot Guides</h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl">
          Long-form, evidence-referenced guides for men researching the P-Shot. No hype, no invented
          success rates — just what is known, what is not, and what it costs.
        </p>

        <div className="grid gap-5">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={pathFor(g)}
              className="block bg-white border border-gray-200 hover:border-blue-500 rounded-2xl p-6 transition-colors"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">{g.h1}</h2>
              <p className="text-gray-600 mb-3">{g.summary}</p>
              <span className="text-sm font-semibold text-blue-700">Read the guide →</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Shorter reads</h2>
          <p className="text-sm text-gray-600 mb-3">
            For single questions — how long results last, how the P-Shot compares with other treatments —
            see the <Link href="/blog" className="text-blue-700 underline underline-offset-2">P-Shot blog</Link>.
          </p>
        </div>
      </div>
      <CtaBlock title="Still Have Questions?" subtitle="Ask our medical coordinator on WhatsApp — no obligation." />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { POSTS, pathFor } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "P-Shot Blog – Answers to Common Patient Questions",
  description:
    "Straight answers to common P-Shot questions: how long results last, how it compares with shockwave therapy and with Viagra, and what to expect.",
  path: "/blog",
  keywords: ["p-shot blog", "p-shot questions", "priapus shot articles"],
});

export default function BlogHub() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "P-Shot Blog",
    url: `${SITE_URL}/blog`,
    description: "Answers to common patient questions about the P-Shot.",
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.h1,
      url: `${SITE_URL}${pathFor(p)}`,
      description: p.description,
      datePublished: p.updated,
    })),
  };

  return (
    <div className="pt-8">
      <JsonLd data={schema} />
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]} />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot Blog</h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl">
          Short, specific answers to the questions men actually search for before booking.
        </p>

        <div className="grid gap-5">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={pathFor(p)}
              className="block bg-white border border-gray-200 hover:border-blue-500 rounded-2xl p-6 transition-colors"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">{p.h1}</h2>
              <p className="text-gray-600 mb-3">{p.summary}</p>
              <span className="text-sm font-semibold text-blue-700">Read article →</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Looking for the full picture?</h2>
          <p className="text-sm text-gray-600">
            Our <Link href="/guides" className="text-blue-700 underline underline-offset-2">in-depth P-Shot guides</Link>{" "}
            cover cost, clinical evidence and treatment in Turkey end to end.
          </p>
        </div>
      </div>
      <CtaBlock title="Ready to Talk to a Doctor?" subtitle="Free WhatsApp consultation, 7 days a week." />
    </div>
  );
}

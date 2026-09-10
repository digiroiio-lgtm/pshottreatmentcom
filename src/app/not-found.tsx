import Link from "next/link";
import type { Metadata } from "next";
import { noIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  ...noIndexMetadata,
};

const suggestions = [
  { href: "/", label: "Home" },
  { href: "/price", label: "P-Shot price" },
  { href: "/how-it-works", label: "How the P-Shot works" },
  { href: "/side-effects", label: "Side effects and safety" },
  { href: "/faq", label: "Frequently asked questions" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl font-extrabold text-blue-700 mb-4">404</p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
        We couldn&apos;t find that page
      </h1>
      <p className="text-gray-700 mb-8">
        The page may have moved or the link may be wrong. Here is where most
        people go next.
      </p>
      <ul className="grid sm:grid-cols-2 gap-3 text-left list-none p-0">
        {suggestions.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block bg-white border border-gray-200 hover:border-blue-600 rounded-xl px-4 py-3 text-blue-700 font-medium transition-colors"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

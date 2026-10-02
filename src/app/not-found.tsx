import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | PShotTreatment.com" },
  robots: { index: false, follow: true },
};

const suggestions: [string, string][] = [
  ["/ed-knowledge-hub", "Erectile dysfunction knowledge hub"],
  ["/prp-fix-erectile-dysfunction-naturally", "PRP for ED: evidence and limitations"],
  ["/side-effects", "P-Shot side effects and risks"],
  ["/price", "P-Shot treatment price"],
  ["/best-p-shot-clinic-turkey", "How to choose a P-Shot provider in Turkey"],
];

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-950 mb-4">Page not found</h1>
      <p className="text-lg text-gray-700 mb-8">The page you requested does not exist or has moved. These pages may help:</p>
      <ul className="space-y-3">
        {suggestions.map(([href, label]) => (
          <li key={href}><Link href={href} className="font-semibold text-blue-800 underline underline-offset-2">{label}</Link></li>
        ))}
      </ul>
      <p className="mt-8"><Link href="/" className="text-blue-800 font-semibold">← Back to the home page</Link></p>
    </div>
  );
}

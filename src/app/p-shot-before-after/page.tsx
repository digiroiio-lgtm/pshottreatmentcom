import type { Metadata } from "next";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import CtaBlock from "@/components/CtaBlock";
import Link from "next/link";

export const metadata: Metadata = {
  title: "P-Shot Before and After Results – Real Patient Photos",
  description:
    "See real P-Shot before and after results from our patients. Verified results from UK, US and EU patients treated at our certified clinic in Turkey.",
  keywords: ["P-Shot before and after", "P-Shot results", "P-Shot photos", "P-Shot results UK"],
  alternates: { canonical: "https://pshottreatment.com/p-shot-before-after" },
};

export default function PShotBeforeAfterPage() {
  return (
    <div className="pt-6">
      <div className="max-w-3xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">P-Shot Before &amp; After Results</h1>
        <p className="text-xl text-gray-500">Real patients. Verified results. Photographed at 4–12 weeks post-treatment.</p>
      </div>
      <BeforeAfterGrid />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">When do you see results?</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { period: "2–4 weeks", desc: "Initial tissue regeneration begins. Some patients report early improvements." },
              { period: "6–8 weeks", desc: "Most patients see significant improvement in size, firmness and sensitivity." },
              { period: "3–6 months", desc: "Full results visible. Many patients report lasting improvements for 12–18 months." },
            ].map((r) => (
              <div key={r.period} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="font-bold text-blue-700 mb-1">{r.period}</p>
                <p className="text-sm text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
          <h3 className="font-bold text-gray-900 mb-4">Related Reading</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/p-shot-before-after-timeline" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → Week-by-Week Timeline
            </Link>
            <Link href="/blog/p-shot-results" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → P-Shot Results Guide
            </Link>
            <Link href="/blog/how-long-does-p-shot-last" className="text-blue-700 hover:text-blue-900 font-medium text-sm bg-white border border-blue-200 px-4 py-2 rounded-full transition-colors">
              → How Long Do Results Last?
            </Link>
          </div>
        </div>
      </div>
      <CtaBlock title="Ready to See Your Own Results?" />
    </div>
  );
}

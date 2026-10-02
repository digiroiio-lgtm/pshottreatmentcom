import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/evidence-methodology");
const trail = [{ name: "Home", path: "/" }, { name: "Evidence methodology", path: "/evidence-methodology" }];

export default function Page() {
  const levels = [
    ["1", "Clinical guidelines and regulators", "Used for current recommendations, safety warnings and regulatory framing."],
    ["2", "Systematic reviews and meta-analyses", "Used to assess the total evidence and its heterogeneity."],
    ["3", "Randomised controlled trials", "Used for comparative efficacy and adverse-event data, with sample size and protocol limits stated."],
    ["4", "Prospective or observational studies", "Used cautiously where stronger evidence is absent."],
    ["5", "Expert commentary and secondary medical sources", "Used for context, not to override primary evidence or guidelines."],
    ["6", "Clinic observations and patient anecdotes", "May identify questions but cannot establish safety or effectiveness."],
  ];
  return <div className="pb-14"><JsonLd path="/evidence-methodology" breadcrumbs={trail} /><Breadcrumbs items={trail} /><header className="max-w-4xl mx-auto px-4 pt-10 pb-7"><h1 className="text-4xl md:text-5xl font-extrabold mb-5">Evidence Methodology</h1><p className="text-xl text-gray-700">How source strength, disagreement and uncertainty are handled.</p></header><div className="max-w-4xl mx-auto px-4 space-y-8"><section><h2 className="text-2xl font-bold mb-4">Source hierarchy</h2><ol className="space-y-3">{levels.map(([level,title,text])=><li key={level} className="border border-gray-200 rounded-xl p-5 flex gap-4"><span className="font-extrabold text-blue-800">{level}</span><div><h3 className="font-bold">{title}</h3><p className="text-sm text-gray-700 mt-1">{text}</p></div></li>)}</ol></section><section><h2 className="text-2xl font-bold mb-3">When sources disagree</h2><p className="text-gray-700 leading-relaxed">We report the disagreement, prioritise the current guideline position and avoid selecting only favourable trials. For PRP and ED, positive trials coexist with a negative placebo-controlled trial, and protocols vary. The resulting label is limited evidence, not proven effectiveness.</p></section><section><h2 className="text-2xl font-bold mb-3">Dates</h2><p className="text-gray-700 leading-relaxed">Date modified records a substantive content change. It is not a medical-review date. Sitemap lastmod is read from the same manually maintained route record and is never generated from deployment time.</p></section></div></div>;
}

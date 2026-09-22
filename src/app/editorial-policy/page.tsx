import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/editorial-policy");
const trail = [{ name: "Home", path: "/" }, { name: "Editorial policy", path: "/editorial-policy" }];

export default function Page() {
  const sections = [
    ["Topic selection", "We prioritise questions that affect diagnosis, treatment choice, safety, informed consent, cost and provider verification. A search term alone is not a reason to create a page."],
    ["Sources", "Clinical guidance and regulators come first, followed by systematic reviews and controlled trials. Competitor websites, Reddit and anonymous testimonials are not medical evidence."],
    ["Claims", "We distinguish proposed mechanisms from demonstrated patient outcomes and do not convert statistical significance into guaranteed individual benefit."],
    ["Medical review", "No named medical reviewer is currently published. Pages therefore show an update date but do not claim medical review. A reviewer will be named only after credentials, permission and actual page-level review are documented."],
    ["Commercial separation", "The site may generate treatment enquiries. Commercial calls to action must not contradict the evidence summary or imply diagnosis, eligibility or guaranteed outcomes."],
    ["Corrections", "Substantive corrections should update the route's manually maintained modification date. A deployment alone must not alter freshness signals."],
  ];
  return <div className="pb-14"><JsonLd path="/editorial-policy" breadcrumbs={trail} /><Breadcrumbs items={trail} /><header className="max-w-4xl mx-auto px-4 pt-10 pb-7"><h1 className="text-4xl md:text-5xl font-extrabold mb-5">Editorial Policy</h1><p className="text-xl text-gray-700">How medical information is selected, sourced, written, reviewed and corrected.</p></header><main className="max-w-4xl mx-auto px-4 space-y-8">{sections.map(([heading,text])=><section key={heading}><h2 className="text-2xl font-bold mb-3">{heading}</h2><p className="text-gray-700 leading-relaxed">{text}</p></section>)}</main></div>;
}

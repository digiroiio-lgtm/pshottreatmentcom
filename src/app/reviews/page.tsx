import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Testimonials from "@/components/Testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/reviews");
const trail = [{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }];

export default function Page() {
  return <div className="pb-14"><JsonLd path="/reviews" breadcrumbs={trail} /><Breadcrumbs items={trail} /><header className="max-w-4xl mx-auto px-4 pt-10 pb-5"><p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">Experience and provenance</p><h1 className="text-4xl md:text-5xl font-extrabold mb-5">P-Shot Reviews: How We Verify Them</h1><p data-direct-answer className="text-xl text-gray-700 leading-relaxed">A review should have a traceable source, permission to publish and clear separation from medical evidence. The current repository does not provide that documentation, so anonymous testimonials and aggregate rating claims are not displayed.</p></header><Testimonials /><div className="max-w-4xl mx-auto px-4"><section><h2 className="text-2xl font-bold mb-3">What to look for elsewhere</h2><ul className="space-y-3 text-gray-700">{["Independent platform and direct link to the original review.","Date, treatment and enough context to understand what is being reviewed.","A representative mix rather than only selected positive outcomes.","No implication that an individual experience predicts your result.","No review or rating schema that is hidden, duplicated or unsupported by visible content."].map((item)=><li key={item}>• {item}</li>)}</ul></section></div></div>;
}

import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/about");
const trail = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }];

export default function Page() {
  return <div className="pb-14"><JsonLd path="/about" breadcrumbs={trail} /><Breadcrumbs items={trail} /><header className="max-w-4xl mx-auto px-4 pt-10 pb-7"><h1 className="text-4xl md:text-5xl font-extrabold mb-5">About PShotTreatment.com</h1><p className="text-xl text-gray-700 leading-relaxed">This is an educational and commercial resource about PRP/P-Shot, erectile dysfunction, treatment considerations, pricing and treatment planning.</p></header><main className="max-w-4xl mx-auto px-4 space-y-8 text-gray-700 leading-relaxed"><section><h2 className="text-2xl font-bold text-gray-950 mb-3">Commercial purpose</h2><p>The site invites treatment enquiries and therefore has a financial interest in bookings. Evidence and limitations are presented before conversion prompts so commercial intent does not masquerade as independent medical advice.</p></section><section className="bg-amber-50 border border-amber-200 rounded-2xl p-6"><h2 className="text-2xl font-bold text-gray-950 mb-3">Provider identity limitation</h2><p>The repository does not contain a verified legal operator name, clinic licence, full treatment address or named treating clinician with registration details. We do not infer or fabricate them. Request and independently verify those details before paying or travelling.</p></section><section><h2 className="text-2xl font-bold text-gray-950 mb-3">What this site does not claim</h2><p>No page claims that a named clinician medically reviewed it. The site does not publish unverified patient cases, aggregate ratings, success rates, awards or treatment guarantees.</p></section></main></div>;
}

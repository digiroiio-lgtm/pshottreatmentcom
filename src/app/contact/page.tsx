import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site-config";

export const metadata = buildMetadata("/contact");
const trail = [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }];

const requests = [
  "Treating clinician's full name, specialty and registration details",
  "Clinic's legal name, address and registration or licence details",
  "Written protocol, evidence summary and informed-consent document",
  "Itemised price, exclusions, cancellation and refund terms",
  "Aftercare, emergency arrangements and named follow-up clinician",
];

export default function Page() {
  return <div className="pb-14"><JsonLd path="/contact" breadcrumbs={trail} /><Breadcrumbs items={trail} /><header className="max-w-4xl mx-auto px-4 pt-10 pb-7"><p className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-3">Assessment and contact</p><h1 className="text-4xl md:text-5xl font-extrabold mb-5">Request a P-Shot Suitability Assessment</h1><p data-direct-answer className="text-xl text-gray-700 leading-relaxed">Use WhatsApp to ask questions and request documents. A message with a coordinator is not a medical diagnosis, a guarantee of suitability or a substitute for an in-person clinician assessment.</p></header><main className="max-w-4xl mx-auto px-4 space-y-8"><section className="border border-gray-200 rounded-2xl p-6"><h2 className="text-2xl font-bold mb-4">Request these details before payment</h2><ul className="space-y-3 text-gray-700">{requests.map((request)=><li key={request}>• {request}</li>)}</ul></section><a href={whatsappUrl("Hi, I would like a suitability assessment and the clinician, clinic, protocol, consent, price and aftercare details before booking.")} target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full px-8 py-4">Continue on WhatsApp</a><p className="text-sm text-gray-600 text-center">Do not send emergency information through WhatsApp. Contact local emergency services for urgent symptoms.</p></main></div>;
}

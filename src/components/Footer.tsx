import Link from "next/link";
import { whatsappUrl } from "@/lib/site-config";

const groups = [
  { title: "P-Shot", links: [["/how-it-works", "How it is performed"], ["/prp-fix-erectile-dysfunction-naturally", "Evidence"], ["/side-effects", "Risks and side effects"], ["/price", "Price"]] },
  { title: "ED information", links: [["/ed-knowledge-hub", "Knowledge hub"], ["/ed-causes", "Causes"], ["/p-shot-vs-viagra", "P-Shot vs Viagra"], ["/shockwave-therapy-ed", "Shockwave therapy"]] },
  { title: "Cost and travel", links: [["/best-p-shot-clinic-turkey", "Choose a provider in Turkey"], ["/flying-to-turkey-ed-treatment", "Travel planning"], ["/why-is-p-shot-expensive-london", "London vs Turkey prices"], ["/p-shot-cost-reddit", "Reddit cost discussions"]] },
  { title: "Trust", links: [["/about", "About"], ["/editorial-policy", "Editorial policy"], ["/evidence-methodology", "Evidence methodology"], ["/reviews", "Review policy"]] },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        <div><p className="text-white font-bold text-lg mb-3">PShotTreatment.com</p><p className="text-sm leading-relaxed">Educational and commercial information about PRP for ED. Medical information does not replace individual assessment.</p></div>
        {groups.map((group) => <div key={group.title}><p className="text-white font-semibold mb-3">{group.title}</p><ul className="space-y-2 text-sm">{group.links.map(([href,label]) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}</ul></div>)}
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row gap-3 justify-between">
        <p>© {new Date().getFullYear()} PShotTreatment.com</p>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">Treatment enquiry via WhatsApp</a>
      </div>
    </footer>
  );
}

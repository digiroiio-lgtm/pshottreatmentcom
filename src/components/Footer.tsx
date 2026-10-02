import Link from "next/link";
import { navGroups } from "@/content/nav";
import { CLINIC, DOCTOR } from "@/lib/clinic";
import { WhatsAppCTA } from "./cta";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <p className="text-white font-bold text-lg mb-2">{CLINIC.name}</p>
          <p className="text-sm leading-relaxed mb-4">{DOCTOR.name}, {DOCTOR.title}. {CLINIC.specialty}. {CLINIC.city}, {CLINIC.country}.</p>
          {CLINIC.streetAddress && <p className="text-sm mb-2">{CLINIC.streetAddress}, {CLINIC.postalCode} {CLINIC.district} / {CLINIC.region}</p>}
          {CLINIC.phone && <p className="text-sm mb-2"><a href={`tel:${CLINIC.phone}`} className="hover:text-white">{CLINIC.phoneDisplay}</a></p>}
          {CLINIC.email && <p className="text-sm mb-4"><a href={`mailto:${CLINIC.email}`} className="hover:text-white">{CLINIC.email}</a></p>}
          <WhatsAppCTA placement="footer" variant="onDark" className="text-sm px-4 py-2" />
        </div>
        {navGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-white font-semibold mb-3">{group.title}</p>
            <ul className="space-y-2 text-sm">
              {group.links.map(([href, label]) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-3">
        <p>Medical information on this site does not replace an individual assessment. PRP, stem-cell and exosome therapies are experimental or investigational for erectile dysfunction, and no outcome is guaranteed.</p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <span>© {new Date().getFullYear()} {CLINIC.name}</span>
          <Link href="/ed-treatment-options" className="hover:text-white">ED treatment options</Link>
          <Link href="/ed-knowledge-hub" className="hover:text-white">Knowledge hub</Link>
          <Link href="/editorial-policy" className="hover:text-white">Editorial policy</Link>
          <Link href="/evidence-methodology" className="hover:text-white">Evidence methodology</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
        </p>
      </div>
    </footer>
  );
}

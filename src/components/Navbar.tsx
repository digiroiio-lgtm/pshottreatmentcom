"use client";

import Link from "next/link";
import { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";

const links = [
  { href: "/how-it-works", label: "P-Shot" },
  { href: "/prp-fix-erectile-dysfunction-naturally", label: "Evidence" },
  { href: "/ed-knowledge-hub", label: "ED Hub" },
  { href: "/side-effects", label: "Safety" },
  { href: "/price", label: "Price" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-blue-950">PShotTreatment<span className="text-blue-700">.com</span></Link>
        <div className="hidden lg:flex gap-6">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-gray-700 hover:text-blue-800">{link.label}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-100 rounded-full p-1 text-xs font-bold" aria-label="Billing currency">
            {(["GBP", "EUR", "USD"] as const).map((code) => (
              <button key={code} onClick={() => setCurrency(code)} className={`px-2 py-1 rounded-full ${currency === code ? "bg-blue-800 text-white" : "text-gray-600"}`} aria-pressed={currency === code}>
                {code === "GBP" ? "£" : code === "EUR" ? "€" : "$"}
              </button>
            ))}
          </div>
          <button className="lg:hidden p-2" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && <div className="lg:hidden px-4 pb-4 border-t border-gray-100">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-700">{link.label}</Link>)}</div>}
    </nav>
  );
}

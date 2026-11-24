"use client";
import Image from "next/image";
import { CLINIC_LOGO } from "@/content/images";
import { track } from "@/lib/analytics";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navGroups } from "@/content/nav";
import { assessmentHref } from "./cta";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpenMenu(null);
    const onClick = (event: MouseEvent) => {
      if (root.current && !root.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header ref={root} className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-slate-200">
      <nav aria-label="Main" className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 leading-tight">
          <Image src={CLINIC_LOGO.src} alt="" width={36} height={36} priority className="h-9 w-9 shrink-0" />
          <span>
            <span className="block font-extrabold text-heading">UZ Clinic <span className="text-teal-700">Antalya</span></span>
            <span className="block text-[11px] text-slate-600">Male sexual health &amp; penile rehabilitation</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navGroups.map((group) => (
            <li key={group.title} className="relative">
              <button
                type="button"
                aria-expanded={openMenu === group.title}
                aria-haspopup="true"
                onClick={() => { if (openMenu !== group.title) track("nav_open", { menu: group.title }); setOpenMenu(openMenu === group.title ? null : group.title); }}
                className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-teal-800 rounded-md"
              >
                {group.title} <span aria-hidden="true">▾</span>
              </button>
              {openMenu === group.title && (
                <ul className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-slate-200 bg-surface shadow-xl p-2">
                  {group.links.map(([href, label]) => (
                    <li key={href}><Link href={href} className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-teal-50 hover:text-teal-900">{label}</Link></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href={assessmentHref()} data-cta="Check Suitability" data-placement="header" className="hidden sm:inline-flex rounded-full bg-teal-700 hover:bg-teal-800 text-black text-sm font-bold uppercase tracking-wide px-5 py-2.5">
            Check Suitability
          </Link>
          <button type="button" className="lg:hidden p-2 text-xl" aria-expanded={mobile} aria-controls="mobile-nav" aria-label="Toggle navigation" onClick={() => { if (!mobile) track("nav_open", { menu: "mobile" }); setMobile(!mobile); }}>
            {mobile ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {mobile && (
        <div id="mobile-nav" className="lg:hidden border-t border-slate-100 px-4 pb-24 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navGroups.map((group) => (
            <details key={group.title} className="border-b border-slate-100 py-1" open={group.title === "Treatments"}>
              <summary className="py-3 font-semibold text-slate-900 cursor-pointer">{group.title}</summary>
              <ul className="pb-2">
                {group.links.map(([href, label]) => (
                  <li key={href}><Link href={href} className="block py-2 pl-3 text-slate-700">{label}</Link></li>
                ))}
              </ul>
            </details>
          ))}
          <Link href={assessmentHref()} data-cta="Check Suitability" data-placement="mobile-menu" className="mt-4 flex justify-center rounded-full bg-teal-700 text-black font-bold uppercase tracking-wide py-3">
            Check Suitability
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { treatmentFromPath } from "@/content/treatments";
import { ASSESSMENT_PATH } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { assessmentHref } from "./cta";

/** Mobile bottom bar, always available: WhatsApp the clinic + Check suitability. */
export default function MobileStickyBar() {
  const pathname = usePathname();
  const treatment = treatmentFromPath(pathname);
  const onAssessment = pathname === ASSESSMENT_PATH;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950 text-white px-3 py-2.5 grid gap-2 grid-flow-col auto-cols-fr shadow-[0_-4px_16px_rgba(0,0,0,0.25)]" style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}>
      <a href={whatsappLink(treatment)} target="_blank" rel="noopener noreferrer" data-wa data-treatment={treatment} data-placement="mobile-bar" className="flex flex-col items-center justify-center rounded-xl bg-green-600 py-2 text-sm font-bold leading-tight">
        WhatsApp Clinic
        <span className="text-[11px] font-normal opacity-90">Private chat</span>
      </a>
      {!onAssessment && (
        <Link href={assessmentHref(treatment)} data-cta="Check Suitability" data-treatment={treatment} data-placement="mobile-bar" className="flex flex-col items-center justify-center rounded-xl bg-teal-600 py-2 text-sm font-bold leading-tight">
          Check Suitability
          <span className="text-[11px] font-normal opacity-90">About 2 minutes</span>
        </Link>
      )}
    </div>
  );
}

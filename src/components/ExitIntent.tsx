"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ASSESSMENT_PATH } from "@/lib/site-config";

const KEY = "uz_exit_intent_shown";

/** Desktop exit-intent prompt. No discounts: it offers the assessment once per session. */
export default function ExitIntent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const loadedAt = useRef(Date.now());

  useEffect(() => {
    if (pathname === ASSESSMENT_PATH || pathname === "/privacy") return;
    const onLeave = (event: MouseEvent) => {
      if (event.clientY > 0 || Date.now() - loadedAt.current < 15_000) return;
      try {
        if (sessionStorage.getItem(KEY)) return;
        sessionStorage.setItem(KEY, "1");
      } catch {
        return;
      }
      setOpen(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] hidden md:flex items-center justify-center bg-black/50 p-4" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="exit-title" className="relative max-w-lg w-full rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" aria-label="Close" onClick={() => setOpen(false)} className="absolute top-3 right-4 text-2xl text-slate-500 hover:text-slate-900">×</button>
        <h2 id="exit-title" className="text-2xl font-bold text-slate-950 mb-2">Not sure which ED treatment you need?</h2>
        <p className="text-slate-700 mb-6">Answer 6 short steps and send your case for confidential review. You do not need to know which treatment you need.</p>
        <Link href={ASSESSMENT_PATH} onClick={() => setOpen(false)} data-cta="Start ED Assessment" data-placement="exit-intent" className="inline-flex rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold px-7 py-3">
          Start ED Assessment
        </Link>
      </div>
    </div>
  );
}

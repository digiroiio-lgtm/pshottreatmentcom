"use client";

import { useState } from "react";
import { absoluteUrl } from "@/lib/site-config";
import { track } from "@/lib/analytics";

/** "Cite this page" box: a ready-made reference with a link, so writers and journalists can attribute the data. */
export default function CiteThis({ path, title, note }: { path: string; title: string; note?: string }) {
  const url = absoluteUrl(path);
  const citation = `UZ Clinic Antalya. "${title}". Updated ${new Date().getFullYear()}. ${url}`;
  const html = `<a href="${url}">${title}</a> (UZ Clinic Antalya)`;
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (text: string, which: string) => {
    try {
      await navigator.clipboard.writeText(text);
      track("cite_copy", { type: which });
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };
  return (
    <section data-track-section="cite_box" aria-labelledby="cite-heading" className="rounded-2xl border border-teal-700/40 bg-surface p-6">
      <h2 id="cite-heading" className="text-xl font-bold text-heading mb-2">Cite this page</h2>
      <p className="text-sm text-slate-700 mb-4">{note ?? "Writers, journalists and researchers are welcome to quote this page. Please credit and link to the source."}</p>
      <p className="rounded-lg bg-black/40 border border-slate-200 p-3 text-sm text-slate-800 break-words mb-3">{citation}</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => copy(citation, "text")} className="rounded-full border border-teal-600 px-4 py-2 text-sm font-semibold text-teal-400 hover:bg-teal-50">
          {copied === "text" ? "Copied" : "Copy citation"}
        </button>
        <button type="button" onClick={() => copy(html, "html")} className="rounded-full border border-teal-600 px-4 py-2 text-sm font-semibold text-teal-400 hover:bg-teal-50">
          {copied === "html" ? "Copied" : "Copy HTML link"}
        </button>
      </div>
    </section>
  );
}

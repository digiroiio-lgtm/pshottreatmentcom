"use client";

import { whatsappUrl } from "@/lib/site-config";

export default function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-blue-950 text-white px-4 py-3 flex items-center justify-between shadow-lg">
      <div><p className="text-sm font-bold">Ask about suitability</p><p className="text-xs text-blue-200">No obligation or guarantee</p></div>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="bg-green-500 font-bold text-sm px-4 py-2 rounded-full">WhatsApp</a>
    </div>
  );
}

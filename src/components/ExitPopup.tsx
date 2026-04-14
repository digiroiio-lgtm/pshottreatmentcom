"use client";
import { useState, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { formatted } = useCurrency();

  useEffect(() => {
    if (dismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShow(true);
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl relative">
        <button onClick={() => { setShow(false); setDismissed(true); }} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        <div className="text-4xl mb-3">🔒</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Wait! Don&apos;t Leave Yet</h2>
        <p className="text-gray-600 mb-4">Limited Offer: Lock your <strong>{formatted} price</strong> today before slots fill up.</p>
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-6 text-red-700 text-sm font-semibold">
          ⚡ Only 3 slots available this week
        </div>
        <a
          href="https://wa.me/905353998999?text=Hi%2C%20I%27d%20like%20to%20lock%20in%20the%20P-Shot%20price"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors mb-3"
        >
          WhatsApp &amp; Lock My Price
        </a>
        <button onClick={() => { setShow(false); setDismissed(true); }} className="text-sm text-gray-400 hover:text-gray-600">No thanks, I&apos;ll pay more elsewhere</button>
      </div>
    </div>
  );
}

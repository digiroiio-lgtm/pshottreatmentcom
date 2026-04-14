"use client";
import { useCurrency } from "@/context/CurrencyContext";

export default function StickyCtaBar() {
  const { formatted } = useCurrency();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-blue-700 text-white px-4 py-3 flex items-center justify-between shadow-lg">
      <div>
        <p className="text-sm font-bold">P-Shot Treatment</p>
        <p className="text-xs opacity-90">Only {formatted} – All Inclusive</p>
      </div>
      <a
        href="https://wa.me/905353998999?text=Hi%2C%20I%27m%20interested%20in%20the%20P-Shot%20treatment"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-400 hover:bg-green-300 text-gray-900 font-bold text-sm px-4 py-2 rounded-full"
      >
        Book Now
      </a>
    </div>
  );
}

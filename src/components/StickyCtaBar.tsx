import Price from "./Price";
import { whatsappUrl } from "@/lib/site-config";

/** Mobile-only sticky bar. Server component — the price comes from CSS now. */
export default function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-blue-700 text-white px-4 py-3 flex items-center justify-between shadow-lg">
      <div>
        <p className="text-sm font-bold">P-Shot Treatment</p>
        <p className="text-xs">
          Only <Price /> – All Inclusive
        </p>
      </div>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-400 hover:bg-green-300 text-gray-900 font-bold text-sm px-4 py-2 rounded-full"
      >
        Book Now
      </a>
    </div>
  );
}

import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/site-config";

/**
 * Server component. `bottom-24` on mobile clears the sticky CTA bar, which the
 * button previously sat on top of.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with our medical coordinator on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-6 z-50 bg-green-700 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}

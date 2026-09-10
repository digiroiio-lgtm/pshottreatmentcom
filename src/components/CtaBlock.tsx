import Link from "next/link";
import Price from "./Price";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/site-config";

interface Props {
  title?: string;
  subtitle?: string;
}

/**
 * Server component (was client-only for the currency string).
 *
 * The heading is `<h2>`: this block sits between other `<h2>` sections, so the
 * previous `<h3>` broke the document outline that assistive tech and search
 * engines use to understand page structure.
 */
export default function CtaBlock({ title, subtitle }: Props) {
  return (
    <div className="bg-blue-700 text-white rounded-2xl p-8 md:p-10 text-center my-10 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        {title ?? (
          <>
            Get P-Shot Treatment for <Price />
          </>
        )}
      </h2>
      <p className="text-blue-50 mb-6">
        {subtitle ??
          "Same-day procedure. No hidden fees. 1000+ patients treated."}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
        >
          <WhatsAppIcon />
          WhatsApp Now
        </a>
        <Link
          href="/contact"
          className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Free Consultation
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { whatsappUrl } from "@/lib/site-config";

export default function CtaBlock({
  title = "Ask About Treatment Suitability",
  subtitle = "Request the clinician details, protocol, consent information, total price and aftercare plan before you decide.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <aside className="bg-blue-950 text-white rounded-2xl p-8 md:p-10 text-center my-12 mx-4 md:mx-auto max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-7 rounded-full">
          Request an assessment
        </a>
        <Link href="/contact" className="bg-white/10 hover:bg-white/20 font-semibold py-3 px-7 rounded-full">
          What to ask first
        </Link>
      </div>
      <p className="text-xs text-blue-200 mt-5">An enquiry is not a diagnosis, booking confirmation or guarantee of suitability.</p>
    </aside>
  );
}

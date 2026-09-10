"use client";
import Link from "next/link";
import { useState } from "react";
import { useCurrency, type Currency } from "@/context/CurrencyContext";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/price", label: "Price" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/before-after", label: "Before & After" },
  { href: "/side-effects", label: "Side Effects" },
  { href: "/faq", label: "FAQ" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const currencies: { code: Currency; symbol: string; name: string }[] = [
  { code: "GBP", symbol: "£", name: "British Pounds" },
  { code: "EUR", symbol: "€", name: "Euros" },
  { code: "USD", symbol: "$", name: "US Dollars" },
];

export default function Navbar() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-blue-700 font-bold text-xl">P-Shot</span>
            <span className="text-gray-700 text-sm font-medium hidden sm:block">
              Treatment.com
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-700 hover:text-blue-700 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div
              role="group"
              aria-label="Display currency"
              className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 text-xs font-semibold"
            >
              {currencies.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setCurrency(c.code)}
                  aria-pressed={currency === c.code}
                  aria-label={`Show prices in ${c.name}`}
                  className={`px-2 py-0.5 rounded-full transition-colors ${
                    currency === c.code
                      ? "bg-blue-700 text-white"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {c.symbol}
                </button>
              ))}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 text-gray-700"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={!open}
          className="lg:hidden pb-4 border-t border-gray-200 pt-4"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-gray-700 hover:text-blue-700"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencyBadge() {
  const { formatted } = useCurrency();
  return (
    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
      {formatted}
    </span>
  );
}

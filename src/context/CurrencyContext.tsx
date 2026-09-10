"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Currency = "GBP" | "EUR" | "USD";

export const CURRENCY_COOKIE = "currency";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "GBP",
  setCurrency: () => {},
});

/**
 * Tracks the selected currency for interactive affordances only — the nav
 * toggle's pressed state and the price table's highlighted row.
 *
 * The prices the visitor actually reads are rendered by <Price />, revealed by
 * CSS from `data-currency` on <html>, which the inline script in <head> sets
 * before first paint. That split is deliberate: it keeps every page statically
 * rendered while still showing the right price immediately, instead of
 * server-rendering £300 and swapping it after hydration.
 */
export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Starts at GBP on both server and client so the first client render matches
  // the HTML; the effect below syncs it to whatever the pre-paint script chose.
  const [currency, setCurrencyState] = useState<Currency>("GBP");

  useEffect(() => {
    const fromDom = document.documentElement.dataset.currency as
      | Currency
      | undefined;
    if (fromDom && fromDom !== currency) setCurrencyState(fromDom);
    // Only syncing once, from what the pre-paint script already decided.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    document.documentElement.dataset.currency = c;
    // Cookie rather than localStorage: readable by the server if we ever need
    // it, and survives across subdomains. One year, lax.
    document.cookie = `${CURRENCY_COOKIE}=${c};path=/;max-age=31536000;samesite=lax`;
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);

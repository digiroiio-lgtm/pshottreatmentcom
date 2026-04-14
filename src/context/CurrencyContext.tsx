"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Currency = "GBP" | "EUR" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  symbol: string;
  price: string;
  formatted: string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "GBP",
  setCurrency: () => {},
  symbol: "£",
  price: "300",
  formatted: "£300",
});

const MAP: Record<Currency, { symbol: string; price: string }> = {
  GBP: { symbol: "£", price: "300" },
  EUR: { symbol: "€", price: "300" },
  USD: { symbol: "$", price: "300" },
};

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("GBP");

  useEffect(() => {
    const stored = localStorage.getItem("currency") as Currency | null;
    if (stored && MAP[stored]) {
      setCurrencyState(stored);
      return;
    }
    const lang = navigator.language || "";
    if (lang.startsWith("en-US")) setCurrencyState("USD");
    else if (lang.startsWith("en-GB")) setCurrencyState("GBP");
    else {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const euTz = ["Europe/Berlin","Europe/Paris","Europe/Madrid","Europe/Rome","Europe/Amsterdam","Europe/Brussels","Europe/Vienna","Europe/Warsaw","Europe/Prague","Europe/Budapest","Europe/Bucharest","Europe/Sofia","Europe/Athens","Europe/Helsinki","Europe/Stockholm","Europe/Oslo","Europe/Copenhagen","Europe/Dublin","Europe/Lisbon","Europe/Riga","Europe/Tallinn","Europe/Vilnius","Europe/Ljubljana","Europe/Bratislava","Europe/Zagreb","Europe/Nicosia","Europe/Luxembourg","Europe/Malta"];
      if (euTz.includes(tz)) setCurrencyState("EUR");
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const { symbol, price } = MAP[currency];

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol, price, formatted: `${symbol}${price}` }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);

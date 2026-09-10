import { prices } from "@/lib/site-config";

/**
 * Renders the price for all three currencies and lets CSS reveal the right one,
 * based on `data-currency` set on <html> by an inline pre-paint script.
 *
 * This replaces the previous approach, where the server always rendered £300 and
 * a `useEffect` swapped it after mount — visibly flipping the hero's LCP text for
 * every non-UK visitor. Doing it in CSS keeps every page statically rendered,
 * removes the hydration mismatch, and eliminates the layout shift entirely.
 *
 * The inactive currencies stay in the DOM but are `display:none`, so assistive
 * technology and crawlers read exactly one price.
 *
 * Class names are literal strings, never interpolated: Tailwind's scanner only
 * matches literals, and the paired rules in globals.css sit outside `@layer`
 * for the same reason.
 */
const CLASS_BY_CURRENCY: Record<string, string> = {
  GBP: "cur cur-gbp",
  EUR: "cur cur-eur",
  USD: "cur cur-usd",
};

export default function Price({
  className,
  symbolOnly = false,
}: {
  className?: string;
  /** Render just the currency symbol (the amount is printed separately). */
  symbolOnly?: boolean;
}) {
  return (
    <span className={className}>
      {prices.map((p) => (
        <span key={p.currency} className={CLASS_BY_CURRENCY[p.currency]}>
          {symbolOnly ? p.symbol : `${p.symbol}${p.amount}`}
        </span>
      ))}
    </span>
  );
}

"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Price from "./Price";
import { whatsappUrl } from "@/lib/site-config";

const DISMISS_KEY = "exit-popup-dismissed";

/**
 * Exit-intent dialog.
 *
 * Desktop only — it triggers on the pointer leaving the viewport, which never
 * fires on touch. That matters: an unprompted mobile overlay is exactly what
 * Google's intrusive-interstitial guidance penalises.
 *
 * Rewritten for accessibility: it is now a real modal dialog with a focus trap,
 * Escape to close, a background scroll lock, and focus returned to wherever it
 * was. Dismissal persists for the session, so it no longer reappears on every
 * page navigation.
 */
export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Private browsing can throw on write; dismissing still works for this view.
    }
    previouslyFocused.current?.focus();
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Storage unavailable — treat as not dismissed.
    }
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        previouslyFocused.current = document.activeElement as HTMLElement | null;
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  useEffect(() => {
    if (!show) return;

    closeButtonRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [show, dismiss]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
        aria-describedby="exit-popup-body"
        className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl relative"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <p className="text-4xl mb-3" aria-hidden="true">
          🔒
        </p>
        <h2
          id="exit-popup-title"
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          Wait! Don&apos;t Leave Yet
        </h2>
        <p id="exit-popup-body" className="text-gray-700 mb-4">
          Limited Offer: Lock your{" "}
          <strong>
            <Price /> price
          </strong>{" "}
          today before slots fill up.
        </p>
        {/* NOTE: same hard-coded scarcity claim as the hero badge — flagged in
            the SEO report as a consumer-protection risk, left as a business call. */}
        <p className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-6 text-red-800 text-sm font-semibold">
          <span aria-hidden="true">⚡</span> Only 3 slots available this week
        </p>
        <a
          href={whatsappUrl("Hi, I'd like to lock in the P-Shot price")}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors mb-3"
        >
          WhatsApp &amp; Lock My Price
        </a>
        <button
          type="button"
          onClick={dismiss}
          className="text-sm text-gray-600 hover:text-gray-800 underline"
        >
          No thanks, close this
        </button>
      </div>
    </div>
  );
}

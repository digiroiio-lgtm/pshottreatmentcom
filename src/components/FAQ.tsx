"use client";
import { useState } from "react";
import { faqItems } from "@/data/faqData";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about P-Shot PRP treatment in Turkey.
          </p>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

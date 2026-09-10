"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in Vercel runtime logs so a real failure is not silent.
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
        Something went wrong
      </h1>
      <p className="text-gray-700 mb-8">
        This page failed to load. Trying again usually fixes it. If you need to
        reach us, WhatsApp is always available.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={reset}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

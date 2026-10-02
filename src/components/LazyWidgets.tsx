"use client";

import dynamic from "next/dynamic";

// The exit-intent prompt is never needed for first paint, so its code is loaded separately.
const ExitIntent = dynamic(() => import("./ExitIntent"), { ssr: false });

export default function LazyWidgets() {
  return <ExitIntent />;
}

import { ReactNode } from "react";

/**
 * Short, extractable summary block placed directly under the H1 so that both
 * readers and answer engines get the direct answer before the long-form detail.
 */
export default function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
      <h2 className="text-sm font-bold uppercase tracking-wide text-blue-700 mb-2">The short answer</h2>
      <div className="text-gray-800 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

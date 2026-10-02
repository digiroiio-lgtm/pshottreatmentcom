import type { EvidenceLabel } from "@/content/types";

const colors: Record<EvidenceLabel, string> = {
  Established: "bg-green-100 text-green-900 border-green-200",
  Emerging: "bg-sky-100 text-sky-900 border-sky-200",
  Experimental: "bg-amber-100 text-amber-900 border-amber-200",
  Individualised: "bg-slate-100 text-slate-800 border-slate-200",
  Mixed: "bg-amber-50 text-amber-900 border-amber-200",
};

export default function EvidenceChip({ label, small = false, prefix = false }: { label: EvidenceLabel; small?: boolean; prefix?: boolean }) {
  return (
    <span className={`inline-block shrink-0 rounded-full border font-semibold ${colors[label]} ${small ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1"}`}>
      {prefix ? `Evidence status: ${label}` : label}
    </span>
  );
}

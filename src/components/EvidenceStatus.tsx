export default function EvidenceStatus({
  status,
  children,
}: {
  status: "Established" | "Moderate" | "Limited" | "Uncertain" | "Not medical evidence";
  children: React.ReactNode;
}) {
  const colors = {
    Established: "bg-green-50 border-green-200 text-green-950",
    Moderate: "bg-blue-50 border-blue-200 text-blue-950",
    Limited: "bg-amber-50 border-amber-200 text-amber-950",
    Uncertain: "bg-orange-50 border-orange-200 text-orange-950",
    "Not medical evidence": "bg-gray-50 border-gray-200 text-gray-900",
  };

  return (
    <aside className={`rounded-2xl border p-5 ${colors[status]}`}>
      <p className="text-xs font-bold uppercase tracking-wide mb-2">Evidence status: {status}</p>
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  );
}

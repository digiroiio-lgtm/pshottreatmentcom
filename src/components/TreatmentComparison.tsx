import { comparisonHeaders, comparisonRows } from "@/content/treatments";
import TrackView from "./TrackView";

export default function TreatmentComparison({ heading = "Compare ED treatments", intro, highlight = [] }: { heading?: string; intro?: string; highlight?: string[] }) {
  return (
    <TrackView event="treatment_comparison_view">
      <section aria-labelledby="comparison-heading" data-comparison>
        <h2 id="comparison-heading" className="text-2xl font-bold text-slate-950 mb-2">{heading}</h2>
        <p className="text-slate-700 mb-4">{intro ?? "The most appropriate treatment depends on the underlying cause of ED."}</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm min-w-[860px]">
            <caption className="sr-only">Comparison of ED treatments by candidate, invasiveness, sessions, recovery, concept and assessment</caption>
            <thead className="bg-slate-50 text-slate-800">
              <tr>{comparisonHeaders.map((header) => <th key={header} scope="col" className="px-4 py-3 font-semibold align-bottom">{header}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row) => (
                <tr key={row.id} className={highlight.includes(row.id) ? "bg-teal-50" : "bg-white"}>
                  <th scope="row" className="px-4 py-3 font-semibold text-slate-950 align-top">{row.name}</th>
                  {row.cells.map((cell, index) => <td key={index} className="px-4 py-3 text-slate-700 align-top">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 mt-2">A guide for discussion with your urologist, not a ranking or recommendation. Regenerative therapies are experimental or investigational for ED.</p>
      </section>
    </TrackView>
  );
}

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-600"
    >
      <span className="sr-only">Loading…</span>
      <div aria-hidden="true" className="space-y-4">
        <div className="h-8 bg-gray-100 rounded-lg animate-pulse mx-auto w-2/3" />
        <div className="h-4 bg-gray-100 rounded animate-pulse mx-auto w-1/2" />
        <div className="h-4 bg-gray-100 rounded animate-pulse mx-auto w-5/6" />
      </div>
    </div>
  );
}

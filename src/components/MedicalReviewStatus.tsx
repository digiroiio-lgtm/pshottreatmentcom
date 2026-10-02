import { routeByPath } from "@/lib/site-config";

export default function MedicalReviewStatus({ path }: { path: string }) {
  const route = routeByPath(path);
  if (!route) return null;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-600 border-y border-gray-200 py-3">
      <span>Last substantively updated: <time dateTime={route.modified}>{route.modified}</time></span>
      <span>Medical reviewer: not currently published</span>
      <span>Educational information, not a diagnosis</span>
    </div>
  );
}

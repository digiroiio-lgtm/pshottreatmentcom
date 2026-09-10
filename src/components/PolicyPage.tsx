import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import { routeByPath } from "@/lib/site-config";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * Shared layout for the legal/provenance pages so all four stay consistent and
 * each one automatically carries its own breadcrumb graph and update date.
 */
export default function PolicyPage({
  path,
  name,
  heading,
  intro,
  children,
}: {
  path: string;
  name: string;
  heading: string;
  intro: string;
  children: React.ReactNode;
}) {
  const route = routeByPath(path);
  const trail = [
    { name: "Home", path: "/" },
    { name, path },
  ];

  return (
    <div className="pt-2">
      <JsonLd path={path} breadcrumb={trail} />
      <Breadcrumbs trail={trail} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          {heading}
        </h1>
        <p className="text-lg text-gray-700 mb-2">{intro}</p>
        {route && (
          <p className="text-xs text-gray-600 mb-8">
            Last updated{" "}
            <time dateTime={route.modified}>{formatDate(route.modified)}</time>
          </p>
        )}
        <div className="space-y-8 text-gray-800 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

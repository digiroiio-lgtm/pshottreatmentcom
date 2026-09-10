import Link from "next/link";
import type { BreadcrumbTrail } from "@/lib/schema";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by
 * <JsonLd breadcrumb={...} /> — pass the same array to both so the markup and
 * the rendered path never diverge.
 */
export default function Breadcrumbs({ trail }: { trail: BreadcrumbTrail }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="text-gray-700 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-blue-700 underline"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-gray-400 px-1">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

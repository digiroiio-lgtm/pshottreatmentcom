import Link from "next/link";

export interface Crumb {
  href: string;
  label: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-gray-300">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-gray-700 font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-blue-700 transition-colors">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

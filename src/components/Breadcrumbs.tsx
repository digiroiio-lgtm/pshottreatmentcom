import Link from "next/link";

export type BreadcrumbItem = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-5">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-gray-700">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-blue-700">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

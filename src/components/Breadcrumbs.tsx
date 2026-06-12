import Link from "next/link";
import { SITE_URL } from "@/lib/site-config";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
        <li>
          <Link href="/" className="hover:text-blue-700">
            หน้าแรก
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbsToSchema(items: BreadcrumbItem[]) {
  const all = [{ label: "หน้าแรก", href: "/" }, ...items];
  return all.map((item) => ({
    name: item.label,
    url: item.href ? `${SITE_URL}${item.href}` : SITE_URL,
  }));
}

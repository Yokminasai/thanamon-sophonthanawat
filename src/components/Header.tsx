import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-neutral-900 hover:text-blue-700"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="เมนูหลัก" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-sm font-medium text-neutral-700">
            เมนู
          </summary>
          <nav
            aria-label="เมนูมือถือ"
            className="absolute right-0 mt-2 w-48 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

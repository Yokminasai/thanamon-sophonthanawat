import Link from "next/link";
import { OFFICIAL_LINKS, SITE_NAME, KEYWORD, SITE_URL, NAV_LINKS } from "@/lib/site-config";

const officialEntries = [
  OFFICIAL_LINKS.wordpress,
  OFFICIAL_LINKS.website,
  OFFICIAL_LINKS.instagram,
  OFFICIAL_LINKS.youtube,
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-lg font-bold text-neutral-900">
              {KEYWORD}
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              เว็บไซต์ข้อมูลและประวัติของ {SITE_NAME} — Entity Hub สำหรับ SEO,
              Personal Branding และ Online Reputation Management
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-900">
              เมนู
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-blue-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-900">
              Official Links
            </h3>
            <ul className="space-y-2">
              {officialEntries.map((entry) => (
                <li key={entry.url}>
                  <a
                    href={entry.url}
                    rel="me noopener noreferrer"
                    target="_blank"
                    className="text-sm text-neutral-600 hover:text-blue-700"
                  >
                    {entry.labelTh}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. สงวนลิขสิทธิ์.
          </p>
          <a
            href={`${SITE_URL}/feed.xml`}
            className="mt-2 inline-block text-blue-700 hover:underline"
          >
            RSS Feed
          </a>
        </div>
      </div>
    </footer>
  );
}

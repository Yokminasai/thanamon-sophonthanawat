import Link from "next/link";
import { Breadcrumbs, breadcrumbsToSchema } from "@/components/Breadcrumbs";
import { ArticleContent } from "@/components/ArticleContent";
import { JsonLd } from "@/components/JsonLd";
import { aboutSections } from "@/content/about";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { KEYWORD, OFFICIAL_LINKS, SAME_AS } from "@/lib/site-config";

export const metadata = createMetadata({
  title: `เกี่ยวกับ ${KEYWORD} | ประวัติและความเชี่ยวชาญ`,
  description: `ประวัติฉบับสมบูรณ์ของ ${KEYWORD} ความเชี่ยวชาญด้าน SEO Digital Marketing Personal Branding และ Official Profiles`,
  path: "/about/",
});

export default function AboutPage() {
  const crumbs = breadcrumbsToSchema([{ label: "เกี่ยวกับ", href: "/about/" }]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "เกี่ยวกับ" }]} />
        <h1 className="mb-6 text-4xl font-bold text-neutral-900">
          เกี่ยวกับ {KEYWORD}
        </h1>
        <ArticleContent sections={aboutSections} />
        <section className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            Official Profiles — {KEYWORD}
          </h2>
          <ul className="space-y-3">
            {SAME_AS.map((url) => (
              <li key={url}>
                <a
                  href={url}
                  rel="me noopener noreferrer"
                  target="_blank"
                  className="text-blue-700 hover:underline"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-neutral-600">
            อ่านบทความเพิ่มเติมของ {KEYWORD} ได้ที่{" "}
            <a
              href={OFFICIAL_LINKS.wordpress.url}
              rel="me noopener noreferrer"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              {OFFICIAL_LINKS.wordpress.labelTh}
            </a>
          </p>
          <Link
            href="/official-links/"
            className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline"
          >
            ดู Official Links ทั้งหมด →
          </Link>
        </section>
      </div>
    </div>
  );
}

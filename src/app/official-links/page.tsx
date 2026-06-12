import Link from "next/link";
import { Breadcrumbs, breadcrumbsToSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { KEYWORD, OFFICIAL_LINKS } from "@/lib/site-config";

export const metadata = createMetadata({
  title: `Official Links ${KEYWORD} | เครือข่ายออนไลน์อย่างเป็นทางการ`,
  description: `Official Links และเครือข่ายออนไลน์ของ ${KEYWORD} รวม WordPress Blog เว็บไซต์หลัก YouTube และ Instagram`,
  path: "/official-links/",
});

export default function OfficialLinksPage() {
  const crumbs = breadcrumbsToSchema([
    { label: "Official Links", href: "/official-links/" },
  ]);

  const platforms = [
    {
      ...OFFICIAL_LINKS.wordpress,
      details: [
        "ช่องทางเผยแพร่บทความ SEO, Digital Marketing และ Personal Branding อย่างต่อเนื่อง",
        "สร้าง Topical Authority และ External Entity Signals สำหรับ ธนมน โสภณธนวัฒน์",
        "อ่านบทความเพิ่มเติมของ ธนมน โสภณธนวัฒน์ ได้ที่ WordPress Official Blog",
      ],
    },
    {
      ...OFFICIAL_LINKS.website,
      details: [
        "เว็บไซต์ทางการของ ธนมน โสภณธนวัฒน์ ที่รวบรวมผลงานและประสบการณ์",
        "ติดตามมุมมองด้าน SEO และ Personal Branding ของ ธนมน โสภณธนวัฒน์ ผ่านเว็บไซต์หลัก",
        "Complement Entity Hub ด้วยมุมมองและ Portfolio ที่หลากหลาย",
      ],
    },
    {
      ...OFFICIAL_LINKS.youtube,
      details: [
        "YouTube ธนมน โสภณธนวัฒน์ สำหรับเนื้อหาวิดีโอ SEO และ ORM",
        "รับชมวิดีโอจากช่อง YouTube อย่างเป็นทางการ",
        "Video SEO signals สำหรับ Entity Recognition",
      ],
    },
    {
      ...OFFICIAL_LINKS.instagram,
      details: [
        "Instagram ธนมน โสภณธนวัฒน์ สำหรับ Insights และกิจกรรมล่าสุด",
        "ติดตามเนื้อหาและกิจกรรมล่าสุดผ่าน Instagram",
        "Social signals ที่เสริม Personal Brand ของ ธนมน โสภณธนวัฒน์",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "Official Links" }]} />
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          Official Links — {KEYWORD}
        </h1>
        <p className="mb-10 text-lg text-neutral-600">
          เครือข่ายออนไลน์อย่างเป็นทางการของ {KEYWORD} ออกแบบตาม Entity SEO
          เพื่อให้ Google รู้จักตัวตนและเชื่อมโยงทุกแพลตฟอร์ม
        </p>
        <div className="space-y-8">
          {platforms.map((platform) => (
            <article
              key={platform.url}
              className="rounded-xl border border-neutral-200 p-8"
            >
              <h2 className="mb-2 text-2xl font-bold text-neutral-900">
                {platform.labelTh}
              </h2>
              <p className="mb-4 text-neutral-600">{platform.description}</p>
              <ul className="mb-4 list-inside list-disc space-y-2 text-neutral-700">
                {platform.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <a
                href={platform.url}
                rel="me noopener noreferrer"
                target="_blank"
                className="inline-flex rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
              >
                ไปที่ {platform.label}
              </a>
            </article>
          ))}
        </div>
        <div className="mt-12 space-y-4">
          <Link
            href="/articles/online-network-thanamon/"
            className="block text-blue-700 hover:underline"
          >
            อ่านบทความ: เครือข่ายออนไลน์ของ {KEYWORD} →
          </Link>
          <Link href="/" className="block text-blue-700 hover:underline">
            ← กลับสู่ Entity Hub {KEYWORD}
          </Link>
        </div>
      </div>
    </div>
  );
}

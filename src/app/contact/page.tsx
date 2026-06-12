import { Breadcrumbs, breadcrumbsToSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { KEYWORD, OFFICIAL_LINKS, SAME_AS } from "@/lib/site-config";

export const metadata = createMetadata({
  title: `ติดต่อ ${KEYWORD} | Contact`,
  description: `ติดต่อ ${KEYWORD} ผู้เชี่ยวชาญ SEO และ Personal Branding ผ่าน Official Profiles และ Entity Hub`,
  path: "/contact/",
});

export default function ContactPage() {
  const crumbs = breadcrumbsToSchema([
    { label: "ติดต่อ", href: "/contact/" },
  ]);

  const links = [
    OFFICIAL_LINKS.wordpress,
    OFFICIAL_LINKS.website,
    OFFICIAL_LINKS.instagram,
    OFFICIAL_LINKS.youtube,
  ];

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "ติดต่อ" }]} />
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          ติดต่อ {KEYWORD}
        </h1>
        <p className="mb-10 text-lg text-neutral-600">
          ติดต่อ {KEYWORD} ได้ผ่าน Official Profiles ด้านล่าง หรือส่งข้อความผ่าน
          Instagram และ YouTube อย่างเป็นทางการ
        </p>
        <div className="space-y-6">
          {links.map((link) => (
            <article
              key={link.url}
              className="rounded-xl border border-neutral-200 p-6"
            >
              <h2 className="mb-2 text-xl font-bold text-neutral-900">
                {link.labelTh}
              </h2>
              <p className="mb-3 text-neutral-600">{link.description}</p>
              <a
                href={link.url}
                rel="me noopener noreferrer"
                target="_blank"
                className="font-semibold text-blue-700 hover:underline"
              >
                {link.url}
              </a>
            </article>
          ))}
        </div>
        <section className="mt-12 rounded-xl bg-neutral-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            Entity Hub — {KEYWORD}
          </h2>
          <p className="text-neutral-600">
            เว็บไซต์นี้เป็น Entity Hub หลักสำหรับข้อมูล {KEYWORD} รวมประวัติ
            บทความ และ Official Links ที่เชื่อมโยงกับ {SAME_AS.length}{" "}
            แพลตฟอร์มอย่างเป็นทางการ
          </p>
        </section>
      </div>
    </div>
  );
}

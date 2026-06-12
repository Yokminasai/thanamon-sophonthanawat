import Image from "next/image";
import Link from "next/link";
import { KEYWORD, OFFICIAL_LINKS } from "@/lib/site-config";
import { aboutBioShort } from "@/content/about";

export function Hero() {
  return (
    <section className="border-b border-neutral-100 bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Personal Brand · Entity SEO
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            {KEYWORD}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-neutral-600">
            {aboutBioShort} — เว็บไซต์ Entity Hub นี้รวบรวมประวัติ ผลงาน
            ความเชี่ยวชาญ และข้อมูลอ้างอิงของ {KEYWORD}{" "}
            สำหรับ Google Search และผู้ที่ต้องการข้อมูลที่น่าเชื่อถือ
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about/"
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              เกี่ยวกับ {KEYWORD}
            </Link>
            <Link
              href="/articles/who-is-thanamon-sophonthanawat/"
              className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:border-blue-700 hover:text-blue-700"
            >
              อ่านบทความฉบับสมบูรณ์
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm">
          <Image
            src="/profile.svg"
            alt={`${KEYWORD} — ภาพโปรไฟล์ผู้เชี่ยวชาญ SEO และ Personal Branding`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}

export function OfficialLinksSection() {
  const links = [
    OFFICIAL_LINKS.wordpress,
    OFFICIAL_LINKS.website,
    OFFICIAL_LINKS.instagram,
    OFFICIAL_LINKS.youtube,
  ];

  return (
    <section className="py-16 sm:py-20" id="official-links">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          Official Links — {KEYWORD}
        </h2>
        <p className="mb-10 max-w-3xl text-neutral-600">
          เชื่อมโยง Entity ของ {KEYWORD} ผ่าน Official Profiles ที่ Google
          และผู้ใช้สามารถอ้างอิงได้
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              rel="me noopener noreferrer"
              target="_blank"
              className="group rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-blue-700 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-neutral-900 group-hover:text-blue-700">
                {link.labelTh}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {link.description}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/official-links/"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ดูรายละเอียด Official Links ทั้งหมด →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DigitalPresenceSection() {
  return <OfficialLinksSection />;
}

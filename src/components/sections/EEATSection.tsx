import Link from "next/link";
import { KEYWORD, OFFICIAL_LINKS, SAME_AS } from "@/lib/site-config";

export function EEATSection() {
  return (
    <section className="py-16 sm:py-20" id="eeat">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          E-E-A-T — {KEYWORD}
        </h2>
        <h3 className="mb-10 text-xl font-medium text-neutral-600">
          Experience · Expertise · Authoritativeness · Trustworthiness
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-neutral-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-neutral-900">
              Author Information
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              {KEYWORD} เป็นผู้เขียนและเจ้าของเนื้อหาทั้งหมดบน Entity Hub นี้
              ด้วยประสบการณ์จริงด้าน SEO, Digital Marketing และ Personal
              Branding ที่สะท้อนในผลงานและ Official Profiles
            </p>
          </article>
          <article className="rounded-xl border border-neutral-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-neutral-900">
              External Profiles
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
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
          </article>
          <article className="rounded-xl border border-neutral-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-neutral-900">
              Social Proof
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              ผลงาน Entity Hub, WordPress Blog, YouTube Channel และ Instagram
              ของ {KEYWORD} สร้าง Social Proof ผ่านเนื้อหา Authority
              ที่เผยแพร่อย่างต่อเนื่องและเชื่อมโยงกัน
            </p>
          </article>
          <article className="rounded-xl border border-neutral-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-neutral-900">
              Digital Footprint
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              Digital Footprint ของ {KEYWORD} ครอบคลุมเว็บไซต์ Authority,
              บทความ SEO, วิดีโอ YouTube และโซcial media ที่ใช้ sameAs Schema
              เพื่อ Entity Recognition
            </p>
            <Link
              href="/official-links/"
              className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
            >
              ดู {OFFICIAL_LINKS.wordpress.labelTh} →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { KEYWORD } from "@/lib/site-config";
import { aboutSections } from "@/content/about";
import { ArticleContent } from "@/components/ArticleContent";

export function AboutSection() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20" id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          เกี่ยวกับ {KEYWORD}
        </h2>
        <h3 className="mb-8 text-xl font-medium text-neutral-600">
          ประวัติ ความเชี่ยวชาญ และแนวคิดการทำงาน
        </h3>
        <ArticleContent sections={aboutSections.slice(0, 4)} />
        <Link
          href="/about/"
          className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:underline"
        >
          อ่านประวัติฉบับเต็มของ {KEYWORD} →
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { KEYWORD } from "@/lib/site-config";
import { getArticleBySlug } from "@/content/articles";
import { ArticleContent } from "@/components/ArticleContent";

export function LongArticleSection() {
  const article = getArticleBySlug("who-is-thanamon-sophonthanawat");
  if (!article) return null;

  return (
    <section className="py-16 sm:py-20" id="article">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          {article.title}
        </h2>
        <h3 className="mb-8 text-xl font-medium text-neutral-600">
          บทความ Authority เกี่ยวกับ {KEYWORD}
        </h3>
        <ArticleContent sections={article.sections.slice(0, 6)} />
        <Link
          href={`/articles/${article.slug}/`}
          className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          อ่านบทความฉบับเต็ม — {KEYWORD} คือใคร
        </Link>
      </div>
    </section>
  );
}

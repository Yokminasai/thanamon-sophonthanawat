import Link from "next/link";
import { Breadcrumbs, breadcrumbsToSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articles } from "@/content/articles";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { KEYWORD } from "@/lib/site-config";

export const metadata = createMetadata({
  title: `บทความ ${KEYWORD} | SEO Personal Branding Entity SEO`,
  description: `บทความและความรู้จาก ${KEYWORD} ครอบคลุม SEO ORM Reverse SEO Entity SEO และ Personal Branding`,
  path: "/articles/",
});

export default function ArticlesPage() {
  const crumbs = breadcrumbsToSchema([
    { label: "บทความ", href: "/articles/" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "บทความ" }]} />
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          บทความ — {KEYWORD}
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-neutral-600">
          รวมบทความ SEO, Digital Marketing และ Personal Branding โดย{" "}
          {KEYWORD} เพื่อสร้าง Topical Authority และ Entity Recognition
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-xl border border-neutral-200 p-6 transition hover:border-blue-700 hover:shadow-sm"
            >
              <div className="mb-2 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-medium text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-xl font-bold text-neutral-900">
                <Link
                  href={`/articles/${article.slug}/`}
                  className="hover:text-blue-700"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mb-4 text-sm text-neutral-600">{article.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>{article.readingTime} นาทีในการอ่าน</span>
                <Link
                  href={`/articles/${article.slug}/`}
                  className="font-semibold text-blue-700 hover:underline"
                >
                  อ่านต่อ →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

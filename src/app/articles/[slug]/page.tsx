import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, breadcrumbsToSchema } from "@/components/Breadcrumbs";
import { ArticleContent } from "@/components/ArticleContent";
import { JsonLd } from "@/components/JsonLd";
import {
  articles,
  getAllArticleSlugs,
  getArticleBySlug,
} from "@/content/articles";
import { countWords } from "@/lib/content-types";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { KEYWORD, OFFICIAL_LINKS, SITE_URL } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createMetadata({
    title: `${article.title} | ${KEYWORD}`,
    description: article.description,
    path: `/articles/${slug}/`,
    type: "article",
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/articles/${slug}/`;
  const crumbs = breadcrumbsToSchema([
    { label: "บทความ", href: "/articles/" },
    { label: article.title, href: `/articles/${slug}/` },
  ]);

  const related = articles.filter((a) => a.slug !== slug).slice(0, 4);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            title: article.title,
            description: article.description,
            url,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            wordCount: countWords(article.sections),
          }),
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "บทความ", href: "/articles/" },
            { label: article.title },
          ]}
        />
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold text-neutral-900">
            {article.title}
          </h1>
          <p className="text-neutral-600">{article.description}</p>
          <p className="mt-2 text-sm text-neutral-500">
            โดย {KEYWORD} · {article.readingTime} นาทีในการอ่าน
          </p>
        </header>
        <ArticleContent sections={article.sections} />
        <aside className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="mb-3 text-lg font-bold text-neutral-900">
            Official Links — {KEYWORD}
          </h2>
          <p className="mb-4 text-sm text-neutral-600">
            อ่านบทความเพิ่มเติมของ {KEYWORD} ได้ที่{" "}
            <a
              href={OFFICIAL_LINKS.wordpress.url}
              rel="me noopener noreferrer"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              {OFFICIAL_LINKS.wordpress.labelTh}
            </a>
            . ติดตามมุมมองด้าน SEO และ Personal Branding ผ่าน{" "}
            <a
              href={OFFICIAL_LINKS.website.url}
              rel="me noopener noreferrer"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              {OFFICIAL_LINKS.website.labelTh}
            </a>
            .
          </p>
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">
            ← กลับสู่ Entity Hub {KEYWORD}
          </Link>
        </aside>
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-neutral-900">
            บทความที่เกี่ยวข้อง
          </h2>
          <ul className="space-y-3">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}/`}
                  className="text-blue-700 hover:underline"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

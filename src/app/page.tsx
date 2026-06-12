import Link from "next/link";
import { Hero, OfficialLinksSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { LongArticleSection } from "@/components/sections/LongArticleSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { EEATSection } from "@/components/sections/EEATSection";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { faqItems } from "@/content/faq";
import { articles } from "@/content/articles";
import { KEYWORD } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ExpertiseSection />
      <LongArticleSection />
      <OfficialLinksSection />
      <EEATSection />
      <FAQSection />
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900">
            บทความล่าสุด — {KEYWORD}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article) => (
              <article
                key={article.slug}
                className="rounded-xl border border-neutral-200 p-6 transition hover:border-blue-700 hover:shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  <Link
                    href={`/articles/${article.slug}/`}
                    className="hover:text-blue-700"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mb-4 text-sm text-neutral-600">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}/`}
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  อ่านต่อ →
                </Link>
              </article>
            ))}
          </div>
          <Link
            href="/articles/"
            className="mt-8 inline-block text-sm font-semibold text-blue-700 hover:underline"
          >
            ดูบทความทั้งหมด →
          </Link>
        </div>
      </section>
    </>
  );
}

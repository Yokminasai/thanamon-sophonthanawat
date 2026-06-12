import Link from "next/link";
import { Breadcrumbs, breadcrumbsToSchema } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { portfolioProjects } from "@/content/shared";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { KEYWORD } from "@/lib/site-config";

export const metadata = createMetadata({
  title: `ผลงาน ${KEYWORD} | Portfolio และโครงการ`,
  description: `ผลงานและโครงการของ ${KEYWORD} รวม Entity Hub SEO Content Ecosystem และ Online Reputation Management`,
  path: "/portfolio/",
});

export default function PortfolioPage() {
  const crumbs = breadcrumbsToSchema([
    { label: "ผลงาน", href: "/portfolio/" },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: "ผลงาน" }]} />
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          ผลงาน — {KEYWORD}
        </h1>
        <p className="mb-10 max-w-3xl text-lg text-neutral-600">
          ผลงานและโครงการที่แสดงความเชี่ยวชาญของ {KEYWORD} ด้าน SEO, Entity
          Hub Architecture และ Personal Branding
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {portfolioProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-neutral-200 p-8"
            >
              <h2 className="mb-3 text-xl font-bold text-neutral-900">
                {project.title}
              </h2>
              <p className="mb-4 text-neutral-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/articles/"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            อ่านบทความของ {KEYWORD} →
          </Link>
          <Link
            href="/contact/"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ติดต่อ {KEYWORD} →
          </Link>
        </div>
      </div>
    </div>
  );
}

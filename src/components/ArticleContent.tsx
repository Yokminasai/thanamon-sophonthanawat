import type { ArticleSection } from "@/lib/content-types";

type ArticleContentProps = {
  sections: ArticleSection[];
};

export function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-headings:text-neutral-900 prose-a:text-blue-700 prose-p:text-neutral-700 prose-p:leading-relaxed">
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          {section.heading && section.headingLevel === 2 && (
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">
              {section.heading}
            </h2>
          )}
          {section.heading && section.headingLevel === 3 && (
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              {section.heading}
            </h3>
          )}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-4 leading-relaxed text-neutral-700">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

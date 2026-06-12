export type ArticleSection = {
  heading?: string;
  headingLevel?: 2 | 3;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  tags: string[];
  sections: ArticleSection[];
};

export function sectionsToHtml(sections: ArticleSection[]): string {
  return sections
    .map((section) => {
      const heading =
        section.heading && section.headingLevel
          ? `<h${section.headingLevel}>${section.heading}</h${section.headingLevel}>`
          : "";
      const body = section.paragraphs.map((p) => `<p>${p}</p>`).join("\n");
      return `${heading}\n${body}`;
    })
    .join("\n");
}

export function countWords(sections: ArticleSection[]): number {
  const text = sections.flatMap((s) => s.paragraphs).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function expandSections(
  base: ArticleSection[],
  fillerParagraphs: string[],
  targetWords: number
): ArticleSection[] {
  const result = [...base];
  let words = countWords(result);
  let i = 0;
  while (words < targetWords && fillerParagraphs.length > 0) {
    const paragraph = fillerParagraphs[i % fillerParagraphs.length];
    const last = result[result.length - 1];
    if (last) {
      last.paragraphs.push(paragraph);
    } else {
      result.push({ paragraphs: [paragraph] });
    }
    words = countWords(result);
    i++;
  }
  return result;
}

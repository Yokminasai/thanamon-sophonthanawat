import {
  DEFAULT_DESCRIPTION,
  KEYWORD,
  OFFICIAL_LINKS,
  SAME_AS,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_URL,
} from "./site-config";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_EN, "Thanamon Soponthanawat"],
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/profile.svg`,
    jobTitle: "ผู้เชี่ยวชาญ SEO และ Personal Branding",
    knowsAbout: [
      "Search Engine Optimization",
      "Digital Marketing",
      "Online Reputation Management",
      "Reverse SEO",
      "Content Strategy",
      "Entity SEO",
      "Personal Branding",
    ],
    sameAs: SAME_AS,
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: `${SITE_NAME} Digital Brand`,
      url: SITE_URL,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: `${SITE_NAME} — Authority Hub`,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    logo: `${SITE_URL}/profile.svg`,
    description: `ศูนย์กลางข้อมูลและความเชี่ยวชาญของ ${KEYWORD}`,
    founder: {
      "@id": `${SITE_URL}/#person`,
    },
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "th-TH",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    author: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  wordCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    inLanguage: "th-TH",
    wordCount: options.wordCount,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: `${SITE_URL}/og-image.svg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": options.url,
    },
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
    url: SITE_URL,
    name: `${KEYWORD} — Profile Page`,
    description: DEFAULT_DESCRIPTION,
  };
}

export const officialLinksForSchema = [
  OFFICIAL_LINKS.wordpress,
  OFFICIAL_LINKS.website,
  OFFICIAL_LINKS.instagram,
  OFFICIAL_LINKS.youtube,
];

import type { Metadata } from "next";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  KEYWORD,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "./site-config";

type PageMetaOptions = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata(options: PageMetaOptions = {}): Metadata {
  const title = options.title ?? DEFAULT_TITLE;
  const description = options.description ?? DEFAULT_DESCRIPTION;
  const url = options.path ? `${SITE_URL}${options.path}` : SITE_URL;

  return {
    title,
    description,
    keywords: [
      KEYWORD,
      "ธนมน โสภณธนวัฒน์ SEO",
      "Personal Branding",
      "Online Reputation Management",
      "Entity SEO",
      "Digital Marketing",
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "th_TH",
      type: options.type ?? "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${KEYWORD} — เว็บไซต์ข้อมูลและประวัติอย่างเป็นทางการ`,
        },
      ],
      ...(options.publishedTime && { publishedTime: options.publishedTime }),
      ...(options.modifiedTime && { modifiedTime: options.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "zkmlydt5tD5UCjc7yMKPK17nz5OPCRm5r5EglKmANKY",
    },
  };
}

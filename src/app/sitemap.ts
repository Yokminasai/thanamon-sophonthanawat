import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { SITE_URL } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about/",
    "/articles/",
    "/portfolio/",
    "/contact/",
    "/official-links/",
  ];

  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}/`,
      lastModified: new Date(article.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

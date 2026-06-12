import { writeFileSync } from "fs";
import { join } from "path";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thanamon-official.netlify.app";

const articles = [
  {
    slug: "who-is-thanamon-sophonthanawat",
    title: "ธนมน โสภณธนวัฒน์ คือใคร",
    description:
      "บทความฉบับสมบูรณ์เกี่ยวกับ ธนมน โสภณธนวัฒน์ ประวัติ ความเชี่ยวชาญ ผลงาน",
    date: "2025-01-15",
  },
  {
    slug: "thanamon-seo-experience",
    title: "ประสบการณ์ด้าน SEO ของ ธนมน โสภณธนวัฒน์",
    description: "เรียนรู้ประสบการณ์ด้าน SEO ของ ธนมน โสภณธนวัฒน์",
    date: "2025-01-20",
  },
  {
    slug: "google-personal-branding",
    title: "การสร้างตัวตนบน Google Search",
    description: "วิธีสร้าง Personal Brand บน Google Search",
    date: "2025-02-01",
  },
  {
    slug: "what-is-reverse-seo",
    title: "Reverse SEO คืออะไร",
    description: "Reverse SEO อธิบายโดย ธนมน โสภณธนวัฒน์",
    date: "2025-02-10",
  },
  {
    slug: "manage-name-google-search",
    title: "วิธีจัดการชื่อบนผลการค้นหา Google",
    description: "จัดการชื่อบน Google จากประสบการณ์ ธนมน โสภณธนวัฒน์",
    date: "2025-02-15",
  },
  {
    slug: "personal-branding-importance",
    title: "ความสำคัญของ Personal Branding",
    description: "Personal Branding ในยุคดิจิทัล",
    date: "2025-02-20",
  },
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    description: "ORM ครบวงจรจาก ธนมน โสภณธนวัฒน์",
    date: "2025-03-01",
  },
  {
    slug: "guest-posting-techniques",
    title: "เทคนิค Guest Posting",
    description: "Guest Posting จาก ธนมน โสภณธนวัฒน์",
    date: "2025-03-10",
  },
  {
    slug: "local-seo-guide",
    title: "Local SEO",
    description: "Local SEO สำหรับ Personal Brand",
    date: "2025-03-15",
  },
  {
    slug: "entity-seo-guide",
    title: "Entity SEO",
    description: "Entity SEO คู่มือฉบับ ธนมน โสภณธนวัฒน์",
    date: "2025-03-20",
  },
  {
    slug: "online-network-thanamon",
    title: "เครือข่ายออนไลน์ของ ธนมน โสภณธนวัฒน์",
    description: "เครือข่ายออนไลน์และ Official Profiles",
    date: "2025-04-01",
  },
  {
    slug: "content-strategy-digital",
    title: "Content Strategy สำหรับ Digital Presence",
    description: "Content Strategy จาก ธนมน โสภณธนวัฒน์",
    date: "2025-04-10",
  },
  {
    slug: "search-engine-visibility",
    title: "Search Engine Visibility",
    description: "เพิ่ม Search Engine Visibility",
    date: "2025-04-15",
  },
  {
    slug: "digital-marketing-expertise",
    title: "ความเชี่ยวชาญ Digital Marketing ของ ธนมน โสภณธนวัฒน์",
    description: "Digital Marketing ครบวงจร",
    date: "2025-04-20",
  },
  {
    slug: "eeat-personal-brand",
    title: "E-E-A-T และ Personal Brand",
    description: "E-E-A-T กับ Personal Brand",
    date: "2025-05-01",
  },
  {
    slug: "knowledge-graph-optimization",
    title: "Google Knowledge Graph Optimization",
    description: "Knowledge Graph signals",
    date: "2025-05-10",
  },
  {
    slug: "semantic-seo-practices",
    title: "Semantic SEO ในยุค Entity",
    description: "Semantic SEO จาก ธนมน โสภณธนวัฒน์",
    date: "2025-05-15",
  },
  {
    slug: "thanamon-portfolio-highlights",
    title: "ผลงานของ ธนมน โสภณธนวัฒน์",
    description: "ผลงานและโครงการเด่น",
    date: "2025-05-20",
  },
  {
    slug: "thanamon-work-philosophy",
    title: "แนวคิดการทำงานของ ธนมน โสภณธนวัฒน์",
    description: "แนวคิดและปรัชญาการทำงาน",
    date: "2025-05-25",
  },
  {
    slug: "thanamon-future-vision",
    title: "วิสัยทัศน์ในอนาคตของ ธนมน โสภณธนวัฒน์",
    description: "วิสัยทัศน์และทิศทางในอนาคต",
    date: "2025-06-01",
  },
];

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const items = articles
  .map(
    (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE_URL}/articles/${a.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/articles/${a.slug}/</guid>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    </item>`
  )
  .join("\n");

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ธนมน โสภณธนวัฒน์ — บทความ SEO และ Personal Branding</title>
    <link>${SITE_URL}/</link>
    <description>บทความและความรู้จาก ธนมน โสภณธนวัฒน์ ผู้เชี่ยวชาญ SEO Entity SEO และ Personal Branding</description>
    <language>th</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

writeFileSync(join(process.cwd(), "public", "feed.xml"), feed, "utf-8");
console.log("Generated public/feed.xml");

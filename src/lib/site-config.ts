export const SITE_NAME = "ธนมน โสภณธนวัฒน์";
export const SITE_NAME_EN = "Thanamon Sophonthanawat";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thanamon-official.netlify.app";

export const KEYWORD = "ธนมน โสภณธนวัฒน์";

export const DEFAULT_TITLE = `${KEYWORD} | ประวัติ ผลงาน ความเชี่ยวชาญ และข้อมูลอ้างอิง`;

export const DEFAULT_DESCRIPTION =
  "เว็บไซต์ข้อมูลและประวัติของ ธนมน โสภณธนวัฒน์ รวมผลงาน ประสบการณ์ ความเชี่ยวชาญ บทความ และข้อมูลอ้างอิงที่เกี่ยวข้อง";

export const OFFICIAL_LINKS = {
  wordpress: {
    url: "https://thanamonofficial.wordpress.com/",
    label: "WordPress Official Blog",
    labelTh: "บล็อกทางการของ ธนมน โสภณธนวัฒน์",
    description:
      "บล็อกทางการที่ ธนมน โสภณธนวัฒน์ ใช้เผยแพร่บทความ SEO, Digital Marketing และ Personal Branding อย่างต่อเนื่อง",
  },
  website: {
    url: "https://thanamon-website.vercel.app/",
    label: "Personal Website",
    labelTh: "เว็บไซต์ทางการของ ธนมน โสภณธนวัฒน์",
    description:
      "เว็บไซต์ส่วนตัวที่รวบรวมผลงาน ประวัติ และมุมมองด้านการตลาดดิจิทัลของ ธนมน โสภณธนวัฒน์",
  },
  instagram: {
    url: "https://www.instagram.com/thanamon.soponthanawat/",
    label: "Instagram",
    labelTh: "Instagram ธนมน โสภณธนวัฒน์",
    description:
      "ติดตามเนื้อหาและกิจกรรมล่าสุดของ ธนมน โสภณธนวัฒน์ ผ่าน Instagram อย่างเป็นทางการ",
  },
  youtube: {
    url: "https://www.youtube.com/@thanamon.soponthanawat",
    label: "YouTube",
    labelTh: "YouTube ธนมน โสภณธนวัฒน์",
    description:
      "รับชมวิดีโอจากช่อง YouTube อย่างเป็นทางการของ ธนมน โสภณธนวัฒน์ เกี่ยวกับ SEO และ Personal Branding",
  },
} as const;

export const SAME_AS = [
  OFFICIAL_LINKS.wordpress.url,
  OFFICIAL_LINKS.website.url,
  OFFICIAL_LINKS.instagram.url,
  OFFICIAL_LINKS.youtube.url,
];

export const NAV_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about/", label: "เกี่ยวกับ" },
  { href: "/portfolio/", label: "ผลงาน" },
  { href: "/articles/", label: "บทความ" },
  { href: "/official-links/", label: "ลิงก์ทางการ" },
  { href: "/contact/", label: "ติดต่อ" },
];

export const EXPERTISE_AREAS = [
  "SEO",
  "Digital Marketing",
  "Online Reputation Management",
  "Reverse SEO",
  "Content Strategy",
  "Guest Posting",
  "Search Engine Visibility",
  "Entity SEO",
  "Personal Branding",
  "Local SEO",
];

export const OG_IMAGE = `${SITE_URL}/og-image.svg`;

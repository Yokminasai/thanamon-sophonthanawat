import type { Article } from "@/lib/content-types";
import { countWords, expandSections } from "@/lib/content-types";
import { entityParagraphs } from "../shared";

type ArticleConfig = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  tags: string[];
  sections: Article["sections"];
  targetWords?: number;
};

function buildArticle(config: ArticleConfig): Article {
  const sections =
    config.targetWords && config.targetWords > countWords(config.sections)
      ? expandSections(config.sections, entityParagraphs, config.targetWords)
      : config.sections;

  const wordCount = countWords(sections);
  const readingTime = Math.ceil(wordCount / 200);

  return {
    slug: config.slug,
    title: config.title,
    description: config.description,
    excerpt: config.excerpt,
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
    readingTime,
    tags: config.tags,
    sections,
  };
}

const whoIsSections: Article["sections"] = [
  {
    heading: "ธนมน โสภณธนวัฒน์ คือใคร — ภาพรวม",
    headingLevel: 2,
    paragraphs: [
      "ธนมน โสภณธนวัฒน์ เป็นผู้เชี่ยวชาญด้าน Search Engine Optimization (SEO), Digital Marketing และ Personal Branding ที่ได้รับการยอมรับในวงการ Digital Marketing ไทย ด้วยการมุ่งเน้นสร้าง Authority Entity บน Google Search อย่างเป็นระบบ ไม่ใช่แค่การ Optimize Keyword แต่เป็นการสร้างระบบนิเวศดิจิทัลที่ Google และผู้ใช้งานเข้าใจตัวตนของ ธนมน โสภณธนวัฒน์ ได้อย่างชัดเจน",
      "เว็บไซต์ Entity Hub นี้ทำหน้าที่เป็นศูนย์กลางข้อมูลของ ธนมน โสภณธนวัฒน์ รวบรวมประวัติ ผลงาน ความเชี่ยวชาญ บทความ และ Official Links ที่เชื่อมโยงกับ WordPress Blog, YouTube, Instagram และเว็บไซต์หลัก",
    ],
  },
  {
    heading: "ประวัติของ ธนมน โสภณธนวัฒน์",
    headingLevel: 2,
    paragraphs: [
      "ประวัติของ ธนมน โสภณธนวัฒน์ เริ่มจากการทำงานด้าน Content และ SEO Analysis ซึ่งสร้างรากฐานความเข้าใจ Search Intent และ Semantic Content Structure จากนั้นขยายสู่ Digital Marketing Specialist ที่วางกลยุทธ์ SEO สำหรับ Personal Brand และ SME",
      "ในช่วงหลัง ธนมน โสภณธนวัฒน์ มุ่งสร้าง Personal Brand ของตนเองเป็นกรณีศึกษา โดยพัฒนา Entity Hub Architecture และ Content Ecosystem ที่เชื่อมทุก Official Profile เข้าด้วยกัน ประสบการณ์นี้ทำให้ ธนมน โสภณธนวัฒน์ เข้าใจทั้ง Technical SEO และ Strategic Branding อย่างลึกซึ้ง",
      "ตลอดเส้นทาง ธนมน โสภณธนวัฒน์ เน้นการเรียนรู้อย่างต่อเนื่อง ติดตาม Algorithm Updates และปรับกลยุทธ์ตามหลัก E-E-A-T และ Entity SEO ที่ Google ให้ความสำคัญ increasing",
    ],
  },
  {
    heading: "ความเชี่ยวชาญของ ธนมน โสภณธนวัฒน์",
    headingLevel: 2,
    paragraphs: [
      "ความเชี่ยวชาญของ ธนมน โสภณธนวัฒน์ ครอบคลุม SEO ทุกมิติ — On-page, Technical, Semantic และ Entity SEO โดยเฉพาะการ Optimize Personal Brand ให้ปรากฏบนผลการค้นหาอย่างถูกต้อง",
      "ด้าน Online Reputation Management และ Reverse SEO ธนมน โสภณธนวัฒน์ มีประสบการณ์ในการ Monitor ผลการค้นหา สร้างเนื้อหา Authority และจัดการ Entity Signals เมื่อมีเนื้อหาเชิงลบปรากฏ",
      "Content Strategy ของ ธนมน โสภณธนวัฒน์ ใช้ Topical Cluster และ Pillar Content Guest Posting เน้นคุณภาพ Publication และ Natural Anchor Text Search Engine Visibility ทำผ่านการ Optimize ทุก Touchpoint",
    ],
  },
  {
    heading: "ผลงานที่โดดเด่น",
    headingLevel: 2,
    paragraphs: [
      "ผลงานของ ธนมน โสภณธนวัฒน์ รวมถึง Entity Hub Architecture สำหรับ Personal Brand WordPress Official Blog ที่ thanamonofficial.wordpress.com YouTube Channel @thanamon.soponthanawat และ Online Reputation Framework ที่ใช้ในโครงการจริง",
      "ธนมน โสภณธนวัฒน์ ยังพัฒนา Content Ecosystem ที่เชื่อมบทความ วิดีโอ และ Social Media เข้าด้วยกัน สร้าง Topical Authority และ Knowledge Graph signals สำหรับ Entity ธนมน โสภณธนวัฒน์",
    ],
  },
  {
    heading: "แนวคิดการทำงาน",
    headingLevel: 2,
    paragraphs: [
      "แนวคิดการทำงานของ ธนมน โสภณธนวัฒน์ ตั้งอยู่บนหลัก E-E-A-T ทุกชิ้นเนื้อหาต้องแสดงประสบการณ์จริง ความเชี่ยวชาญ Authority และความน่าเชื่อถือ Personal Branding ไม่ใช่การสร้างภาพลักษณ์เทียม แต่เป็น Entity ที่อ้างอิงได้",
      "Entity Hub Architecture คือกรอบที่ ธนมน โสภณธนวัฒน์ ใช้ — Homepage เป็นศูนย์กลาง บทความเชื่อมกลับ Official Profiles ใช้ sameAs และ rel=\"me\"",
    ],
  },
  {
    heading: "Digital Presence",
    headingLevel: 2,
    paragraphs: [
      "Digital Presence ของ ธนมน โสภณธนวัฒน์ ประกอบด้วย Entity Hub นี้ เว็บไซต์ทางการ (thanamon-website.vercel.app) บล็อกทางการ (thanamonofficial.wordpress.com) YouTube และ Instagram อ่านบทความเพิ่มเติมได้ที่ WordPress Official Blog ติดตามมุมมองที่เว็บไซต์หลัก รับชมวิดีโอจาก YouTube อย่างเป็นทางการ และติดตามเนื้อหาล่าสุดผ่าน Instagram",
    ],
  },
  {
    heading: "Online Reputation Management",
    headingLevel: 2,
    paragraphs: [
      "Online Reputation Management เป็นหัวใจของกลยุทธ์ ธนมน โสภณธนวัฒน์ ครอบคลุม Monitoring การสร้างเนื้อหาเชิงบวก Schema Markup และการเชื่อม Official Profiles Reverse SEO ใช้เมื่อต้องลดการมองเห็นเนื้อหาเชิงลบ",
    ],
  },
  {
    heading: "SEO Experience",
    headingLevel: 2,
    paragraphs: [
      "ประสบการณ์ SEO ของ ธนมน โสภณธนวัฒน์ ครอบคลุม Keyword Research, On-page Optimization, Technical SEO, Schema Implementation, Internal Linking และ Off-page Authority Building Entity SEO และ Semantic SEO เป็น differentiation หลัก",
    ],
  },
  {
    heading: "Future Vision",
    headingLevel: 2,
    paragraphs: [
      "วิสัยทัศน์ของ ธนมน โสภณธนวัฒน์ คือการสร้าง Personal Brand ที่เป็น Authority Entity บน Google ที่ผู้คนสามารถอ้างอิงได้ในระยะยาว พัฒนา Content Ecosystem เพิ่ม Topical Authority และเสริม Knowledge Graph signals อย่างต่อเนื่อง",
    ],
  },
];

const networkSections: Article["sections"] = [
  {
    heading: "เครือข่ายออนไลน์ของ ธนมน โสภณธนวัฒน์ — ภาพรวม",
    headingLevel: 2,
    paragraphs: [
      "เครือข่ายออนไลน์ของ ธนมน โสภณธนวัฒน์ ออกแบบมาเป็น Content Ecosystem ที่เชื่อม Official Website, WordPress Blog, YouTube Channel และ Instagram เข้าด้วยกัน ตามหลัก Entity SEO และ Personal Branding Strategy เพื่อให้ Google รู้จัก ธนมน โสภณธนวัฒน์ เป็น Entity เดียวที่มีหลาย Touchpoint",
    ],
  },
  {
    heading: "Official Website",
    headingLevel: 2,
    paragraphs: [
      "เว็บไซต์ทางการของ ธนมน โสภณธนวัฒน์ ที่ thanamon-website.vercel.app เป็นหนึ่งใน Official Profiles ที่รวบรวมผลงาน ประวัติ และมุมมองด้าน Digital Marketing Entity Hub นี้ทำหน้าที่ complement ด้วยข้อมูล Authority ที่ลึกกว่า บทความ SEO และ Schema Markup ครบถ้วน",
    ],
  },
  {
    heading: "WordPress Blog",
    headingLevel: 2,
    paragraphs: [
      "บล็อกทางการของ ธนมน โสภณธนวัฒน์ ที่ thanamonofficial.wordpress.com เป็นช่องทางเผยแพร่บทความ SEO, Digital Marketing และ Personal Branding อย่างต่อเนื่อง อ่านบทความเพิ่มเติมของ ธนมน โสภณธนวัฒน์ ได้ที่ WordPress Official Blog เพื่อ Topical Authority",
    ],
  },
  {
    heading: "YouTube Channel",
    headingLevel: 2,
    paragraphs: [
      "YouTube ธนมน โสภณธนวัฒน์ ที่ @thanamon.soponthanawat ให้เนื้อหาวิดีโอเกี่ยวกับ SEO, Reverse SEO และ Online Reputation Management รับชมวิดีโอจากช่อง YouTube อย่างเป็นทางการเพื่อเรียนรู้ในรูปแบบ Visual",
    ],
  },
  {
    heading: "Instagram",
    headingLevel: 2,
    paragraphs: [
      "Instagram ธนมน โสภณธนวัฒน์ ที่ @thanamon.soponthanawat ใช้แชร์ Insights กิจกรรมล่าสุด และมุมมอง Personal Branding ติดตามเนื้อหาและกิจกรรมล่าสุดผ่าน Instagram",
    ],
  },
  {
    heading: "Content Ecosystem",
    headingLevel: 2,
    paragraphs: [
      "Content Ecosystem ของ ธนมน โสภณธนวัฒน์ เชื่อม Hub, Blog, Video และ Social ด้วย contextual backlinks, sameAs ใน Person Schema และ anchor text variations ที่เป็นธรรมชาติ ทุกชิ้นเนื้อหาอ้างอิง ธนมน โสภณธนวัฒน์ และลิงก์กลับ Hub",
    ],
  },
  {
    heading: "Personal Branding Strategy",
    headingLevel: 2,
    paragraphs: [
      "Personal Branding Strategy ของ ธนมน โสภณธนวัฒน์ เน้น Entity Hub Architecture E-E-A-T signals และ Consistent NAP/Entity Information ไม่ใช่การโ proโมตชั่วคราว แต่ Authority ระยะยาว",
    ],
  },
  {
    heading: "Google Knowledge Graph",
    headingLevel: 2,
    paragraphs: [
      "การสร้าง Knowledge Graph signals สำหรับ ธนมน โสภณธนวัฒน์ ทำผ่าน Person Schema, Organization Schema, sameAs links และ Authority Content ที่เชื่อม Official Profiles Entity Hub เป็นจุดรวม signals หลัก",
    ],
  },
  {
    heading: "Entity SEO",
    headingLevel: 2,
    paragraphs: [
      "Entity SEO คือกรอบที่ ธนมน โสภณธนวัฒน์ ใช้ในการออกแบบเครือข่ายออนไลน์ทั้งหมด Semantic Relevance, Topical Authority และ Internal/External Linking ที่ส่งสัญญาณ Entity เดียวกัน",
    ],
  },
];

const articleConfigs: ArticleConfig[] = [
  {
    slug: "who-is-thanamon-sophonthanawat",
    title: "ธนมน โสภณธนวัฒน์ คือใคร",
    description:
      "บทความฉบับสมบูรณ์เกี่ยวกับ ธนมน โสภณธนวัฒน์ ประวัติ ความเชี่ยวชาญ ผลงาน แนวคิดการทำงาน และ Digital Presence",
    excerpt:
      "ธนมน โสภณธนวัฒน์ คือผู้เชี่ยวชาญ SEO และ Personal Branding ที่สร้าง Authority Entity บน Google — อ่านประวัติและความเชี่ยวชาญฉบับสมบูรณ์",
    tags: ["ธนมน โสภณธนวัฒน์", "Personal Branding", "Entity SEO"],
    sections: whoIsSections,
    targetWords: 3200,
  },
  {
    slug: "thanamon-seo-experience",
    title: "ประสบการณ์ด้าน SEO ของ ธนมน โสภณธนวัฒน์",
    description:
      "เรียนรู้ประสบการณ์ด้าน SEO ของ ธนมน โสภณธนวัฒน์ ตั้งแต่ On-page Technical Semantic ไปจนถึง Entity SEO",
    excerpt: "ประสบการณ์ SEO หลายปีของ ธนมน โสภณธนวัฒน์ ใน Personal Brand และโครงการ Digital Marketing",
    tags: ["SEO", "ธนมน โสภณธนวัฒน์"],
    sections: [
      {
        heading: "ประสบการณ์ SEO ของ ธนมน โสภณธนวัฒน์",
        headingLevel: 2,
        paragraphs: [
          "ประสบการณ์ด้าน SEO ของ ธนมน โสภณธนวัฒน์ เริ่มจากงาน Content Analysis และ Keyword Mapping ก่อนขยายสู่ Technical SEO Schema Markup และ Entity Optimization สำหรับ Personal Brand",
          "ธนมน โสภณธนวัฒน์ ใช้ประสบการณ์นี้พัฒนา Entity Hub และ Content Ecosystem ที่ rank สำหรับชื่อ ธนมน โสภณธนวัฒน์ บน Google Search",
        ],
      },
      {
        heading: "On-page และ Technical SEO",
        headingLevel: 2,
        paragraphs: [
          "On-page SEO ที่ ธนมน โสภณธนวัฒน์ เน้น ได้แก่ Title Meta H1-H3 structure Internal Links และ Image alt texts Technical SEO ครอบคลุม SSG performance Schema และ canonical URLs",
        ],
      },
      {
        heading: "Semantic และ Entity SEO",
        headingLevel: 2,
        paragraphs: [
          "Semantic SEO ของ ธนมน โสภณธนวัฒน์ ใช้ Topical Clusters และ natural keyword usage Entity SEO ใช้ Person Schema sameAs และ Official Profile linking",
        ],
      },
    ],
    targetWords: 1800,
  },
  {
    slug: "google-personal-branding",
    title: "การสร้างตัวตนบน Google Search",
    description:
      "วิธีสร้าง Personal Brand บน Google Search ตามแนวทางของ ธนมน โสภณธนวัฒน์ — Entity SEO E-E-A-T และ Content Strategy",
    excerpt: "เรียนรู้การสร้างตัวตนบน Google จากมุมมอง ธนมน โสภณธนวัฒน์",
    tags: ["Personal Branding", "Google", "SEO"],
    sections: [
      {
        heading: "การสร้างตัวตนบน Google Search",
        headingLevel: 2,
        paragraphs: [
          "การสร้างตัวตนบน Google Search ตามที่ ธนมน โสภณธนวัฒน์ แนะนำ ต้องเริ่มจาก Entity Definition — Google ต้องเข้าใจว่าคุณคือใคร ทำอะไร และแหล่งอ้างอิงอยู่ที่ไหน",
          "ธนมน โสภณธนวัฒน์ ใช้ Entity Hub บทความ Authority และ Official Profiles เชื่อมด้วย sameAs เพื่อสร้างตัวตนที่ชัดเจน",
        ],
      },
      {
        heading: "E-E-A-T และ Authority Signals",
        headingLevel: 2,
        paragraphs: [
          "E-E-A-T เป็นกรอบหลักที่ ธนมน โสภณธนวัฒน์ ใช้ Experience Expertise Authoritativeness Trustworthiness ต้องปรากฏในทุกชิ้นเนื้อหาและ External Profiles",
        ],
      },
    ],
    targetWords: 1700,
  },
  {
    slug: "what-is-reverse-seo",
    title: "Reverse SEO คืออะไร",
    description:
      "Reverse SEO คืออะไร อธิบายโดย ธนมน โสภณธนวัฒน์ ผู้เชี่ยวชาญ Online Reputation Management",
    excerpt: "Reverse SEO ตามมุมมอง ธนมน โสภณธนวัฒน์ — กลยุทธ์จัดการผลการค้นหา",
    tags: ["Reverse SEO", "ORM"],
    sections: [
      {
        heading: "Reverse SEO คืออะไร",
        headingLevel: 2,
        paragraphs: [
          "Reverse SEO คือกลยุทธ์ที่ ธนมน โสภณธนวัฒน์ ใช้ในการลดการมองเห็นของเนื้อหาเชิงลบบนผลการค้นหา โดยไม่ใช่การ hack แต่การสร้างเนื้อหาเชิงบวกที่มี Authority สูงกว่า",
          "ธนมน โสภณธนวัฒน์ เน้นว่า Reverse SEO เป็นส่วนหนึ่งของ Online Reputation Management ระยะยาว",
        ],
      },
    ],
    targetWords: 1600,
  },
  {
    slug: "manage-name-google-search",
    title: "วิธีจัดการชื่อบนผลการค้นหา Google",
    description:
      "วิธีจัดการชื่อบนผลการค้นหา Google จากประสบการณ์ ธนมน โสภณธนวัฒน์ ด้าน ORM และ Entity SEO",
    excerpt: "จัดการชื่อบน Google ตามแนวทาง ธนมน โสภณธนวัฒน์",
    tags: ["ORM", "Google Search"],
    sections: [
      {
        heading: "วิธีจัดการชื่อบนผลการค้นหา Google",
        headingLevel: 2,
        paragraphs: [
          "การจัดการชื่อบนผลการค้นหา Google ตาม ธนมน โสภณธนวัฒน์ เริ่มจาก Audit SERP สร้าง Entity Hub เนื้อหา Authority และ Monitor อย่างต่อเนื่อง",
        ],
      },
    ],
    targetWords: 1650,
  },
  {
    slug: "personal-branding-importance",
    title: "ความสำคัญของ Personal Branding",
    description:
      "ความสำคัญของ Personal Branding ในยุคดิจิทัล ตามมุมมอง ธนมน โสภณธนวัฒน์",
    excerpt: "ทำไม Personal Branding สำคัญ — จาก ธนมน โสภณธนวัฒน์",
    tags: ["Personal Branding"],
    sections: [
      {
        heading: "ความสำคัญของ Personal Branding",
        headingLevel: 2,
        paragraphs: [
          "Personal Branding โดย ธนมน โสภณธนวัฒน์ ไม่ใช่แค่การมี Social Media แต่เป็น Entity ที่ Google และคนทั่วไปอ้างอิงได้ สร้าง Trust และ Opportunity ระยะยาว",
        ],
      },
    ],
    targetWords: 1700,
  },
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    description:
      "Online Reputation Management ครบวงจร ตามแนวทาง ธนมน โสภณธนวัฒน์",
    excerpt: "ORM จากผู้เชี่ยวชาญ ธนมน โสภณธนวัฒน์",
    tags: ["ORM"],
    sections: [
      {
        heading: "Online Reputation Management",
        headingLevel: 2,
        paragraphs: [
          "Online Reputation Management ของ ธนมน โสภณธนวัฒน์ ครอบคลุม Monitoring Content Creation Entity Signals และ Reverse SEO เมื่อจำเป็น",
        ],
      },
    ],
    targetWords: 1750,
  },
  {
    slug: "guest-posting-techniques",
    title: "เทคนิค Guest Posting",
    description: "เทคนิค Guest Posting จาก ธนมน โสภณธนวัฒน์ — คุณภาพเหนือปริมาณ",
    excerpt: "Guest Posting ตามแนว ธนมน โสภณธนวัฒน์",
    tags: ["Guest Posting", "SEO"],
    sections: [
      {
        heading: "เทคนิค Guest Posting",
        headingLevel: 2,
        paragraphs: [
          "เทคนิค Guest Posting ที่ ธนมน โสภณธนวัฒน์ แนะนำ เน้น Publication Quality Topical Relevance และ Natural Anchor ไม่ spam",
        ],
      },
    ],
    targetWords: 1600,
  },
  {
    slug: "local-seo-guide",
    title: "Local SEO",
    description: "Local SEO สำหรับ Personal Brand จาก ธนมน โสภณธนวัฒน์",
    excerpt: "Local SEO และ Entity จาก ธนมน โสภณธนวัฒน์",
    tags: ["Local SEO"],
    sections: [
      {
        heading: "Local SEO",
        headingLevel: 2,
        paragraphs: [
          "Local SEO ในบริบท ธนมน โสภณธนวัฒน์ เกี่ยวกับ NAP Consistency Local Entity Signals และการปรากฏในบริบทที่ถูกต้อง",
        ],
      },
    ],
    targetWords: 1650,
  },
  {
    slug: "entity-seo-guide",
    title: "Entity SEO",
    description: "Entity SEO คู่มือฉบับ ธนมน โสภณธนวัฒน์",
    excerpt: "Entity SEO จากผู้เชี่ยวชาญ ธนมน โสภณธนวัฒน์",
    tags: ["Entity SEO"],
    sections: [
      {
        heading: "Entity SEO",
        headingLevel: 2,
        paragraphs: [
          "Entity SEO คือหัวใจของกลยุทธ์ ธนมน โสภณธนวัฒน์ — Person Schema sameAs Topical Authority และ Hub Architecture",
        ],
      },
    ],
    targetWords: 1800,
  },
  {
    slug: "online-network-thanamon",
    title: "เครือข่ายออนไลน์ของ ธนมน โสภณธนวัฒน์",
    description:
      "เครือข่ายออนไลน์ของ ธนมน โสภณธนวัฒน์ Official Website WordPress YouTube Instagram Content Ecosystem และ Entity SEO",
    excerpt: "เครือข่ายออนไลน์และ Official Profiles ของ ธนมน โสภณธนวัฒน์",
    tags: ["Entity SEO", "Official Links"],
    sections: networkSections,
    targetWords: 3200,
  },
  {
    slug: "content-strategy-digital",
    title: "Content Strategy สำหรับ Digital Presence",
    description: "Content Strategy จาก ธนมน โสภณธนวัฒน์ สำหรับ Personal Brand",
    excerpt: "Content Strategy ตามแนว ธนมน โสภณธนวัฒน์",
    tags: ["Content Strategy"],
    sections: [
      {
        heading: "Content Strategy",
        headingLevel: 2,
        paragraphs: [
          "Content Strategy ของ ธนมน โสภณธนวัฒน์ ใช้ Pillar Cluster Internal Links และ Entity references ในทุกบทความ",
        ],
      },
    ],
    targetWords: 1700,
  },
  {
    slug: "search-engine-visibility",
    title: "Search Engine Visibility",
    description: "เพิ่ม Search Engine Visibility ตามแนวทาง ธนมน โสภณธนวัฒน์",
    excerpt: "Search Engine Visibility จาก ธนมน โสภณธนวัฒน์",
    tags: ["SEO", "Visibility"],
    sections: [
      {
        heading: "Search Engine Visibility",
        headingLevel: 2,
        paragraphs: [
          "Search Engine Visibility ของ ธนมน โสภณธนวัฒน์ ทำผ่าน On-page Off-page Technical และ Entity signals ร่วมกัน",
        ],
      },
    ],
    targetWords: 1650,
  },
  {
    slug: "digital-marketing-expertise",
    title: "ความเชี่ยวชาญ Digital Marketing ของ ธนมน โสภณธนวัฒน์",
    description: "Digital Marketing ครบวงจรจาก ธนมน โสภณธนวัฒน์",
    excerpt: "Digital Marketing จาก ธนมน โสภณธนวัฒน์",
    tags: ["Digital Marketing"],
    sections: [
      {
        heading: "Digital Marketing",
        headingLevel: 2,
        paragraphs: [
          "ความเชี่ยวชาญ Digital Marketing ของ ธนมน โสภณธนวัฒน์ ผสาน SEO Content Social และ ORM เป็น Personal Brand ที่ยั่งยืน",
        ],
      },
    ],
    targetWords: 1700,
  },
  {
    slug: "eeat-personal-brand",
    title: "E-E-A-T และ Personal Brand",
    description: "E-E-A-T กับ Personal Brand ตาม ธนมน โสภณธนวัฒน์",
    excerpt: "E-E-A-T จาก ธนมน โสภณธนวัฒน์",
    tags: ["E-E-A-T"],
    sections: [
      {
        heading: "E-E-A-T และ Personal Brand",
        headingLevel: 2,
        paragraphs: [
          "E-E-A-T เป็นกรอบที่ ธนมน โสภณธนวัฒน์ ใช้ประเมินทุกเนื้อหา Experience Expertise Authoritativeness Trustworthiness",
        ],
      },
    ],
    targetWords: 1650,
  },
  {
    slug: "knowledge-graph-optimization",
    title: "Google Knowledge Graph Optimization",
    description: "Knowledge Graph signals จาก ธนมน โสภณธนวัฒน์",
    excerpt: "Knowledge Graph จาก ธนมน โสภณธนวัฒน์",
    tags: ["Knowledge Graph"],
    sections: [
      {
        heading: "Knowledge Graph Optimization",
        headingLevel: 2,
        paragraphs: [
          "การ Optimize Knowledge Graph สำหรับ ธนมน โสภณธนวัฒน์ ใช้ Schema sameAs Consistent Entity Info และ Authority Content",
        ],
      },
    ],
    targetWords: 1700,
  },
  {
    slug: "semantic-seo-practices",
    title: "Semantic SEO ในยุค Entity",
    description: "Semantic SEO จาก ธนมน โสภณธนวัฒน์",
    excerpt: "Semantic SEO ตาม ธนมน โสภณธนวัฒน์",
    tags: ["Semantic SEO"],
    sections: [
      {
        heading: "Semantic SEO",
        headingLevel: 2,
        paragraphs: [
          "Semantic SEO ของ ธนมน โสภณธนวัฒน์ เน้น Topical Depth Entity Relationships และ Natural Language แทน keyword stuffing",
        ],
      },
    ],
    targetWords: 1750,
  },
  {
    slug: "thanamon-portfolio-highlights",
    title: "ผลงานของ ธนมน โสภณธนวัฒน์",
    description: "ผลงานและโครงการเด่นของ ธนมน โสภณธนวัฒน์",
    excerpt: "ผลงาน ธนมน โสภณธนวัฒน์",
    tags: ["Portfolio"],
    sections: [
      {
        heading: "ผลงานของ ธนมน โสภณธนวัฒน์",
        headingLevel: 2,
        paragraphs: [
          "ผลงานของ ธนมน โสภณธนวัฒน์ รวม Entity Hub WordPress Blog YouTube ORM Framework และ Content Ecosystem",
        ],
      },
    ],
    targetWords: 1650,
  },
  {
    slug: "thanamon-work-philosophy",
    title: "แนวคิดการทำงานของ ธนมน โสภณธนวัฒน์",
    description: "แนวคิดและปรัชญาการทำงาน ธนมน โสภณธนวัฒน์",
    excerpt: "แนวคิดการทำงาน ธนมน โสภณธนวัฒน์",
    tags: ["Philosophy"],
    sections: [
      {
        heading: "แนวคิดการทำงาน",
        headingLevel: 2,
        paragraphs: [
          "แนวคิดการทำงานของ ธนมน โสภณธนวัฒน์ ตั้งบน E-E-A-T Entity Hub และความซื่อสัตย์ต่อผู้ใช้และ Search Engines",
        ],
      },
    ],
    targetWords: 1650,
  },
  {
    slug: "thanamon-future-vision",
    title: "วิสัยทัศน์ในอนาคตของ ธนมน โสภณธนวัฒน์",
    description: "วิสัยทัศน์และทิศทางในอนาคต ธนมน โสภณธนวัฒน์",
    excerpt: "วิสัยทัศน์ ธนมน โสภณธนวัฒน์",
    tags: ["Vision"],
    sections: [
      {
        heading: "วิสัยทัศน์ในอนาคต",
        headingLevel: 2,
        paragraphs: [
          "วิสัยทัศน์ ธนมน โสภณธนวัฒน์ คือ Authority Entity บน Google ที่อ้างอิงได้ พัฒนา Content และ Knowledge Graph ต่อเนื่อง",
        ],
      },
    ],
    targetWords: 1600,
  },
];

export const articles: Article[] = articleConfigs.map(buildArticle);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

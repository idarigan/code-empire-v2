// ============================================
// Featured articles
// ============================================

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: number;
}

export const featuredArticles: Article[] = [
  {
    slug: "magic-skill-programming",
    title: "مهارت جادویی: چرا باید برنامه‌نویسی یاد بگیریم؟",
    excerpt:
      "برنامه‌نویسی چیزی فراتر از یک شغل است؛ ابزاری برای رشد ذهن، تقویت خلاقیت و ساختن آینده‌ای روشن‌تر.",
    category: "برنامه‌نویسی",
    author: "امپراتوری کد",
    readTime: 7,
  },
  {
    slug: "backend-technologies-guide",
    title: "سفری به دنیای بک‌اند: بهترین تکنولوژی‌ها برای توسعه وب",
    excerpt:
      "Node.js، Python، Go، Java یا PHP؟ راهنمای کامل انتخاب تکنولوژی بک‌اند برای پروژه‌های وب.",
    category: "برنامه‌نویسی",
    author: "سام تهرانی",
    readTime: 12,
  },
  {
    slug: "game-engine-heart",
    title: "موتور بازی‌سازی: قلب تپنده دنیای بازی‌ها",
    excerpt:
      "موتور بازی‌سازی چیست، چه می‌کند و کدام یک برای شما مناسب است؟ آشنایی کامل با موتورهای محبوب.",
    category: "بازی ویدئویی",
    author: "امپراتوری کد",
    readTime: 8,
  },
];

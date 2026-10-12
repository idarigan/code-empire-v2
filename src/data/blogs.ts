/**
 * Code Empire — Blog posts
 *
 * Placeholder content. Replace strings with real data.
 */

import type { Blog } from "@/types";

const authors = {
  ali: {
    name: "علی محمدی",
    role: "توسعه‌دهنده فرانت‌اند",
    avatar: "/images/team/1.jpg",
  },
  sara: {
    name: "سارا احمدی",
    role: "مهندس نرم‌افزار",
    avatar: "/images/team/2.jpg",
  },
  reza: { name: "رضا کریمی", role: "بازی‌ساز", avatar: "/images/team/3.jpg" },
};

export const blogs: Blog[] = [
  {
    slug: "why-learn-programming-2025",
    title: "چرا در سال ۲۰۲۵ باید برنامه‌نویسی یاد بگیریم؟",
    excerpt:
      "دلایلی که برنامه‌نویسی را به یکی از ارزشمندترین مهارت‌های قرن تبدیل کرده است.",
    coverImage: "/images/blog/why-code.jpg",
    author: authors.ali,
    date: "2025-01-15",
    readTime: 6,
    category: "Career",
    tags: ["career", "programming", "2025"],
    sections: [
      {
        paragraphs: [
          "برنامه‌نویسی در سال‌های اخیر از یک مهارت تخصصی به یک مهارت پایه تبدیل شده است.",
          "در این مقاله نگاهی می‌اندازیم به دلایلی که چرا یادگیری برنامه‌نویسی می‌تواند آینده‌ی شغلی شما را تغییر دهد.",
        ],
      },
    ],
    featured: true,
    relatedPosts: ["python-vs-javascript", "roadmap-2025"],
    seo: {
      metaTitle: "چرا برنامه‌نویسی یاد بگیریم؟ | Code Empire",
      metaDescription: "دلایل ارزشمند بودن یادگیری برنامه‌نویسی در سال ۲۰۲۵",
    },
  },
  {
    slug: "python-vs-javascript",
    title: "پایتون یا جاوااسکریپت؟ کدام را اول یاد بگیریم؟",
    excerpt: "مقایسه‌ی دو زبان محبوب برای شروع برنامه‌نویسی.",
    coverImage: "/images/blog/python-vs-js.jpg",
    author: authors.sara,
    date: "2025-01-10",
    readTime: 8,
    category: "Comparison",
    tags: ["python", "javascript", "comparison"],
    sections: [
      {
        paragraphs: [
          "انتخاب اولین زبان برنامه‌نویسی یکی از مهم‌ترین تصمیمات مسیر یادگیری شماست.",
        ],
      },
    ],
    relatedPosts: ["why-learn-programming-2025"],
    seo: {
      metaTitle: "پایتون یا جاوااسکریپت؟ | Code Empire",
      metaDescription: "مقایسه زبان پایتون و جاوااسکریپت برای شروع یادگیری",
    },
  },
  {
    slug: "roadmap-2025",
    title: "نقشه‌راه یادگیری برنامه‌نویسی در ۲۰۲۵",
    excerpt: "یک مسیر مشخص و گام‌به‌گام برای تبدیل شدن به برنامه‌نویس.",
    coverImage: "/images/blog/roadmap.jpg",
    author: authors.ali,
    date: "2025-01-05",
    readTime: 10,
    category: "Roadmap",
    tags: ["roadmap", "learning", "2025"],
    sections: [],
    featured: true,
    relatedPosts: ["why-learn-programming-2025", "python-vs-javascript"],
    seo: {
      metaTitle: "نقشه راه برنامه‌نویسی ۲۰۲۵ | Code Empire",
      metaDescription: "نقشه راه گام به گام یادگیری برنامه‌نویسی",
    },
  },
  {
    slug: "git-for-beginners",
    title: "Git برای مبتدیان: اولین مخزن شما",
    excerpt: "با Git و GitHub شروع کنید و کد خود را مدیریت کنید.",
    coverImage: "/images/blog/git.jpg",
    author: authors.sara,
    date: "2024-12-28",
    readTime: 7,
    category: "Tools",
    tags: ["git", "github", "tools"],
    sections: [],
    relatedPosts: ["roadmap-2025"],
    seo: {
      metaTitle: "Git برای مبتدیان | Code Empire",
      metaDescription: "آموزش Git از صفر",
    },
  },
  {
    slug: "clean-code-principles",
    title: "اصول کد تمیز (Clean Code)",
    excerpt: "چگونه کدی بنویسیم که دیگران هم بتوانند بخوانند.",
    coverImage: "/images/blog/clean-code.jpg",
    author: authors.ali,
    date: "2024-12-20",
    readTime: 9,
    category: "Best Practices",
    tags: ["clean-code", "best-practices"],
    sections: [],
    relatedPosts: ["git-for-beginners"],
    seo: {
      metaTitle: "اصول کد تمیز | Code Empire",
      metaDescription: "اصول Clean Code",
    },
  },
  {
    slug: "css-modern-tricks",
    title: "ترفندهای مدرن CSS که باید بدانید",
    excerpt: "قابلیت‌های جدید CSS که کار شما را راحت می‌کنند.",
    coverImage: "/images/blog/css-tricks.jpg",
    author: authors.sara,
    date: "2024-12-15",
    readTime: 6,
    category: "CSS",
    tags: ["css", "frontend"],
    sections: [],
    relatedPosts: [],
    seo: {
      metaTitle: "ترفندهای مدرن CSS | Code Empire",
      metaDescription: "ترفندهای جدید CSS",
    },
  },
  {
    slug: "react-hooks-deep-dive",
    title: "بررسی عمیق React Hooks",
    excerpt: "همه‌ی چیزهایی که باید درباره‌ی Hooks بدانید.",
    coverImage: "/images/blog/react-hooks.jpg",
    author: authors.ali,
    date: "2024-12-10",
    readTime: 12,
    category: "React",
    tags: ["react", "hooks", "frontend"],
    sections: [],
    relatedPosts: ["clean-code-principles"],
    seo: {
      metaTitle: "React Hooks عمیق | Code Empire",
      metaDescription: "بررسی عمیق React Hooks",
    },
  },
  {
    slug: "typescript-why",
    title: "چرا TypeScript؟",
    excerpt: "دلایلی که TypeScript را به استاندارد صنعت تبدیل کرده است.",
    coverImage: "/images/blog/typescript.jpg",
    author: authors.sara,
    date: "2024-12-05",
    readTime: 7,
    category: "TypeScript",
    tags: ["typescript", "javascript"],
    sections: [],
    relatedPosts: ["react-hooks-deep-dive"],
    seo: {
      metaTitle: "چرا TypeScript | Code Empire",
      metaDescription: "دلایل استفاده از TypeScript",
    },
  },
  {
    slug: "game-design-basics",
    title: "اصول اولیه طراحی بازی",
    excerpt: "از ایده تا پیاده‌سازی: نگاهی به فرایند ساخت بازی.",
    coverImage: "/images/blog/game-design.jpg",
    author: authors.reza,
    date: "2024-11-30",
    readTime: 8,
    category: "Game Design",
    tags: ["game", "design"],
    sections: [],
    relatedPosts: [],
    seo: {
      metaTitle: "اصول طراحی بازی | Code Empire",
      metaDescription: "اصول اولیه طراحی بازی",
    },
  },
  {
    slug: "unity-vs-unreal",
    title: "یونیتی یا آنریل انجین؟",
    excerpt: "مقایسه دو موتور بازی‌سازی محبوب.",
    coverImage: "/images/blog/unity-vs-unreal.jpg",
    author: authors.reza,
    date: "2024-11-25",
    readTime: 9,
    category: "Comparison",
    tags: ["unity", "unreal", "game"],
    sections: [],
    relatedPosts: ["game-design-basics"],
    seo: {
      metaTitle: "یونیتی یا آنریل | Code Empire",
      metaDescription: "مقایسه یونیتی و آنریل",
    },
  },
  {
    slug: "debugging-tips",
    title: "ده ترفند برای دیباگ سریع‌تر",
    excerpt: "چطور باگ‌ها را سریع‌تر پیدا و رفع کنیم.",
    coverImage: "/images/blog/debugging.jpg",
    author: authors.ali,
    date: "2024-11-20",
    readTime: 6,
    category: "Tips",
    tags: ["debug", "tips"],
    sections: [],
    relatedPosts: [],
    seo: {
      metaTitle: "ترفندهای دیباگ | Code Empire",
      metaDescription: "ده ترفند دیباگ سریع",
    },
  },
  {
    slug: "api-design-guide",
    title: "راهنمای طراحی API",
    excerpt: "اصول طراحی REST APIهای تمیز و قابل نگهداری.",
    coverImage: "/images/blog/api-design.jpg",
    author: authors.sara,
    date: "2024-11-15",
    readTime: 10,
    category: "Backend",
    tags: ["api", "rest", "backend"],
    sections: [],
    relatedPosts: ["clean-code-principles"],
    seo: {
      metaTitle: "طراحی API | Code Empire",
      metaDescription: "راهنمای طراحی API",
    },
  },
  {
    slug: "ai-in-coding",
    title: "هوش مصنوعی در برنامه‌نویسی",
    excerpt: "چگونه AI ابزارهای برنامه‌نویسی را تغییر داده است.",
    coverImage: "/images/blog/ai-coding.jpg",
    author: authors.ali,
    date: "2024-11-10",
    readTime: 8,
    category: "AI",
    tags: ["ai", "tools"],
    sections: [],
    featured: true,
    relatedPosts: [],
    seo: {
      metaTitle: "AI در برنامه‌نویسی | Code Empire",
      metaDescription: "هوش مصنوعی در برنامه‌نویسی",
    },
  },
  {
    slug: "portfolio-guide",
    title: "راهنمای ساخت پورتفولیو",
    excerpt: "چطور پورتفولیویی بسازیم که نظر کارفرما را جلب کند.",
    coverImage: "/images/blog/portfolio.jpg",
    author: authors.sara,
    date: "2024-11-05",
    readTime: 7,
    category: "Career",
    tags: ["portfolio", "career"],
    sections: [],
    relatedPosts: ["why-learn-programming-2025"],
    seo: {
      metaTitle: "راهنمای پورتفولیو | Code Empire",
      metaDescription: "ساخت پورتفولیو حرفه‌ای",
    },
  },
  {
    slug: "testing-frontend",
    title: "تست در فرانت‌اند",
    excerpt: "آشنایی با تست‌نویسی در پروژه‌های فرانت‌اند.",
    coverImage: "/images/blog/testing.jpg",
    author: authors.ali,
    date: "2024-10-30",
    readTime: 9,
    category: "Testing",
    tags: ["testing", "frontend"],
    sections: [],
    relatedPosts: ["react-hooks-deep-dive"],
    seo: {
      metaTitle: "تست فرانت‌اند | Code Empire",
      metaDescription: "تست نویسی فرانت‌اند",
    },
  },
  {
    slug: "performance-tips",
    title: "ترفندهای افزایش پرفورمنس وب",
    excerpt: "چطور سرعت وب‌سایت خود را افزایش دهیم.",
    coverImage: "/images/blog/performance.jpg",
    author: authors.sara,
    date: "2024-10-25",
    readTime: 8,
    category: "Performance",
    tags: ["performance", "optimization"],
    sections: [],
    relatedPosts: [],
    seo: {
      metaTitle: "پرفورمنس وب | Code Empire",
      metaDescription: "افزایش سرعت وب",
    },
  },
  {
    slug: "opensource-contribution",
    title: "مشارکت در پروژه‌های متن‌باز",
    excerpt: "چطور در پروژه‌های open source مشارکت کنیم.",
    coverImage: "/images/blog/opensource.jpg",
    author: authors.ali,
    date: "2024-10-20",
    readTime: 6,
    category: "Community",
    tags: ["opensource", "community"],
    sections: [],
    relatedPosts: ["git-for-beginners"],
    seo: {
      metaTitle: "مشارکت متن‌باز | Code Empire",
      metaDescription: "مشارکت در open source",
    },
  },
  {
    slug: "career-switch-guide",
    title: "راهنمای تغییر شغل به برنامه‌نویسی",
    excerpt: "از هر شغلی می‌توان وارد دنیای برنامه‌نویسی شد.",
    coverImage: "/images/blog/career-switch.jpg",
    author: authors.sara,
    date: "2024-10-15",
    readTime: 10,
    category: "Career",
    tags: ["career", "switch"],
    sections: [],
    relatedPosts: ["portfolio-guide", "roadmap-2025"],
    seo: {
      metaTitle: "تغییر شغل به برنامه‌نویسی | Code Empire",
      metaDescription: "راهنمای تغییر شغل",
    },
  },
  {
    slug: "learning-habits",
    title: "عادت‌های یادگیری مؤثر",
    excerpt: "چطور برنامه‌نویسی را سریع‌تر و عمیق‌تر یاد بگیریم.",
    coverImage: "/images/blog/learning-habits.jpg",
    author: authors.ali,
    date: "2024-10-10",
    readTime: 7,
    category: "Learning",
    tags: ["learning", "habits"],
    sections: [],
    relatedPosts: ["roadmap-2025"],
    seo: {
      metaTitle: "عادت‌های یادگیری | Code Empire",
      metaDescription: "عادت‌های یادگیری مؤثر",
    },
  },
];

// ============================================
// Helpers
// ============================================

export const getBlogBySlug = (slug: string): Blog | undefined =>
  blogs.find((b) => b.slug === slug);

export const getBlogsByCategory = (category: string): Blog[] =>
  blogs.filter((b) => b.category === category);

export const getFeaturedBlogs = (): Blog[] => blogs.filter((b) => b.featured);

export const getLatestBlogs = (count = 4): Blog[] =>
  [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

export const getBlogCategories = (): string[] =>
  Array.from(new Set(blogs.map((b) => b.category)));

export const getRelatedPosts = (blog: Blog, count = 3): Blog[] =>
  blog.relatedPosts
    .map((slug) => getBlogBySlug(slug))
    .filter((b): b is Blog => Boolean(b))
    .slice(0, count);

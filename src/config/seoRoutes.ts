/**
 * Code Empire — SEO route configuration
 *
 * One table for every route's metadata. Static routes use literals,
 * dynamic routes use a resolver that reads from the data layer.
 * SEOManager consumes this table via matchPath.
 */

import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";
import { rules } from "@/data/policy";
import { siteMeta } from "@/data/constants";

export interface SEOResult {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  /** Optional structured data (JSON-LD) to inject */
  jsonLd?: {
    id: string;
    data: Record<string, unknown>;
  };
  /** Optional — hide from indexing (e.g. dashboard) */
  noindex?: boolean;
}

interface RouteConfig {
  /** react-router path pattern */
  pattern: string;
  /** Build metadata for this route */
  resolve: (params: Record<string, string | undefined>) => SEOResult;
}

// ============================================
// Static routes
// ============================================

const STATIC: RouteConfig[] = [
  {
    pattern: "/",
    resolve: () => ({
      title: "امپراتوری کد — آکادمی برنامه‌نویسی فارسی",
      description:
        "یادگیری برنامه‌نویسی از صفر تا پیشرفته در کنار بهترین اساتید ایران. وب، نرم‌افزار و بازی‌سازی.",
      image: "/icons/icon-512.png",
    }),
  },
  {
    pattern: "/courses",
    resolve: () => ({
      title: "دوره‌های برنامه‌نویسی",
      description:
        "کاتالوگ کامل دوره‌های وب، نرم‌افزار و بازی‌سازی امپراتوری کد.",
    }),
  },
  {
    pattern: "/courses/register",
    resolve: () => ({
      title: "ثبت‌نام در دوره",
      description: "فرم ثبت‌نام دوره‌های امپراتوری کد.",
    }),
  },
  {
    pattern: "/guide",
    resolve: () => ({
      title: "راهنمای یادگیری",
      description:
        "چطور در امپراتوری کد یاد بگیریم؟ انواع کلاس‌ها و روش تدریس.",
    }),
  },
  {
    pattern: "/blog",
    resolve: () => ({
      title: "مجله امپراتوری کد",
      description: "مقالات تخصصی برنامه‌نویسی، طراحی و توسعه.",
    }),
  },
  {
    pattern: "/about",
    resolve: () => ({
      title: "درباره ما",
      description: "امپراتوری کد کیست، چه می‌کند و چرا ساخته شد.",
    }),
  },
  {
    pattern: "/contact",
    resolve: () => ({
      title: "تماس با ما",
      description: "راه‌های ارتباط با تیم پشتیبانی امپراتوری کد.",
    }),
  },
  {
    pattern: "/policy",
    resolve: () => ({
      title: "منشور و قوانین",
      description: "قوانین و شرایط استفاده از خدمات امپراتوری کد.",
    }),
  },
];

// ============================================
// Dynamic routes
// ============================================

const DYNAMIC: RouteConfig[] = [
  {
    pattern: "/courses/:slug",
    resolve: ({ slug }) => {
      const course = courses.find((c) => c.slug === slug);
      if (!course) {
        return {
          title: "دوره پیدا نشد",
          description: "دوره‌ای با این شناسه وجود ندارد.",
        };
      }
      return {
        title: course.persianTitle,
        description: course.description,
        image: course.logo,
        type: "article",
        jsonLd: {
          id: "course-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.persianTitle,
            description: course.description,
            provider: {
              "@type": "Organization",
              name: siteMeta.name,
              sameAs: siteMeta.url,
            },
            offers: {
              "@type": "Offer",
              price: course.price,
              priceCurrency: "IRR",
            },
          },
        },
      };
    },
  },
  {
    pattern: "/blog/:slug",
    resolve: ({ slug }) => {
      const blog = blogs.find((b) => b.slug === slug);
      if (!blog) {
        return {
          title: "مطلب پیدا نشد",
          description: "مقاله‌ای با این شناسه وجود ندارد.",
        };
      }
      return {
        title: blog.title,
        description: blog.seo.metaDescription,
        image: blog.coverImage,
        type: "article",
        jsonLd: {
          id: "article-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            description: blog.excerpt,
            image: blog.coverImage,
            datePublished: blog.date,
            author: {
              "@type": "Person",
              name: blog.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: siteMeta.name,
            },
          },
        },
      };
    },
  },
  {
    pattern: "/policy/:slug",
    resolve: ({ slug }) => {
      const rule = rules.find((r) => r.slug === slug);
      if (!rule) {
        return {
          title: "قانون پیدا نشد",
          description: "قانونی با این شناسه وجود ندارد.",
        };
      }
      return {
        title: rule.title,
        description: rule.subtitle,
      };
    },
  },
  {
    pattern: "/dashboard/*",
    resolve: () => ({
      title: "داشبورد",
      description: "پنل دانشجوی امپراتوری کد.",
      noindex: true,
    }),
  },
  {
    pattern: "*",
    resolve: () => ({
      title: "صفحه پیدا نشد",
      description: "صفحه‌ای با این آدرس وجود ندارد.",
      noindex: true,
    }),
  },
];

// ============================================
// Combined table — dynamic first (more specific)
// ============================================

export const seoRoutes: RouteConfig[] = [...DYNAMIC, ...STATIC];

/**
 * Code Empire — SEO route configuration
 */

import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";
import { rules } from "@/data/policy";
import { siteMeta } from "@/data/constants";
import { coursesContent } from "@/content/courses";
import { blogPostsContent } from "@/content/blogs";
import { ruleChrome } from "@/content/policy-rules";
import { home } from "@/content/home";
import { about } from "@/content/about";
import { contact } from "@/content/contact";
import { coursesPage, register } from "@/content/courses-page";
import { guide } from "@/content/guide";
import { blog } from "@/content/blog";
import { policy } from "@/content/policy";
import { notFound } from "@/content/common";

export interface SEOResult {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: {
    id: string;
    data: Record<string, unknown>;
  };
  noindex?: boolean;
}

interface RouteConfig {
  pattern: string;
  resolve: (params: Record<string, string | undefined>) => SEOResult;
}

// ============================================
// Rule slug → content key map
// ============================================

const ruleKeyMap: Record<string, keyof typeof ruleChrome> = {
  "makeup-class": "makeupClass",
  "teacher-replacement": "teacherReplacement",
  "leaving-class": "leavingClass",
  "payment-methods": "paymentMethods",
  "student-ranks": "studentRanks",
  "absence-and-cancellation": "absenceAndCancellation",
};

// ============================================
// Static routes
// ============================================

const STATIC: RouteConfig[] = [
  {
    pattern: "/",
    resolve: () => ({
      title: home.heroTitle,
      description: home.heroSubtitle,
      image: "/icons/icon-512.png",
    }),
  },
  {
    pattern: "/courses",
    resolve: () => ({
      title: coursesPage.title,
      description: coursesPage.subtitle,
    }),
  },
  {
    pattern: "/courses/register",
    resolve: () => ({
      title: register.title,
      description: register.subtitle,
    }),
  },
  {
    pattern: "/guide",
    resolve: () => ({
      title: guide.title,
      description: guide.subtitle,
    }),
  },
  {
    pattern: "/blog",
    resolve: () => ({
      title: blog.title,
      description: blog.subtitle,
    }),
  },
  {
    pattern: "/about",
    resolve: () => ({
      title: about.title,
      description: about.subtitle,
    }),
  },
  {
    pattern: "/contact",
    resolve: () => ({
      title: contact.title,
      description: contact.subtitle,
    }),
  },
  {
    pattern: "/policy",
    resolve: () => ({
      title: policy.title,
      description: policy.subtitle,
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
      const content = slug ? coursesContent[slug] : undefined;
      if (!course || !content) {
        return { title: "دوره یافت نشد", description: "" };
      }
      return {
        title: content.title,
        description: content.description,
        image: course.logo,
        type: "article",
        jsonLd: {
          id: "course-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "Course",
            name: content.title,
            description: content.description,
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
      const post = blogs.find((b) => b.slug === slug);
      const content = slug ? blogPostsContent[slug] : undefined;
      if (!post || !content) {
        return { title: "مقاله یافت نشد", description: "" };
      }
      return {
        title: content.title,
        description: content.excerpt,
        image: post.coverImage,
        type: "article",
        jsonLd: {
          id: "article-schema",
          data: {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.title,
            description: content.excerpt,
            image: post.coverImage,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author.name },
            publisher: { "@type": "Organization", name: siteMeta.name },
          },
        },
      };
    },
  },
  {
    pattern: "/policy/:slug",
    resolve: ({ slug }) => {
      const rule = rules.find((r) => r.slug === slug);
      if (!rule || !slug) {
        return { title: "قانون یافت نشد", description: "" };
      }
      const key = ruleKeyMap[slug];
      const content = key ? ruleChrome[key] : undefined;
      return {
        title: content?.title ?? "قانون",
        description: content?.subtitle ?? "",
      };
    },
  },
  {
    pattern: "/dashboard/*",
    resolve: () => ({
      title: "داشبورد",
      description: "خوش آمدی",
      noindex: true,
    }),
  },
  {
    pattern: "*",
    resolve: () => ({
      title: notFound.title,
      description: notFound.subtitle,
      noindex: true,
    }),
  },
];

export const seoRoutes: RouteConfig[] = [...DYNAMIC, ...STATIC];

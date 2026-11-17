/**
 * Code Empire - Article selectors
 *
 * Lookup, related posts and filtering for the blog.
 */

import { articles } from "@/content/articles";
import type { Article } from "@/content/articles";

// ============================================
// Lookup
// ============================================

export const allArticles: Article[] = [...articles].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const getArticle = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug);

export const getRelated = (article: Article, count = 3): Article[] =>
  article.related
    .map(getArticle)
    .filter((item): item is Article => Boolean(item))
    .slice(0, count);

export const getCategories = (): string[] =>
  Array.from(new Set(allArticles.map((article) => article.category)));

// ============================================
// Filter
// ============================================

export function filterArticles(
  query: string,
  category: string | null,
): Article[] {
  const needle = query.trim().toLowerCase();

  return allArticles.filter((article) => {
    if (category && article.category !== category) return false;
    if (!needle) return true;

    const haystack = [article.title, article.excerpt, ...article.tags]
      .join(" ")
      .toLowerCase();

    return haystack.includes(needle);
  });
}

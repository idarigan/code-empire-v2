/**
 * Code Empire — Blog grid
 *
 * Renders a grid of Dara UI BlogCards.
 * Empty state when no posts match the filters.
 */

import { useNavigate } from "react-router-dom";
import { BlogCard, useI18n } from "dara-ui";
import type { Blog } from "@/types";
import { Icons } from "@/lib/icons";

interface BlogGridProps {
  blogs: Blog[];
  columns?: 2 | 3;
  emptyMessage?: string;
}

export function BlogGrid({ blogs, columns = 3, emptyMessage }: BlogGridProps) {
  const { t } = useI18n();
  const navigate = useNavigate();

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <Icons.fileText className="h-10 w-10 text-[var(--color-text-tertiary)]" />
        <p className="text-[var(--color-text-secondary)] text-sm">
          {emptyMessage ?? t("blog.noResults")}
        </p>
      </div>
    );
  }

  const colsClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const glowCycle: ("primary" | "secondary" | "accent")[] = [
    "primary",
    "secondary",
    "accent",
  ];

  return (
    <div className={`grid ${colsClass} gap-5`}>
      {blogs.map((blog, i) => (
        <BlogCard
          key={blog.slug}
          title={blog.title}
          excerpt={blog.excerpt}
          coverImage={blog.coverImage}
          author={blog.author.name}
          authorAvatar={blog.author.avatar}
          date={blog.date}
          readTime={blog.readTime}
          category={blog.category}
          tags={blog.tags}
          link={`/blog/${blog.slug}`}
          glow={glowCycle[i % glowCycle.length]}
          onClick={() => navigate(`/blog/${blog.slug}`)}
        />
      ))}
    </div>
  );
}

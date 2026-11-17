/**
 * Code Empire - Blog card
 *
 * Cover, category, excerpt and meta for one article in the list.
 */

import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Card, ChevronLeftIcon, ClockIcon } from "dara-ui";
import { getBadgeVariant, getCategoryTone } from "@/config/blog";
import { blogList } from "@/content/blog";
import type { Article } from "@/content/articles";
import { formatDate } from "@/lib/format";
import { ArticleCover } from "./ArticleCover";

export function BlogCard({ article }: { article: Article }) {
  const navigate = useNavigate();
  const tone = getCategoryTone(article.category);
  const open = () => navigate(`/blog/${article.slug}`);

  return (
    <Card
      glow={tone}
      float
      padding="none"
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === "Enter") open();
      }}
      className="flex h-full cursor-pointer flex-col overflow-hidden"
    >
      <ArticleCover category={article.category} />

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge variant={getBadgeVariant(tone)} size="sm" glow>
            {article.category}
          </Badge>
          <span className="text-xs text-[var(--color-text-tertiary)]">
            {formatDate(article.date)}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold leading-snug text-[var(--color-text-primary)]">
          {article.title}
        </h3>

        <p className="line-clamp-3 flex-1 text-sm leading-[1.9] text-[var(--color-text-secondary)]">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border-secondary)] pt-4">
          <div className="flex min-w-0 items-center gap-2">
            <Avatar fallbackText={article.author} size="sm" />
            <span className="truncate text-xs text-[var(--color-text-secondary)]">
              {article.author}
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-1.5 text-xs text-[var(--color-text-tertiary)]">
            <ClockIcon className="h-3.5 w-3.5" />
            {blogList.readTime(article.readTime)}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
          {blogList.readMore}
          <ChevronLeftIcon className="h-4 w-4" />
        </span>
      </div>
    </Card>
  );
}

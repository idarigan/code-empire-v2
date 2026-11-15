/**
 * Code Empire - Article card
 *
 * Magazine teaser with category, excerpt, author and read time.
 */

import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Card, ChevronLeftIcon, ClockIcon } from "dara-ui";
import type { Article } from "@/content/articles";
import { magazine } from "@/content/home";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

// ============================================
// Config
// ============================================

const glows = ["primary", "secondary", "accent"] as const;

interface ArticleCardProps {
  article: Article;
  index: number;
  featured?: boolean;
}

export function ArticleCard({
  article,
  index,
  featured = false,
}: ArticleCardProps) {
  const navigate = useNavigate();
  const open = () => navigate(`/blog/${article.slug}`);

  return (
    <Card
      glow={glows[index % glows.length]}
      float
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === "Enter") open();
      }}
      className="relative flex h-full cursor-pointer flex-col gap-4"
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-4 end-5 select-none font-heading font-bold text-[var(--color-text-primary)] opacity-[0.05]",
          featured ? "text-[9rem]" : "text-8xl",
        )}
      >
        {formatIndex(index + 1)}
      </span>

      <div className="relative flex h-full flex-col gap-4">
        <Badge variant="primary" size="sm" glow className="self-start">
          {article.category}
        </Badge>

        <h3
          className={cn(
            "font-heading font-bold leading-snug text-[var(--color-text-primary)]",
            featured ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          {article.title}
        </h3>

        <p
          className={cn(
            "flex-1 text-sm leading-[1.9] text-[var(--color-text-secondary)]",
            featured ? "line-clamp-4" : "line-clamp-3",
          )}
        >
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
            {magazine.readTime(article.readTime)}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
          {magazine.readMore}
          <ChevronLeftIcon className="h-4 w-4" />
        </span>
      </div>
    </Card>
  );
}

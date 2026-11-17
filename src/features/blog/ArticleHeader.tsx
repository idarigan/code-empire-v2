/**
 * Code Empire - Article header
 *
 * Back link, category, title, author line, share and cover.
 */

import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  ChevronLeftIcon,
  ClockIcon,
  ScrollReveal,
  useToast,
} from "dara-ui";
import { CopyIcon } from "@/components/icons";
import { getBadgeVariant, getCategoryTone } from "@/config/blog";
import { articlePage } from "@/content/blog";
import type { Article } from "@/content/articles";
import { formatDate } from "@/lib/format";
import { ArticleCover } from "./ArticleCover";

export function ArticleHeader({ article }: { article: Article }) {
  const navigate = useNavigate();
  const toast = useToast();
  const tone = getCategoryTone(article.category);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(articlePage.copied);
    } catch {
      toast.error(articlePage.copyFailed);
    }
  };

  return (
    <header className="flex flex-col gap-6">
      <ScrollReveal animation="fade-down">
        <Button
          variant="glass"
          size="sm"
          leftIcon={<ChevronLeftIcon className="h-4 w-4 rotate-180" />}
          onClick={() => navigate("/blog")}
        >
          {articlePage.back}
        </Button>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={60}>
        <div className="flex flex-col items-start gap-4">
          <Badge variant={getBadgeVariant(tone)} size="sm">
            {article.category}
          </Badge>

          <h1 className="text-gradient-hero font-heading text-3xl font-bold leading-[1.4] md:text-5xl">
            {article.title}
          </h1>

          <p className="max-w-2xl text-sm leading-[2] text-[var(--color-text-secondary)] md:text-base">
            {article.excerpt}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={120}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[var(--color-border-secondary)] py-4">
          <div className="flex items-center gap-3">
            <Avatar name={article.author} size="sm" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                {article.author}
              </span>
              {article.authorRole && (
                <span className="text-xs text-[var(--color-text-tertiary)]">
                  {article.authorRole}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[var(--color-text-tertiary)]">
            {article.date && <span>{formatDate(article.date)}</span>}
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5" />
              {articlePage.readTime(article.readTime)}
            </span>
            <Button
              variant="glass"
              size="sm"
              leftIcon={<CopyIcon className="h-3.5 w-3.5" />}
              onClick={handleShare}
            >
              {articlePage.share}
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={180}>
        <ArticleCover
          category={article.category}
          className="rounded-[var(--radius-lg)]"
        />
      </ScrollReveal>
    </header>
  );
}

/**
 * Code Empire - Article body
 *
 * Article sections in a glass card followed by its tags.
 */

import { Badge, Card, ScrollReveal } from "dara-ui";
import { ContentBlocks } from "@/components/ContentBlocks";
import { articlePage } from "@/content/blog";
import type { Article } from "@/content/articles";

export function ArticleBody({ article }: { article: Article }) {
  if (article.sections.length === 0 && article.tags.length === 0) return null;

  return (
    <ScrollReveal animation="fade-up">
      <Card padding="lg" className="flex flex-col gap-10">
        {article.sections.length > 0 && (
          <ContentBlocks sections={article.sections} headingLevel={2} />
        )}

        {article.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 border-t border-[var(--color-border-secondary)] pt-6">
            <span className="text-sm text-[var(--color-text-tertiary)]">
              {articlePage.tags}:
            </span>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="primary" size="sm" outline>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Card>
    </ScrollReveal>
  );
}

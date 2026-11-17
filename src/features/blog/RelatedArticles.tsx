/**
 * Code Empire - Related articles
 *
 * Posts that continue the topic of the current one.
 */

import { ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { articlePage } from "@/content/blog";
import type { Article } from "@/content/articles";
import { BlogCard } from "./BlogCard";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <Section id="related" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={articlePage.relatedEyebrow}
        title={articlePage.relatedTitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <ScrollReveal
            key={article.slug}
            animation="fade-up"
            delay={i * 80}
            className="h-full"
          >
            <BlogCard article={article} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

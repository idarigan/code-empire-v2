/**
 * Code Empire - Article page
 */

import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "dara-ui";
import { Section } from "@/components/Section";
import { articlePage } from "@/content/blog";
import {
  ArticleBody,
  ArticleFaq,
  ArticleHeader,
  ReadingProgress,
  RelatedArticles,
} from "@/features/blog";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getArticle, getRelated } from "@/lib/articles";

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = slug ? getArticle(slug) : undefined;

  usePageTitle(article?.title ?? articlePage.notFound.title);

  if (!article) {
    return (
      <Section>
        <Card
          variant="outline"
          className="mx-auto flex max-w-xl flex-col items-center gap-4 py-14 text-center"
        >
          <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
            {articlePage.notFound.title}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {articlePage.notFound.text}
          </p>
          <Button variant="primary" onClick={() => navigate("/blog")}>
            {articlePage.notFound.action}
          </Button>
        </Card>
      </Section>
    );
  }

  return (
    <>
      <ReadingProgress />

      <Section className="pt-10 md:pt-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <ArticleHeader article={article} />
          <ArticleBody article={article} />
          <ArticleFaq items={article.faq} />
        </div>
      </Section>

      <RelatedArticles articles={getRelated(article)} />
    </>
  );
}

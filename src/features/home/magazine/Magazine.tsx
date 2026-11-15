/**
 * Code Empire - Magazine
 *
 * One lead article beside two stacked teasers.
 */

import { useNavigate } from "react-router-dom";
import { Button, ChevronLeftIcon, ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { featuredArticles } from "@/content/articles";
import { magazine } from "@/content/home";
import { ArticleCard } from "./ArticleCard";

export function Magazine() {
  const navigate = useNavigate();
  const [lead, ...rest] = featuredArticles;

  return (
    <Section id="magazine">
      <SectionHeader
        eyebrow={magazine.eyebrow}
        title={magazine.title}
        subtitle={magazine.subtitle}
        action={
          <Button
            variant="outline"
            size="sm"
            rightIcon={<ChevronLeftIcon className="h-4 w-4" />}
            onClick={() => navigate("/blog")}
          >
            {magazine.viewAll}
          </Button>
        }
      />

      <div className="grid gap-5 lg:grid-cols-5">
        <ScrollReveal animation="fade-up" className="h-full lg:col-span-3">
          <ArticleCard article={lead} index={0} featured />
        </ScrollReveal>

        <div className="grid gap-5 lg:col-span-2 lg:grid-rows-2">
          {rest.map((article, i) => (
            <ScrollReveal
              key={article.slug}
              animation="fade-up"
              delay={(i + 1) * 100}
              className="h-full"
            >
              <ArticleCard article={article} index={i + 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

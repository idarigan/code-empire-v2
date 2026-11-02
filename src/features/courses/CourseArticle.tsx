/**
 * Code Empire - Article renderer
 */

import { Card, ScrollReveal } from "dara-ui";
import type { ArticleSection } from "@/types";

interface CourseArticleProps {
  sections: ArticleSection[];
}

export function CourseArticle({ sections }: CourseArticleProps) {
  if (sections.length === 0) return null;

  return (
    <article className="flex flex-col gap-10 md:gap-12">
      {sections.map((section, i) => (
        <ScrollReveal key={i} animation="fade-up" delay={i * 40}>
          <div className="flex flex-col gap-4">
            {section.cover && (
              <Card variant="solid" padding="none" className="overflow-hidden">
                {section.coverIsVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    controls
                    className="w-full aspect-video object-cover"
                  >
                    <source src={section.cover} />
                  </video>
                ) : (
                  <img
                    src={section.cover}
                    alt={section.title ?? ""}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                )}
              </Card>
            )}

            {section.title && (
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                {section.title}
              </h2>
            )}

            {section.paragraphs?.map((p, j) => (
              <p
                key={j}
                className="text-[var(--color-text-secondary)] text-[15px] md:text-base leading-[1.9]"
                dir="auto"
              >
                {p}
              </p>
            ))}

            {section.hints && section.hints.length > 0 && (
              <ul className="flex flex-col gap-2.5 ps-5 list-disc marker:text-[var(--color-primary)]">
                {section.hints.map((hint, j) => (
                  <li
                    key={j}
                    className="text-[var(--color-text-secondary)] text-[15px] md:text-base leading-[1.9]"
                    dir="auto"
                  >
                    {hint}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ScrollReveal>
      ))}
    </article>
  );
}

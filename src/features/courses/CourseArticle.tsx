/**
 * Code Empire — Article renderer
 */

import { Card, ScrollReveal, useI18n } from "dara-ui";
import type { ArticleSection } from "@/types";

interface CourseArticleProps {
  sections: ArticleSection[];
}

export function CourseArticle({ sections }: CourseArticleProps) {
  const { t } = useI18n();

  if (sections.length === 0) return null;

  return (
    <article className="flex flex-col gap-12">
      {sections.map((section, i) => (
        <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
          <div className="flex flex-col gap-4">
            {section.cover && (
              <Card variant="solid" padding="none" className="overflow-hidden">
                {section.coverIsVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    controls
                    className="w-full max-h-[60vh] object-cover"
                  >
                    <source src={section.cover} />
                  </video>
                ) : (
                  <img
                    src={section.cover}
                    alt={section.title ?? ""}
                    className="w-full max-h-[60vh] object-cover"
                    loading="lazy"
                  />
                )}
              </Card>
            )}

            {section.title && (
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gradient-primary">
                {section.title}
              </h2>
            )}

            {section.paragraphs?.map((p, j) => (
              <p
                key={j}
                className="text-[var(--color-text-secondary)] leading-relaxed"
                dir="auto"
              >
                {p}
              </p>
            ))}

            {section.hints && section.hints.length > 0 && (
              <ul className="flex flex-col gap-3 ps-6 list-disc">
                {section.hints.map((hint, j) => (
                  <li
                    key={j}
                    className="text-[var(--color-text-secondary)] leading-relaxed"
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

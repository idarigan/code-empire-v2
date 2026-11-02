/**
 * Code Empire - Course sections
 *
 * Numbered content cards. Sections with a cover render the media beside
 * the text on md+ and alternate sides.
 */

import { Card, ScrollReveal } from "dara-ui";
import type { ArticleSection } from "@/types";
import { formatNumber } from "@/lib/format";
import { Icons } from "@/lib/icons";

interface CourseSectionsProps {
  sections: ArticleSection[];
}

export function CourseSections({ sections }: CourseSectionsProps) {
  if (sections.length === 0) return null;

  return (
    <div className="flex flex-col gap-5 md:gap-6">
      {sections.map((section, i) => {
        const hasCover = Boolean(section.cover);
        const reverse = i % 2 === 1;

        return (
          <ScrollReveal key={i} animation="fade-up">
            <Card variant="solid" padding="none" className="overflow-hidden">
              <div
                className={
                  hasCover ? "grid grid-cols-1 md:grid-cols-5" : undefined
                }
              >
                {hasCover && (
                  <div
                    className={`relative aspect-video bg-[var(--color-bg-tertiary)] md:col-span-2 md:aspect-auto md:min-h-[16rem] ${
                      reverse ? "md:order-2" : ""
                    }`}
                  >
                    {section.coverIsVideo ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="absolute inset-0 h-full w-full object-cover"
                      >
                        <source src={section.cover} />
                      </video>
                    ) : (
                      <img
                        src={section.cover}
                        alt={section.title ?? ""}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                )}

                <div
                  className={`flex min-w-0 flex-col gap-4 p-5 md:p-7 ${
                    hasCover ? "md:col-span-3" : ""
                  }`}
                >
                  {section.title && (
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
                        style={{
                          background: "var(--color-primary-light)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {formatNumber(i + 1)}
                      </span>
                      <h3 className="font-heading text-base font-bold leading-snug text-[var(--color-text-primary)] md:text-lg">
                        {section.title}
                      </h3>
                    </div>
                  )}

                  {section.paragraphs?.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-sm leading-[1.95] text-[var(--color-text-secondary)] md:text-[15px]"
                      dir="auto"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.hints && section.hints.length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {section.hints.map((hint, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-[15px]"
                        >
                          <Icons.check className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[var(--color-success)]" />
                          <span className="min-w-0" dir="auto">
                            {hint}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

/**
 * Code Empire - Content blocks
 *
 * Renders titled sections of paragraphs and checklist hints.
 */

import { CheckIcon } from "dara-ui";
import type { ContentSection } from "@/content/types";
import { cn } from "@/lib/cn";

// ============================================
// Config
// ============================================

type Level = 2 | 3 | 4;

const headingClasses: Record<Level, string> = {
  2: "text-2xl md:text-3xl",
  3: "text-xl md:text-2xl",
  4: "text-base md:text-lg",
};

interface ContentBlocksProps {
  sections: ContentSection[];
  headingLevel?: Level;
  className?: string;
}

export function ContentBlocks({
  sections,
  headingLevel = 2,
  className,
}: ContentBlocksProps) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {sections.map((section, i) => (
        <section
          key={`${section.title ?? "section"}-${i}`}
          className="flex flex-col gap-4"
        >
          {section.title && (
            <Heading
              className={cn(
                "font-heading font-bold leading-[1.5] text-[var(--color-text-primary)]",
                headingClasses[headingLevel],
              )}
            >
              {section.title}
            </Heading>
          )}

          {section.paragraphs?.map((text) => (
            <p
              key={text}
              className="text-sm leading-[2.2] text-[var(--color-text-secondary)] md:text-base"
            >
              {text}
            </p>
          ))}

          {section.hints && (
            <ul className="flex flex-col gap-2.5">
              {section.hints.map((hint) => (
                <li
                  key={hint}
                  className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-secondary)] bg-[var(--color-bg-tertiary)]/40 px-4 py-3 text-sm leading-[2] text-[var(--color-text-primary)]"
                >
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "var(--color-success-light)",
                      color: "var(--color-success)",
                    }}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

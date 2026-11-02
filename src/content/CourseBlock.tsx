/**
 * Code Empire - Course block
 *
 * Anchored section wrapper with an icon heading.
 * Shared by every block in the single course page body.
 */

import type { ReactNode } from "react";
import { Badge, ScrollReveal } from "dara-ui";

interface CourseBlockProps {
  id: string;
  eyebrow: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function CourseBlock({
  id,
  eyebrow,
  title,
  icon,
  children,
}: CourseBlockProps) {
  return (
    <section id={id} className="scroll-mt-40">
      <ScrollReveal animation="fade-up">
        <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] md:h-12 md:w-12"
            style={{
              background: "var(--color-primary-light)",
              color: "var(--color-primary)",
            }}
          >
            {icon}
          </span>
          <div className="flex min-w-0 flex-col items-start gap-1.5">
            <Badge variant="primary" size="sm" outline>
              {eyebrow}
            </Badge>
            <h2 className="font-heading text-xl font-bold leading-tight text-[var(--color-text-primary)] md:text-2xl">
              {title}
            </h2>
          </div>
        </div>
      </ScrollReveal>
      {children}
    </section>
  );
}

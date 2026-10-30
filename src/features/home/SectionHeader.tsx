/**
 * Code Empire — Section header
 *
 * Shared title block for every home section.
 * Keeps the vertical rhythm consistent across the page.
 */

import type { ReactNode } from "react";
import { ScrollReveal } from "dara-ui";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  action?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <ScrollReveal animation="fade-up">
      <div
        className={[
          "mb-8 md:mb-10 flex flex-col gap-4",
          centered ? "items-center text-center" : "items-start text-start",
          action ? "md:flex-row md:items-end md:justify-between" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "flex flex-col gap-2",
            centered ? "items-center" : "items-start",
          ].join(" ")}
        >
          {eyebrow && (
            <span className="section-label font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {eyebrow}
            </span>
          )}
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[var(--color-text-secondary)] max-w-xl text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    </ScrollReveal>
  );
}

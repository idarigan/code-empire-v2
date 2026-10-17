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
  const alignClass =
    align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <ScrollReveal animation="fade-up">
      <div
        className={`flex flex-col gap-3 mb-10 ${alignClass} ${
          action ? "md:flex-row md:items-end md:justify-between" : ""
        }`}
      >
        <div className={`flex flex-col gap-2 ${alignClass}`}>
          {eyebrow && (
            <span className="section-label font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">
              {eyebrow}
            </span>
          )}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[var(--color-text-secondary)] max-w-2xl text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    </ScrollReveal>
  );
}

/**
 * Code Empire - Section header
 *
 * Shared title block for every home section.
 * Keeps the vertical rhythm consistent across the page.
 */

import type { ReactNode } from "react";
import { Badge, ScrollReveal } from "dara-ui";

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
          "mb-10 md:mb-14 flex flex-col gap-6",
          centered ? "items-center text-center" : "items-start text-start",
          action ? "md:flex-row md:items-end md:justify-between" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "flex flex-col gap-3",
            centered ? "items-center" : "items-start",
          ].join(" ")}
        >
          {eyebrow && (
            <Badge variant="primary" size="sm" outline>
              {eyebrow}
            </Badge>
          )}
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] leading-tight">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="h-1 w-12 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
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

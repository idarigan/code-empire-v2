/**
 * Code Empire - Section header
 *
 * Eyebrow, title and subtitle block shared by every home section.
 */

import type { ReactNode } from "react";
import { Badge, ScrollReveal } from "dara-ui";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  align?: "start" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  align = "start",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <ScrollReveal animation="fade-up" className="mb-10 md:mb-14">
      <div
        className={cn(
          "flex flex-col gap-6",
          centered
            ? "items-center text-center"
            : "md:flex-row md:items-end md:justify-between",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-3",
            centered ? "items-center" : "items-start",
          )}
        >
          <Badge variant="primary" size="sm" outline>
            {eyebrow}
          </Badge>
          <h2 className="font-heading text-3xl font-bold leading-[1.3] text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="h-1 w-14 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
          {subtitle && (
            <p className="max-w-xl text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </ScrollReveal>
  );
}

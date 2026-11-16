/**
 * Code Empire - Channel card
 *
 * Shell for one way of reaching the team: icon, label, details and actions.
 */

import type { ReactNode } from "react";
import { Card, ScrollReveal } from "dara-ui";

interface ChannelCardProps {
  icon: ReactNode;
  label: string;
  glow: "primary" | "secondary" | "accent";
  delay?: number;
  actions?: ReactNode;
  children: ReactNode;
}

export function ChannelCard({
  icon,
  label,
  glow,
  delay = 0,
  actions,
  children,
}: ChannelCardProps) {
  return (
    <ScrollReveal animation="fade-up" delay={delay} className="h-full">
      <Card
        glow={glow}
        float
        className="flex h-full flex-col items-start gap-4"
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
          style={{
            background: `var(--color-${glow}-light)`,
            color: `var(--color-${glow})`,
          }}
        >
          {icon}
        </span>

        <div className="flex w-full flex-col items-start gap-1.5">
          <h3 className="font-heading text-sm font-bold text-[var(--color-text-tertiary)]">
            {label}
          </h3>
          {children}
        </div>

        {actions && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">{actions}</div>
        )}
      </Card>
    </ScrollReveal>
  );
}

/**
 * Code Empire - Numbers
 *
 * Headline figures that count up when they scroll into view.
 */

import type { ComponentType } from "react";
import {
  Card,
  ClockIcon,
  GradientRing,
  InfoIcon,
  Progress,
  ScrollReveal,
  StarIcon,
  UserIcon,
  useScrollReveal,
} from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { siteStats } from "@/config/site";
import { numbers } from "@/content/home";
import { useCountUp } from "@/hooks/useCountUp";
import { formatNumber } from "@/lib/format";

// ============================================
// Config
// ============================================

const stats = [
  {
    id: "students",
    value: siteStats.students,
    icon: UserIcon,
    variant: "primary",
  },
  {
    id: "mentors",
    value: siteStats.mentors,
    icon: StarIcon,
    variant: "secondary",
  },
  {
    id: "hours",
    value: siteStats.trainingKiloHours,
    icon: ClockIcon,
    variant: "accent",
  },
  {
    id: "consultations",
    value: siteStats.consultationHours,
    icon: InfoIcon,
    variant: "primary",
  },
] as const;

// ============================================
// Tile
// ============================================

interface NumberTileProps {
  value: number;
  label: string;
  icon: ComponentType<{ className?: string }>;
  variant: "primary" | "secondary" | "accent";
  delay: number;
}

function NumberTile({
  value,
  label,
  icon: Icon,
  variant,
  delay,
}: NumberTileProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="h-full">
      <ScrollReveal animation="zoom-in" delay={delay} className="h-full">
        <Card glow={variant} float className="flex h-full flex-col gap-5">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
            style={{
              background: `var(--color-${variant}-light)`,
              color: `var(--color-${variant})`,
            }}
          >
            <Icon className="h-5 w-5" />
          </span>

          <div className="flex flex-col gap-1">
            <span
              dir="ltr"
              className="text-gradient-primary font-heading text-5xl font-bold"
            >
              {formatNumber(count)}+
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              {label}
            </span>
          </div>

          <Progress
            value={(count / value) * 100}
            color={variant}
            size="sm"
            animated={false}
          />
        </Card>
      </ScrollReveal>
    </div>
  );
}

export function Numbers() {
  return (
    <Section id="numbers" className="isolate overflow-hidden">
      <GradientRing size={420} blur={110} opacity={0.18} />

      <SectionHeader
        eyebrow={numbers.eyebrow}
        title={numbers.title}
        subtitle={numbers.subtitle}
        align="center"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <NumberTile
            key={stat.id}
            value={stat.value}
            label={numbers.labels[stat.id]}
            icon={stat.icon}
            variant={stat.variant}
            delay={i * 90}
          />
        ))}
      </div>
    </Section>
  );
}

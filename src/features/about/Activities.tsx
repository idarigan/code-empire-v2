/**
 * Code Empire - Activities
 *
 * Bento grid of everything the team does besides teaching.
 */

import type { ComponentType } from "react";
import {
  Card,
  ExploreIcon,
  InfoIcon,
  ScrollReveal,
  SparkleIcon,
  StarIcon,
  TargetIcon,
} from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { activities } from "@/content/about";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

// ============================================
// Layout
// ============================================

const icons: Record<string, ComponentType<{ className?: string }>> = {
  website: ExploreIcon,
  kids: SparkleIcon,
  consulting: InfoIcon,
  freelance: TargetIcon,
  support: StarIcon,
};

const glows = [
  "primary",
  "secondary",
  "accent",
  "primary",
  "secondary",
] as const;
const spans = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Activities() {
  return (
    <Section id="activities">
      <SectionHeader
        eyebrow={activities.eyebrow}
        title={activities.title}
        subtitle={activities.subtitle}
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {activities.items.map((item, i) => {
          const Icon = icons[item.id];
          const glow = glows[i];

          return (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={i * 70}
              className={cn("h-full", spans[i])}
            >
              <Card glow={glow} float className="relative h-full">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 end-5 select-none font-heading text-8xl font-bold text-[var(--color-text-primary)] opacity-[0.05]"
                >
                  {formatIndex(i + 1)}
                </span>

                <div className="relative flex h-full flex-col gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
                    style={{
                      background: `var(--color-${glow}-light)`,
                      color: `var(--color-${glow})`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="font-heading text-lg font-bold leading-snug text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}

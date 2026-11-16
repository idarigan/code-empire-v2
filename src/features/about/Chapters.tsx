/**
 * Code Empire - Chapters
 *
 * Alternating story rows: who we are, our mission and why us.
 */

import type { ComponentType } from "react";
import {
  Badge,
  Card,
  FlagIcon,
  RocketIcon,
  ScrollReveal,
  TargetIcon,
} from "dara-ui";
import { Section } from "@/components/Section";
import { chapters } from "@/content/about";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

// ============================================
// Config
// ============================================

const icons: Record<string, ComponentType<{ className?: string }>> = {
  about: FlagIcon,
  mission: TargetIcon,
  why: RocketIcon,
};

type Variant = "primary" | "secondary" | "accent";

// ============================================
// Visual
// ============================================

interface ChapterVisualProps {
  index: number;
  variant: Variant;
  icon: ComponentType<{ className?: string }>;
}

function ChapterVisual({ index, variant, icon: Icon }: ChapterVisualProps) {
  return (
    <Card
      glow={variant}
      padding="none"
      radius="large"
      className="relative isolate aspect-[4/3] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, var(--color-${variant}-light), transparent 65%)`,
        }}
      />

      {[0, 1, 2].map((ring) => (
        <span
          key={ring}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: `${(ring + 1) * 30}%`,
            aspectRatio: "1",
            transform: "translate(-50%, -50%)",
            borderColor: `color-mix(in srgb, var(--color-${variant}) ${34 - ring * 9}%, transparent)`,
          }}
        />
      ))}

      <span
        aria-hidden="true"
        className="absolute bottom-2 end-5 select-none font-heading text-[8rem] font-bold leading-none text-[var(--color-text-primary)] opacity-[0.06]"
      >
        {formatIndex(index + 1)}
      </span>

      <span
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white"
        style={{
          background: `var(--color-${variant}-solid)`,
          boxShadow: `var(--shadow-glow-${variant})`,
        }}
      >
        <Icon className="h-9 w-9" />
      </span>
    </Card>
  );
}

// ============================================
// Section
// ============================================

export function Chapters() {
  return (
    <Section id="story">
      <div className="flex flex-col gap-16 md:gap-24">
        {chapters.items.map((item, i) => {
          const reverse = i % 2 === 1;
          const Icon = icons[item.id];
          const badgeVariant =
            item.variant === "accent" ? "warning" : item.variant;

          return (
            <div
              key={item.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <ScrollReveal
                animation={reverse ? "fade-left" : "fade-right"}
                className={cn(reverse && "lg:order-2")}
              >
                <ChapterVisual index={i} variant={item.variant} icon={Icon} />
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={120}>
                <div className="flex flex-col items-start gap-4">
                  <Badge variant={badgeVariant} size="sm" outline>
                    {item.eyebrow}
                  </Badge>

                  <h2 className="font-heading text-3xl font-bold leading-[1.35] text-[var(--color-text-primary)] md:text-4xl">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-[2.1] text-[var(--color-text-secondary)] md:text-base">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant={badgeVariant} size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

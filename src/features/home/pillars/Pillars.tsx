/**
 * Code Empire - Pillars
 *
 * Bento grid explaining what makes the academy different.
 */

import {
  Badge,
  Card,
  FlagIcon,
  MailIcon,
  ScrollReveal,
  TargetIcon,
  TrophyIcon,
} from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { pillars } from "@/content/home";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

// ============================================
// Layout
// ============================================

const icons = {
  project: TargetIcon,
  mentors: TrophyIcon,
  support: MailIcon,
  path: FlagIcon,
} as const;

const spans = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
];

export function Pillars() {
  return (
    <Section id="why-us">
      <SectionHeader
        eyebrow={pillars.eyebrow}
        title={pillars.title}
        subtitle={pillars.subtitle}
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {pillars.items.map((item, i) => {
          const Icon = icons[item.id as keyof typeof icons];
          const badgeVariant =
            item.variant === "accent" ? "warning" : item.variant;

          return (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={i * 80}
              className={cn("h-full", spans[i])}
            >
              <Card glow={item.variant} float className="relative h-full">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 end-5 select-none font-heading text-8xl font-bold text-[var(--color-text-primary)] opacity-[0.05]"
                >
                  {formatIndex(i + 1)}
                </span>

                <div className="relative flex h-full flex-col gap-4">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)]"
                    style={{
                      background: `var(--color-${item.variant}-light)`,
                      color: `var(--color-${item.variant})`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)]">
                    {item.desc}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant={badgeVariant} size="sm" outline>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}

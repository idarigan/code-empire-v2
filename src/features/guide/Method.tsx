/**
 * Code Empire - Method
 *
 * Four principles behind how classes are taught.
 */

import type { ComponentType } from "react";
import {
  Card,
  ClockIcon,
  FlagIcon,
  MailIcon,
  ScrollReveal,
  TargetIcon,
} from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { guideMethod } from "@/content/guide";
import { formatIndex } from "@/lib/format";

// ============================================
// Config
// ============================================

const icons: Record<string, ComponentType<{ className?: string }>> = {
  project: TargetIcon,
  path: FlagIcon,
  support: MailIcon,
  time: ClockIcon,
};

export function Method() {
  return (
    <Section id="method" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={guideMethod.eyebrow}
        title={guideMethod.title}
        subtitle={guideMethod.subtitle}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {guideMethod.items.map((item, i) => {
          const Icon = icons[item.id];

          return (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={i * 80}
              className="h-full"
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
                    className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
                    style={{
                      background: `var(--color-${item.variant}-light)`,
                      color: `var(--color-${item.variant})`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-[2] text-[var(--color-text-secondary)]">
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

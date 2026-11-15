/**
 * Code Empire - Testimonials
 *
 * Student quotes with star ratings.
 */

import { Avatar, Card, ScrollReveal, StarIcon } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/content/home";

const glows = ["primary", "secondary", "accent", "primary"] as const;

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.items.map((item, i) => (
          <ScrollReveal
            key={item.id}
            animation="fade-up"
            delay={i * 80}
            className="h-full"
          >
            <Card glow={glows[i % glows.length]} className="relative h-full">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 end-6 select-none font-heading text-8xl text-[var(--color-primary)] opacity-20"
              >
                “
              </span>

              <div className="relative flex h-full flex-col gap-5">
                <div className="flex items-center gap-0.5 text-[var(--color-warning)]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="flex-1 text-sm leading-[2] text-[var(--color-text-secondary)] md:text-base">
                  {item.quote}
                </p>

                <div className="flex items-center gap-3 border-t border-[var(--color-border-secondary)] pt-4">
                  <Avatar fallbackText={item.name} size="md" glow="primary" />
                  <div className="min-w-0">
                    <h4 className="truncate font-heading text-sm font-bold text-[var(--color-text-primary)]">
                      {item.name}
                    </h4>
                    <p className="truncate text-xs text-[var(--color-text-tertiary)]">
                      {item.job}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

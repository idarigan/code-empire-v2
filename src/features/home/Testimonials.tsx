/**
 * Code Empire - Testimonials
 */

import { Card, Avatar, ScrollReveal } from "dara-ui";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./SectionHeader";
import { testimonialCopy } from "@/content/testimonials";
import { home } from "@/content/home";
import { Icons } from "@/lib/icons";

const GLOWS = ["primary", "secondary", "accent", "primary"] as const;

export function Testimonials() {
  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.testimonialsEyebrow}
          title={home.testimonials}
          subtitle={home.heroSubtitle}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {testimonials.map((review, i) => {
            const copy =
              testimonialCopy[review.slug as keyof typeof testimonialCopy];
            if (!copy) return null;

            return (
              <ScrollReveal
                key={review.slug}
                animation="fade-up"
                delay={i * 80}
              >
                <Card glow={GLOWS[i % GLOWS.length]} className="h-full">
                  <div className="flex h-full flex-col gap-5">
                    <div className="flex items-start justify-between gap-3">
                      <Icons.quote className="h-8 w-8 text-[var(--color-primary)] opacity-40" />
                      <div className="flex items-center gap-0.5 text-[var(--color-warning)]">
                        {Array.from({ length: review.rating }).map((_, idx) => (
                          <Icons.star
                            key={idx}
                            className="h-3.5 w-3.5 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="flex-1 text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-base">
                      {copy.quote}
                    </p>

                    <div className="flex items-center gap-3 border-t border-[var(--color-border-secondary)] pt-4">
                      <Avatar
                        src={review.avatar}
                        fallbackText={copy.name}
                        size="md"
                        glow="primary"
                      />
                      <div className="min-w-0">
                        <h4 className="truncate font-heading text-sm font-bold text-[var(--color-text-primary)]">
                          {copy.name}
                        </h4>
                        <p className="truncate text-xs text-[var(--color-text-tertiary)]">
                          {copy.job}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

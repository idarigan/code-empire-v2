/**
 * Code Empire - Page hero
 *
 * Centered title block that opens every inner page.
 */

import type { ReactNode } from "react";
import { Badge, GradientRing, ScrollReveal } from "dara-ui";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-6 pt-14 md:pb-10 md:pt-24">
      <GradientRing size={420} blur={110} opacity={0.22} />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-5 text-center md:px-10">
        <ScrollReveal animation="fade-down">
          <Badge variant="primary" glow>
            {eyebrow}
          </Badge>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={80}>
          <h1 className="text-gradient-hero font-heading text-4xl font-bold leading-[1.3] md:text-6xl">
            {title}
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={140}>
          <p className="max-w-2xl text-base leading-[2] text-[var(--color-text-secondary)] md:text-lg">
            {subtitle}
          </p>
        </ScrollReveal>

        {children && (
          <ScrollReveal animation="fade-up" delay={200}>
            {children}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

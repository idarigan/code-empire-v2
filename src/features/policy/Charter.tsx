/**
 * Code Empire - Charter
 *
 * The five general principles that apply to everyone.
 */

import { Badge, Card, ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { charter } from "@/content/policy";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

// ============================================
// Layout
// ============================================

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

export function Charter() {
  return (
    <Section id="charter">
      <SectionHeader
        eyebrow={charter.eyebrow}
        title={charter.title}
        subtitle={charter.subtitle}
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {charter.items.map((item, i) => (
          <ScrollReveal
            key={item.id}
            animation="fade-up"
            delay={i * 70}
            className={cn("h-full", spans[i])}
          >
            <Card glow={glows[i]} float className="h-full">
              <div className="flex h-full flex-col gap-4">
                <Badge
                  variant="primary"
                  size="sm"
                  outline
                  className="self-start"
                >
                  {formatIndex(Number(item.id))}
                </Badge>

                <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {item.points.map((point) => (
                    <div key={point.text} className="flex flex-col gap-1.5">
                      {point.label && (
                        <h4 className="text-sm font-bold text-[var(--color-primary)]">
                          {point.label}
                        </h4>
                      )}
                      <p className="text-sm leading-[2] text-[var(--color-text-secondary)]">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

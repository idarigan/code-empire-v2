/**
 * Code Empire — About half sections
 *
 * Alternating image/text blocks from about.halfSections.
 */

import { Card, Badge, ScrollReveal } from "dara-ui";
import { about } from "@/data/constants";
import { Icons } from "@/lib/icons";

export function HalfSections() {
  const items = about.halfSections.map((section) => ({
    title: section.title,
    description: section.description,
    cover: section.cover,
    glow: section.glow,
  }));

  return (
    <div className="flex flex-col gap-12">
      {items.map((item, i) => {
        const reverse = i % 2 === 1;
        return (
          <ScrollReveal
            key={item.title}
            animation={reverse ? "fade-left" : "fade-right"}
            delay={i * 80}
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Card padding="none" glow={item.glow} className="overflow-hidden">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Card>

              <div className="flex flex-col gap-4">
                <Badge
                  variant={item.glow === "accent" ? "primary" : item.glow}
                  size="sm"
                  glow
                >
                  <span className="inline-flex items-center gap-1">
                    <Icons.info className="h-3.5 w-3.5" />
                    {item.title}
                  </span>
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-gradient-primary">
                  {item.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

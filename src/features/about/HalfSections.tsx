/**
 * Code Empire — About half sections
 *
 * Alternating image/text blocks from about.halfSections.
 */

import { Card, Badge, ScrollReveal, useI18n } from "dara-ui";
import { Icons } from "@/lib/icons";

export function HalfSections() {
  const { t } = useI18n();

  const items = [
    {
      titleKey: "about.section1Title",
      descKey: "about.section1Desc",
      cover: "/images/about/about.png",
      glow: "primary" as const,
    },
    {
      titleKey: "about.section2Title",
      descKey: "about.section2Desc",
      cover: "/images/about/mission.png",
      glow: "secondary" as const,
    },
    {
      titleKey: "about.section3Title",
      descKey: "about.section3Desc",
      cover: "/images/about/why-us.png",
      glow: "accent" as const,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {items.map((item, i) => {
        const reverse = i % 2 === 1;
        return (
          <ScrollReveal
            key={item.titleKey}
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
                  alt={t(item.titleKey)}
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
                    {t(item.titleKey)}
                  </span>
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-gradient-primary">
                  {t(item.titleKey)}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

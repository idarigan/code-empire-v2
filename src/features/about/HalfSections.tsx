/**
 * Code Empire — About half sections
 *
 * Three alternating image/text blocks: about, mission, why us.
 * Each block uses Dara UI Card + ScrollReveal for entrance.
 */

import { Card, Badge, ScrollReveal, useI18n } from "dara-ui";
import { Icons } from "@/lib/icons";

export function HalfSections() {
  const { t } = useI18n();

  const items = [
    {
      eyebrow: t("about.title"),
      title: t("about.title"),
      body: t("about.subtitle"),
      image: "/images/about/1.jpg",
      glow: "primary" as const,
      icon: <Icons.building className="h-5 w-5" />,
    },
    {
      eyebrow: t("about.mission"),
      title: t("about.mission"),
      body: t("home.finalCTADesc"),
      image: "/images/about/2.jpg",
      glow: "secondary" as const,
      icon: <Icons.target className="h-5 w-5" />,
    },
    {
      eyebrow: t("home.whyUs"),
      title: t("home.whyUs"),
      body: t("home.heroSubtitle"),
      image: "/images/about/3.jpg",
      glow: "accent" as const,
      icon: <Icons.crown className="h-5 w-5" />,
    },
  ];

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
                  src={item.image}
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
                    {item.icon}
                    {item.eyebrow}
                  </span>
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-gradient-primary">
                  {item.title}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

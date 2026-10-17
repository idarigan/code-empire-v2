/**
 * Code Empire — Teaching method
 *
 * Guide page section: four cards explaining how Code Empire teaches.
 */

import { Card, ScrollReveal, useI18n } from "dara-ui";
import { Icons } from "@/lib/icons";

export function TeachingMethod() {
  const { t } = useI18n();

  const items = [
    {
      icon: <Icons.target className="h-5 w-5" />,
      title: t("guide.teachingMethod"),
      desc: t("home.heroType3"),
      glow: "primary" as const,
    },
    {
      icon: <Icons.users className="h-5 w-5" />,
      title: t("home.howItWorks"),
      desc: t("home.heroType2"),
      glow: "secondary" as const,
    },
    {
      icon: <Icons.zap className="h-5 w-5" />,
      title: t("home.whyUs"),
      desc: t("home.heroType1"),
      glow: "accent" as const,
    },
    {
      icon: <Icons.award className="h-5 w-5" />,
      title: t("guide.sessionStructure"),
      desc: t("home.finalCTADesc"),
      glow: "primary" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
          <Card glow={item.glow} float className="h-full">
            <div className="flex justify-center mb-3 text-[var(--color-primary)]">
              <div
                className={`p-3 rounded-full bg-[var(--color-${item.glow}-light)]`}
              >
                {item.icon}
              </div>
            </div>
            <h3 className="font-heading font-bold text-sm text-center mb-2 text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] text-center leading-relaxed">
              {item.desc}
            </p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}

/**
 * Code Empire — Why us
 *
 * Four glow cards explaining what makes Code Empire different.
 * Uses Dara UI Card + custom icons, staggered ScrollReveal.
 */

import { Card, ScrollReveal, useI18n } from "dara-ui";
import { SectionHeader } from "./SectionHeader";
import { Icons } from "@/lib/icons";

export function WhyUs() {
  const { t } = useI18n();

  const items = [
    {
      icon: <Icons.zap className="h-6 w-6" />,
      title: t("home.whyUs"),
      desc: t("home.heroType3"),
      glow: "primary" as const,
    },
    {
      icon: <Icons.shieldCheck className="h-6 w-6" />,
      title: t("home.whyUs"),
      desc: t("home.heroType1"),
      glow: "secondary" as const,
    },
    {
      icon: <Icons.messageCircle className="h-6 w-6" />,
      title: t("home.whyUs"),
      desc: t("home.heroType2"),
      glow: "accent" as const,
    },
    {
      icon: <Icons.award className="h-6 w-6" />,
      title: t("home.whyUs"),
      desc: t("home.viewGuide"),
      glow: "primary" as const,
    },
  ];

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Why Us"
          title={t("home.whyUs")}
          subtitle={t("home.heroSubtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <Card glow={item.glow} float className="h-full text-center">
                <div className="flex justify-center mb-4 text-[var(--color-primary)]">
                  <div
                    className={`p-3 rounded-full bg-[var(--color-${item.glow}-light)]`}
                  >
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

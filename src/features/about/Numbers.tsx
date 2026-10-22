/**
 * Code Empire — About numbers
 *
 * Radial StatsWidget built from about.numbers.
 * Labels switch to English when locale is not "fa".
 */

import { StatsWidget, ScrollReveal, useI18n } from "dara-ui";
import { about } from "@/data/constants";
import { SectionHeader } from "@/features/home/SectionHeader";

export function Numbers() {
  const { t, language } = useI18n();
  const locale = language || "fa";

  const palette = ["primary", "secondary", "accent", "success"] as const;

  const stats = about.numbers.map((n, i) => ({
    label: locale === "fa" ? n.title : n.titleEn,
    value: n.number,
    max: n.number * 1.2,
    color: palette[i % palette.length],
    trend: 0,
  }));

  return (
    <div>
      <SectionHeader
        eyebrow={t("about.numbers")}
        title={t("about.numbers")}
        subtitle={t("home.heroSubtitle")}
      />
      <ScrollReveal animation="zoom-in">
        <StatsWidget
          stats={stats}
          variant="radial"
          layout="horizontal"
          glow="primary"
          className="max-w-4xl mx-auto"
        />
      </ScrollReveal>
    </div>
  );
}

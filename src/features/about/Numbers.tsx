/**
 * Code Empire — About numbers
 *
 * Reuses the radial StatsWidget with the four site numbers.
 */

import { StatsWidget, ScrollReveal, useI18n } from "dara-ui";
import { siteStats } from "@/data/constants";
import { SectionHeader } from "@/features/home/SectionHeader";

export function Numbers() {
  const { t } = useI18n();

  const stats = [
    {
      label: "Mentors",
      value: siteStats.mentors,
      max: 50,
      color: "primary" as const,
      trend: 0,
    },
    {
      label: "Students",
      value: siteStats.students,
      max: 1000,
      color: "secondary" as const,
      trend: 12,
    },
    {
      label: "Hours",
      value: siteStats.hours / 1000,
      max: 150,
      color: "accent" as const,
      trend: 8,
    },
    {
      label: "Consultations",
      value: siteStats.consultations,
      max: 500,
      color: "success" as const,
      trend: 15,
    },
  ];

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

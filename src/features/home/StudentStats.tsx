/**
 * Code Empire — Student stats
 *
 * Radial StatsWidget with the four site numbers.
 * Wrapped in ScrollReveal for entrance.
 */

import { StatsWidget, ScrollReveal, useI18n } from "dara-ui";
import { siteStats } from "@/data/constants";
import { SectionHeader } from "./SectionHeader";

export function StudentStats() {
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
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Numbers"
          title={t("home.studentStats")}
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
    </section>
  );
}

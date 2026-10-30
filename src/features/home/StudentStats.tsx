/**
 * Code Empire — Student stats
 */

import { StatsWidget, ScrollReveal } from "dara-ui";
import { siteStats } from "@/data/constants";
import { SectionHeader } from "./SectionHeader";
import { home } from "@/content/home";

export function StudentStats() {
  const stats = [
    {
      label: home.statsMentors,
      value: siteStats.mentors,
      max: 50,
      color: "primary" as const,
      trend: 0,
    },
    {
      label: home.statsStudents,
      value: siteStats.students,
      max: 1000,
      color: "secondary" as const,
      trend: 12,
    },
    {
      label: home.statsHours,
      value: siteStats.hours / 1000,
      max: 150,
      color: "accent" as const,
      trend: 8,
    },
    {
      label: home.statsConsultations,
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
          eyebrow={home.statsNumbers}
          title={home.studentStats}
          subtitle={home.heroSubtitle}
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

/**
 * Code Empire - Student stats
 */

import { Card, Progress, ScrollReveal } from "dara-ui";
import { siteStats } from "@/data/constants";
import { formatNumber } from "@/lib/format";
import { SectionHeader } from "./SectionHeader";
import { home } from "@/content/home";

export function StudentStats() {
  const stats = [
    {
      label: home.statsMentors,
      value: siteStats.mentors,
      max: 50,
      color: "primary" as const,
    },
    {
      label: home.statsStudents,
      value: siteStats.students,
      max: 1000,
      color: "secondary" as const,
    },
    {
      label: home.statsHours,
      value: siteStats.hours / 1000,
      max: 150,
      color: "warning" as const,
    },
    {
      label: home.statsConsultations,
      value: siteStats.consultations,
      max: 500,
      color: "success" as const,
    },
  ];

  const glowFor = {
    primary: "primary",
    secondary: "secondary",
    warning: "accent",
    success: "primary",
  } as const;

  return (
    <section className="section bg-[var(--color-bg-secondary)]/30">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.statsNumbers}
          title={home.studentStats}
          subtitle={home.heroSubtitle}
        />

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="zoom-in" delay={i * 80}>
              <Card glow={glowFor[stat.color]} className="h-full text-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="font-heading text-3xl font-bold text-[var(--color-text-primary)] md:text-5xl">
                    {formatNumber(stat.value)}+
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)] md:text-sm">
                    {stat.label}
                  </span>
                  <div className="w-full pt-1">
                    <Progress
                      value={Math.round((stat.value / stat.max) * 100)}
                      color={stat.color}
                      size="sm"
                    />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

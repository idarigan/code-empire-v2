/**
 * Code Empire — About numbers
 */

import { StatsWidget, ScrollReveal } from "dara-ui";
import { SectionHeader } from "@/features/home/SectionHeader";
import { about } from "@/content/about";
import { home } from "@/content/home";

export function Numbers() {
  const palette = ["primary", "secondary", "accent", "success"] as const;

  const stats = [
    {
      label: about.statMentors,
      value: 30,
      max: 36,
      color: palette[0],
      trend: 0,
    },
    {
      label: about.statStudents,
      value: 800,
      max: 960,
      color: palette[1],
      trend: 0,
    },
    {
      label: about.statHours,
      value: 100,
      max: 120,
      color: palette[2],
      trend: 0,
    },
    {
      label: about.statConsultations,
      value: 300,
      max: 360,
      color: palette[3],
      trend: 0,
    },
  ];

  return (
    <div>
      <SectionHeader
        eyebrow={about.numbersEyebrow}
        title={about.numbers}
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
  );
}

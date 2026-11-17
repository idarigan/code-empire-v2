/**
 * Code Empire - Journey
 *
 * Class types in tabs followed by the session loop.
 */

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { journey } from "@/content/home";
import { ClassTabs } from "./ClassTabs";
import { SessionLoop } from "./SessionLoop";

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeader
        eyebrow={journey.eyebrow}
        title={journey.title}
        subtitle={journey.subtitle}
      />

      <ClassTabs />
      <SessionLoop />
    </Section>
  );
}

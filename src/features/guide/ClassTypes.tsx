/**
 * Code Empire - Class types
 *
 * Class tabs and the session loop for the guide page.
 */

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { guideClasses } from "@/content/guide";
import { ClassTabs, SessionLoop } from "@/features/home/journey";

export function ClassTypes() {
  return (
    <Section id="classes">
      <SectionHeader
        eyebrow={guideClasses.eyebrow}
        title={guideClasses.title}
        subtitle={guideClasses.subtitle}
      />

      <ClassTabs />
      <SessionLoop />
    </Section>
  );
}

/**
 * Code Empire - Rules
 *
 * One accordion item per course rule.
 */

import { Accordion, Badge } from "dara-ui";
import type { AccordionItem } from "dara-ui";
import { ContentBlocks } from "@/components/ContentBlocks";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { rules } from "@/content/policy";
import { formatDate } from "@/lib/format";

// ============================================
// Items
// ============================================

const items: AccordionItem[] = rules.items.map((rule) => ({
  id: rule.id,
  title: rule.title,
  content: (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[var(--color-text-secondary)]">
          {rule.subtitle}
        </p>
        <Badge variant="primary" size="sm" outline>
          {rules.validFrom} {formatDate(rule.validFrom)}
        </Badge>
      </div>

      <ContentBlocks sections={rule.sections} headingLevel={4} />
    </div>
  ),
}));

export function Rules() {
  return (
    <Section id="rules" className="bg-[var(--color-bg-secondary)]/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow={rules.eyebrow}
          title={rules.title}
          subtitle={rules.subtitle}
          align="center"
        />

        <Accordion
          items={items}
          defaultOpenItems={[rules.items[0].id]}
          size="lg"
        />
      </div>
    </Section>
  );
}

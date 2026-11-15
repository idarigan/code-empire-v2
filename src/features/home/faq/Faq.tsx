/**
 * Code Empire - FAQ
 *
 * Common questions in a glass accordion.
 */

import { Accordion } from "dara-ui";
import type { AccordionItem } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { faq } from "@/content/home";

// ============================================
// Items
// ============================================

const items: AccordionItem[] = faq.items.map((item) => ({
  id: item.id,
  title: item.question,
  content: (
    <p className="leading-[2]" dir="auto">
      {item.answer}
    </p>
  ),
}));

export function Faq() {
  return (
    <Section id="faq" className="bg-[var(--color-bg-secondary)]/30">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
          align="center"
        />

        <Accordion items={items} defaultOpenItems={["1"]} size="lg" />
      </div>
    </Section>
  );
}

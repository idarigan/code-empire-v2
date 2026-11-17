/**
 * Code Empire - Article FAQ
 *
 * Questions and answers attached to an article.
 */

import { Accordion, ScrollReveal } from "dara-ui";
import type { AccordionItem } from "dara-ui";
import { articlePage } from "@/content/blog";
import type { ArticleFaq as ArticleFaqItem } from "@/content/articles";

export function ArticleFaq({ items }: { items: ArticleFaqItem[] }) {
  if (items.length === 0) return null;

  const accordionItems: AccordionItem[] = items.map((item, i) => ({
    id: String(i + 1),
    title: item.question,
    content: (
      <p className="leading-[2]" dir="auto">
        {item.answer}
      </p>
    ),
  }));

  return (
    <ScrollReveal animation="fade-up">
      <div className="flex flex-col gap-5">
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
          {articlePage.faqTitle}
        </h2>
        <Accordion items={accordionItems} defaultOpenItems={["1"]} />
      </div>
    </ScrollReveal>
  );
}

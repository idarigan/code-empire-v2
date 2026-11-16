/**
 * Code Empire - Name story
 *
 * The two words behind the academy's name and what they mean.
 */

import { Card, ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { nameStory } from "@/content/about";

export function NameStory() {
  const [first, second] = nameStory.words;

  const renderWord = (
    word: typeof first,
    glow: "primary" | "secondary",
    delay: number,
  ) => (
    <ScrollReveal animation="fade-up" delay={delay} className="h-full">
      <Card
        glow={glow}
        float
        className="flex h-full flex-col items-start gap-4"
      >
        <span
          dir="ltr"
          className="font-mono text-xs tracking-[0.3em] text-[var(--color-text-tertiary)]"
        >
          {word.latin}
        </span>
        <h3 className="text-gradient-primary font-heading text-5xl font-bold leading-[1.3] md:text-6xl">
          {word.word}
        </h3>
        <p className="text-sm leading-[2] text-[var(--color-text-secondary)]">
          {word.desc}
        </p>
      </Card>
    </ScrollReveal>
  );

  return (
    <Section id="name" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={nameStory.eyebrow}
        title={nameStory.title}
        subtitle={nameStory.subtitle}
        align="center"
      />

      <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
        {renderWord(first, "primary", 0)}

        <span
          aria-hidden="true"
          className="flex items-center justify-center font-heading text-4xl font-bold text-[var(--color-accent)]"
        >
          +
        </span>

        {renderWord(second, "secondary", 120)}
      </div>

      <ScrollReveal animation="fade-up" delay={200}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-[2.1] text-[var(--color-text-primary)] md:text-lg">
          {nameStory.result}
        </p>
      </ScrollReveal>
    </Section>
  );
}

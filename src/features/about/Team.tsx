/**
 * Code Empire - Team
 *
 * Leadership cards built from Dara UI's CharacterCard.
 */

import { CharacterCard, ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { team } from "@/content/about";

export function Team() {
  return (
    <Section id="team" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={team.eyebrow}
        title={team.title}
        subtitle={team.subtitle}
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member, i) => (
          <ScrollReveal
            key={member.id}
            animation="fade-up"
            delay={i * 100}
            className="h-full"
          >
            <CharacterCard
              name={member.name}
              subtitle={member.role}
              quote={member.bio}
              icon={
                <span className="font-heading text-lg font-bold">
                  {member.initial}
                </span>
              }
              traits={member.traits}
              glow={member.glow}
              className="h-full"
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

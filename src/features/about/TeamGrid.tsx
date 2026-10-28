/**
 * Code Empire — Team grid
 */

import { CharacterCard, ScrollReveal, useI18n } from "dara-ui";
import { teamMembers } from "@/data/team";

export function TeamGrid() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teamMembers.map((member, i) => (
        <ScrollReveal key={member.slug} animation="fade-up" delay={i * 100}>
          <CharacterCard
            name={t(`team.${member.slug}.name`)}
            subtitle={t(`team.${member.slug}.role`)}
            quote={t(`team.${member.slug}.bio`)}
            portrait={member.photo}
            traits={[]}
            glow={member.glow ?? "primary"}
            layout="vertical"
          />
        </ScrollReveal>
      ))}
    </div>
  );
}

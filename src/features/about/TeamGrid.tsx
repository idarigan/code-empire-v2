/**
 * Code Empire — Team grid
 *
 * Three team cards from the team data file.
 */

import { CharacterCard, ScrollReveal } from "dara-ui";
import { teamMembers } from "@/data/team";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teamMembers.map((member, i) => (
        <ScrollReveal key={member.name} animation="fade-up" delay={i * 100}>
          <CharacterCard
            name={member.name}
            subtitle={member.role}
            quote={member.bio}
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

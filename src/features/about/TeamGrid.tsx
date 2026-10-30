/**
 * Code Empire — Team grid
 */

import { CharacterCard, ScrollReveal } from "dara-ui";
import { teamMembers } from "@/data/team";
import { teamBios } from "@/content/team";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teamMembers.map((member, i) => {
        const bio = teamBios[member.slug as keyof typeof teamBios];
        if (!bio) return null;
        return (
          <ScrollReveal key={member.slug} animation="fade-up" delay={i * 100}>
            <CharacterCard
              name={bio.name}
              subtitle={bio.role}
              quote={bio.bio}
              portrait={member.photo}
              traits={[]}
              glow={member.glow ?? "primary"}
              layout="vertical"
            />
          </ScrollReveal>
        );
      })}
    </div>
  );
}

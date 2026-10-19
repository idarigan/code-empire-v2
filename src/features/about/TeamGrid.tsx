/**
 * Code Empire — Team grid
 *
 * Three team cards from constants using Dara UI CharacterCard.
 * Desktop uses horizontal layout, mobile stacks vertically.
 */

import {
  CharacterCard,
  Card,
  Avatar,
  Badge,
  ScrollReveal,
  useI18n,
} from "dara-ui";
import { teamMembers } from "@/data/constants";
import { Icons } from "@/lib/icons";

export function TeamGrid() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teamMembers.map((member, i) => (
        <ScrollReveal key={member.name} animation="fade-up" delay={i * 100}>
          <CharacterCard
            name={member.name}
            subtitle={member.role}
            quote={member.bio}
            portrait={member.photo}
            traits={[
              member.socials?.github ? "GitHub" : "",
              member.socials?.linkedin ? "LinkedIn" : "",
              member.socials?.twitter ? "Twitter" : "",
            ].filter(Boolean)}
            glow={member.glow ?? "primary"}
            layout="vertical"
          />
        </ScrollReveal>
      ))}
    </div>
  );
}

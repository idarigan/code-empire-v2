/**
 * Code Empire — Rank badge
 *
 * Maps XP to one of the five Code Empire tiers.
 * Used by XPLevelCard, ProgressPage and Certificates.
 */

import { Badge } from "dara-ui";
import type { StudentTier } from "@/types";

export interface RankTier {
  tier: StudentTier;
  minXP: number;
  nextXP: number | null;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
}

const TIERS: RankTier[] = [
  { tier: "Aghazgar", minXP: 0, nextXP: 1000, color: "success" },
  { tier: "Danshour", minXP: 1000, nextXP: 3000, color: "primary" },
  { tier: "Kadzan-e Nokhbeh", minXP: 3000, nextXP: 6000, color: "secondary" },
  { tier: "Danshour-e Nokhbeh", minXP: 6000, nextXP: 10000, color: "danger" },
  { tier: "Javidan", minXP: 10000, nextXP: null, color: "warning" },
];

export function getTierForXP(xp: number): RankTier {
  for (let i = TIERS.length - 1; i >= 0; i--) {
    if (xp >= TIERS[i].minXP) return TIERS[i];
  }
  return TIERS[0];
}

export function getLevelForXP(xp: number): number {
  // Simple level curve: 500 XP per level
  return Math.floor(xp / 500) + 1;
}

export function RankBadge({ xp }: { xp: number }) {
  const rank = getTierForXP(xp);

  return (
    <Badge variant={rank.color} size="sm" glow={rank.tier === "Javidan"}>
      {rank.tier}
    </Badge>
  );
}

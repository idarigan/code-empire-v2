/**
 * Code Empire - Rank badge
 *
 * Renders the current tier as a glow badge.
 * Tier ladder + helpers live in ./rankTiers.
 */

import { Badge } from "dara-ui";
import { tierLabels } from "@/content/ranking";
import { getTierForXP } from "./rankTiers";

export function RankBadge({ xp }: { xp: number }) {
  const rank = getTierForXP(xp);

  return (
    <Badge variant={rank.color} size="sm" glow={rank.tier === "Javidan"}>
      {tierLabels[rank.tier] ?? rank.tier}
    </Badge>
  );
}

/**
 * Code Empire — Student leaderboard
 *
 * Top students table with rank, avatar, tier badge, and course.
 * Tier Javidan gets the gold glow.
 */

import { Card, Avatar, Badge, useI18n } from "dara-ui";
import { ranking } from "@/data/ranking";
import type { StudentTier } from "@/types";

function tierVariant(
  tier: StudentTier,
): "primary" | "secondary" | "success" | "warning" | "danger" {
  switch (tier) {
    case "Javidan":
      return "warning";
    case "Danshour-e Nokhbeh":
      return "primary";
    case "Kadzan-e Nokhbeh":
      return "secondary";
    case "Danshour":
      return "primary";
    default:
      return "success";
  }
}

export function Leaderboard() {
  const { t } = useI18n();

  return (
    <Card variant="solid" padding="none" className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)]/50">
              <th className="px-3 py-3 text-start font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                #
              </th>
              <th className="px-3 py-3 text-start font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {t("dashboard.profile")}
              </th>
              <th className="px-3 py-3 text-start font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {t("courses.category")}
              </th>
              <th className="px-3 py-3 text-start font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {t("dashboard.level")}
              </th>
              <th className="px-3 py-3 text-start font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {t("courses.title")}
              </th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((student, i) => (
              <tr
                key={student.name}
                className="border-b border-[var(--color-border-secondary)] last:border-b-0 hover:bg-[var(--color-bg-elevated)]/30 transition-colors"
              >
                <td className="px-3 py-3 font-mono text-xs text-[var(--color-text-tertiary)]">
                  {i + 1}
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar
                      src={student.avatar}
                      fallbackText={student.name}
                      size="sm"
                      glow={student.glow}
                    />
                    <span className="text-[var(--color-text-primary)] truncate">
                      {student.name}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <Badge
                    variant={student.isLearning ? "primary" : "success"}
                    size="sm"
                    outline
                  >
                    {student.isLearning ? "درحال یادگیری" : "پایان یادگیری"}
                  </Badge>
                </td>
                <td className="px-3 py-3">
                  <Badge
                    variant={tierVariant(student.tier)}
                    size="sm"
                    glow={student.tier === "Javidan"}
                  >
                    {" "}
                    {student.tier}
                  </Badge>
                </td>
                <td className="px-3 py-3 text-[var(--color-text-secondary)] truncate">
                  {student.course}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

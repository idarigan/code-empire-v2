/**
 * Code Empire — XP + level card
 *
 * Big XPBar with our five-tier rank system.
 * Shows current level, rank, XP toward next tier.
 */

import { Card, XPBar, ScrollReveal, useI18n } from "dara-ui";
import { useProgress } from "@/contexts";
import { formatNumber } from "@/lib/format";
import { getLevelForXP, getTierForXP, RankBadge } from "./RankBadge";
import { Icons } from "@/lib/icons";

interface XPLevelCardProps {
  compact?: boolean;
}

export function XPLevelCard({ compact = false }: XPLevelCardProps) {
  const { t } = useI18n();
  const { xp } = useProgress();

  const tier = getTierForXP(xp);
  const level = getLevelForXP(xp);
  const tierMax = tier.nextXP ?? xp;
  const tierMin = tier.minXP;
  const xpInto = xp - tierMin;
  const xpToNext = tier.nextXP ? tier.nextXP - xp : 0;

  // Build rank tiers array for XPBar
  const rankTiers = [
    { label: "Aghazgar", requiredXP: 0 },
    { label: "Danshour", requiredXP: 1000 },
    { label: "Kadzan-e Nokhbeh", requiredXP: 3000 },
    { label: "Danshour-e Nokhbeh", requiredXP: 6000 },
    { label: "Javidan", requiredXP: 10000 },
  ];

  return (
    <ScrollReveal animation="fade-up">
      <Card glow="accent" className="relative overflow-hidden">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
              <Icons.trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono">
                {t("dashboard.level")} {formatNumber(level)}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono">
                {formatNumber(xp)} {t("dashboard.xp")}
              </p>
            </div>
          </div>
          <RankBadge xp={xp} />
        </div>

        {!compact && (
          <XPBar
            value={xpInto}
            max={tierMax - tierMin || 1}
            level={level}
            ranks={rankTiers}
            customLabel={t("dashboard.overallProgress")}
            levelLabel={t("dashboard.level")}
            xpLabel={t("dashboard.xp")}
          />
        )}

        {compact && (
          <div className="flex flex-col gap-1">
            <div className="h-1.5 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-500"
                style={{
                  width: `${(xpInto / (tierMax - tierMin || 1)) * 100}%`,
                }}
              />
            </div>
            {tier.nextXP && (
              <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] mt-1">
                {formatNumber(xpToNext)} {t("dashboard.xp")} {t("common.next")}
              </p>
            )}
          </div>
        )}
      </Card>
    </ScrollReveal>
  );
}

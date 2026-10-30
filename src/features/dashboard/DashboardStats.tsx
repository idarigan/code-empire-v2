/**
 * Code Empire — Dashboard stats
 *
 * Four quick stat cards: enrolled courses, bookmarks, XP, overall progress.
 */

import { Card } from "dara-ui";
import { useProgress } from "@/contexts";
import { formatNumber, formatPercent } from "@/lib/format";
import { dashboard } from "@/content/dashboard";
import { Icons } from "@/lib/icons";

export function DashboardStats() {
  const { enrollments, bookmarks, xp, overallProgress } = useProgress();

  const items = [
    {
      icon: <Icons.bookOpen className="h-5 w-5" />,
      label: dashboard.courses,
      value: formatNumber(enrollments.length),
      glow: "primary" as const,
    },
    {
      icon: <Icons.bookmark className="h-5 w-5" />,
      label: dashboard.bookmarks,
      value: formatNumber(bookmarks.length),
      glow: "secondary" as const,
    },
    {
      icon: <Icons.zap className="h-5 w-5" />,
      label: dashboard.xp,
      value: formatNumber(xp),
      glow: "accent" as const,
    },
    {
      icon: <Icons.chart className="h-5 w-5" />,
      label: dashboard.overallProgress,
      value: formatPercent(overallProgress),
      glow: "primary" as const,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map((item, i) => (
        <Card key={i} glow={item.glow} padding="sm">
          <div className="flex items-center gap-2 mb-2 text-[var(--color-primary)]">
            {item.icon}
          </div>
          <p className="text-2xl font-heading font-bold text-[var(--color-text-primary)]">
            {item.value}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono truncate">
            {item.label}
          </p>
        </Card>
      ))}
    </div>
  );
}

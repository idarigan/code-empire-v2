/**
 * Code Empire - Hero proof
 *
 * Avatar group and headline numbers shown under the calls to action.
 */

import { Avatar } from "dara-ui";
import { siteStats } from "@/config/site";
import { hero } from "@/content/home";
import { formatNumber } from "@/lib/format";

const stats = [
  { value: siteStats.students, label: hero.stats.students },
  { value: siteStats.mentors, label: hero.stats.mentors },
  { value: siteStats.consultationHours, label: hero.stats.consultations },
];

export function HeroProof() {
  return (
    <div className="flex w-full flex-col gap-6 border-t border-[var(--color-border-secondary)] pt-6">
      <div className="flex items-center gap-3">
        <Avatar group size="sm">
          {hero.proof.avatars.map((name) => (
            <Avatar key={name} fallbackText={name} />
          ))}
        </Avatar>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {hero.proof.text}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-heading text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
              {formatNumber(stat.value)}+
            </span>
            <span className="text-xs text-[var(--color-text-tertiary)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

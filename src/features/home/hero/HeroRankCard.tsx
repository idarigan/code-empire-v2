/**
 * Code Empire - Hero rank card
 *
 * Live preview of the student rank ladder. Cycles through the five tiers on
 * its own until the visitor picks one.
 */

import { useEffect, useState } from "react";
import { Avatar, Badge, Card, GradientRing, XPBar } from "dara-ui";
import { hero } from "@/content/home";
import { rankMaxXP, rankStages } from "@/content/ranks";
import "./hero.css";

// ============================================
// Config
// ============================================

const CYCLE_MS = 3600;
const XP_OFFSET = 420;

const xpRanks = rankStages.map(({ label, minXP }) => ({
  label,
  requiredXP: minXP,
}));

const floaters = [
  {
    label: "HTML & CSS",
    variant: "primary",
    position: "-top-4 -start-2",
    delay: "0s",
  },
  {
    label: "Python",
    variant: "secondary",
    position: "top-1/2 -end-4",
    delay: "1.4s",
  },
  {
    label: "Unity",
    variant: "warning",
    position: "-bottom-3 start-10",
    delay: "2.8s",
  },
] as const;

export function HeroRankCard() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const stage = rankStages[index];
  const running = !picked && !hovered;

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % rankStages.length);
    }, CYCLE_MS);

    return () => clearInterval(timer);
  }, [running]);

  const select = (next: number) => {
    setPicked(true);
    setIndex(next);
  };

  return (
    <div
      className="relative isolate mx-auto w-full max-w-md lg:max-w-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <GradientRing size={380} blur={90} opacity={0.3} />

      {floaters.map((chip) => (
        <span
          key={chip.label}
          aria-hidden="true"
          className={`hero-float absolute z-20 hidden md:block ${chip.position}`}
          style={{ animationDelay: chip.delay }}
        >
          <Badge variant={chip.variant} size="md" glow>
            {chip.label}
          </Badge>
        </span>
      ))}

      <div className="flex flex-col gap-4">
        <XPBar
          value={stage.minXP + XP_OFFSET}
          max={rankMaxXP}
          level={stage.level}
          ranks={xpRanks}
          showLabel={false}
          customLabel={hero.rank.title}
          levelLabel={hero.rank.level}
          xpLabel={hero.rank.xp}
        />

        <Card variant="solid" padding="sm" glow="primary">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar
                fallbackText={hero.rank.studentInitial}
                size="lg"
                glow="primary"
                bordered
              />

              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm font-bold text-[var(--color-text-primary)]">
                  {hero.rank.student}
                </p>
                <p
                  key={stage.id}
                  className="hero-swap min-h-[2.5rem] text-xs leading-relaxed text-[var(--color-text-tertiary)]"
                >
                  {stage.caption}
                </p>
              </div>
            </div>

            <div
              role="group"
              aria-label={hero.rank.ariaLabel}
              className="flex flex-wrap items-center gap-2"
            >
              {rankStages.map((item, i) => {
                const active = i === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => select(i)}
                    className="rounded-full transition-transform active:scale-95"
                  >
                    <Badge
                      variant={item.variant}
                      outline={!active}
                      glow={active}
                      size="sm"
                    >
                      {item.label}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

/**
 * Code Empire - Hero
 *
 * Landing hero: headline, typed tagline, calls to action and social proof
 * beside the live rank ladder.
 */

import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import {
  Badge,
  Button,
  ChevronLeftIcon,
  RocketIcon,
  ScrollReveal,
} from "dara-ui";
import { hero } from "@/content/home";
import { HeroProof } from "./HeroProof";
import { HeroRankCard } from "./HeroRankCard";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 35%, transparent 0%, color-mix(in srgb, var(--color-bg-primary) 90%, transparent) 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---------- Copy ---------- */}
          <div className="flex min-w-0 flex-col items-start gap-6">
            <ScrollReveal animation="fade-down">
              <Badge variant="primary" glow>
                {hero.version}
              </Badge>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <h1
                id="hero-heading"
                className="text-gradient-hero font-heading text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[1.2] tracking-tight"
              >
                {hero.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={140}>
              <div className="flex h-8 items-center gap-2 font-mono text-sm text-[var(--color-primary)] sm:text-base">
                <span
                  aria-hidden="true"
                  className="text-[var(--color-success)]"
                >
                  {hero.prompt}
                </span>
                <TypeAnimation
                  sequence={hero.typed.flatMap((line) => [line, 2200])}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="max-w-xl text-base leading-[1.9] text-[var(--color-text-secondary)] md:text-lg">
                {hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={260}>
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  glow="primary"
                  leftIcon={<RocketIcon className="h-4 w-4" />}
                  onClick={() => navigate("/courses")}
                >
                  {hero.startLearning}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={<ChevronLeftIcon className="h-4 w-4" />}
                  onClick={() => navigate("/guide")}
                >
                  {hero.viewGuide}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={320} className="w-full">
              <HeroProof />
            </ScrollReveal>
          </div>

          {/* ---------- Rank card ---------- */}
          <ScrollReveal animation="fade-left" delay={200}>
            <HeroRankCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

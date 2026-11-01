/**
 * Code Empire — Hero section
 *
 * Asymmetric two-column hero:
 * - Copy + CTAs on the start side (right in RTL)
 * - Live "terminal" card on the end side that types out a greeting
 * Layered subtle grid + single aurora blob. No particles, no ring.
 */

import { useNavigate } from "react-router-dom";
import { Button, ScrollReveal, Badge } from "dara-ui";
import { TypeAnimation } from "react-type-animation";
import { Icons } from "@/lib/icons";
import { home } from "@/content/home";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* ---------- Backdrop ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -end-40 -z-10 h-[clamp(320px,60vw,560px)] w-[clamp(320px,60vw,560px)] rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--gradient-primary)" }}
      />

      {/* ---------- Content ---------- */}
      <div className="section-container relative z-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* ---------- Copy column ---------- */}
          <div className="flex w-full min-w-0 flex-col items-start gap-5 text-start sm:gap-6 lg:gap-7">
            <ScrollReveal animation="fade-down">
              <Badge variant="primary" glow size="sm">
                {home.heroVersion}
              </Badge>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <h1
                id="hero-heading"
                className="text-gradient-hero font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {home.heroTitle}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={140}>
              <div className="flex h-7 items-center sm:h-8 md:h-9">
                <TypeAnimation
                  sequence={[
                    home.heroType1,
                    2000,
                    home.heroType2,
                    2000,
                    home.heroType3,
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-mono text-xs text-[var(--color-primary)] sm:text-sm md:text-base"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="max-w-xl text-start text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base md:text-lg">
                {home.heroSubtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={260}>
              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <Button
                  variant="primary"
                  size="md"
                  glow="primary"
                  leftIcon={<Icons.rocket className="h-4 w-4 shrink-0" />}
                  onClick={() => navigate("/courses")}
                  className="w-full justify-center sm:w-auto"
                >
                  {home.startLearning}
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  rightIcon={
                    <Icons.arrowLeft className="h-4 w-4 shrink-0 rtl:-scale-x-100" />
                  }
                  onClick={() => navigate("/guide")}
                  className="w-full justify-center sm:w-auto"
                >
                  {home.viewGuide}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* ---------- Terminal column ---------- */}
          <div className="w-full min-w-0">
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="mx-auto w-full max-w-md">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] shadow-[var(--shadow-float)]">
                  {/* window chrome */}
                  <div
                    dir="ltr"
                    className="flex items-center gap-1.5 border-b border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] px-3 py-2 sm:px-4 sm:py-2.5"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#ef4444] sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#f59e0b] sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#10b981] sm:h-2.5 sm:w-2.5" />
                    <span className="ms-1.5 truncate font-mono text-[10px] text-[var(--color-text-tertiary)]">
                      ~/code-empire
                    </span>
                  </div>

                  {/* body */}
                  <div
                    dir="ltr"
                    className="space-y-0.5 p-3 font-mono text-[11px] leading-relaxed text-[var(--color-text-secondary)] sm:p-4 sm:text-xs md:p-5 md:text-sm"
                  >
                    <p>
                      <span className="text-[var(--color-success)]">$</span>{" "}
                      <span className="text-[var(--color-text-primary)]">
                        whoami
                      </span>
                    </p>
                    <p className="text-[var(--color-primary)]">
                      future-developer
                    </p>

                    <p className="pt-2">
                      <span className="text-[var(--color-success)]">$</span>{" "}
                      <span className="text-[var(--color-text-primary)]">
                        cat mission.txt
                      </span>
                    </p>
                    <p dir="rtl" className="text-[var(--color-text-primary)]">
                      یاد بگیر، بساز، رشد کن.
                    </p>

                    <p className="pt-2">
                      <span className="text-[var(--color-success)]">$</span>{" "}
                      <span className="text-[var(--color-text-primary)]">
                        start --journey
                      </span>{" "}
                      <span className="inline-block h-3 w-1.5 animate-pulse bg-[var(--color-primary)] align-middle sm:h-3.5 sm:w-2" />
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

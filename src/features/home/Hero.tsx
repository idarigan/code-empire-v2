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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-10 pb-16">
      {/* ---------- Backdrop ---------- */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -end-40 w-[520px] h-[520px] rounded-full -z-10 blur-[140px] opacity-25"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* ---------- Copy column ---------- */}
          <div className="flex flex-col items-start gap-6">
            <ScrollReveal animation="fade-down">
              <Badge variant="primary" glow size="md">
                {home.heroVersion}
              </Badge>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient-hero leading-[1.1] text-start">
                {home.heroTitle}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={140}>
              <div className="h-8 md:h-10">
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
                  className="font-mono text-sm md:text-base text-[var(--color-primary)]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed max-w-xl text-start">
                {home.heroSubtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={260}>
              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  glow="primary"
                  leftIcon={<Icons.rocket className="h-4 w-4" />}
                  onClick={() => navigate("/courses")}
                >
                  {home.startLearning}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  rightIcon={
                    <Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />
                  }
                  onClick={() => navigate("/guide")}
                >
                  {home.viewGuide}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* ---------- Terminal column ---------- */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] shadow-[var(--shadow-float)] overflow-hidden">
                {/* window chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                  <span className="ms-2 text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    ~/code-empire
                  </span>
                </div>

                {/* body */}
                <div
                  className="p-5 font-mono text-xs md:text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  dir="ltr"
                >
                  <p>
                    <span className="text-[var(--color-success)]">$</span>{" "}
                    <span className="text-[var(--color-text-primary)]">
                      whoami
                    </span>
                  </p>
                  <p className="text-[var(--color-primary)] mb-3">
                    future-developer
                  </p>

                  <p>
                    <span className="text-[var(--color-success)]">$</span>{" "}
                    <span className="text-[var(--color-text-primary)]">
                      cat mission.txt
                    </span>
                  </p>
                  <p
                    dir="rtl"
                    className="mb-3 text-[var(--color-text-primary)]"
                  >
                    یاد بگیر، بساز، رشد کن.
                  </p>

                  <p>
                    <span className="text-[var(--color-success)]">$</span>{" "}
                    <span className="text-[var(--color-text-primary)]">
                      start --journey
                    </span>{" "}
                    <span className="inline-block w-2 h-4 align-middle bg-[var(--color-primary)] animate-pulse" />
                  </p>
                </div>
              </div>

              {/* floating accent chip */}
              <div className="absolute -bottom-4 -end-4 hidden md:flex items-center gap-2 rounded-full border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] px-3 py-1.5 shadow-[var(--shadow-glow-primary)]">
                <Icons.zap className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                <span className="text-[10px] font-mono text-[var(--color-text-secondary)]">
                  800+ students
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

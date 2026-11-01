/**
 * Code Empire - Why us
 *
 * Four glow cards explaining what makes Code Empire different.
 * Uses Dara UI Card + custom icons, staggered ScrollReveal.
 */

import { Card, ScrollReveal } from "dara-ui";
import { SectionHeader } from "./SectionHeader";
import { formatNumber } from "@/lib/format";
import { home } from "@/content/home";
import { Icons } from "@/lib/icons";

export function WhyUs() {
  const items = [
    {
      icon: <Icons.zap className="h-6 w-6" />,
      title: home.whyUsItem1Title,
      desc: home.whyUsItem1Desc,
      glow: "primary" as const,
    },
    {
      icon: <Icons.shieldCheck className="h-6 w-6" />,
      title: home.whyUsItem2Title,
      desc: home.whyUsItem2Desc,
      glow: "secondary" as const,
    },
    {
      icon: <Icons.messageCircle className="h-6 w-6" />,
      title: home.whyUsItem3Title,
      desc: home.whyUsItem3Desc,
      glow: "accent" as const,
    },
    {
      icon: <Icons.award className="h-6 w-6" />,
      title: home.whyUsItem4Title,
      desc: home.whyUsItem4Desc,
      glow: "primary" as const,
    },
  ];

  return (
    <section className="section bg-[var(--color-bg-secondary)]/30">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.whyUsEyebrow}
          title={home.whyUs}
          subtitle={home.heroSubtitle}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <Card glow={item.glow} float className="h-full">
                <div className="flex items-start gap-4 md:gap-5">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)]"
                    style={{
                      background: `var(--color-${item.glow}-light)`,
                      color: `var(--color-${item.glow})`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading text-base font-bold text-[var(--color-text-primary)] md:text-lg">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                        {formatNumber(i + 1).padStart(2, "۰")}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

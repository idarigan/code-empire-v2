/**
 * Code Empire — Why us
 *
 * Four glow cards explaining what makes Code Empire different.
 * Uses Dara UI Card + custom icons, staggered ScrollReveal.
 */

import { Card, ScrollReveal } from "dara-ui";
import { SectionHeader } from "./SectionHeader";
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
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.whyUsEyebrow}
          title={home.whyUs}
          subtitle={home.heroSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <Card glow={item.glow} float className="h-full text-center">
                <div className="flex justify-center mb-4 text-[var(--color-primary)]">
                  <div
                    className={`p-3 rounded-full bg-[var(--color-${item.glow}-light)]`}
                  >
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

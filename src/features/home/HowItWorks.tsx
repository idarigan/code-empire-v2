/**
 * Code Empire - How it works
 */

import { useNavigate } from "react-router-dom";
import { Card, Badge, Button, ScrollReveal } from "dara-ui";
import { classTypes } from "@/data/constants";
import { formatNumber } from "@/lib/format";
import { SectionHeader } from "./SectionHeader";
import { guide } from "@/content/guide";
import { home } from "@/content/home";
import { Icons } from "@/lib/icons";

const keyForSlug = (
  slug: string,
): "privateOnline" | "privateOffline" | "groupOnline" => {
  if (slug === "private-online") return "privateOnline";
  if (slug === "private-offline") return "privateOffline";
  return "groupOnline";
};

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.guideEyebrow}
          title={home.howItWorks}
          subtitle={guide.subtitle}
        />

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {classTypes.map((cls, i) => {
            const key = keyForSlug(cls.slug);
            const title = guide[key];
            const desc = guide[`${key}Desc` as keyof typeof guide] as string;
            const features = guide.features[key];

            return (
              <ScrollReveal key={cls.slug} animation="fade-up" delay={i * 120}>
                <Card
                  glow={cls.glow}
                  padding="none"
                  className="flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-tertiary)]">
                    <img
                      src={cls.image}
                      alt={title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute start-3 top-3">
                      <Badge
                        variant={cls.glow === "accent" ? "warning" : cls.glow}
                        size="sm"
                        glow
                      >
                        {formatNumber(i + 1)}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                      {title}
                    </h3>
                    <p className="line-clamp-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {desc}
                    </p>

                    <ul className="mt-auto flex flex-col gap-2 border-t border-[var(--color-border-secondary)] pt-4">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]"
                        >
                          <Icons.check className="h-3.5 w-3.5 shrink-0 text-[var(--color-success)]" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            glow="primary"
            leftIcon={<Icons.bookOpen className="h-4 w-4" />}
            onClick={() => navigate("/guide")}
          >
            {home.viewGuide}
          </Button>
        </div>
      </div>
    </section>
  );
}

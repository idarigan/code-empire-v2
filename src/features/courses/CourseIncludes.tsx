/**
 * Code Empire - Course includes
 */

import { Card, ScrollReveal } from "dara-ui";
import { guide } from "@/content/guide";
import { Icons } from "@/lib/icons";

const items = [
  {
    icon: Icons.target,
    title: guide.method.project,
    desc: guide.method.projectDesc,
    glow: "primary" as const,
  },
  {
    icon: Icons.compass,
    title: guide.method.path,
    desc: guide.method.pathDesc,
    glow: "secondary" as const,
  },
  {
    icon: Icons.messageCircle,
    title: guide.method.support,
    desc: guide.method.supportDesc,
    glow: "accent" as const,
  },
  {
    icon: Icons.clock,
    title: guide.method.time,
    desc: guide.method.timeDesc,
    glow: "primary" as const,
  },
];

export function CourseIncludes() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
      {items.map((item, i) => {
        const Icon = item.icon;

        return (
          <ScrollReveal key={item.title} animation="fade-up" delay={i * 80}>
            <Card glow={item.glow} className="h-full">
              <div className="flex flex-col gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)]"
                  style={{
                    background: `var(--color-${item.glow}-light)`,
                    color: `var(--color-${item.glow})`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-base font-bold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)]">
                  {item.desc}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

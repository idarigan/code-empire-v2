/**
 * Code Empire — Class type section
 */

import { Card, Badge, ScrollReveal } from "dara-ui";
import type { ClassType } from "@/types";
import { guide } from "@/content/guide";
import { Icons } from "@/lib/icons";

interface ClassTypeSectionProps {
  classTypes: ClassType[];
}

const keyForSlug = (
  slug: ClassType["slug"],
): "privateOnline" | "privateOffline" | "groupOnline" => {
  if (slug === "private-online") return "privateOnline";
  if (slug === "private-offline") return "privateOffline";
  return "groupOnline";
};

export function ClassTypeSection({ classTypes }: ClassTypeSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {classTypes.map((cls, i) => {
        const reverse = i % 2 === 1;
        const key = keyForSlug(cls.slug);
        const title = guide[key];
        const desc = guide[`${key}Desc` as keyof typeof guide] as string;
        const features = guide.features[key];

        return (
          <ScrollReveal
            key={cls.slug}
            animation={reverse ? "fade-left" : "fade-right"}
            delay={i * 80}
          >
            <Card
              glow={cls.glow}
              padding="none"
              className={`overflow-hidden flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="md:w-2/5 aspect-video md:aspect-auto md:min-h-[280px] bg-[var(--color-bg-tertiary)] overflow-hidden">
                <img
                  src={cls.image}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-3">
                <Badge
                  variant={cls.glow === "accent" ? "primary" : cls.glow}
                  size="sm"
                  glow
                >
                  {guide.classTypes}
                </Badge>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {desc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]"
                    >
                      <Icons.check className="h-3.5 w-3.5 flex-shrink-0 text-[var(--color-success)]" />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)] mt-2">
                  {guide.classTypes}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

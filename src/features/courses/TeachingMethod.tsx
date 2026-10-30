/**
 * Code Empire — Teaching method
 *
 * Guide page section: four cards explaining how Code Empire teaches.
 */

import { Card, ScrollReveal } from "dara-ui";
import { guide } from "@/content/guide";
import { Icons } from "@/lib/icons";

export function TeachingMethod() {
  const icons = [
    <Icons.target className="h-5 w-5" key="1" />,
    <Icons.users className="h-5 w-5" key="2" />,
    <Icons.zap className="h-5 w-5" key="3" />,
    <Icons.award className="h-5 w-5" key="4" />,
  ];
  const glows = [
    "primary" as const,
    "secondary" as const,
    "accent" as const,
    "primary" as const,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {guide.teachingMethodCards.map((item, i) => (
        <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
          <Card glow={glows[i]} float className="h-full">
            <div className="flex justify-center mb-3 text-[var(--color-primary)]">
              <div
                className={`p-3 rounded-full bg-[var(--color-${glows[i]}-light)]`}
              >
                {icons[i]}
              </div>
            </div>
            <h3 className="font-heading font-bold text-sm text-center mb-2 text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] text-center leading-relaxed">
              {item.desc}
            </p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}

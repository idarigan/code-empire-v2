/**
 * Code Empire — Rules bill
 */

import { Card, Badge, ScrollReveal } from "dara-ui";
import { charter } from "@/content/policy-rules";
import { policy } from "@/content/policy";

interface RulesBillProps {
  items?: typeof charter;
}

export function RulesBill({ items = charter }: RulesBillProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <ScrollReveal key={item.id} animation="fade-up" delay={i * 60}>
          <Card glow="accent" float className="h-full">
            <div className="flex items-start justify-between mb-3">
              <Badge variant="warning" size="sm" glow>
                #{item.id}
              </Badge>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {policy.charter}
              </span>
            </div>
            <h3 className="font-heading font-bold text-base mb-2 text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {item.body}
            </p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}

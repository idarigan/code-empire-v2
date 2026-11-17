/**
 * Code Empire - Class tabs
 *
 * The three class types in tabs with their feature checklists.
 */

import { Badge, Card, CheckIcon, Tabs } from "dara-ui";
import type { TabItem } from "dara-ui";
import { journey } from "@/content/home";

// ============================================
// Tabs
// ============================================

const tabs: TabItem[] = journey.classes.map((item) => ({
  label: item.label,
  value: item.id,
  content: (
    <Card variant="solid" padding="lg">
      <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <Badge variant={item.variant} glow>
            {item.label}
          </Badge>
          <h3 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
            {item.title}
          </h3>
          <p className="text-sm leading-[2] text-[var(--color-text-secondary)] md:text-base">
            {item.desc}
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-secondary)] bg-[var(--color-bg-tertiary)]/40 px-4 py-3 text-sm text-[var(--color-text-primary)]"
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "var(--color-success-light)",
                  color: "var(--color-success)",
                }}
              >
                <CheckIcon className="h-4 w-4" />
              </span>
              <span dir="auto">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  ),
}));

export function ClassTabs() {
  return (
    <Tabs
      items={tabs}
      defaultValue={journey.classes[0].id}
      glowColor="secondary"
    />
  );
}

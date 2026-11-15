/**
 * Code Empire - Session loop
 *
 * The four steps every class session follows.
 */

import { Badge, Card, Progress, ScrollReveal } from "dara-ui";
import { journey } from "@/content/home";
import { formatIndex } from "@/lib/format";

export function SessionLoop() {
  const { loop } = journey;

  return (
    <div className="mt-16 md:mt-20">
      <ScrollReveal animation="fade-up" className="mb-8">
        <h3 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
          {loop.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          {loop.subtitle}
        </p>
      </ScrollReveal>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {loop.steps.map((step, i) => (
          <li key={step.id}>
            <ScrollReveal animation="fade-up" delay={i * 90} className="h-full">
              <Card padding="md" className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Badge variant="primary" size="sm" outline>
                    {formatIndex(i + 1)}
                  </Badge>
                </div>

                <h4 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                  {step.title}
                </h4>

                <p className="flex-1 text-sm leading-[1.9] text-[var(--color-text-secondary)]">
                  {step.desc}
                </p>

                <Progress
                  value={(i + 1) * 25}
                  size="sm"
                  color="gradient"
                  animated={false}
                />
              </Card>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

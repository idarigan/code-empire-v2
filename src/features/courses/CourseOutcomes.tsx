/**
 * Code Empire - Course learning outcomes
 */

import { Card, ScrollReveal } from "dara-ui";
import { Icons } from "@/lib/icons";

interface CourseOutcomesProps {
  outcomes: string[];
}

export function CourseOutcomes({ outcomes }: CourseOutcomesProps) {
  if (outcomes.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
      {outcomes.map((outcome, i) => (
        <li key={outcome}>
          <ScrollReveal animation="fade-up" delay={i * 60}>
            <Card variant="solid" padding="sm" className="h-full">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: "var(--color-success-light)",
                    color: "var(--color-success)",
                  }}
                >
                  <Icons.check className="h-4 w-4" />
                </span>
                <span
                  className="min-w-0 text-sm leading-[1.8] text-[var(--color-text-primary)] md:text-base"
                  dir="auto"
                >
                  {outcome}
                </span>
              </div>
            </Card>
          </ScrollReveal>
        </li>
      ))}
    </ul>
  );
}

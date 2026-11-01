/**
 * Code Empire - Course learning outcomes
 */

import { Card, ScrollReveal } from "dara-ui";
import { coursesPage } from "@/content/courses-page";
import { Icons } from "@/lib/icons";

interface CourseOutcomesProps {
  outcomes: string[];
}

export function CourseOutcomes({ outcomes }: CourseOutcomesProps) {
  if (outcomes.length === 0) return null;

  return (
    <ScrollReveal animation="fade-up">
      <Card glow="primary">
        <div className="mb-5 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]"
            style={{
              background: "var(--color-primary-light)",
              color: "var(--color-primary)",
            }}
          >
            <Icons.target className="h-5 w-5" />
          </div>
          <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)] md:text-xl">
            {coursesPage.learningOutcomes}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)]/60 p-3"
            >
              <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success)]" />
              <span
                className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                dir="auto"
              >
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </ScrollReveal>
  );
}

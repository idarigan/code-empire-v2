/**
 * Code Empire - Course card
 *
 * Glyph tile, summary, capacity meter and price for one course.
 */

import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, ChevronLeftIcon, Progress } from "dara-ui";
import type { Course } from "@/config/courses";
import { courseText } from "@/content/courses";
import { coursesSection } from "@/content/home";
import { formatNumber, formatPrice } from "@/lib/format";

// ============================================
// Config
// ============================================

const glows = {
  web: "primary",
  software: "secondary",
  game: "accent",
} as const;

interface Status {
  variant: "danger" | "warning" | "success";
  label: string;
}

export function CourseCard({ course }: { course: Course }) {
  const navigate = useNavigate();
  const text = courseText[course.slug];
  const { card } = coursesSection;

  if (!text) return null;

  const remaining = course.capacity - course.enrolled;
  const isFull = remaining <= 0;
  const isAlmost = !isFull && remaining <= 5;
  const percent = Math.round((course.enrolled / course.capacity) * 100);

  const status: Status = isFull
    ? { variant: "danger", label: card.full }
    : isAlmost
      ? { variant: "warning", label: card.almostFull }
      : { variant: "success", label: card.available };

  return (
    <Card
      glow={glows[course.category]}
      float
      className="flex h-full flex-col gap-5"
    >
      {/* ---------- Head ---------- */}
      <div className="flex items-start justify-between gap-3">
        <span
          dir="ltr"
          className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] font-mono text-lg font-bold text-white"
          style={{
            background: `linear-gradient(135deg, ${course.colors[0]}, ${course.colors[1]})`,
            boxShadow: `0 0 32px ${course.colors[0]}55`,
          }}
        >
          {course.glyph}
        </span>

        <Badge variant={status.variant} size="sm" glow>
          {status.label}
        </Badge>
      </div>

      {/* ---------- Body ---------- */}
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
          {text.title}
        </h3>
        <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)]">
          {text.summary}
        </p>
      </div>

      <p className="text-xs text-[var(--color-text-tertiary)]">
        {card.prerequisite}:{" "}
        <span className="text-[var(--color-text-secondary)]">
          {text.prerequisite}
        </span>
      </p>

      {/* ---------- Capacity ---------- */}
      <div className="mt-auto flex flex-col gap-2 border-t border-[var(--color-border-secondary)] pt-4">
        <Progress
          value={percent}
          size="sm"
          color={isFull ? "danger" : isAlmost ? "warning" : "primary"}
        />
        <p className="flex items-center justify-between text-[11px] text-[var(--color-text-tertiary)]">
          <span dir="ltr" className="font-mono">
            {formatNumber(course.enrolled)} / {formatNumber(course.capacity)}
          </span>
          <span>{card.enrolled}</span>
        </p>
      </div>

      {/* ---------- Footer ---------- */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-heading text-lg font-bold text-[var(--color-primary)]">
          {formatPrice(course.price)}
        </span>
        <Button
          size="sm"
          variant="primary"
          rightIcon={<ChevronLeftIcon className="h-4 w-4" />}
          onClick={() => navigate(`/courses/${course.slug}`)}
        >
          {card.view}
        </Button>
      </div>
    </Card>
  );
}

/**
 * Code Empire - Course mobile registration bar
 */

import { useNavigate } from "react-router-dom";
import { Button } from "dara-ui";
import type { Course } from "@/types";
import { useProgress } from "@/contexts";
import { formatPrice } from "@/lib/format";
import { coursesPage } from "@/content/courses-page";
import { dashboard } from "@/content/dashboard";
import { Icons } from "@/lib/icons";

interface CourseMobileBarProps {
  course: Course;
}

export function CourseMobileBar({ course }: CourseMobileBarProps) {
  const navigate = useNavigate();
  const { isEnrolled } = useProgress();

  const enrolled = isEnrolled(course.slug);
  const isFull = course.capacity - course.enrolled <= 0;

  const handleClick = () =>
    navigate(
      enrolled
        ? "/dashboard/courses"
        : `/courses/register?course=${course.slug}&type=group`,
    );

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
            {coursesPage.price}
          </span>
          <span className="truncate font-heading text-base font-bold text-[var(--color-primary)]">
            {formatPrice(course.price)}
          </span>
        </div>

        <Button
          variant="primary"
          size="md"
          glow="primary"
          disabled={!enrolled && isFull}
          leftIcon={
            enrolled ? (
              <Icons.bookOpen className="h-4 w-4" />
            ) : (
              <Icons.rocket className="h-4 w-4" />
            )
          }
          onClick={handleClick}
        >
          {enrolled
            ? dashboard.continue
            : isFull
              ? coursesPage.full
              : coursesPage.registerNow}
        </Button>
      </div>
    </div>
  );
}

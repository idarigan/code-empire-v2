/**
 * Code Empire - Course mobile registration bar
 *
 * Fixed bottom bar below lg. Slides in once the registration card
 * has scrolled out of view.
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Course } from "@/types";
import { useProgress } from "@/contexts";
import { formatPrice } from "@/lib/format";
import { coursesPage } from "@/content/courses-page";
import { dashboard } from "@/content/dashboard";
import { Icons } from "@/lib/icons";

interface CourseMobileBarProps {
  course: Course;
  targetId: string;
}

export function CourseMobileBar({ course, targetId }: CourseMobileBarProps) {
  const navigate = useNavigate();
  const { isEnrolled } = useProgress();
  const [visible, setVisible] = useState(false);

  const enrolled = isEnrolled(course.slug);
  const remaining = course.capacity - course.enrolled;
  const isFull = remaining <= 0;
  const isAlmost = !isFull && remaining <= 5;

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  const handleClick = () =>
    navigate(
      enrolled
        ? "/dashboard/courses"
        : `/courses/register?course=${course.slug}&type=group`,
    );

  const disabled = !enrolled && isFull;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/95 px-4 pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <div className="flex min-w-0 flex-col">
          <span className="truncate font-heading text-lg font-bold text-[var(--color-primary)]">
            {formatPrice(course.price)}
          </span>
          {isAlmost && !enrolled && (
            <span className="text-[11px] text-[var(--color-warning)]">
              {coursesPage.almostFull}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleClick}
          disabled={disabled}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] px-7 font-heading text-base font-bold text-white transition-transform active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            background: "var(--gradient-primary)",
            boxShadow: "var(--shadow-btn-primary)",
          }}
        >
          {enrolled ? (
            <Icons.bookOpen className="h-5 w-5" />
          ) : (
            <Icons.rocket className="h-5 w-5" />
          )}
          {enrolled
            ? dashboard.continue
            : isFull
              ? coursesPage.full
              : coursesPage.registerNow}
        </button>
      </div>
    </div>
  );
}

/**
 * Code Empire - Course capacity state
 *
 * Derives fill level, badge variant and label from enrollment numbers.
 * Pure helper. No JSX, so fast refresh never sees it.
 */

import type { Course } from "@/types";
import { formatNumber } from "@/lib/format";
import { coursesPage } from "@/content/courses-page";

export interface CapacityState {
  remaining: number;
  isFull: boolean;
  isAlmost: boolean;
  percent: number;
  variant: "danger" | "warning" | "primary";
  label: string;
}

export function getCapacityState(course: Course): CapacityState {
  const remaining = course.capacity - course.enrolled;
  const isFull = remaining <= 0;
  const isAlmost = !isFull && remaining <= 5;
  const percent = Math.round((course.enrolled / course.capacity) * 100);

  const variant = isFull ? "danger" : isAlmost ? "warning" : "primary";

  const label = isFull
    ? coursesPage.full
    : isAlmost
      ? coursesPage.almostFull
      : `${coursesPage.available}: ${formatNumber(remaining)}`;

  return { remaining, isFull, isAlmost, percent, variant, label };
}

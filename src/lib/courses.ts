/**
 * Code Empire - Course selectors
 *
 * Lookup, capacity status, related courses and filtering.
 */

import { courses } from "@/config/courses";
import type { Course, CourseCategory } from "@/config/courses";
import { courseText } from "@/content/courses";

// ============================================
// Tones
// ============================================

export const courseTones = {
  web: "primary",
  software: "secondary",
  game: "accent",
} as const;

export const courseBadges = {
  web: "primary",
  software: "secondary",
  game: "warning",
} as const;

// ============================================
// Lookup
// ============================================

export const getCourse = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug);

export const getRelatedCourses = (course: Course, count = 3): Course[] =>
  courses
    .filter(
      (item) => item.category === course.category && item.slug !== course.slug,
    )
    .sort((a, b) => a.rank - b.rank)
    .slice(0, count);

// ============================================
// Capacity
// ============================================

export type CapacityState = "full" | "almost" | "available";

export function getCapacity(course: Course) {
  const remaining = Math.max(0, course.capacity - course.enrolled);
  const percent = Math.round((course.enrolled / course.capacity) * 100);
  const state: CapacityState =
    remaining === 0 ? "full" : remaining <= 5 ? "almost" : "available";

  return { remaining, percent, state };
}

// ============================================
// Filter
// ============================================

export function filterCourses(
  query: string,
  category: CourseCategory | null,
): Course[] {
  const needle = query.trim().toLowerCase();

  return courses.filter((course) => {
    if (category && course.category !== category) return false;
    if (!needle) return true;

    const text = courseText[course.slug];
    const haystack = [text?.title, text?.summary, course.slug]
      .join(" ")
      .toLowerCase();

    return haystack.includes(needle);
  });
}

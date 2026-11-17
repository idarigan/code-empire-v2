/**
 * Code Empire - Course list
 *
 * Search, category filter and the course grid.
 */

import { useMemo, useState } from "react";
import { Button, Card, Input, ScrollReveal } from "dara-ui";
import type { CourseCategory } from "@/config/courses";
import { coursesList } from "@/content/coursesPage";
import { coursesSection } from "@/content/home";
import { CourseCard } from "@/features/home/courses";
import { useDebounce } from "@/hooks/useDebounce";
import { filterCourses } from "@/lib/courses";

const categories: CourseCategory[] = ["web", "software", "game"];

export function CourseList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CourseCategory | null>(null);

  const debouncedQuery = useDebounce(query);
  const results = useMemo(
    () => filterCourses(debouncedQuery, category),
    [debouncedQuery, category],
  );

  const reset = () => {
    setQuery("");
    setCategory(null);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* ---------- Filters ---------- */}
      <ScrollReveal animation="fade-up">
        <div className="flex flex-col gap-5">
          <Input
            fullWidth
            label={coursesList.searchLabel}
            placeholder={coursesList.searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={category === null ? "primary" : "glass"}
              aria-pressed={category === null}
              onClick={() => setCategory(null)}
            >
              {coursesList.all}
            </Button>
            {categories.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={category === item ? "primary" : "glass"}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {coursesSection.categories[item]}
              </Button>
            ))}

            <span className="ms-auto text-xs text-[var(--color-text-tertiary)]">
              {coursesList.count(results.length)}
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* ---------- Grid ---------- */}
      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((course, i) => (
            <ScrollReveal
              key={course.slug}
              animation="fade-up"
              delay={(i % 3) * 80}
              className="h-full"
            >
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <Card
          variant="outline"
          className="flex flex-col items-center gap-3 py-12 text-center"
        >
          <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
            {coursesList.empty.title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {coursesList.empty.text}
          </p>
          <Button variant="primary" size="sm" onClick={reset}>
            {coursesList.empty.reset}
          </Button>
        </Card>
      )}
    </div>
  );
}

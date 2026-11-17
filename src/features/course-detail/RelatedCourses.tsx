/**
 * Code Empire - Related courses
 *
 * Other courses from the same category.
 */

import { ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import type { Course } from "@/config/courses";
import { coursePage } from "@/content/coursesPage";
import { CourseCard } from "@/features/home/courses";

export function RelatedCourses({ courses }: { courses: Course[] }) {
  if (courses.length === 0) return null;

  return (
    <Section id="related" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={coursePage.relatedEyebrow}
        title={coursePage.relatedTitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <ScrollReveal
            key={course.slug}
            animation="fade-up"
            delay={i * 80}
            className="h-full"
          >
            <CourseCard course={course} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

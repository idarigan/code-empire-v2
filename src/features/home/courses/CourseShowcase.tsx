/**
 * Code Empire - Course showcase
 *
 * Category tabs, each revealing its top courses.
 */

import { useNavigate } from "react-router-dom";
import { Button, ChevronLeftIcon, Tabs } from "dara-ui";
import type { TabItem } from "dara-ui";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { getTopCourses } from "@/config/courses";
import type { CourseCategory } from "@/config/courses";
import { coursesSection } from "@/content/home";
import { CourseCard } from "./CourseCard";

// ============================================
// Tabs
// ============================================

const categories: CourseCategory[] = ["web", "software", "game"];

const tabs: TabItem[] = categories.map((category) => ({
  label: coursesSection.categories[category],
  value: category,
  content: (
    <div className="grid gap-5 px-1 pb-6 pt-2 sm:grid-cols-2 lg:grid-cols-3">
      {getTopCourses(category).map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  ),
}));

export function CourseShowcase() {
  const navigate = useNavigate();

  return (
    <Section id="courses" className="bg-[var(--color-bg-secondary)]/30">
      <SectionHeader
        eyebrow={coursesSection.eyebrow}
        title={coursesSection.title}
        subtitle={coursesSection.subtitle}
        action={
          <Button
            variant="outline"
            size="sm"
            rightIcon={<ChevronLeftIcon className="h-4 w-4" />}
            onClick={() => navigate("/courses")}
          >
            {coursesSection.viewAll}
          </Button>
        }
      />

      <Tabs items={tabs} defaultValue="web" glowColor="primary" />
    </Section>
  );
}

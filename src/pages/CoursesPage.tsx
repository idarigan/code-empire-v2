/**
 * Code Empire - Courses page
 */

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { coursesHero } from "@/content/coursesPage";
import { CourseList } from "@/features/courses";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function CoursesPage() {
  usePageTitle(coursesHero.metaTitle);

  return (
    <>
      <PageHero
        eyebrow={coursesHero.eyebrow}
        title={coursesHero.title}
        subtitle={coursesHero.subtitle}
      />

      <Section id="courses">
        <CourseList />
      </Section>
    </>
  );
}

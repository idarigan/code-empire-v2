/**
 * Code Empire - Course page
 */

import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "dara-ui";
import { Section } from "@/components/Section";
import { courseText } from "@/content/courses";
import { coursePage } from "@/content/coursesPage";
import {
  CourseAbout,
  CourseHeader,
  EnrollPanel,
  RelatedCourses,
} from "@/features/course-detail";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getCourse, getRelatedCourses } from "@/lib/courses";

export default function CoursePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = slug ? getCourse(slug) : undefined;

  usePageTitle(
    course ? courseText[course.slug].title : coursePage.notFound.title,
  );

  if (!course) {
    return (
      <Section>
        <Card
          variant="outline"
          className="mx-auto flex max-w-xl flex-col items-center gap-4 py-14 text-center"
        >
          <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
            {coursePage.notFound.title}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {coursePage.notFound.text}
          </p>
          <Button variant="primary" onClick={() => navigate("/courses")}>
            {coursePage.notFound.action}
          </Button>
        </Card>
      </Section>
    );
  }

  return (
    <>
      <CourseHeader course={course} />

      <Section className="pt-6 md:pt-10">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CourseAbout slug={course.slug} />
          </div>
          <div className="lg:sticky lg:top-24">
            <EnrollPanel course={course} />
          </div>
        </div>
      </Section>

      <RelatedCourses courses={getRelatedCourses(course)} />
    </>
  );
}

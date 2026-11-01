/**
 * Code Empire - Single course page
 */

import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Accordion, Button } from "dara-ui";
import { getCourseBySlug, getRelatedCourses } from "@/data/courses";
import { CourseHero } from "@/features/courses/CourseHero";
import { CourseOutcomes } from "@/features/courses/CourseOutcomes";
import { CourseArticle } from "@/features/courses/CourseArticle";
import { CourseSidebar } from "@/features/courses/CourseSidebar";
import { CourseMobileBar } from "@/features/courses/CourseMobileBar";
import { CourseGrid } from "@/features/courses/CourseGrid";
import { SectionHeader } from "@/features/home/SectionHeader";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { nav, common } from "@/content/common";
import { Icons } from "@/lib/icons";
import type { ArticleSection } from "@/types";

export default function SingleCoursePage() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug);
  const content = slug ? coursesContent[slug] : undefined;

  const related = useMemo(
    () => (course ? getRelatedCourses(course, 3) : []),
    [course],
  );

  if (!course || !content) {
    return (
      <section className="section">
        <div className="section-container flex justify-center">
          <Card glow="accent" className="w-full max-w-md text-center">
            <div className="mb-3 flex justify-center text-[var(--color-accent)]">
              <Icons.compass className="h-10 w-10" />
            </div>
            <p className="mb-4 text-[var(--color-text-secondary)]">
              {common.empty}
            </p>
            <Button
              variant="primary"
              onClick={() => navigate("/courses")}
              leftIcon={
                <Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />
              }
            >
              {nav.courses}
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  const sections: ArticleSection[] = content.sections.map((s, i) => ({
    title: s.title,
    paragraphs: s.paragraphs,
    hints: s.hints,
    cover: course.sections[i]?.cover,
    coverIsVideo: course.sections[i]?.coverIsVideo,
  }));

  const faqItems = content.faq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.question,
    content: <p>{item.answer}</p>,
  }));

  return (
    <>
      {/* ============================================ */}
      {/* Hero */}
      {/* ============================================ */}
      <CourseHero course={course} />

      {/* ============================================ */}
      {/* Body + registration sidebar */}
      {/* ============================================ */}
      <section className="pb-28 lg:pb-16">
        <div className="section-container-wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="flex min-w-0 flex-col gap-12 md:gap-14">
              <CourseOutcomes outcomes={content.learningOutcome} />

              <div>
                <SectionHeader
                  eyebrow={coursesPage.overviewEyebrow}
                  title={coursesPage.overview}
                  align="start"
                />
                <CourseArticle sections={sections} />
              </div>

              {faqItems.length > 0 && (
                <div>
                  <SectionHeader
                    eyebrow={coursesPage.faqEyebrow}
                    title={coursesPage.faq}
                    align="start"
                  />
                  <Accordion items={faqItems} multiple={false} />
                </div>
              )}
            </div>

            <CourseSidebar course={course} />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Related courses */}
      {/* ============================================ */}
      {related.length > 0 && (
        <section className="section border-t border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)]/30 pb-28 lg:pb-16">
          <div className="section-container-wide">
            <SectionHeader
              eyebrow={coursesPage.relatedEyebrow}
              title={coursesPage.similarCourses}
              align="start"
            />
            <CourseGrid courses={related} columns={3} />
          </div>
        </section>
      )}

      <CourseMobileBar course={course} />
    </>
  );
}

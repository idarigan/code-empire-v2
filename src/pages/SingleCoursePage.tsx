/**
 * Code Empire — Single course page
 */

import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Badge, Accordion, Button, ScrollReveal } from "dara-ui";
import { getCourseBySlug, getRelatedCourses } from "@/data/courses";
import { CourseArticle } from "@/features/courses/CourseArticle";
import { CourseSidebar } from "@/features/courses/CourseSidebar";
import { CourseGrid } from "@/features/courses/CourseGrid";
import { SectionHeader } from "@/features/home/SectionHeader";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { guide } from "@/content/guide";
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
          <Card glow="accent" className="text-center max-w-md w-full">
            <div className="flex justify-center mb-3 text-[var(--color-accent)]">
              <Icons.compass className="h-10 w-10" />
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
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

  const sections: ArticleSection[] = content.sections.map((s) => ({
    title: s.title,
    paragraphs: s.paragraphs,
    hints: s.hints,
  }));

  const faqItems = content.faq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.question,
    content: <p>{item.answer}</p>,
  }));

  return (
    <>
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${course.color[0]}, ${course.color[1]})`,
            filter: "blur(100px)",
            transform: "scale(1.5)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] font-mono mb-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="hover:text-[var(--color-primary)]"
            >
              {nav.home}
            </button>
            <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="hover:text-[var(--color-primary)]"
            >
              {nav.courses}
            </button>
            <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
            <span className="text-[var(--color-text-secondary)] truncate">
              {content.title}
            </span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="flex flex-col gap-3 max-w-3xl">
              <Badge variant="primary" glow>
                {coursesPage[course.category]}
              </Badge>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-gradient-hero">
                {content.title}
              </h1>
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
                {content.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
            <div className="min-w-0">
              <CourseArticle sections={sections} />

              {content.learningOutcome.length > 0 && (
                <Card variant="solid" className="mt-10">
                  <h3 className="font-heading font-bold text-base mb-3">
                    {guide.sessionStructure}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {content.learningOutcome.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <Icons.check className="h-4 w-4 flex-shrink-0 text-[var(--color-success)]" />
                        <span dir="auto">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {faqItems.length > 0 && (
                <div className="mt-12">
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

      {related.length > 0 && (
        <section className="section">
          <div className="section-container">
            <SectionHeader
              eyebrow={coursesPage.relatedEyebrow}
              title={coursesPage.similarCourses}
              align="start"
            />
            <CourseGrid courses={related} columns={3} />
          </div>
        </section>
      )}
    </>
  );
}

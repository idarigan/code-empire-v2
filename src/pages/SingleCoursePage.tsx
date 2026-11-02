/**
 * Code Empire - Single course page
 */

import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Accordion, Button } from "dara-ui";
import { getCourseBySlug, getRelatedCourses } from "@/data/courses";
import { CourseHero } from "@/features/courses/CourseHero";
import { CourseNav } from "@/features/courses/CourseNav";
import { CourseBlock } from "@/features/courses/CourseBlock";
import { CourseOutcomes } from "@/features/courses/CourseOutcomes";
import { CourseSections } from "@/features/courses/CourseSections";
import { CourseIncludes } from "@/features/courses/CourseIncludes";
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
              leftIcon={<Icons.arrowLeft className="h-4 w-4" />}
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

  const hasOutcomes = content.learningOutcome.length > 0;
  const hasFaq = faqItems.length > 0;

  const navItems = [
    ...(hasOutcomes
      ? [{ id: "outcomes", label: coursesPage.tabOutcomes }]
      : []),
    { id: "overview", label: coursesPage.tabOverview },
    { id: "includes", label: coursesPage.tabIncludes },
    ...(hasFaq ? [{ id: "faq", label: coursesPage.tabFaq }] : []),
  ];

  return (
    <>
      <div className="relative isolate">
        {/* ---------- Backdrop ---------- */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 0%, ${course.color[0]}26 0%, transparent 70%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 75%)",
          }}
        />

        <div className="section-container-wide pt-6 pb-28 lg:pb-20">
          {/* ---------- Breadcrumb ---------- */}
          <nav
            aria-label="breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-tertiary)] md:mb-8"
          >
            <button
              type="button"
              onClick={() => navigate("/")}
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              {nav.home}
            </button>
            <Icons.chevronLeft className="h-3 w-3" />
            <button
              type="button"
              onClick={() => navigate("/courses")}
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              {nav.courses}
            </button>
            <Icons.chevronLeft className="h-3 w-3" />
            <span className="max-w-[12rem] truncate text-[var(--color-text-secondary)] sm:max-w-xs">
              {content.title}
            </span>
          </nav>

          {/* ============================================ */}
          {/* Hero + sidebar + body grid */}
          {/* ============================================ */}
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-x-10 xl:gap-x-14">
            <div className="min-w-0 lg:col-start-1 lg:row-start-1">
              <CourseHero course={course} />
            </div>

            <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <CourseSidebar course={course} />
            </div>

            <div className="flex min-w-0 flex-col gap-12 md:gap-16 lg:col-start-1 lg:row-start-2">
              <CourseNav items={navItems} />

              {hasOutcomes && (
                <CourseBlock
                  id="outcomes"
                  eyebrow={coursesPage.outcomesEyebrow}
                  title={coursesPage.learningOutcomes}
                  icon={<Icons.target className="h-5 w-5" />}
                >
                  <CourseOutcomes outcomes={content.learningOutcome} />
                </CourseBlock>
              )}

              <CourseBlock
                id="overview"
                eyebrow={coursesPage.overviewEyebrow}
                title={coursesPage.overview}
                icon={<Icons.bookOpen className="h-5 w-5" />}
              >
                <CourseSections sections={sections} />
              </CourseBlock>

              <CourseBlock
                id="includes"
                eyebrow={coursesPage.includesEyebrow}
                title={coursesPage.includesTitle}
                icon={<Icons.sparkles className="h-5 w-5" />}
              >
                <CourseIncludes />
              </CourseBlock>

              {hasFaq && (
                <CourseBlock
                  id="faq"
                  eyebrow={coursesPage.faqEyebrow}
                  title={coursesPage.faq}
                  icon={<Icons.messageCircle className="h-5 w-5" />}
                >
                  <Accordion items={faqItems} multiple={false} />
                </CourseBlock>
              )}
            </div>
          </div>
        </div>
      </div>

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

      <CourseMobileBar course={course} targetId="course-register" />
    </>
  );
}

/**
 * Code Empire - Course header
 *
 * Back link, glyph tile, category, title, summary and prerequisite.
 */

import { useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  ChevronLeftIcon,
  GradientRing,
  ScrollReveal,
} from "dara-ui";
import { Section } from "@/components/Section";
import type { Course } from "@/config/courses";
import { courseText } from "@/content/courses";
import { coursePage } from "@/content/coursesPage";
import { coursesSection } from "@/content/home";
import { courseBadges } from "@/lib/courses";

export function CourseHeader({ course }: { course: Course }) {
  const navigate = useNavigate();
  const text = courseText[course.slug];

  return (
    <Section className="isolate overflow-hidden pb-4 pt-10 md:pb-6 md:pt-16">
      <GradientRing size={420} blur={110} opacity={0.2} />

      <div className="flex flex-col gap-8">
        <ScrollReveal animation="fade-down">
          <Button
            variant="glass"
            size="sm"
            leftIcon={<ChevronLeftIcon className="h-4 w-4 rotate-180" />}
            onClick={() => navigate("/courses")}
          >
            {coursePage.back}
          </Button>
        </ScrollReveal>

        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
          <ScrollReveal animation="zoom-in">
            <span
              dir="ltr"
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[var(--radius-lg)] font-mono text-3xl font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${course.colors[0]}, ${course.colors[1]})`,
                boxShadow: `0 0 48px ${course.colors[0]}66`,
              }}
            >
              {course.glyph}
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={80}>
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={courseBadges[course.category]} glow>
                  {coursesSection.categories[course.category]}
                </Badge>
                <Badge variant="primary" size="sm" outline>
                  {coursesSection.card.prerequisite}: {text.prerequisite}
                </Badge>
              </div>

              <h1 className="text-gradient-hero font-heading text-4xl font-bold leading-[1.4] md:text-5xl">
                {text.title}
              </h1>

              <p className="max-w-2xl text-base leading-[2] text-[var(--color-text-secondary)] md:text-lg">
                {text.summary}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}

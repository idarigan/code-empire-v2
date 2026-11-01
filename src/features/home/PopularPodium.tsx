/**
 * Code Empire - Popular courses podium
 */

import { useNavigate } from "react-router-dom";
import { Card, Badge, Button, Progress, ScrollReveal } from "dara-ui";
import { getTopCourses } from "@/data/courses";
import { formatNumber } from "@/lib/format";
import { SectionHeader } from "./SectionHeader";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { home } from "@/content/home";
import { common } from "@/content/common";
import { Icons } from "@/lib/icons";

const GLOWS = ["accent", "secondary", "primary"] as const;

export function PopularPodium() {
  const navigate = useNavigate();
  const top = getTopCourses(3);

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.popularEyebrow}
          title={home.popularCourses}
          subtitle={coursesPage.subtitle}
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {top.map((course, i) => {
            const content = coursesContent[course.slug];
            if (!content) return null;

            const percent = Math.round(
              (course.enrolled / course.capacity) * 100,
            );

            return (
              <ScrollReveal
                key={course.slug}
                animation="fade-up"
                delay={i * 100}
              >
                <Card
                  glow={GLOWS[i]}
                  float
                  className="relative h-full cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/courses/${course.slug}`)}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 end-4 select-none font-heading text-8xl font-bold text-[var(--color-text-primary)] opacity-[0.05]"
                  >
                    {formatNumber(i + 1)}
                  </span>

                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="h-14 w-14 overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] ring-1 ring-[var(--color-border-primary)]">
                        <img
                          src={course.logo}
                          alt={content.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <Badge
                        variant={i === 0 ? "warning" : "secondary"}
                        glow={i === 0}
                        size="sm"
                      >
                        <span className="inline-flex items-center gap-1">
                          <Icons.trophy className="h-3 w-3" />#{i + 1}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                        {content.title}
                      </h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {content.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-[var(--color-border-secondary)] pt-4">
                      <Progress
                        value={percent}
                        color={i === 0 ? "warning" : "primary"}
                        size="sm"
                        showLabel
                        labelPosition="right"
                      />
                      <p className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
                        {formatNumber(course.enrolled)} /{" "}
                        {formatNumber(course.capacity)} {coursesPage.enrolled}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="primary"
            glow="primary"
            onClick={() => navigate("/courses")}
            rightIcon={<Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />}
          >
            {common.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}

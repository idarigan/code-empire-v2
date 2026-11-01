/**
 * Code Empire - Course hero
 */

import { useNavigate } from "react-router-dom";
import { Card, Badge, Button, ScrollReveal } from "dara-ui";
import type { Course } from "@/types";
import { useProgress } from "@/contexts";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { nav } from "@/content/common";
import { Icons } from "@/lib/icons";

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useProgress();
  const content = coursesContent[course.slug];

  if (!content) return null;

  const saved = isBookmarked("course", course.slug);

  const handleBookmark = () =>
    toggleBookmark({
      id: course.slug,
      type: "course",
      slug: course.slug,
      title: content.title,
    });

  return (
    <section className="relative isolate overflow-hidden pt-8 pb-10 md:pb-14">
      {/* ---------- Backdrop ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -end-32 -z-10 h-[clamp(260px,50vw,460px)] w-[clamp(260px,50vw,460px)] rounded-full opacity-25 blur-[130px]"
        style={{
          background: `linear-gradient(135deg, ${course.color[0]}, ${course.color[1]})`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
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

      <div className="section-container-wide">
        {/* ---------- Breadcrumb ---------- */}
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--color-text-tertiary)]"
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            {nav.home}
          </button>
          <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
          <button
            type="button"
            onClick={() => navigate("/courses")}
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            {nav.courses}
          </button>
          <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
          <span className="max-w-[14rem] truncate text-[var(--color-text-secondary)]">
            {content.title}
          </span>
        </nav>

        <ScrollReveal animation="fade-up">
          <div className="flex flex-col gap-8">
            {/* ---------- Title block ---------- */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div
                className="h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-tertiary)] ring-1 ring-[var(--color-border-primary)] md:h-24 md:w-24"
                style={{ boxShadow: `0 0 48px ${course.color[0]}40` }}
              >
                <img
                  src={course.logo}
                  alt={content.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" size="sm" glow>
                    {coursesPage[course.category]}
                  </Badge>
                  {course.featured && (
                    <Badge variant="warning" size="sm" glow>
                      <span className="inline-flex items-center gap-1">
                        <Icons.flame className="h-3 w-3" />
                        {coursesPage.popular}
                      </span>
                    </Badge>
                  )}
                </div>

                <h1 className="font-heading text-3xl font-bold leading-[1.2] text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
                  {content.fullTitle}
                </h1>

                <p className="text-base font-medium text-[var(--color-primary)] md:text-lg">
                  {content.description}
                </p>

                <p className="max-w-3xl text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-base">
                  {content.longDescription}
                </p>

                <div className="pt-1">
                  <Button
                    variant={saved ? "secondary" : "outline"}
                    size="sm"
                    leftIcon={<Icons.bookmark className="h-4 w-4" />}
                    onClick={handleBookmark}
                  >
                    {saved ? coursesPage.bookmarked : coursesPage.bookmark}
                  </Button>
                </div>
              </div>
            </div>

            {/* ---------- Specs ---------- */}
            <div className="grid max-w-2xl grid-cols-3 gap-3 md:gap-4">
              {course.specs.map((spec) => {
                const Icon =
                  Icons[spec.icon as keyof typeof Icons] ?? Icons.info;
                const label =
                  content.specLabel[
                    spec.icon as keyof typeof content.specLabel
                  ];
                const value =
                  content.specValue[
                    spec.icon as keyof typeof content.specValue
                  ];

                return (
                  <Card
                    key={spec.icon}
                    variant="solid"
                    padding="sm"
                    className="text-center"
                  >
                    <div className="mb-2 flex justify-center text-[var(--color-primary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-heading text-base font-bold text-[var(--color-text-primary)] md:text-xl">
                      {value}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                      {label}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

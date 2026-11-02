/**
 * Code Empire - Course hero
 */

import { Card, Badge, Button, ScrollReveal, useToast } from "dara-ui";
import type { Course } from "@/types";
import { useProgress } from "@/contexts";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { form } from "@/content/common";
import { Icons } from "@/lib/icons";

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  const toast = useToast();
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

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(coursesPage.linkCopied);
    } catch {
      toast.error(form.failed);
    }
  };

  return (
    <div className="flex min-w-0 flex-col gap-6 md:gap-8">
      <ScrollReveal animation="fade-up">
        <div className="flex flex-col gap-4 md:gap-5">
          {/* ---------- Logo + badges ---------- */}
          <div className="flex items-center gap-4">
            <div
              className="h-16 w-16 shrink-0 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-tertiary)] ring-1 ring-[var(--color-border-primary)] sm:h-20 sm:w-20"
              style={{ boxShadow: `0 0 40px ${course.color[0]}45` }}
            >
              <img
                src={course.logo}
                alt={content.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="flex min-w-0 flex-wrap items-center gap-2">
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
              <Badge variant="secondary" size="sm" outline>
                {coursesPage.prerequisite}: {content.detailValue.prereq}
              </Badge>
            </div>
          </div>

          {/* ---------- Title block ---------- */}
          <h1 className="break-words font-heading text-2xl font-bold leading-[1.25] text-[var(--color-text-primary)] sm:text-3xl lg:text-4xl xl:text-5xl">
            {content.fullTitle}
          </h1>

          <p className="text-base font-medium text-[var(--color-primary)] md:text-lg">
            {content.description}
          </p>

          <p className="max-w-3xl text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-base">
            {content.longDescription}
          </p>

          {/* ---------- Actions ---------- */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant={saved ? "secondary" : "outline"}
              size="sm"
              leftIcon={<Icons.bookmark className="h-4 w-4" />}
              onClick={handleBookmark}
            >
              {saved ? coursesPage.bookmarked : coursesPage.bookmark}
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Icons.copy className="h-4 w-4" />}
              onClick={handleShare}
            >
              {coursesPage.share}
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* ---------- Specs ---------- */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:max-w-xl">
        {course.specs.map((spec, i) => {
          const Icon = Icons[spec.icon as keyof typeof Icons] ?? Icons.info;
          const label =
            content.specLabel[spec.icon as keyof typeof content.specLabel];
          const value =
            content.specValue[spec.icon as keyof typeof content.specValue];

          return (
            <ScrollReveal key={spec.icon} animation="fade-up" delay={i * 60}>
              <Card variant="solid" padding="sm" className="h-full text-center">
                <div className="mb-1.5 flex justify-center text-[var(--color-primary)]">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="truncate font-heading text-sm font-bold text-[var(--color-text-primary)] sm:text-lg">
                  {value}
                </p>
                <p className="mt-0.5 truncate text-[10px] text-[var(--color-text-tertiary)] sm:text-xs">
                  {label}
                </p>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

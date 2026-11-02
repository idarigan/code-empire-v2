/**
 * Code Empire - Course sidebar
 */

import { useNavigate } from "react-router-dom";
import { Card, Badge, Button, Progress } from "dara-ui";
import type { Course } from "@/types";
import { useProgress } from "@/contexts";
import { formatPrice, formatNumber } from "@/lib/format";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { dashboard } from "@/content/dashboard";
import { Icons } from "@/lib/icons";

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  const navigate = useNavigate();
  const { isEnrolled } = useProgress();
  const content = coursesContent[course.slug];

  if (!content) return null;

  const enrolled = isEnrolled(course.slug);
  const remaining = course.capacity - course.enrolled;
  const isFull = remaining <= 0;
  const isAlmost = !isFull && remaining <= 5;
  const percent = Math.round((course.enrolled / course.capacity) * 100);

  const capacityVariant = isFull
    ? ("danger" as const)
    : isAlmost
      ? ("warning" as const)
      : ("primary" as const);

  const capacityText = isFull
    ? coursesPage.full
    : isAlmost
      ? coursesPage.almostFull
      : `${formatNumber(remaining)} ${coursesPage.available}`;

  const goRegister = (type: "group" | "private") =>
    navigate(`/courses/register?course=${course.slug}&type=${type}`);

  return (
    <aside className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-24">
      <div id="course-register">
        <Card glow="secondary" padding="none" className="overflow-hidden">
          <div
            aria-hidden="true"
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, ${course.color[0]}, ${course.color[1]})`,
            }}
          />

          <div className="flex flex-col gap-5 p-5 md:p-6">
            {/* ---------- Price ---------- */}
            <div className="flex items-end justify-between gap-3">
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-xs text-[var(--color-text-tertiary)]">
                  {coursesPage.price}
                </span>
                <span className="truncate font-heading text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
                  {formatPrice(course.price)}
                </span>
              </div>
              <Badge variant={capacityVariant} size="sm" glow>
                {capacityText}
              </Badge>
            </div>

            {/* ---------- Capacity ---------- */}
            <div className="flex flex-col gap-2">
              <Progress
                value={percent}
                color={isFull ? "danger" : isAlmost ? "warning" : "primary"}
                size="sm"
                showLabel
                labelPosition="right"
              />
              <p className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
                {formatNumber(course.enrolled)} /{" "}
                {formatNumber(course.capacity)} {coursesPage.enrolled}
              </p>
            </div>

            {/* ---------- Actions ---------- */}
            {enrolled ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-success-light)] p-3 text-xs text-[var(--color-success)]">
                  <Icons.check className="h-4 w-4 shrink-0" />
                  <span>{coursesPage.alreadyEnrolled}</span>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  glow="primary"
                  fullWidth
                  leftIcon={<Icons.bookOpen className="h-4 w-4" />}
                  onClick={() => navigate("/dashboard/courses")}
                >
                  {dashboard.continue}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="lg"
                  glow="primary"
                  fullWidth
                  disabled={isFull}
                  leftIcon={<Icons.users className="h-4 w-4" />}
                  onClick={() => goRegister("group")}
                >
                  {coursesPage.registerGroup}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  disabled={isFull}
                  leftIcon={<Icons.crown className="h-4 w-4" />}
                  onClick={() => goRegister("private")}
                >
                  {coursesPage.registerPrivate}
                </Button>
              </div>
            )}

            {/* ---------- Details ---------- */}
            <ul className="flex flex-col gap-3 border-t border-[var(--color-border-secondary)] pt-5">
              {course.details.map((detail) => (
                <li
                  key={detail.key}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="shrink-0 text-[var(--color-text-tertiary)]">
                    {content.detailLabel[detail.key]}
                  </span>
                  <span
                    className="min-w-0 text-end font-medium text-[var(--color-text-primary)]"
                    dir="auto"
                  >
                    {content.detailValue[detail.key]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <Card variant="outline" padding="sm">
        <div className="flex items-start gap-2 text-xs text-[var(--color-text-tertiary)]">
          <Icons.info className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
          <p className="leading-relaxed">{coursesPage.supportTitle}</p>
        </div>
      </Card>
    </aside>
  );
}

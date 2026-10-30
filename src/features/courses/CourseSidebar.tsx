/**
 * Code Empire — Course sidebar
 */

import { useNavigate } from "react-router-dom";
import { Card, Badge, Button, Progress } from "dara-ui";
import type { Course } from "@/types";
import { formatPrice } from "@/lib/format";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { Icons } from "@/lib/icons";

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  const navigate = useNavigate();
  const content = coursesContent[course.slug];
  if (!content) return null;

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
      : `${remaining} ${coursesPage.available}`;

  const goRegister = (type: "group" | "private") =>
    navigate(`/courses/register?course=${course.slug}&type=${type}`);

  return (
    <aside className="flex flex-col gap-5 sticky top-24 self-start">
      <Card glow={capacityVariant === "danger" ? "accent" : "primary"}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-tertiary)]">
            {coursesPage.capacity}
          </span>
          <Badge variant={capacityVariant} size="sm" glow>
            {capacityText}
          </Badge>
        </div>
        <Progress
          value={percent}
          color={isFull ? "danger" : isAlmost ? "warning" : "primary"}
          showLabel
          labelPosition="right"
        />
        <p className="mt-3 text-xs text-[var(--color-text-tertiary)] font-mono">
          {course.enrolled} / {course.capacity} {coursesPage.enrolled}
        </p>
      </Card>

      <div className="grid grid-cols-3 gap-2">
        {course.specs.map((spec) => {
          const Icon = Icons[spec.icon as keyof typeof Icons] ?? Icons.info;
          const label =
            content.specLabel[spec.icon as keyof typeof content.specLabel];
          const value =
            content.specValue[spec.icon as keyof typeof content.specValue];
          return (
            <Card
              key={spec.icon}
              variant="solid"
              padding="sm"
              className="text-center"
            >
              <div className="flex justify-center mb-1 text-[var(--color-primary)]">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono mb-0.5 truncate">
                {label}
              </p>
              <p className="text-sm font-heading font-bold text-[var(--color-text-primary)] truncate">
                {value}
              </p>
            </Card>
          );
        })}
      </div>

      <Card variant="solid">
        <h3 className="font-heading font-bold text-sm mb-3 text-[var(--color-text-primary)]">
          {coursesPage.details}
        </h3>
        <ul className="flex flex-col gap-2.5">
          {course.details.map((detail) => (
            <li
              key={detail.key}
              className="flex items-start justify-between gap-3 text-sm border-b border-[var(--color-border-secondary)] pb-2 last:border-b-0 last:pb-0"
            >
              <span className="text-[var(--color-text-tertiary)] font-mono text-xs flex-shrink-0">
                {content.detailLabel[detail.key]}
              </span>
              <span
                className="text-[var(--color-text-primary)] text-end truncate"
                dir="auto"
              >
                {content.detailValue[detail.key]}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <Card glow="secondary">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-[var(--color-text-secondary)]">
            {coursesPage.price}
          </span>
          <span className="font-heading font-bold text-lg text-[var(--color-primary)]">
            {formatPrice(course.price)}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            variant="primary"
            fullWidth
            disabled={isFull}
            leftIcon={<Icons.user className="h-4 w-4" />}
            onClick={() => goRegister("group")}
          >
            {coursesPage.registerGroup}
          </Button>
          <Button
            variant="outline"
            fullWidth
            disabled={isFull}
            leftIcon={<Icons.crown className="h-4 w-4" />}
            onClick={() => goRegister("private")}
          >
            {coursesPage.registerPrivate}
          </Button>
        </div>
      </Card>

      <Card variant="outline" padding="sm">
        <div className="flex items-start gap-2 text-xs text-[var(--color-text-tertiary)]">
          <Icons.info className="h-4 w-4 flex-shrink-0 text-[var(--color-accent)]" />
          <p className="leading-relaxed">{coursesPage.supportTitle}</p>
        </div>
      </Card>
    </aside>
  );
}

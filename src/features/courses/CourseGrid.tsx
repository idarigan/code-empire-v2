/**
 * Code Empire — Course grid
 */

import { useNavigate } from "react-router-dom";
import { ProductCard, Badge, useI18n } from "dara-ui";
import type { Course } from "@/types";
import { formatPrice } from "@/lib/format";
import { Icons } from "@/lib/icons";

interface CourseGridProps {
  courses: Course[];
  columns?: 2 | 3 | 4;
}

export function CourseGrid({ courses, columns = 3 }: CourseGridProps) {
  const { t } = useI18n();
  const navigate = useNavigate();

  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <Icons.bookOpen className="h-10 w-10 text-[var(--color-text-tertiary)]" />
        <p className="text-[var(--color-text-secondary)] text-sm">
          {t("courses.gridEmpty")}
        </p>
      </div>
    );
  }

  const colsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colsClass} gap-5`}>
      {courses.map((course) => {
        const remaining = course.capacity - course.enrolled;
        const isFull = remaining <= 0;
        const isAlmost = !isFull && remaining <= 5;

        const badgeVariant = isFull
          ? ("danger" as const)
          : isAlmost
            ? ("warning" as const)
            : ("primary" as const);

        const badgeText = isFull
          ? t("courses.full")
          : isAlmost
            ? t("courses.almostFull")
            : `${remaining} ${t("courses.available")}`;

        return (
          <div key={course.slug} className="relative">
            <ProductCard
              title={t(`course.${course.slug}.title`)}
              description={t(`course.${course.slug}.description`)}
              price={formatPrice(course.price)}
              image={course.logo}
              category={t(`courses.${course.category}`)}
              layout="vertical"
              glow={
                course.category === "web"
                  ? "primary"
                  : course.category === "software"
                    ? "secondary"
                    : "accent"
              }
              onAddToCart={() => navigate(`/courses/${course.slug}`)}
            />
            <div className="absolute top-3 start-3 z-10">
              <Badge variant={badgeVariant} size="sm" glow>
                {badgeText}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
}

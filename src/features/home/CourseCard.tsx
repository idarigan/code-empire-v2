/**
 * Code Empire — Course card
 */

import { useNavigate } from "react-router-dom";
import { ProductCard, Badge, useI18n } from "dara-ui";
import type { Course } from "@/types";
import { formatPrice } from "@/lib/format";

interface CourseCardProps {
  course: Course;
  layout?: "vertical" | "horizontal" | "compact";
  glow?: "primary" | "secondary" | "accent" | "none";
}

export function CourseCard({
  course,
  layout = "vertical",
  glow = "primary",
}: CourseCardProps) {
  const { t } = useI18n();
  const navigate = useNavigate();

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
    <div className="relative">
      <ProductCard
        title={t(`course.${course.slug}.title`)}
        description={t(`course.${course.slug}.description`)}
        price={formatPrice(course.price)}
        image={course.logo}
        category={t(`courses.${course.category}`)}
        layout={layout}
        glow={glow}
        onAddToCart={() => navigate(`/courses/${course.slug}`)}
      />
      <div className="absolute top-3 start-3 z-10">
        <Badge variant={badgeVariant} size="sm" glow>
          {badgeText}
        </Badge>
      </div>
    </div>
  );
}

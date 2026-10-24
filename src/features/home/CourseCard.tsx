/**
 * Code Empire — Course card
 *
 * Single wrapper around Dara UI's ProductCard so all course grids
 * share the same price formatting, capacity logic, and navigation.
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
        title={course.persianTitle}
        description={course.description}
        price={formatPrice(course.price)}
        image={course.logo}
        category={
          course.category === "web"
            ? t("courses.web")
            : course.category === "software"
              ? t("courses.software")
              : t("courses.game")
        }
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

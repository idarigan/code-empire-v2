/**
 * Code Empire — Course card
 */

import { useNavigate } from "react-router-dom";
import { ProductCard, Badge } from "dara-ui";
import type { Course } from "@/types";
import { formatPrice } from "@/lib/format";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";

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
  const navigate = useNavigate();
  const content = coursesContent[course.slug];

  if (!content) return null;

  const remaining = course.capacity - course.enrolled;
  const isFull = remaining <= 0;
  const isAlmost = !isFull && remaining <= 5;

  const badgeVariant = isFull
    ? ("danger" as const)
    : isAlmost
      ? ("warning" as const)
      : ("primary" as const);

  const badgeText = isFull
    ? coursesPage.full
    : isAlmost
      ? coursesPage.almostFull
      : `${remaining} ${coursesPage.available}`;

  return (
    <div className="relative">
      <ProductCard
        title={content.title}
        description={content.description}
        price={formatPrice(course.price)}
        image={course.logo}
        category={coursesPage[course.category]}
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

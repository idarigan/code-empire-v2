/**
 * Code Empire — My courses
 *
 * Grid of enrolled courses with progress.
 * Empty state points to /courses.
 */

import { useNavigate } from "react-router-dom";
import { Button, Card } from "dara-ui";
import { useProgress } from "@/contexts";
import { CourseProgressCard } from "@/features/dashboard/CourseProgressCard";
import { dashboard } from "@/content/dashboard";
import { nav } from "@/content/common";
import { Icons } from "@/lib/icons";

export default function MyCourses() {
  const navigate = useNavigate();
  const { enrollments } = useProgress();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
          {dashboard.courses}
        </h1>
        <Button
          variant="primary"
          size="sm"
          leftIcon={<Icons.plus className="h-3.5 w-3.5" />}
          onClick={() => navigate("/courses")}
        >
          {nav.courses}
        </Button>
      </div>

      {enrollments.length === 0 ? (
        <Card variant="outline" className="text-center py-16">
          <Icons.bookOpen className="h-12 w-12 mx-auto text-[var(--color-text-tertiary)] mb-3" />
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            {dashboard.noEnrollments}
          </p>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/courses")}
          >
            {nav.courses}
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrollments.map((e) => (
            <CourseProgressCard key={e.slug} slug={e.slug} />
          ))}
        </div>
      )}
    </div>
  );
}

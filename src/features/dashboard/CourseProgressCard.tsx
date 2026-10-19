/**
 * Code Empire — Course progress card
 *
 * Compact card showing enrolled course, progress, and continue action.
 */

import { useNavigate } from "react-router-dom";
import { Card, Progress, Button, Badge, useI18n } from "dara-ui";
import { getCourseBySlug } from "@/data/courses";
import { useProgress } from "@/contexts";
import { Icons } from "@/lib/icons";

export function CourseProgressCard({ slug }: { slug: string }) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { getProgress, isComplete } = useProgress();

  const course = getCourseBySlug(slug);
  if (!course) return null;

  const progress = getProgress(slug);
  const complete = isComplete(slug);

  return (
    <Card
      glow={complete ? "accent" : "primary"}
      className="flex flex-col gap-3"
    >
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-tertiary)] flex-shrink-0">
          <img
            src={course.logo}
            alt={course.persianTitle}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-bold text-sm text-[var(--color-text-primary)] truncate">
            {course.persianTitle}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            {complete ? (
              <Badge variant="success" size="sm" glow>
                <Icons.check className="h-3 w-3 inline me-1" />
                {t("common.success")}
              </Badge>
            ) : (
              <Badge variant="primary" size="sm" outline>
                {t("dashboard.progress")}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <Progress
        value={progress}
        color={complete ? "success" : "primary"}
        showLabel
        labelPosition="right"
        size="sm"
      />

      <div className="flex gap-2">
        <Button
          variant="primary"
          size="sm"
          fullWidth
          onClick={() => navigate(`/courses/${slug}`)}
          leftIcon={<Icons.bookOpen className="h-3.5 w-3.5" />}
        >
          {t("dashboard.continue")}
        </Button>
      </div>
    </Card>
  );
}

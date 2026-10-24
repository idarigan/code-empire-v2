/**
 * Code Empire — Progress
 *
 * XP card, per-course progress rings, overall bar.
 */

import { useNavigate } from "react-router-dom";
import { Card, Progress, Button, Badge, useI18n } from "dara-ui";
import { useProgress } from "@/contexts";
import { getCourseBySlug } from "@/data/courses";
import { XPLevelCard } from "@/features/dashboard/XPLevelCard";
import { RankBadge, getTierForXP } from "@/features/dashboard/RankBadge";
import { formatPercent } from "@/lib/format";
import { Icons } from "@/lib/icons";

export default function ProgressPage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { enrollments, getProgress, overallProgress, xp, isComplete } =
    useProgress();

  const rank = getTierForXP(xp);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
          {t("dashboard.progress")}
        </h1>
        <RankBadge xp={xp} />
      </div>

      <XPLevelCard />

      {enrollments.length === 0 ? (
        <Card variant="outline" className="text-center py-16">
          <Icons.chart className="h-12 w-12 mx-auto text-[var(--color-text-tertiary)] mb-3" />
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            {t("dashboard.noEnrollments")}
          </p>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/courses")}
          >
            {t("nav.courses")}
          </Button>
        </Card>
      ) : (
        <>
          {/* Overall */}
          <Card glow="primary">
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading font-bold text-sm">
                {t("dashboard.overallProgress")}
              </span>
              <span className="text-sm font-mono text-[var(--color-primary)]">
                {formatPercent(overallProgress)}
              </span>
            </div>
            <Progress
              value={overallProgress}
              color="gradient"
              size="lg"
              showLabel
              labelPosition="inside"
            />
          </Card>

          {/* Per-course progress rings */}
          <div>
            <h2 className="font-heading font-bold text-base mb-4">
              {t("dashboard.courses")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {enrollments.map((e) => {
                const course = getCourseBySlug(e.slug);
                if (!course) return null;
                const p = getProgress(e.slug);
                const done = isComplete(e.slug);
                return (
                  <Card
                    key={e.slug}
                    variant="solid"
                    padding="sm"
                    className="text-center"
                  >
                    <Progress
                      variant="radial"
                      value={p}
                      color={done ? "success" : "primary"}
                      radialSize={72}
                      showLabel
                    />
                    <p className="text-xs font-medium text-[var(--color-text-primary)] mt-2 truncate">
                      {course.persianTitle}
                    </p>
                    {done && (
                      <Badge variant="success" size="sm" glow>
                        {t("common.success")}
                      </Badge>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

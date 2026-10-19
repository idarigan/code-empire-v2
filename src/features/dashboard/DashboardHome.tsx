/**
 * Code Empire — Dashboard home
 *
 * Welcome + stats row + XP card + enrolled courses + latest certificate.
 */

import { useNavigate } from "react-router-dom";
import { Button, Card, ScrollReveal, useI18n } from "dara-ui";
import { useProfile, useProgress } from "@/contexts";
import { XPLevelCard } from "@/features/dashboard/XPLevelCard";
import { DashboardStats } from "@/features/dashboard/DashboardStats";
import { CourseProgressCard } from "@/features/dashboard/CourseProgressCard";
import { CertificatePreview } from "@/features/dashboard/CertificatePreview";
import { getCourseBySlug } from "@/data/courses";
import { Icons } from "@/lib/icons";

export default function DashboardHome() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { enrollments, isComplete } = useProgress();

  const recentCourses = enrollments.slice(0, 3);
  const completedSlugs = enrollments
    .map((e) => e.slug)
    .filter((slug) => isComplete(slug));

  // Latest completed course certificate (if any)
  const latestCompleted = completedSlugs[0]
    ? getCourseBySlug(completedSlugs[0])
    : null;

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome */}
      <ScrollReveal animation="fade-up">
        <Card
          glow="primary"
          className="flex items-center justify-between gap-3 flex-wrap"
        >
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono mb-1">
              {t("dashboard.home")}
            </p>
            <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] truncate">
              {t("dashboard.welcome")},{" "}
              {profile?.name ?? t("dashboard.profile")}
            </h1>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Icons.bookOpen className="h-3.5 w-3.5" />}
              onClick={() => navigate("/courses")}
            >
              {t("nav.courses")}
            </Button>
          </div>
        </Card>
      </ScrollReveal>

      {/* Stats */}
      <DashboardStats />

      {/* XP card */}
      <XPLevelCard />

      {/* My courses */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
            {t("dashboard.courses")}
          </h2>
          {enrollments.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              rightIcon={
                <Icons.arrowLeft className="h-3 w-3 rtl:-scale-x-100" />
              }
              onClick={() => navigate("/dashboard/courses")}
            >
              {t("common.viewAll")}
            </Button>
          )}
        </div>

        {recentCourses.length === 0 ? (
          <Card variant="outline" className="text-center py-10">
            <Icons.bookOpen className="h-10 w-10 mx-auto text-[var(--color-text-tertiary)] mb-3" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentCourses.map((e) => (
              <CourseProgressCard key={e.slug} slug={e.slug} />
            ))}
          </div>
        )}
      </div>

      {/* Latest certificate */}
      {latestCompleted && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
              {t("dashboard.certificates")}
            </h2>
            <Button
              variant="outline"
              size="sm"
              rightIcon={
                <Icons.arrowLeft className="h-3 w-3 rtl:-scale-x-100" />
              }
              onClick={() => navigate("/dashboard/certificates")}
            >
              {t("common.viewAll")}
            </Button>
          </div>
          <CertificatePreview
            studentName={profile?.name ?? t("dashboard.profile")}
            courseName={latestCompleted.persianTitle}
            level="Javidan"
          />
        </div>
      )}
    </div>
  );
}

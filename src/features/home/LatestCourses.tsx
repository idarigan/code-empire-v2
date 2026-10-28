/**
 * Code Empire — Latest courses
 */

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Button, useI18n } from "dara-ui";
import type { TabItem } from "dara-ui";
import { courses } from "@/data/courses";
import type { CourseCategory } from "@/types";
import { SectionHeader } from "./SectionHeader";
import { CourseCard } from "./CourseCard";
import { Icons } from "@/lib/icons";

export function LatestCourses() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [category, setCategory] = useState<CourseCategory>("web");

  const items: TabItem[] = useMemo(
    () => [
      { label: t("courses.web"), value: "web", content: null },
      { label: t("courses.software"), value: "software", content: null },
      { label: t("courses.game"), value: "game", content: null },
    ],
    [t],
  );

  const filtered = useMemo(
    () =>
      courses
        .filter((c) => c.category === category)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 3),
    [category],
  );

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={t("home.coursesEyebrow")}
          title={t("home.latestCourses")}
          subtitle={t("courses.subtitle")}
          align="start"
          action={
            <Button
              variant="outline"
              size="sm"
              rightIcon={
                <Icons.arrowLeft className="h-3.5 w-3.5 rtl:-scale-x-100" />
              }
              onClick={() => navigate("/courses")}
            >
              {t("common.viewAll")}
            </Button>
          }
        />

        <div className="mb-8">
          <Tabs
            items={items}
            activeValue={category}
            onChange={(v) => setCategory(v as CourseCategory)}
            glowColor="primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

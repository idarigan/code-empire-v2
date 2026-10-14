/**
 * Code Empire — Single course page
 *
 * Phase 4 stub. Full layout lands in Phase 6.
 */

import { useParams } from "react-router-dom";
import { useI18n } from "dara-ui";
import { getCourseBySlug } from "@/data/courses";

export default function SingleCoursePage() {
  const { slug = "" } = useParams();
  const { t } = useI18n();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <section className="section">
        <div className="section-container text-center">
          <p className="text-[var(--color-text-tertiary)]">
            {t("common.empty")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {course.persianTitle}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {course.description}
        </p>
      </div>
    </section>
  );
}

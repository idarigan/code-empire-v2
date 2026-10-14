/**
 * Code Empire — All courses page
 *
 * Phase 4 stub. Full grid + filters land in Phase 6.
 */

import { useI18n } from "dara-ui";

export default function CoursesPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("courses.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("courses.subtitle")}
        </p>
      </div>
    </section>
  );
}

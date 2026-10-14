/**
 * Code Empire — Blog overview
 *
 * Phase 4 stub. Full grid + filters land in Phase 7.
 */

import { useI18n } from "dara-ui";

export default function BlogPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("blog.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("blog.subtitle")}
        </p>
      </div>
    </section>
  );
}

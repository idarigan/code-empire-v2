/**
 * Code Empire — About page
 *
 * Phase 4 stub. Full content lands in Phase 8.
 */

import { useI18n } from "dara-ui";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("about.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("about.subtitle")}
        </p>
      </div>
    </section>
  );
}

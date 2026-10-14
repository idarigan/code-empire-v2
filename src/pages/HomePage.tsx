/**
 * Code Empire — Home page
 *
 * Phase 4 stub. Full sections land in Phase 5.
 */

import { useI18n } from "dara-ui";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container text-center">
        <h1 className="text-5xl font-bold text-gradient-primary mb-4">
          {t("home.heroTitle")}
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          {t("home.heroSubtitle")}
        </p>
      </div>
    </section>
  );
}

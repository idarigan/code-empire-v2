/**
 * Code Empire — Learning guide page
 *
 * Phase 4 stub. Full content lands in Phase 6.
 */

import { useI18n } from "dara-ui";

export default function GuidePage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("guide.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("guide.subtitle")}
        </p>
      </div>
    </section>
  );
}

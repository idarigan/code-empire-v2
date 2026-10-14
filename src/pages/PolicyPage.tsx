/**
 * Code Empire — Policy overview
 *
 * Phase 4 stub. Full rules list lands in Phase 8.
 */

import { useI18n } from "dara-ui";

export default function PolicyPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("policy.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("policy.subtitle")}
        </p>
      </div>
    </section>
  );
}

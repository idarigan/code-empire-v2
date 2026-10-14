/**
 * Code Empire — Course registration page
 *
 * Phase 4 stub. Full form lands in Phase 6.
 */

import { useI18n } from "dara-ui";

export default function RegisterPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("register.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("register.subtitle")}
        </p>
      </div>
    </section>
  );
}

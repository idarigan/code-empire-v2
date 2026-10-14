/**
 * Code Empire — Contact page
 *
 * Phase 4 stub. Full form + info lands in Phase 8.
 */

import { useI18n } from "dara-ui";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {t("contact.title")}
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          {t("contact.subtitle")}
        </p>
      </div>
    </section>
  );
}

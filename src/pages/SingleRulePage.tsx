/**
 * Code Empire — Single rule page
 *
 * Phase 4 stub. Full article layout lands in Phase 8.
 */

import { useParams } from "react-router-dom";
import { useI18n } from "dara-ui";
import { getRuleBySlug } from "@/data/policy";

export default function SingleRulePage() {
  const { slug = "" } = useParams();
  const { t } = useI18n();
  const rule = getRuleBySlug(slug);

  if (!rule) {
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
          {rule.title}
        </h1>
        <p className="text-[var(--color-text-secondary)]">{rule.subtitle}</p>
      </div>
    </section>
  );
}

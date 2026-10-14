/**
 * Code Empire — Progress
 *
 * Phase 4 stub. Full XP / rank view lands in Phase 9.
 */

import { useI18n } from "dara-ui";

export default function ProgressPage() {
  const { t } = useI18n();
  return <h1 className="text-3xl font-bold">{t("dashboard.progress")}</h1>;
}

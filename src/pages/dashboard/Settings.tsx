/**
 * Code Empire — Settings
 *
 * Phase 4 stub. Full preferences + reset lands in Phase 9.
 */

import { useI18n } from "dara-ui";

export default function Settings() {
  const { t } = useI18n();
  return <h1 className="text-3xl font-bold">{t("dashboard.settings")}</h1>;
}

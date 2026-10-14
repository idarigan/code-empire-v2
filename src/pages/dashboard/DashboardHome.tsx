/**
 * Code Empire — Dashboard home
 *
 * Phase 4 stub. Full stats + activity land in Phase 9.
 */

import { useI18n } from "dara-ui";

export default function DashboardHome() {
  const { t } = useI18n();
  return <h1 className="text-3xl font-bold">{t("dashboard.home")}</h1>;
}

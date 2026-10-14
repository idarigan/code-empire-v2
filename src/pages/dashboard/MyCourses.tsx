/**
 * Code Empire — My courses
 *
 * Phase 4 stub. Full enrolled list lands in Phase 9.
 */

import { useI18n } from "dara-ui";

export default function MyCourses() {
  const { t } = useI18n();
  return <h1 className="text-3xl font-bold">{t("dashboard.courses")}</h1>;
}

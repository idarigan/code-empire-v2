/**
 * Code Empire — Bookmarks
 *
 * Phase 4 stub. Full saved list lands in Phase 9.
 */

import { useI18n } from "dara-ui";

export default function Bookmarks() {
  const { t } = useI18n();
  return <h1 className="text-3xl font-bold">{t("dashboard.bookmarks")}</h1>;
}

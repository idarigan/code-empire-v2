/**
 * Code Empire — Certificates
 *
 * Phase 4 stub. Full canvas generator lands in Phase 9.
 */

import { useI18n } from "dara-ui";

export default function Certificates() {
  const { t } = useI18n();
  return <h1 className="text-3xl font-bold">{t("dashboard.certificates")}</h1>;
}

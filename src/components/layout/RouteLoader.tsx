/**
 * Code Empire — Route change loader
 *
 * Shows Dara UI's PageLoader briefly whenever the pathname changes.
 * Kept short (~600ms) so navigation feels instant, not staged.
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { usePageLoader } from "dara-ui";
import { useI18n } from "dara-ui";

export function RouteLoader() {
  const { pathname } = useLocation();
  const loader = usePageLoader();
  const { t } = useI18n();
  const first = useRef(true);

  useEffect(() => {
    // Skip the initial mount so we don't flash the loader on first paint
    if (first.current) {
      first.current = false;
      return;
    }

    loader.show({
      label: t("common.loading"),
      shape: "spinner",
      showBrand: true,
      minDuration: 400,
    });

    const timer = setTimeout(() => loader.hide(), 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

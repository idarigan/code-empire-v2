/**
 * Code Empire — Route change loader
 *
 * Shows Dara UI's PageLoader briefly whenever the pathname changes.
 * Kept short (~600ms) so navigation feels instant, not staged.
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { usePageLoader } from "dara-ui";
import { loader as loaderContent } from "@/content/common";

export function RouteLoader() {
  const { pathname } = useLocation();
  const loader = usePageLoader();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    loader.show({
      label: loaderContent.label,
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

/**
 * Code Empire — Scroll restoration
 *
 * Resets window scroll to top on every route change.
 * Place inside the router, before Outlet.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

/**
 * Code Empire — Root layout
 *
 * Public shell: navbar + footer + scroll restoration + route loader + palette.
 * Every non-dashboard route renders inside <Outlet />.
 */

import { Outlet } from "react-router-dom";
import {
  SiteNavbar,
  SiteFooter,
  ScrollToTop,
  RouteLoader,
  CommandPalette,
} from "@/components/layout";

export function RootLayout() {
  return (
    <div className="route-container">
      <ScrollToTop />
      <RouteLoader />
      <CommandPalette />
      <SiteNavbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}

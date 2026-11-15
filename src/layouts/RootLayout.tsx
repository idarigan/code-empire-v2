/**
 * Code Empire - Root layout
 *
 * Public shell: atmosphere, navbar, page outlet and footer.
 */

import { Outlet } from "react-router-dom";
import { NoiseOverlay, SocialMedia, Topography } from "dara-ui";
import { socialLinks } from "@/config/site";
import { ScrollToTop } from "./ScrollToTop";
import { SiteFooter } from "./SiteFooter";
import { SiteNavbar } from "./SiteNavbar";

export function RootLayout() {
  return (
    <div className="route-container">
      <NoiseOverlay />
      <Topography opacity={0.4} lineCount={14} />
      <ScrollToTop />
      <SiteNavbar />

      <main className="relative z-10 flex-1 pt-20">
        <Outlet />
      </main>

      <div className="relative z-10 mt-auto">
        <SiteFooter />
      </div>

      <SocialMedia links={socialLinks} position="left" size="md" />
    </div>
  );
}

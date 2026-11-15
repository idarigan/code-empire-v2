/**
 * Code Empire - Site navbar
 *
 * Wraps Dara UI's Navbar with the primary links and the theme switcher.
 */

import { useLocation } from "react-router-dom";
import { Navbar, ThemeChanger } from "dara-ui";
import type { NavLink } from "dara-ui";
import { Brand } from "@/components/Brand";
import { RouterLinks } from "@/components/RouterLinks";
import { primaryNav } from "@/content/layout";

export function SiteNavbar() {
  const { pathname } = useLocation();

  const links: NavLink[] = primaryNav.map((item) => ({
    label: item.label,
    href: item.href,
    active:
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  }));

  return (
    <RouterLinks>
      <Navbar
        brand={<Brand />}
        links={links}
        showSearch={false}
        showThemeChanger
        themeChanger={<ThemeChanger iconOnly size="sm" />}
        themeChangerMobile={<ThemeChanger iconOnly size="sm" openUpward />}
      />
    </RouterLinks>
  );
}

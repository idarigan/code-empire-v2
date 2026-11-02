/**
 * Code Empire вҖ” Site navbar
 *
 * Wraps Dara UI's Navbar with:
 * - primary nav links resolved from content/common
 * - search button that opens the command palette
 * - dashboard link when the user has a profile
 */

import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "dara-ui";
import type { NavLink as DaraNavLink } from "dara-ui";
import { Button } from "dara-ui";
import { primaryNavLinks } from "@/data/constants";
import { useUI, useProfile } from "@/contexts";
import { nav } from "@/content/common";
import { home } from "@/content/home";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Icons } from "@/lib/icons";

// ============================================
// Label map вҖ” single source of truth
// ============================================

const navLabels: Record<string, string> = {
  "nav.home": nav.home,
  "nav.courses": nav.courses,
  "nav.guide": nav.guide,
  "nav.about": nav.about,
  "nav.blog": nav.blog,
  "nav.contact": nav.contact,
  "nav.policy": nav.policy,
};

function labelFor(key: string): string {
  return navLabels[key] ?? key;
}

// ============================================
// Component
// ============================================

export function SiteNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openCommandPalette } = useUI();
  const { profile } = useProfile();

  const links: DaraNavLink[] = primaryNavLinks.map((l) => ({
    label: labelFor(l.key),
    href: l.href,
    active:
      l.href === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(l.href),
  }));

  return (
    <Navbar
      brand={
        <span
          className="font-heading font-bold text-lg tracking-tight"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CODE EMPIRE
        </span>
      }
      links={links}
      showSearch
      searchPlaceholder={nav.search}
      onSearch={openCommandPalette}
      showThemeChanger
      themeChanger={<ThemeSwitcher compact />}
      themeChangerMobile={<ThemeSwitcher compact />}
      rightContent={
        <Button
          variant={profile ? "secondary" : "primary"}
          size="sm"
          leftIcon={
            profile ? (
              <Icons.dashboard className="h-4 w-4" />
            ) : (
              <Icons.user className="h-4 w-4" />
            )
          }
          onClick={() => navigate(profile ? "/dashboard" : "/courses")}
        >
          {profile ? nav.dashboard : home.startLearning}
        </Button>
      }
    />
  );
}

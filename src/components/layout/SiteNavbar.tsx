/**
 * Code Empire — Site navbar
 *
 * Wraps Dara UI's Navbar with:
 * - primary nav links from constants
 * - theme + language switchers (icon-only)
 * - search button that opens the command palette
 * - dashboard link when the user has a profile
 */

import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, useI18n } from "dara-ui";
import type { NavLink as DaraNavLink } from "dara-ui";
import { Button } from "dara-ui";
import { primaryNavLinks } from "@/data/constants";
import { useUI } from "@/contexts";
import { useProfile } from "@/contexts";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Icons } from "@/lib/icons";

export function SiteNavbar() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const { openCommandPalette } = useUI();
  const { profile } = useProfile();

  const links: DaraNavLink[] = primaryNavLinks.map((l) => ({
    label: t(l.key),
    href: l.href,
    active:
      l.href === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(l.href),
  }));

  const handleSearch = () => openCommandPalette();

  return (
    <>
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
        searchPlaceholder={t("common.search")}
        onSearch={handleSearch}
        showLanguageChanger
        languageChanger={<LanguageSwitcher compact />}
        languageChangerMobile={<LanguageSwitcher compact />}
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
            {profile ? t("nav.dashboard") : t("home.startLearning")}
          </Button>
        }
      />
    </>
  );
}

/**
 * Code Empire — Dashboard layout
 *
 * Dara UI Sidebar (with desktop collapse and mobile tabs) wrapping
 * the student dashboard routes. No site footer here — dashboard is
 * its own focused space.
 */

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Sidebar, useI18n, Button } from "dara-ui";
import type { SidebarGroup, SidebarItem } from "dara-ui";
import { useMemo } from "react";
import { useProfile } from "@/contexts";
import { Icons } from "@/lib/icons";

export function DashboardLayout() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = useProfile();

  const groups: SidebarGroup[] = useMemo(
    () => [
      {
        label: t("dashboard.home"),
        icon: <Icons.dashboard className="h-4 w-4" />,
        defaultExpanded: true,
        items: [
          {
            id: "home",
            label: t("dashboard.home"),
            icon: <Icons.dashboard className="h-4 w-4" />,
          },
          {
            id: "courses",
            label: t("dashboard.courses"),
            icon: <Icons.bookOpen className="h-4 w-4" />,
          },
          {
            id: "bookmarks",
            label: t("dashboard.bookmarks"),
            icon: <Icons.bookmark className="h-4 w-4" />,
          },
        ],
      },
      {
        label: t("dashboard.progress"),
        icon: <Icons.trending className="h-4 w-4" />,
        items: [
          {
            id: "progress",
            label: t("dashboard.progress"),
            icon: <Icons.chart className="h-4 w-4" />,
          },
          {
            id: "certificates",
            label: t("dashboard.certificates"),
            icon: <Icons.award className="h-4 w-4" />,
          },
          {
            id: "settings",
            label: t("dashboard.settings"),
            icon: <Icons.settings className="h-4 w-4" />,
          },
        ],
      },
    ],
    [t],
  );

  const routeById: Record<string, string> = {
    home: "/dashboard",
    courses: "/dashboard/courses",
    bookmarks: "/dashboard/bookmarks",
    progress: "/dashboard/progress",
    certificates: "/dashboard/certificates",
    settings: "/dashboard/settings",
  };

  const activeId =
    Object.entries(routeById).find(
      ([, path]) =>
        path === location.pathname ||
        (path !== "/dashboard" && location.pathname.startsWith(path)),
    )?.[0] ?? "home";

  const handleNavigate = (id: string) => {
    const path = routeById[id];
    if (path) navigate(path);
  };

  // Attach onClick to each item so Sidebar drives navigation
  const wiredGroups: SidebarGroup[] = groups.map((g) => ({
    ...g,
    items: g.items.map(
      (it): SidebarItem => ({
        ...it,
        onClick: () => handleNavigate(it.id),
      }),
    ),
  }));

  return (
    <div className="route-container">
      <Sidebar
        brand={
          <span
            className="font-heading font-bold text-base tracking-tight"
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
        groups={wiredGroups}
        activeItemId={activeId}
        footer={
          <Button
            variant="glass"
            size="sm"
            fullWidth
            leftIcon={<Icons.home className="h-3.5 w-3.5" />}
            onClick={() => navigate("/")}
          >
            {t("nav.home")}
          </Button>
        }
        height="100vh"
      />
      <main className="flex-1 min-w-0">
        <div className="min-h-full">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Icons.user className="h-5 w-5 text-[var(--color-primary)]" />
              <span className="font-heading font-bold text-lg">
                {profile?.name ?? t("dashboard.welcome")}
              </span>
            </div>
          </header>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

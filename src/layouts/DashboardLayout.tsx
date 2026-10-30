/**
 * Code Empire — Dashboard layout
 *
 * Dara UI Sidebar (with desktop collapse and mobile tabs) wrapping
 * the student dashboard routes. No site footer here — dashboard is
 * its own focused space.
 */

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Sidebar, Button } from "dara-ui";
import type { SidebarGroup, SidebarItem } from "dara-ui";
import { useMemo } from "react";
import { useProfile } from "@/contexts";
import { dashboard } from "@/content/dashboard";
import { nav } from "@/content/common";
import { Icons } from "@/lib/icons";

export function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile } = useProfile();

  const groups: SidebarGroup[] = useMemo(
    () => [
      {
        label: dashboard.home,
        icon: <Icons.dashboard className="h-4 w-4" />,
        defaultExpanded: true,
        items: [
          {
            id: "home",
            label: dashboard.home,
            icon: <Icons.dashboard className="h-4 w-4" />,
          },
          {
            id: "courses",
            label: dashboard.courses,
            icon: <Icons.bookOpen className="h-4 w-4" />,
          },
          {
            id: "bookmarks",
            label: dashboard.bookmarks,
            icon: <Icons.bookmark className="h-4 w-4" />,
          },
        ],
      },
      {
        label: dashboard.progress,
        icon: <Icons.trending className="h-4 w-4" />,
        items: [
          {
            id: "progress",
            label: dashboard.progress,
            icon: <Icons.chart className="h-4 w-4" />,
          },
          {
            id: "certificates",
            label: dashboard.certificates,
            icon: <Icons.award className="h-4 w-4" />,
          },
          {
            id: "settings",
            label: dashboard.settings,
            icon: <Icons.settings className="h-4 w-4" />,
          },
        ],
      },
    ],
    [],
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
            {nav.home}
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
                {profile?.name ?? dashboard.welcome}
              </span>
            </div>
          </header>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

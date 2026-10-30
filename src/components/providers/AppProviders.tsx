/**
 * Code Empire — Application providers
 *
 * Composition root. Order matters:
 * - Toast outermost so nothing throws past it
 * - Theme registers empire-night before ThemeChanger mounts
 * - Our contexts sit inside so they can consume theme
 * - PageLoader wraps pages so route transitions can show the loader
 */

import type { ReactNode } from "react";
import { ToastProvider, ThemeProvider, PageLoaderProvider } from "dara-ui";
import { ProfileProvider, ProgressProvider, UIProvider } from "@/contexts";

// ============================================
// Theme registry
// ============================================

const THEMES = [
  { value: "empire-night", label: "Empire Night" },
  { value: "nightfall", label: "Nightfall" },
  { value: "daylight", label: "Daylight" },
  { value: "dracula", label: "Dracula" },
];

// ============================================
// Provider stack
// ============================================

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <ThemeProvider defaultTheme="empire-night" themes={THEMES}>
        <UIProvider>
          <ProfileProvider>
            <ProgressProvider>
              <PageLoaderProvider>{children}</PageLoaderProvider>
            </ProgressProvider>
          </ProfileProvider>
        </UIProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}

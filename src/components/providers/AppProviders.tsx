/**
 * Code Empire — Application providers
 *
 * Composition root. Order matters:
 * - Toast outermost so nothing throws past it
 * - I18n MUST wrap Dara UI components (Navbar, Footer, Sidebar,
 *   Modal, etc.) because those call useI18n() internally for
 *   their own built-in labels. We pass an empty translation
 *   bundle: our app copy lives in src/content, not here.
 * - Theme registers empire-night before ThemeChanger mounts
 * - Our contexts sit inside so they can consume theme
 * - PageLoader wraps pages so route transitions can show the loader
 */

import type { ReactNode } from "react";
import {
  ToastProvider,
  I18nProvider,
  ThemeProvider,
  PageLoaderProvider,
} from "dara-ui";
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

const DARA_DEFAULTS = {
  "dara.search": "جستجو",
  "dara.close": "بستن",
  "dara.menu": "منو",
  "dara.theme": "تم",
} as const;

// ============================================
// Provider stack
// ============================================

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <I18nProvider translations={{ fa: DARA_DEFAULTS }} defaultLanguage="fa">
        <ThemeProvider defaultTheme="empire-night" themes={THEMES}>
          <UIProvider>
            <ProfileProvider>
              <ProgressProvider>
                <PageLoaderProvider>{children}</PageLoaderProvider>
              </ProgressProvider>
            </ProfileProvider>
          </UIProvider>
        </ThemeProvider>
      </I18nProvider>
    </ToastProvider>
  );
}

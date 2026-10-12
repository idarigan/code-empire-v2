/**
 * Code Empire — Application providers
 *
 * Composition root. Order matters:
 * - Toast outermost so nothing throws past it
 * - I18n sets html lang/dir before anything reads them
 * - Theme registers empire-night before ThemeChanger mounts
 * - Our contexts sit inside so they can consume i18n/theme
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
import { translations } from "@/translations";

// ============================================
// Theme registry
// ============================================

/**
 * Dara UI's ThemeChanger normally auto-detects themes by scanning
 * [data-theme="..."] rules in stylesheets. That works, but we register
 * them explicitly so the empire-night theme is always present even if
 * the detection runs before our CSS is parsed.
 */
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
      <I18nProvider translations={translations} defaultLanguage="fa">
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

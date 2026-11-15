/**
 * Code Empire - Application providers
 *
 * I18n wraps Dara UI so its built-in labels follow the document direction.
 * Theme registers empire-night before ThemeChanger mounts.
 */

import type { ReactNode } from "react";
import {
  I18nProvider,
  ThemeProvider,
  ToastProvider,
  translations,
} from "dara-ui";
import type { LanguageOption, ThemeOption } from "dara-ui";

// ============================================
// Registry
// ============================================

const languages: LanguageOption[] = [
  { value: "fa", label: "فارسی", dir: "rtl" },
];

const themes: ThemeOption[] = [
  { value: "empire-night", label: "شب امپراتوری" },
  { value: "daylight", label: "روز" },
];

// ============================================
// Provider stack
// ============================================

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <I18nProvider
        translations={{ fa: translations.fa }}
        languages={languages}
        defaultLanguage="fa"
      >
        <ThemeProvider defaultTheme="empire-night" builtIn={[]} themes={themes}>
          {children}
        </ThemeProvider>
      </I18nProvider>
    </ToastProvider>
  );
}

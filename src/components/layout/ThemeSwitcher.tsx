/**
 * Code Empire — Theme switcher wrapper
 *
 * Thin wrapper around Dara UI's ThemeChanger.
 * Empire-Night is the default; others are available for power users.
 */

import { ThemeChanger } from "dara-ui";

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  return <ThemeChanger iconOnly={compact} size={compact ? "sm" : "md"} />;
}

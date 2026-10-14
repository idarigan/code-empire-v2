/**
 * Code Empire — Language switcher wrapper
 *
 * Thin wrapper around Dara UI's LanguageChanger.
 * Kept in one place so the icon/label combo stays consistent.
 */

import { LanguageChanger } from "dara-ui";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  return <LanguageChanger iconOnly={compact} size={compact ? "sm" : "md"} />;
}

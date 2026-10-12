/**
 * Code Empire — UI context
 *
 * Global UI flags that don't belong to any single page.
 * Mobile nav, command palette, cookie banner dismissal.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocalStorage } from "@/hooks";

// ============================================
// Context shape
// ============================================

interface UIContextValue {
  // Mobile nav
  mobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;

  // Command palette
  commandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleCommandPalette: () => void;

  // Cookie banner (persisted)
  cookieBannerDismissed: boolean;
  dismissCookieBanner: () => void;
}

const UIContext = createContext<UIContextValue | null>(null);

// ============================================
// Provider
// ============================================

export function UIProvider({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [cookieBannerDismissed, setCookieBannerDismissed] = useLocalStorage(
    "ce:cookie-dismissed",
    false,
  );

  const openMobileNav = useCallback(() => setMobileNavOpen(true), []);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);
  const toggleMobileNav = useCallback(() => setMobileNavOpen((v) => !v), []);

  const openCommandPalette = useCallback(() => {
    setMobileNavOpen(false);
    setCommandPaletteOpen(true);
  }, []);
  const closeCommandPalette = useCallback(
    () => setCommandPaletteOpen(false),
    [],
  );
  const toggleCommandPalette = useCallback(
    () => setCommandPaletteOpen((v) => !v),
    [],
  );

  const dismissCookieBanner = useCallback(
    () => setCookieBannerDismissed(true),
    [setCookieBannerDismissed],
  );

  const value = useMemo<UIContextValue>(
    () => ({
      mobileNavOpen,
      openMobileNav,
      closeMobileNav,
      toggleMobileNav,
      commandPaletteOpen,
      openCommandPalette,
      closeCommandPalette,
      toggleCommandPalette,
      cookieBannerDismissed,
      dismissCookieBanner,
    }),
    [
      mobileNavOpen,
      openMobileNav,
      closeMobileNav,
      toggleMobileNav,
      commandPaletteOpen,
      openCommandPalette,
      closeCommandPalette,
      toggleCommandPalette,
      cookieBannerDismissed,
      dismissCookieBanner,
    ],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

// ============================================
// Hook
// ============================================

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error("useUI must be used within UIProvider");
  }
  return ctx;
}

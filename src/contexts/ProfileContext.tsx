/**
 * Code Empire — Profile context
 *
 * Local-only student profile stored in IndexedDB.
 * No auth, no backend, no server round-trips.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { profileStore } from "@/lib/storage";
import type { Profile } from "@/types";

// ============================================
// Context shape
// ============================================

interface ProfileContextValue {
  profile: Profile | null;
  ready: boolean;
  save: (profile: Omit<Profile, "createdAt">) => Promise<void>;
  clear: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

// ============================================
// Provider
// ============================================

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  // Hydrate from IndexedDB once
  useEffect(() => {
    let cancelled = false;

    profileStore
      .get()
      .then((stored) => {
        if (!cancelled) setProfile(stored);
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const save = useCallback(
    async (input: Omit<Profile, "createdAt">) => {
      const next: Profile = {
        ...input,
        createdAt: profile?.createdAt ?? Date.now(),
      };
      await profileStore.set(next);
      setProfile(next);
    },
    [profile?.createdAt],
  );

  const clear = useCallback(async () => {
    await profileStore.clear();
    setProfile(null);
  }, []);

  const value = useMemo<ProfileContextValue>(
    () => ({ profile, ready, save, clear }),
    [profile, ready, save, clear],
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useProfile(): ProfileContextValue {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return ctx;
}

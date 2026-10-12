/**
 * Code Empire — Local persistence layer
 *
 * All browser-side state lives here. No backend.
 * Uses idb-keyval for IndexedDB access (600 bytes, promise-based).
 */

import { get, set, del, clear } from "idb-keyval";
import type { Profile, Enrollment, Bookmark, Preferences } from "@/types";

// ============================================
// Storage keys
// ============================================

const KEY = {
  profile: "ce:profile",
  enrollments: "ce:enrollments",
  bookmarks: "ce:bookmarks",
  preferences: "ce:preferences",
  xp: "ce:xp",
  progress: (slug: string) => `ce:progress:${slug}`,
  completed: "ce:completed",
  newsletter: "ce:newsletter",
} as const;

// ============================================
// Defaults
// ============================================

const defaultPreferences: Preferences = {
  theme: "empire-night",
  language: "fa",
  notifications: true,
  sound: false,
};

// ============================================
// Profile
// ============================================

export const profileStore = {
  async get(): Promise<Profile | null> {
    return (await get<Profile>(KEY.profile)) ?? null;
  },

  async set(profile: Profile): Promise<void> {
    await set(KEY.profile, profile);
  },

  async clear(): Promise<void> {
    await del(KEY.profile);
  },
};

// ============================================
// Enrollments
// ============================================

export const enrollmentStore = {
  async getAll(): Promise<Enrollment[]> {
    return (await get<Enrollment[]>(KEY.enrollments)) ?? [];
  },

  async enroll(
    slug: string,
    type: "group" | "private" = "group",
  ): Promise<void> {
    const existing = await enrollmentStore.getAll();
    if (existing.some((e) => e.slug === slug)) return;

    const next: Enrollment = {
      slug,
      type,
      enrolledAt: Date.now(),
    };
    await set(KEY.enrollments, [...existing, next]);
  },

  async unenroll(slug: string): Promise<void> {
    const existing = await enrollmentStore.getAll();
    await set(
      KEY.enrollments,
      existing.filter((e) => e.slug !== slug),
    );
  },

  async isEnrolled(slug: string): Promise<boolean> {
    const existing = await enrollmentStore.getAll();
    return existing.some((e) => e.slug === slug);
  },
};

// ============================================
// Bookmarks
// ============================================

export const bookmarkStore = {
  async getAll(): Promise<Bookmark[]> {
    return (await get<Bookmark[]>(KEY.bookmarks)) ?? [];
  },

  async toggle(bookmark: Omit<Bookmark, "savedAt">): Promise<boolean> {
    const existing = await bookmarkStore.getAll();
    const matchIndex = existing.findIndex(
      (b) => b.type === bookmark.type && b.slug === bookmark.slug,
    );

    if (matchIndex >= 0) {
      await set(
        KEY.bookmarks,
        existing.filter((_, i) => i !== matchIndex),
      );
      return false;
    }

    await set(KEY.bookmarks, [
      ...existing,
      { ...bookmark, savedAt: Date.now() },
    ]);
    return true;
  },

  async isBookmarked(type: "course" | "blog", slug: string): Promise<boolean> {
    const existing = await bookmarkStore.getAll();
    return existing.some((b) => b.type === type && b.slug === slug);
  },
};

// ============================================
// Progress (per course)
// ============================================

export const progressStore = {
  async get(slug: string): Promise<number> {
    return (await get<number>(KEY.progress(slug))) ?? 0;
  },

  async set(slug: string, value: number): Promise<void> {
    const clamped = Math.max(0, Math.min(100, value));
    await set(KEY.progress(slug), clamped);
  },

  async increment(slug: string, amount: number): Promise<number> {
    const current = await progressStore.get(slug);
    const next = Math.max(0, Math.min(100, current + amount));
    await set(KEY.progress(slug), next);
    return next;
  },

  async getAll(slugs: string[]): Promise<Record<string, number>> {
    const out: Record<string, number> = {};
    for (const slug of slugs) {
      out[slug] = await progressStore.get(slug);
    }
    return out;
  },
};

// ============================================
// XP & completed courses
// ============================================

export const xpStore = {
  async get(): Promise<number> {
    return (await get<number>(KEY.xp)) ?? 0;
  },

  async add(amount: number): Promise<number> {
    const current = await xpStore.get();
    const next = current + amount;
    await set(KEY.xp, next);
    return next;
  },

  async reset(): Promise<void> {
    await set(KEY.xp, 0);
  },
};

export const completedStore = {
  async getAll(): Promise<string[]> {
    return (await get<string[]>(KEY.completed)) ?? [];
  },

  async markComplete(slug: string): Promise<void> {
    const existing = await completedStore.getAll();
    if (existing.includes(slug)) return;
    await set(KEY.completed, [...existing, slug]);
  },

  async isComplete(slug: string): Promise<boolean> {
    const existing = await completedStore.getAll();
    return existing.includes(slug);
  },
};

// ============================================
// Preferences
// ============================================

export const preferencesStore = {
  async get(): Promise<Preferences> {
    const stored = await get<Preferences>(KEY.preferences);
    return { ...defaultPreferences, ...stored };
  },

  async set(prefs: Partial<Preferences>): Promise<Preferences> {
    const current = await preferencesStore.get();
    const next = { ...current, ...prefs };
    await set(KEY.preferences, next);
    return next;
  },

  async reset(): Promise<void> {
    await set(KEY.preferences, defaultPreferences);
  },
};

// ============================================
// Newsletter (local record of subscriptions)
// ============================================

export const newsletterStore = {
  async getAll(): Promise<string[]> {
    return (await get<string[]>(KEY.newsletter)) ?? [];
  },

  async add(email: string): Promise<void> {
    const existing = await newsletterStore.getAll();
    if (existing.includes(email)) return;
    await set(KEY.newsletter, [...existing, email]);
  },
};

// ============================================
// Global reset
// ============================================

export const resetAll = async (): Promise<void> => {
  await clear();
};

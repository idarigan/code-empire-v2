/**
 * Code Empire — Progress context
 *
 * Central store for everything a student accumulates:
 * enrollments, bookmarks, per-course progress, XP, completions.
 * Every mutation writes to IndexedDB and updates local state optimistically.
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
import {
  enrollmentStore,
  bookmarkStore,
  progressStore,
  xpStore,
  completedStore,
} from "@/lib/storage";
import { courses } from "@/data/courses";
import type { Bookmark, Enrollment } from "@/types";

// ============================================
// Context shape
// ============================================

interface ProgressContextValue {
  ready: boolean;

  // Enrollments
  enrollments: Enrollment[];
  isEnrolled: (slug: string) => boolean;
  enroll: (slug: string, type?: "group" | "private") => Promise<void>;
  unenroll: (slug: string) => Promise<void>;

  // Bookmarks
  bookmarks: Bookmark[];
  isBookmarked: (type: "course" | "blog", slug: string) => boolean;
  toggleBookmark: (bookmark: Omit<Bookmark, "savedAt">) => Promise<boolean>;

  // Progress
  progressMap: Record<string, number>;
  getProgress: (slug: string) => number;
  setProgress: (slug: string, value: number) => Promise<void>;
  incrementProgress: (slug: string, amount: number) => Promise<number>;

  // XP
  xp: number;
  addXP: (amount: number) => Promise<number>;

  // Completed
  completed: string[];
  isComplete: (slug: string) => boolean;
  markComplete: (slug: string) => Promise<void>;

  // Aggregates
  overallProgress: number;
  reset: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

// ============================================
// Provider
// ============================================

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [xp, setXP] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);

  // ============================================
  // Hydrate everything once
  // ============================================

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [enr, bmk, xpVal, comp, prog] = await Promise.all([
        enrollmentStore.getAll(),
        bookmarkStore.getAll(),
        xpStore.get(),
        completedStore.getAll(),
        progressStore.getAll(courses.map((c) => c.slug)),
      ]);

      if (cancelled) return;

      setEnrollments(enr);
      setBookmarks(bmk);
      setXP(xpVal);
      setCompleted(comp);
      setProgressMap(prog);
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // ============================================
  // Enrollments
  // ============================================

  const isEnrolled = useCallback(
    (slug: string) => enrollments.some((e) => e.slug === slug),
    [enrollments],
  );

  const enroll = useCallback(
    async (slug: string, type: "group" | "private" = "group") => {
      await enrollmentStore.enroll(slug, type);
      setEnrollments((prev) => {
        if (prev.some((e) => e.slug === slug)) return prev;
        return [...prev, { slug, type, enrolledAt: Date.now() }];
      });
    },
    [],
  );

  const unenroll = useCallback(async (slug: string) => {
    await enrollmentStore.unenroll(slug);
    setEnrollments((prev) => prev.filter((e) => e.slug !== slug));
  }, []);

  // ============================================
  // Bookmarks
  // ============================================

  const isBookmarked = useCallback(
    (type: "course" | "blog", slug: string) =>
      bookmarks.some((b) => b.type === type && b.slug === slug),
    [bookmarks],
  );

  const toggleBookmark = useCallback(
    async (input: Omit<Bookmark, "savedAt">): Promise<boolean> => {
      const added = await bookmarkStore.toggle(input);

      setBookmarks((prev) => {
        const exists = prev.some(
          (b) => b.type === input.type && b.slug === input.slug,
        );
        if (added && !exists) {
          return [...prev, { ...input, savedAt: Date.now() }];
        }
        if (!added && exists) {
          return prev.filter(
            (b) => !(b.type === input.type && b.slug === input.slug),
          );
        }
        return prev;
      });

      return added;
    },
    [],
  );

  // ============================================
  // Progress
  // ============================================

  const getProgress = useCallback(
    (slug: string) => progressMap[slug] ?? 0,
    [progressMap],
  );

  const setProgress = useCallback(async (slug: string, value: number) => {
    const clamped = Math.max(0, Math.min(100, value));
    await progressStore.set(slug, clamped);
    setProgressMap((prev) => ({ ...prev, [slug]: clamped }));
  }, []);

  const incrementProgress = useCallback(
    async (slug: string, amount: number) => {
      const current = progressMap[slug] ?? 0;
      const next = Math.max(0, Math.min(100, current + amount));
      await progressStore.set(slug, next);
      setProgressMap((prev) => ({ ...prev, [slug]: next }));
      return next;
    },
    [progressMap],
  );

  // ============================================
  // XP
  // ============================================

  const addXP = useCallback(async (amount: number) => {
    const next = await xpStore.add(amount);
    setXP(next);
    return next;
  }, []);

  // ============================================
  // Completed
  // ============================================

  const isComplete = useCallback(
    (slug: string) => completed.includes(slug),
    [completed],
  );

  const markComplete = useCallback(async (slug: string) => {
    await completedStore.markComplete(slug);
    setCompleted((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
  }, []);

  // ============================================
  // Aggregate — average progress across enrolled courses
  // ============================================

  const overallProgress = useMemo(() => {
    if (enrollments.length === 0) return 0;
    const total = enrollments.reduce(
      (sum, e) => sum + (progressMap[e.slug] ?? 0),
      0,
    );
    return Math.round(total / enrollments.length);
  }, [enrollments, progressMap]);

  // ============================================
  // Reset — wipes everything
  // ============================================

  const reset = useCallback(async () => {
    await Promise.all([
      enrollmentStore
        .getAll()
        .then((all) =>
          Promise.all(all.map((e) => enrollmentStore.unenroll(e.slug))),
        ),
      xpStore.reset(),
    ]);

    // Simplest clean slate: reset all local state
    setEnrollments([]);
    setBookmarks([]);
    setProgressMap({});
    setXP(0);
    setCompleted([]);
  }, []);

  // ============================================
  // Value
  // ============================================

  const value = useMemo<ProgressContextValue>(
    () => ({
      ready,
      enrollments,
      isEnrolled,
      enroll,
      unenroll,
      bookmarks,
      isBookmarked,
      toggleBookmark,
      progressMap,
      getProgress,
      setProgress,
      incrementProgress,
      xp,
      addXP,
      completed,
      isComplete,
      markComplete,
      overallProgress,
      reset,
    }),
    [
      ready,
      enrollments,
      isEnrolled,
      enroll,
      unenroll,
      bookmarks,
      isBookmarked,
      toggleBookmark,
      progressMap,
      getProgress,
      setProgress,
      incrementProgress,
      xp,
      addXP,
      completed,
      isComplete,
      markComplete,
      overallProgress,
      reset,
    ],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return ctx;
}

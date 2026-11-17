/**
 * Code Empire - Blog config
 */

// ============================================
// Paging
// ============================================

export const BLOG_PAGE_SIZE = 9;

// ============================================
// Category tones
// ============================================

export type Tone = "primary" | "secondary" | "accent";

const categoryTones: Record<string, Tone> = {
  برنامه‌نویسی: "primary",
  امپراتوری: "secondary",
  "بازی ویدئویی": "accent",
};

export const getCategoryTone = (category: string): Tone =>
  categoryTones[category] ?? "primary";

export const getBadgeVariant = (
  tone: Tone,
): "primary" | "secondary" | "warning" =>
  tone === "accent" ? "warning" : tone;

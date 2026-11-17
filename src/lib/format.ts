/**
 * Code Empire - Formatting helpers
 *
 * Latin digits everywhere. Uses Intl APIs so no extra deps.
 */

// ============================================
// Numbers
// ============================================

const numberFormatter = new Intl.NumberFormat("en-US");

export const formatNumber = (value: number): string =>
  numberFormatter.format(value);

export const formatYear = (value: number): string => String(value);

export const formatIndex = (value: number): string =>
  String(value).padStart(2, "0");

// ============================================
// Currency (Toman)
// ============================================

export const formatPrice = (value: number): string =>
  `${formatNumber(value)} تومان`;

// ============================================
// Dates (Jalali)
// ============================================

const dateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian-nu-latn", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const formatDate = (value: string): string => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : dateFormatter.format(date);
};

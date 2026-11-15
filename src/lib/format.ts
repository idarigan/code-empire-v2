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

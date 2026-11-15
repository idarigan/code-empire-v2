/**
 * Code Empire - Formatting helpers
 *
 * Persian-first formatting. Uses Intl APIs so no extra deps.
 */

// ============================================
// Numbers
// ============================================

const numberFormatter = new Intl.NumberFormat("fa-IR");
const yearFormatter = new Intl.NumberFormat("fa-IR", { useGrouping: false });

export const formatNumber = (value: number): string =>
  numberFormatter.format(value);

export const formatYear = (value: number): string =>
  yearFormatter.format(value);

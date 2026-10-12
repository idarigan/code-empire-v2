/**
 * Code Empire — Formatting helpers
 *
 * Persian-first formatting. Uses Intl APIs so no extra deps.
 */

import { formatDistanceToNow, format as formatDateFns } from "date-fns";
import { faIR } from "date-fns/locale";

// ============================================
// Numbers
// ============================================

const numberFormatter = new Intl.NumberFormat("fa-IR");
const numberFormatterEn = new Intl.NumberFormat("en-US");

export const formatNumber = (value: number, locale = "fa"): string =>
  locale === "fa"
    ? numberFormatter.format(value)
    : numberFormatterEn.format(value);

// ============================================
// Currency (Toman)
// ============================================

export const formatPrice = (value: number, locale = "fa"): string => {
  const formatted = formatNumber(value, locale);
  return locale === "fa" ? `${formatted} تومان` : `${formatted} T`;
};

// ============================================
// Percent
// ============================================

export const formatPercent = (value: number, locale = "fa"): string => {
  const formatted = formatNumber(Math.round(value), locale);
  return `${formatted}٪`;
};

// ============================================
// Dates
// ============================================

const PERSIAN_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
] as const;

const GREGORIAN_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/**
 * Format a date for the given locale.
 * Uses the Persian calendar when locale === "fa" via Intl.DateTimeFormat.
 */
export const formatDate = (input: string | Date, locale = "fa"): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";

  if (locale === "fa") {
    try {
      const parts = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).formatToParts(date);

      const day = parts.find((p) => p.type === "day")?.value ?? "";
      const month = Number(parts.find((p) => p.type === "month")?.value ?? "1");
      const year = parts.find((p) => p.type === "year")?.value ?? "";

      return `${day} ${PERSIAN_MONTHS[month - 1] ?? ""} ${year}`;
    } catch {
      return formatDateFns(date, "yyyy/MM/dd", { locale: faIR });
    }
  }

  const day = date.getDate();
  const month = GREGORIAN_MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const formatRelative = (input: string | Date, locale = "fa"): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: locale === "fa" ? faIR : undefined,
  });
};

// ============================================
// Read time
// ============================================

export const formatReadTime = (minutes: number, locale = "fa"): string =>
  locale === "fa" ? `${formatNumber(minutes, "fa")} دقیقه` : `${minutes} min`;

// ============================================
// File size
// ============================================

export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

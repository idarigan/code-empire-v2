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

export const formatNumber = (value: number): string =>
  numberFormatter.format(value);

// ============================================
// Currency (Toman)
// ============================================

export const formatPrice = (value: number): string =>
  `${formatNumber(value)} تومان`;

// ============================================
// Percent
// ============================================

export const formatPercent = (value: number): string =>
  `${formatNumber(Math.round(value))}٪`;

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

export const formatDate = (input: string | Date): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";

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
};

export const formatRelative = (input: string): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "";

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: faIR,
  });
};

// ============================================
// Read time
// ============================================

export const formatReadTime = (minutes: number): string =>
  `${formatNumber(minutes)} دقیقه`;

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

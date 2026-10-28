/**
 * Code Empire — Translations registry
 *
 * Only registers locale bundles. All strings live in ./<locale>/.
 * To add a language: create ./fr/, then import + register below.
 */

import { fa } from "./fa";

export const translations = {
  fa,
} as const;

export type Locale = keyof typeof translations;

export const DEFAULT_LOCALE: Locale = "fa";

export type TranslationKey = keyof typeof fa;

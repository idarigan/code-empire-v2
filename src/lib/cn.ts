/**
 * Code Empire - className utility
 *
 * Filters falsy values and joins with spaces.
 * Kept dependency-free on purpose.
 */

export type ClassValue = string | number | null | undefined | false;

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Code Empire - Form validation
 *
 * Plain rules for the contact form, no schema library.
 */

// ============================================
// Rules
// ============================================

export const MESSAGE_MAX = 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^09\d{9}$/;

// ============================================
// Types
// ============================================

export interface ContactValues {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export type ContactMessages = Record<
  "name" | "email" | "phone" | "subject" | "message",
  string
>;

// ============================================
// Helpers
// ============================================

export function toLatinDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660));
}

export function validateContact(
  values: ContactValues,
  messages: ContactMessages,
): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) errors.name = messages.name;
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = messages.email;
  if (!PHONE_PATTERN.test(values.phone.trim())) errors.phone = messages.phone;
  if (!values.subject) errors.subject = messages.subject;
  if (values.message.trim().length < 10) errors.message = messages.message;

  return errors;
}

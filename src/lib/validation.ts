/**
 * Code Empire — Form validation schemas
 *
 * Zod schemas shared between forms and EmailJS payload builders.
 * Persian error messages because fa is the default locale.
 */

import { z } from "zod";

// ============================================
// Reusable field rules
// ============================================

const phoneRegex = /^09\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nameField = z
  .string()
  .min(2, "نام باید حداقل ۲ حرف باشد")
  .max(60, "نام طولانی است");

const emailField = z.string().regex(emailRegex, "ایمیل نامعتبر است");

const phoneField = z
  .string()
  .regex(phoneRegex, "شماره موبایل باید با ۰۹ شروع شده و ۱۱ رقم باشد");

// ============================================
// Contact form
// ============================================

export const contactSchema = z.object({
  name: nameField,
  lastName: z.string().max(60).optional().or(z.literal("")),
  email: emailField,
  phone: phoneField,
  subject: z.string().min(3, "موضوع باید حداقل ۳ حرف باشد").max(120),
  message: z.string().min(10, "متن پیام باید حداقل ۱۰ حرف باشد").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

// ============================================
// Register form
// ============================================

export const registerSchema = z.object({
  firstName: nameField,
  lastName: z.string().max(60).optional().or(z.literal("")),
  email: emailField,
  phone: phoneField,
  courseSlug: z.string().min(1, "انتخاب دوره الزامی است"),
  acceptedTerms: z
    .boolean()
    .refine((v) => v === true, "پذیرش شرایط الزامی است"),
});

export type RegisterInput = z.infer<typeof registerSchema>;

// ============================================
// Newsletter
// ============================================

export const newsletterSchema = z.object({
  email: emailField,
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

// ============================================
// Helper — flatten Zod errors into a map
// ============================================

export function zodErrors<T extends z.ZodTypeAny>(
  error: z.ZodError<z.infer<T>>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".");
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}

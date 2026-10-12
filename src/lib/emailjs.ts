/**
 * Code Empire — EmailJS integration
 *
 * Thin wrapper around @emailjs/browser with typed payloads.
 * Every form in the app funnels through one of the three senders.
 */

import emailjs from "@emailjs/browser";

// ============================================
// Config (from env)
// ============================================

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const TEMPLATES = {
  contact: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
  register: import.meta.env.VITE_EMAILJS_TEMPLATE_REGISTER,
  newsletter: import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER,
} as const;

// ============================================
// Init (call once at app boot, optional)
// ============================================

export const initEmailJS = (): void => {
  if (PUBLIC_KEY) emailjs.init({ publicKey: PUBLIC_KEY });
};

// ============================================
// Payload types
// ============================================

export interface ContactPayload {
  name: string;
  lastName?: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  courseTitle: string;
  courseSlug: string;
}

export interface NewsletterPayload {
  email: string;
}

// ============================================
// Senders
// ============================================

async function send(
  templateId: string,
  payload: Record<string, unknown>,
): Promise<void> {
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    throw new Error(
      "EmailJS is not configured. Check your .env file for the required keys.",
    );
  }

  await emailjs.send(SERVICE_ID, templateId, payload, {
    publicKey: PUBLIC_KEY,
  });
}

export const sendContact = (payload: ContactPayload): Promise<void> =>
  send(TEMPLATES.contact, {
    from_name: payload.name,
    from_last_name: payload.lastName ?? "",
    from_email: payload.email,
    from_phone: payload.phone,
    subject: payload.subject,
    message: payload.message,
    sent_at: new Date().toLocaleString("fa-IR"),
  });

export const sendRegister = (payload: RegisterPayload): Promise<void> =>
  send(TEMPLATES.register, {
    from_name: payload.firstName,
    from_last_name: payload.lastName ?? "",
    from_email: payload.email,
    from_phone: payload.phone,
    course_title: payload.courseTitle,
    course_slug: payload.courseSlug,
    registered_at: new Date().toLocaleString("fa-IR"),
  });

export const sendNewsletter = (payload: NewsletterPayload): Promise<void> =>
  send(TEMPLATES.newsletter, {
    from_email: payload.email,
    subscribed_at: new Date().toLocaleString("fa-IR"),
  });

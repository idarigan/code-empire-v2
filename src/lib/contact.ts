/**
 * Code Empire - Contact helpers
 *
 * Mail draft and map link builders for the contact page.
 */

import { contactInfo } from "@/config/site";

export function openMailDraft(subject: string, body: string): void {
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = `mailto:${contactInfo.email}?${query}`;
}

export function buildMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

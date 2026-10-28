/**
 * Code Empire — Document head helpers
 */

import { translations, DEFAULT_LOCALE } from "@/translations";

const SITE_NAME = "Code Empire";
const DEFAULT_DESCRIPTION =
  translations[DEFAULT_LOCALE]["siteMeta.description"];

interface SEOOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

function ensureMeta(attr: "name" | "property", key: string): HTMLMetaElement {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el;
}

export function setSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  url,
  type = "website",
}: SEOOptions = {}): void {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  document.title = fullTitle;

  ensureMeta("name", "description").content = description;
  ensureMeta("property", "og:title").content = fullTitle;
  ensureMeta("property", "og:description").content = description;
  ensureMeta("property", "og:type").content = type;
  ensureMeta("property", "og:site_name").content = SITE_NAME;

  if (image) {
    ensureMeta("property", "og:image").content = image;
    ensureMeta("name", "twitter:image").content = image;
  }

  if (url) {
    ensureMeta("property", "og:url").content = url;
  }

  ensureMeta("name", "twitter:card").content = "summary_large_image";
  ensureMeta("name", "twitter:title").content = fullTitle;
  ensureMeta("name", "twitter:description").content = description;
}

export function setJSONLD(id: string, data: Record<string, unknown>): void {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function clearJSONLD(id: string): void {
  const el = document.getElementById(id);
  if (el) el.remove();
}

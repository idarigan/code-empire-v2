/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_TEMPLATE_CONTACT: string;
  readonly VITE_EMAILJS_TEMPLATE_REGISTER: string;
  readonly VITE_EMAILJS_TEMPLATE_NEWSLETTER: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css";

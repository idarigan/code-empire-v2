/**
 * Code Empire — Persian locale bundle
 *
 * Merges every domain module into one flat object.
 * Keys are dotted strings so lookups stay flat in dara-ui.
 */

import { common } from "./common";
import { home } from "./home";
import { about } from "./about";
import { courses } from "./courses";
import { blog } from "./blog";
import { contact } from "./contact";
import { policy } from "./policy";
import { dashboard } from "./dashboard";
import { footer } from "./footer";
import { data } from "./data";

export const fa = {
  ...common,
  ...home,
  ...about,
  ...courses,
  ...blog,
  ...contact,
  ...policy,
  ...dashboard,
  ...footer,
  ...data,
} as const;

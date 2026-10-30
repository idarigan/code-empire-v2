/**
 * Code Empire — Site-wide constants
 */

import type { NavLink, FooterColumn, SocialLink, ClassType } from "@/types";

export const logo = {
  full: "/logo/logo-full.png",
  icon: "/logo/logo-icon.png",
  iconWhite: "/logo/logo-icon-white.png",
  coatOfArms: "/logo/coat-of-arms.png",
};

export const primaryNavLinks: NavLink[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.courses", href: "/courses" },
  { key: "nav.guide", href: "/guide" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "/contact" },
];

export const hamburgerNavLinks: NavLink[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.courses", href: "/courses" },
  { key: "nav.guide", href: "/guide" },
  { key: "nav.about", href: "/about" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "/contact" },
  { key: "nav.policy", href: "/policy" },
];

export const dashboardNavLinks: NavLink[] = [
  { key: "dashboard.home", href: "/dashboard" },
  { key: "dashboard.courses", href: "/dashboard/courses" },
  { key: "dashboard.bookmarks", href: "/dashboard/bookmarks" },
  { key: "dashboard.progress", href: "/dashboard/progress" },
  { key: "dashboard.certificates", href: "/dashboard/certificates" },
  { key: "dashboard.settings", href: "/dashboard/settings" },
];

export const footerColumns: FooterColumn[] = [
  {
    titleKey: "footer.aboutUs",
    links: [
      { key: "footer.aboutEmpire", href: "/about" },
      { key: "footer.contact", href: "/contact" },
      { key: "footer.blog", href: "/blog" },
    ],
  },
  {
    titleKey: "footer.siteLinks",
    links: [
      { key: "nav.home", href: "/" },
      { key: "nav.courses", href: "/courses" },
      { key: "nav.guide", href: "/guide" },
      { key: "nav.policy", href: "/policy" },
    ],
  },
  {
    titleKey: "footer.empireLinks",
    links: [
      { key: "footer.careers", href: "/contact" },
      { key: "footer.partnership", href: "/contact" },
      { key: "footer.pressKit", href: "/contact" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "youtube",
    url: "https://m.youtube.com/@EmpireOfCodes",
    color: "#FF0000",
  },
  {
    platform: "telegram",
    url: "https://t.me/codeOFempire",
    color: "#26A5E4",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/codeempire/",
    color: "#E4405F",
  },
];

export const contactInfo = {
  phoneRaw: "02198450022",
  phoneAltRaw: "02198450033",
  telegram: "https://t.me/codeempire_support",
};

export const siteStats = {
  mentors: 30,
  students: 800,
  hours: 100000,
  consultations: 300,
};

export const siteMeta = {
  name: "Code Empire",
  url: import.meta.env.VITE_SITE_URL || "https://code-empire-v2.vercel.app",
};

export const cta = {
  start: {
    cover: "/images/cta/start.png",
    href: "/courses",
  },
  instagram: {
    cover: "/images/cta/instagram.png",
    href: "https://www.instagram.com/codeempire/",
  },
};

export const classTypes: ClassType[] = [
  {
    slug: "private-online",
    image: "/images/guide/type-1.png",
    glow: "primary",
    featureCount: 4,
  },
  {
    slug: "private-offline",
    image: "/images/guide/type-2.png",
    glow: "secondary",
    featureCount: 4,
  },
  {
    slug: "group-online",
    image: "/images/guide/type-3.png",
    glow: "accent",
    featureCount: 4,
  },
];

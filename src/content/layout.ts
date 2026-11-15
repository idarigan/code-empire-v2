// ============================================
// Navigation
// ============================================

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "خانه", href: "/" },
  { label: "دوره‌ها", href: "/courses" },
  { label: "راهنمای دوره", href: "/guide" },
  { label: "مجله", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
];

// ============================================
// Footer
// ============================================

export interface FooterGroup {
  title: string;
  links: NavItem[];
}

export const footerGroups: FooterGroup[] = [
  {
    title: "امپراتوری",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
      { label: "مجله", href: "/blog" },
    ],
  },
  {
    title: "پیوندهای سایت",
    links: [
      { label: "خانه", href: "/" },
      { label: "دوره‌ها", href: "/courses" },
      { label: "راهنمای دوره", href: "/guide" },
      { label: "قوانین", href: "/policy" },
    ],
  },
];

export const footer = {
  tagline:
    "آکادمی برنامه‌نویسی فارسی - از صفر تا پیشرفته، در کنار بهترین اساتید ایران.",
  contactTitle: "تماس سریع",
  copyright: (year: string) =>
    `© ${year} - تمام حقوق برای امپراتوری کد محفوظ است.`,
};

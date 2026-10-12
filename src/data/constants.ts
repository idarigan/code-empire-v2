/**
 * Code Empire — Site-wide constants
 *
 * Nav, footer, social links, team members, class types.
 * Every key here matches a translation key in translations/*.ts.
 */

import type {
  NavLink,
  FooterColumn,
  SocialLink,
  TeamMember,
  ClassType,
} from "@/types";

// ============================================
// Navigation
// ============================================

export const primaryNavLinks: NavLink[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.courses", href: "/courses" },
  { key: "nav.guide", href: "/guide" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
];

export const dashboardNavLinks: NavLink[] = [
  { key: "dashboard.home", href: "/dashboard" },
  { key: "dashboard.courses", href: "/dashboard/courses" },
  { key: "dashboard.bookmarks", href: "/dashboard/bookmarks" },
  { key: "dashboard.progress", href: "/dashboard/progress" },
  { key: "dashboard.certificates", href: "/dashboard/certificates" },
  { key: "dashboard.settings", href: "/dashboard/settings" },
];

// ============================================
// Footer
// ============================================

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

// ============================================
// Social media
// ============================================

export const socialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://instagram.com/code_empire" },
  { platform: "youtube", url: "https://youtube.com/@code_empire" },
  { platform: "twitter", url: "https://twitter.com/code_empire" },
  { platform: "linkedin", url: "https://linkedin.com/company/code-empire" },
  { platform: "github", url: "https://github.com/idarigan" },
];

// ============================================
// Team members
// ============================================

export const teamMembers: TeamMember[] = [
  {
    name: "داریوش کارا",
    role: "بنیان‌گذار و مدرس اصلی",
    bio: "بیش از ۱۰ سال تجربه در صنعت نرم‌افزار و آموزش برنامه‌نویسی.",
    photo: "/images/team/1.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    glow: "primary",
  },
  {
    name: "سارا احمدی",
    role: "مدرس فرانت‌اند",
    bio: "متخصص React و طراحی رابط کاربری مدرن.",
    photo: "/images/team/2.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    glow: "secondary",
  },
  {
    name: "رضا کریمی",
    role: "مدرس بازی‌سازی",
    bio: "بازی‌ساز مستقل با تجربه انتشار بازی در استیم.",
    photo: "/images/team/3.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    glow: "accent",
  },
];

// ============================================
// Class types (Guide page)
// ============================================

export const classTypes: ClassType[] = [
  {
    slug: "private-online",
    title: "کلاس خصوصی آنلاین",
    subtitle: "یادگیری شخصی‌سازی‌شده",
    description:
      "کلاس‌های آنلاین خصوصی با توجه کامل استاد به شما. سرعت یادگیری کاملاً مطابق با شما.",
    image: "/images/classes/private-online.jpg",
    features: [
      "برنامه‌ی درسی اختصاصی",
      "توجه کامل استاد",
      "انتخاب زمان کلاس",
      "پشتیبانی مستقیم",
    ],
    glow: "primary",
  },
  {
    slug: "private-offline",
    title: "کلاس خصوصی حضوری",
    subtitle: "حضور در محیط آموزشی",
    description:
      "برای کسانی که ترجیح می‌دهند در محیط حضوری و بدون حواس‌پرتی یاد بگیرند.",
    image: "/images/classes/private-offline.jpg",
    features: [
      "محیط آموزشی آرام",
      "تعامل چهره به چهره",
      "امکانات کامل",
      "زمان‌بندی منعطف",
    ],
    glow: "secondary",
  },
  {
    slug: "group-online",
    title: "کلاس گروهی آنلاین",
    subtitle: "یادگیری در کنار دیگران",
    description:
      "کلاس‌های گروهی که به شما امکان می‌دهد در کنار سایر دانشجویان یاد بگیرید و تبادل تجربه کنید.",
    image: "/images/classes/group-online.jpg",
    features: [
      "هزینه‌ی مقرون‌به‌صرفه",
      "تعامل با هم‌کلاسی‌ها",
      "پروژه‌های گروهی",
      "بحث و تبادل نظر",
    ],
    glow: "accent",
  },
];

// ============================================
// Stats (Home page)
// ============================================

export const siteStats = {
  mentors: 30,
  students: 800,
  hours: 100000,
  consultations: 300,
};

// ============================================
// Contact info
// ============================================

export const contactInfo = {
  phone: "۰۲۱-۱۲۳۴۵۶۷۸",
  email: "info@code-empire.ir",
  address: "تهران، خیابان ولیعصر",
  hours: "شنبه تا پنجشنبه، ۹ صبح تا ۹ شب",
  telegram: "https://t.me/code_empire_support",
};

// ============================================
// Site metadata
// ============================================

export const siteMeta = {
  name: "Code Empire",
  namePersian: "امپراتوری کد",
  description: "آکادمی برنامه‌نویسی فارسی — یادگیری از صفر تا پیشرفته",
  url: import.meta.env.VITE_SITE_URL || "https://code-empire-v2.vercel.app",
};

/**
 * Code Empire — Shared entity types
 *
 * Single source of truth for every shape that flows through the app.
 * Data files, features, and lib helpers all import from here.
 *
 * Course and Blog now carry bilingual strings for every user-facing
 * field. Persian is the primary language; English and French fall
 * back to English when a translation is absent.
 */

// ============================================
// COURSES
// ============================================

export type CourseCategory = "web" | "software" | "game";

export interface CourseSpec {
  /** Lucide icon name (resolved via lib/icons.ts) */
  icon: string;
  label: string;
  value: string | number;
}

export interface CourseDetail {
  label: string;
  value: string;
}

export interface ArticleSection {
  title?: string;
  cover?: string;
  /** Cover is a video when true, otherwise an image */
  coverIsVideo?: boolean;
  paragraphs?: string[];
  hints?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  title: string;
  persianTitle: string;
  fullTitle: string;
  category: CourseCategory;
  description: string;
  longDescription: string;

  /** Single price — privatePrice from the legacy data */
  price: number;
  originalPrice?: number;

  logo: string;
  /** Gradient endpoints used for the hero blur and card accents */
  color: [string, string];
  rank: number;

  /** Max seats; -1 means unlimited */
  capacity: number;
  /** Seats taken */
  enrolled: number;

  specs: CourseSpec[];
  details: CourseDetail[];
  sections: ArticleSection[];
  faq: FAQItem[];

  prerequisites: string[];
  relatedCourses: string[];
  learningOutcomes: string[];
  syllabus: { week: number; title: string; topics: string[] }[];

  featured?: boolean;
}

// ============================================
// BLOGS
// ============================================

export interface BlogAuthor {
  name: string;
  avatar?: string;
  role: string;
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: BlogAuthor;
  date: string;
  readTime: number;
  category: string;
  tags: string[];

  sections: ArticleSection[];
  faq?: FAQItem[];
  featured?: boolean;
  relatedPosts: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

// ============================================
// POLICY / RULES
// ============================================
export interface Rule {
  slug: string;
  title: string;
  subtitle: string;
  category: "course" | "site";
  validFrom: string;
  cover?: string;
  sections: ArticleSection[];
  order: number;
}

export interface CharterItem {
  id: string;
  title: string;
  body: string;
}

export interface CharterBill {
  title: string;
  paragraphs: string[];
}

// ============================================
// TEAM / USERS
// ============================================

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  glow?: "primary" | "secondary" | "accent";
}

export interface RankedStudent {
  name: string;
  avatar: string;
  course: string;
  isLearning: boolean;
  tier: StudentTier;
  glow?: "primary" | "secondary" | "accent";
}

export type StudentTier =
  | "Aghazgar"
  | "Danshour"
  | "Kadzan-e Nokhbeh"
  | "Danshour-e Nokhbeh"
  | "Javidan";

// ============================================
// TESTIMONIALS / COMPANIES
// ============================================

export interface Testimonial {
  name: string;
  job: string;
  avatar: string;
  quote: string;
  videoUrl?: string;
  rating: number;
}

export interface Company {
  name: string;
  logo: string;
}

// ============================================
// CLASS TYPES (Guide page)
// ============================================

export interface ClassType {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  glow: "primary" | "secondary" | "accent";
}

// ============================================
// USER / LOCAL STATE
// ============================================

export interface Profile {
  name: string;
  avatar?: string;
  bio?: string;
  createdAt: number;
}

export interface Bookmark {
  id: string;
  type: "course" | "blog";
  slug: string;
  title: string;
  savedAt: number;
}

export interface Enrollment {
  slug: string;
  enrolledAt: number;
  type: "group" | "private";
}

export interface Preferences {
  theme: string;
  language: string;
  notifications: boolean;
  sound: boolean;
}

// ============================================
// NAV / FOOTER CONSTANTS
// ============================================

export interface NavLink {
  key: string;
  href: string;
}

export interface FooterColumn {
  titleKey: string;
  links: { key: string; href: string; external?: boolean }[];
}

export interface SocialLink {
  platform:
    | "github"
    | "twitter"
    | "discord"
    | "youtube"
    | "instagram"
    | "linkedin"
    | "bluesky"
    | "telegram";
  url: string;
  color?: string;
}

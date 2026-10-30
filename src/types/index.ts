/**
 * Code Empire — Shared entity types
 */

export type CourseCategory = "web" | "software" | "game";

export interface ArticleSection {
  title?: string;
  cover?: string;
  coverIsVideo?: boolean;
  paragraphs?: string[];
  hints?: string[];
}

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  price: number;
  originalPrice?: number;
  logo: string;
  color: [string, string];
  rank: number;
  capacity: number;
  enrolled: number;
  specs: { icon: string }[];
  details: { key: "name" | "prereq" | "method" }[];
  sections: {
    cover?: string;
    coverIsVideo?: boolean;
    paragraphCount: number;
    hintCount: number;
  }[];
  faqCount: number;
  prerequisites: string[];
  relatedCourses: string[];
  learningOutcomes: number;
  syllabus: { week: number; titleKey: string; topicKeys: string[] }[];
  featured?: boolean;
}

export interface BlogAuthor {
  name: string;
  avatar?: string;
}

export interface Blog {
  slug: string;
  title: string;
  coverImage: string;
  author: BlogAuthor;
  date: string;
  readTime: number;
  featured?: boolean;
  relatedPosts: string[];
  sectionCount: number;
  tagCount: number;
  faqCount: number;
}

export interface Rule {
  slug: string;
  category: "course" | "site";
  validFrom: string;
  cover?: string;
  order: number;
  sectionCount: number;
}

export interface CharterItem {
  id: string;
}

export interface TeamMember {
  slug: string;
  photo: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  glow?: "primary" | "secondary" | "accent";
}

export type StudentTier =
  | "Aghazgar"
  | "Danshour"
  | "Kadzan-e Nokhbeh"
  | "Danshour-e Nokhbeh"
  | "Javidan";

export interface RankedStudent {
  slug: string;
  avatar: string;
  courseSlug: string;
  isLearning: boolean;
  tier: StudentTier;
  glow?: "primary" | "secondary" | "accent";
}

export interface Testimonial {
  slug: string;
  avatar: string;
  videoUrl?: string;
  rating: number;
}

export interface Company {
  slug: string;
  logo: string;
}

export interface ClassType {
  slug: "private-online" | "private-offline" | "group-online";
  image: string;
  glow: "primary" | "secondary" | "accent";
  featureCount: number;
}

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

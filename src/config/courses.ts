/**
 * Code Empire - Course catalogue
 */

// ============================================
// Types
// ============================================

export type CourseCategory = "web" | "software" | "game";

export interface Course {
  slug: string;
  category: CourseCategory;
  price: number;
  glyph: string;
  colors: [string, string];
  rank: number;
  capacity: number;
  enrolled: number;
}

// ============================================
// Catalogue
// ============================================

export const courses: Course[] = [
  {
    slug: "html-css",
    category: "web",
    price: 219000,
    glyph: "</>",
    colors: ["#f06529", "#663399"],
    rank: 2,
    capacity: 120,
    enrolled: 83,
  },
  {
    slug: "tailwind",
    category: "web",
    price: 288000,
    glyph: "TW",
    colors: ["#06b6d4", "#6d28d9"],
    rank: 2,
    capacity: 60,
    enrolled: 40,
  },
  {
    slug: "bootstrap",
    category: "web",
    price: 278000,
    glyph: "BS",
    colors: ["#6e44ff", "#b892ff"],
    rank: 2,
    capacity: 90,
    enrolled: 67,
  },
  {
    slug: "total-web",
    category: "web",
    price: 399000,
    glyph: "{ }",
    colors: ["#52E5E7", "#130CB7"],
    rank: 1,
    capacity: 180,
    enrolled: 157,
  },
  {
    slug: "javascript",
    category: "web",
    price: 295000,
    glyph: "JS",
    colors: ["#e09b31", "#ebdd4e"],
    rank: 1,
    capacity: 120,
    enrolled: 102,
  },
  {
    slug: "python-beginner",
    category: "software",
    price: 252000,
    glyph: "Py",
    colors: ["#1e96fc", "#072ac8"],
    rank: 1,
    capacity: 160,
    enrolled: 147,
  },
  {
    slug: "python-advanced",
    category: "software",
    price: 288000,
    glyph: "Py+",
    colors: ["#1e96fc", "#072ac8"],
    rank: 2,
    capacity: 130,
    enrolled: 100,
  },
  {
    slug: "c-sharp",
    category: "software",
    price: 299000,
    glyph: "C#",
    colors: ["#7209b7", "#3a0ca3"],
    rank: 2,
    capacity: 80,
    enrolled: 44,
  },
  {
    slug: "c-plus-plus",
    category: "software",
    price: 288000,
    glyph: "C++",
    colors: ["#0466c8", "#001845"],
    rank: 2,
    capacity: 80,
    enrolled: 61,
  },
  {
    slug: "java",
    category: "software",
    price: 299000,
    glyph: "Jv",
    colors: ["#c2410c", "#7c2e41"],
    rank: 11,
    capacity: 70,
    enrolled: 59,
  },
  {
    slug: "unity",
    category: "game",
    price: 349000,
    glyph: "U6",
    colors: ["#475569", "#222c37"],
    rank: 2,
    capacity: 80,
    enrolled: 70,
  },
  {
    slug: "unreal-engine",
    category: "game",
    price: 399000,
    glyph: "UE",
    colors: ["#8d99ae", "#2b2d42"],
    rank: 2,
    capacity: 100,
    enrolled: 70,
  },
  {
    slug: "scratch-junior",
    category: "game",
    price: 245000,
    glyph: "Sc",
    colors: ["#ff9100", "#ffb600"],
    rank: 2,
    capacity: 120,
    enrolled: 98,
  },
];

// ============================================
// Selectors
// ============================================

export const getTopCourses = (category: CourseCategory, count = 3): Course[] =>
  courses
    .filter((course) => course.category === category)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, count);

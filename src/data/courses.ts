/**
 * Code Empire — Course catalog
 */

import type { Course } from "@/types";

export const courses: Course[] = [
  {
    slug: "html-css",
    title: "HTML & CSS",
    category: "web",
    price: 219000,
    logo: "/images/courses/html-css-logo.png",
    color: ["#f06529", "#663399"],
    rank: 2,
    capacity: 120,
    enrolled: 83,
    prerequisites: [],
    relatedCourses: ["tailwind", "bootstrap", "total-web"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/html-css-1.png",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/html-css-3.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      {
        cover: "/images/courses/html-css-2.png",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/html-css-4.png",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 4,
    featured: true,
  },

  {
    slug: "tailwind",
    title: "Tailwind",
    category: "web",
    price: 288000,
    logo: "/images/courses/tailwind-logo.svg",
    color: ["#06b6d4", "#6d28d9"],
    rank: 2,
    capacity: 60,
    enrolled: 40,
    prerequisites: ["html-css"],
    relatedCourses: ["bootstrap", "html-css", "total-web"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/tailwind-1.png",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/tailwind-2.png",
        paragraphCount: 3,
        hintCount: 0,
      },
      {
        cover: "/images/courses/tailwind-3.png",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 2, hintCount: 0 },
      {
        cover: "/images/courses/tailwind-4.png",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 3,
  },

  {
    slug: "bootstrap",
    title: "Bootstrap",
    category: "web",
    price: 278000,
    logo: "/images/courses/bootstrap-logo.svg",
    color: ["#6e44ff", "#b892ff"],
    rank: 2,
    capacity: 90,
    enrolled: 67,
    prerequisites: ["html-css"],
    relatedCourses: ["tailwind", "html-css", "total-web"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/bootstrap-1.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      {
        cover: "/images/courses/bootstrap-2.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      {
        cover: "/images/courses/bootstrap-3.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 3,
  },

  {
    slug: "total-web",
    title: "Total Web",
    category: "web",
    price: 399000,
    logo: "/images/courses/total-web-logo.png",
    color: ["#52E5E7", "#130CB7"],
    rank: 1,
    capacity: 180,
    enrolled: 157,
    prerequisites: [],
    relatedCourses: ["html-css", "javascript", "tailwind", "bootstrap"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/total-web-1.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/total-web-2.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 1, hintCount: 0 },
      { paragraphCount: 1, hintCount: 0 },
      {
        cover: "/images/courses/total-web-3.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 1, hintCount: 0 },
    ],
    faqCount: 5,
    featured: true,
  },

  {
    slug: "javascript",
    title: "JavaScript",
    category: "web",
    price: 295000,
    logo: "/images/courses/javascript-logo.svg",
    color: ["#e09b31", "#ebdd4e"],
    rank: 1,
    capacity: 120,
    enrolled: 102,
    prerequisites: ["html-css"],
    relatedCourses: ["total-web", "python-beginner"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/javascript-1.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/javascript-2.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/javascript-4.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/javascript-3.jpeg",
        paragraphCount: 4,
        hintCount: 0,
      },
    ],
    faqCount: 5,
    featured: true,
  },

  {
    slug: "python-beginner",
    title: "Python - Beginner",
    category: "software",
    price: 252000,
    logo: "/images/courses/python-logo.svg",
    color: ["#1e96fc", "#072ac8"],
    rank: 1,
    capacity: 160,
    enrolled: 147,
    prerequisites: [],
    relatedCourses: ["python-advanced", "javascript"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/python-1.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/python-2.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 0, hintCount: 3 },
      {
        cover: "/images/courses/python-3.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      { paragraphCount: 1, hintCount: 0 },
    ],
    faqCount: 3,
    featured: true,
  },

  {
    slug: "python-advanced",
    title: "Python - Advanced",
    category: "software",
    price: 288000,
    logo: "/images/courses/python-adv-logo.svg",
    color: ["#1e96fc", "#072ac8"],
    rank: 2,
    capacity: 130,
    enrolled: 100,
    prerequisites: ["python-beginner"],
    relatedCourses: ["python-beginner"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/python-adv-1.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/python-adv-2.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 1, hintCount: 7 },
      { paragraphCount: 1, hintCount: 0 },
      {
        cover: "/images/courses/python-adv-3.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 6,
  },

  {
    slug: "c-sharp",
    title: "#C",
    category: "software",
    price: 299000,
    logo: "/images/courses/csharp-logo.png",
    color: ["#7209b7", "#3a0ca3"],
    rank: 2,
    capacity: 80,
    enrolled: 44,
    prerequisites: [],
    relatedCourses: ["c-plus-plus", "unity"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/csharp-1.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/csharp-2.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 1, hintCount: 0 },
      {
        cover: "/images/courses/csharp-4.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 5,
  },

  {
    slug: "c-plus-plus",
    title: "++C",
    category: "software",
    price: 288000,
    logo: "/images/courses/cpp-logo.svg",
    color: ["#001845", "#0466c8"],
    rank: 2,
    capacity: 80,
    enrolled: 61,
    prerequisites: [],
    relatedCourses: ["c-sharp", "unreal-engine"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/cpp-1.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/cpp-2.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/cpp-3.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/cpp-4.jpeg",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 4,
  },

  {
    slug: "java",
    title: "Java",
    category: "software",
    price: 299000,
    logo: "/images/courses/java-logo.svg",
    color: ["#4c334d", "#7c2e41"],
    rank: 11,
    capacity: 70,
    enrolled: 59,
    prerequisites: [],
    relatedCourses: ["c-sharp", "c-plus-plus"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/java-1.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      { paragraphCount: 1, hintCount: 0 },
      {
        cover: "/images/courses/java-2.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      {
        cover: "/images/courses/java-3.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
    ],
    faqCount: 3,
  },

  {
    slug: "unity",
    title: "Unity 6",
    category: "game",
    price: 349000,
    logo: "/images/courses/unity-logo.svg",
    color: ["#222c37", "#222c37"],
    rank: 2,
    capacity: 80,
    enrolled: 70,
    prerequisites: [],
    relatedCourses: ["c-sharp", "unreal-engine"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/unity-1.webp",
        paragraphCount: 2,
        hintCount: 0,
      },
      {
        cover: "/images/courses/unity-2.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/unity-3.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/unity-4.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
    ],
    faqCount: 4,
  },

  {
    slug: "unreal-engine",
    title: "Unreal Engine",
    category: "game",
    price: 399000,
    logo: "/images/courses/unreal-logo.svg",
    color: ["#2b2d42", "#8d99ae"],
    rank: 2,
    capacity: 100,
    enrolled: 70,
    prerequisites: [],
    relatedCourses: ["c-plus-plus", "unity"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/unreal-1.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 2, hintCount: 0 },
      {
        cover: "/images/courses/unreal-2.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/unreal-3.webp",
        paragraphCount: 0,
        hintCount: 4,
      },
      {
        cover: "/images/courses/unreal-4.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      { paragraphCount: 6, hintCount: 0 },
    ],
    faqCount: 4,
  },

  {
    slug: "scratch-junior",
    title: "Scratch Junior",
    category: "game",
    price: 245000,
    logo: "/images/courses/scratch-logo.png",
    color: ["#ff9100", "#ffb600"],
    rank: 2,
    capacity: 120,
    enrolled: 98,
    prerequisites: [],
    relatedCourses: ["unity", "unreal-engine"],
    learningOutcomes: 4,
    syllabus: [],
    specs: [{ icon: "users" }, { icon: "clock" }, { icon: "calendar" }],
    details: [{ key: "name" }, { key: "prereq" }, { key: "method" }],
    sections: [
      {
        cover: "/images/courses/scratch-1.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/scratch-2.webp",
        paragraphCount: 1,
        hintCount: 0,
      },
      {
        cover: "/images/courses/scratch-3.webp",
        paragraphCount: 0,
        hintCount: 3,
      },
    ],
    faqCount: 5,
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);

export const getCoursesByCategory = (category: CourseCategory): Course[] =>
  courses.filter((c) => c.category === category);

export const getFeaturedCourses = (): Course[] =>
  courses.filter((c) => c.featured);

export const getTopCourses = (count = 3): Course[] =>
  [...courses].sort((a, b) => a.rank - b.rank).slice(0, count);

export const getRelatedCourses = (course: Course, count = 3): Course[] => {
  const picked = course.relatedCourses
    .map((slug) => getCourseBySlug(slug))
    .filter((c): c is Course => Boolean(c));

  if (picked.length >= count) return picked.slice(0, count);

  const seen = new Set([course.slug, ...picked.map((c) => c.slug)]);

  const sameCategory = courses
    .filter((c) => c.category === course.category && !seen.has(c.slug))
    .sort((a, b) => a.rank - b.rank)
    .slice(0, count - picked.length);

  sameCategory.forEach((c) => {
    picked.push(c);
    seen.add(c.slug);
  });

  if (picked.length < count) {
    const fallback = [...courses]
      .filter((c) => !seen.has(c.slug))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, count - picked.length);
    picked.push(...fallback);
  }

  return picked.slice(0, count);
};

import type { CourseCategory } from "@/types";

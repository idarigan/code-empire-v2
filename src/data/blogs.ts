/**
 * Code Empire — Blog posts
 */

import type { Blog } from "@/types";

const AUTHORS = {
  sam: { avatar: "/images/team/sam-tehrani.jpg" },
  hamed: { avatar: "/images/team/hamed-azarshahri.jpg" },
  empire: { avatar: "/images/team/empire-team.jpg" },
};

export const blogs: Blog[] = [
  {
    slug: "barnameh-nevisi-chist",
    title: "Programming 101",
    coverImage: "/images/blogs/barnameh-nevisi-chist.png",
    author: { name: "sam", avatar: AUTHORS.sam.avatar },
    date: "2024-07-01",
    readTime: 4,
    featured: true,
    relatedPosts: [],
    sectionCount: 5,
    tagCount: 3,
    faqCount: 4,
  },
  {
    slug: "niaz-haye-barnameh-nevisi",
    title: "Programming Requirements",
    coverImage: "/images/blogs/niaz-haye-aqaz-barnameh-nevisi.png",
    author: { name: "sam", avatar: AUTHORS.sam.avatar },
    date: "2024-07-05",
    readTime: 5,
    relatedPosts: ["barnameh-nevisi-chist", "barnameh-nevisi-baraye-farzandan"],
    sectionCount: 7,
    tagCount: 3,
    faqCount: 0,
  },
  {
    slug: "barnameh-nevisi-baraye-farzandan",
    title: "Programming for Children",
    coverImage: "/images/blogs/barnameh-nevisi-baraye-farzandan.jpeg",
    author: { name: "sam", avatar: AUTHORS.sam.avatar },
    date: "2024-07-10",
    readTime: 4,
    relatedPosts: ["niaz-haye-barnameh-nevisi", "magic-skill-programming"],
    sectionCount: 6,
    tagCount: 3,
    faqCount: 0,
  },
  {
    slug: "barnameh-nevisi-ta-movafaghit",
    title: "Programming to Success",
    coverImage:
      "/images/blogs/barnamehnevisi-ta-movafaiaghit-ranpannamayi-baraye-ayandehsazan.png",
    author: { name: "sam", avatar: AUTHORS.sam.avatar },
    date: "2024-08-01",
    readTime: 9,
    relatedPosts: ["university-or-skill", "backend-technologies-guide"],
    sectionCount: 10,
    tagCount: 3,
    faqCount: 0,
  },
  {
    slug: "empire-place-for-innovation",
    title: "Code Empire — Home of Innovation",
    coverImage:
      "/images/blogs/emperatori-code-jaei-baraye-noavari-va-yadgiri.png",
    author: { name: "sam", avatar: AUTHORS.sam.avatar },
    date: "2024-08-05",
    readTime: 5,
    featured: true,
    relatedPosts: ["barnameh-nevisi-chist"],
    sectionCount: 4,
    tagCount: 3,
    faqCount: 0,
  },
  {
    slug: "magic-skill-programming",
    title: "The Magic Skill",
    coverImage: "/images/blogs/magical_power.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2025-03-20",
    readTime: 7,
    featured: true,
    relatedPosts: ["barnameh-nevisi-baraye-farzandan", "scratch-and-scratchjr"],
    sectionCount: 6,
    tagCount: 3,
    faqCount: 2,
  },
  {
    slug: "steam-gamer-ecosystem",
    title: "Steam — The Gamer Ecosystem",
    coverImage: "/images/blogs/steam_game_ecosystem.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2024-06-01",
    readTime: 5,
    relatedPosts: ["game-engine-heart", "famous-games-engines"],
    sectionCount: 5,
    tagCount: 3,
    faqCount: 4,
  },
  {
    slug: "game-engine-heart",
    title: "Game Engines — The Beating Heart",
    coverImage: "/images/blogs/game_engine.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2024-06-15",
    readTime: 8,
    featured: true,
    relatedPosts: ["famous-games-engines", "steam-gamer-ecosystem"],
    sectionCount: 7,
    tagCount: 4,
    faqCount: 4,
  },
  {
    slug: "scratch-and-scratchjr",
    title: "Scratch & ScratchJr",
    coverImage: "/images/blogs/scratch_and_scratchjr.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2024-06-20",
    readTime: 6,
    relatedPosts: ["magic-skill-programming"],
    sectionCount: 7,
    tagCount: 3,
    faqCount: 4,
  },
  {
    slug: "famous-games-engines",
    title: "What Engines Power Famous Games?",
    coverImage: "/images/blogs/games_designed_with.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2024-07-01",
    readTime: 4,
    relatedPosts: ["game-engine-heart", "steam-gamer-ecosystem"],
    sectionCount: 6,
    tagCount: 2,
    faqCount: 3,
  },
  {
    slug: "bitchat-revolution",
    title: "Bitchat — Communication Revolution",
    coverImage: "/images/blogs/bitchat_revolution.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2024-07-05",
    readTime: 7,
    featured: true,
    relatedPosts: [],
    sectionCount: 6,
    tagCount: 4,
    faqCount: 0,
  },
  {
    slug: "when-codes-become-doctor",
    title: "When Code Becomes Doctor",
    coverImage: "/images/blogs/when_codes_become_doctor.png",
    author: { name: "empire", avatar: AUTHORS.empire.avatar },
    date: "2024-07-10",
    readTime: 6,
    relatedPosts: ["barnameh-nevisi-chist"],
    sectionCount: 6,
    tagCount: 3,
    faqCount: 0,
  },
  {
    slug: "backend-technologies-guide",
    title: "Backend Technologies Guide",
    coverImage: "/images/blogs/meet-backend-technologies.jpeg",
    author: { name: "sam", avatar: AUTHORS.sam.avatar },
    date: "2024-08-15",
    readTime: 12,
    featured: true,
    relatedPosts: ["barnameh-nevisi-ta-movafaghit"],
    sectionCount: 13,
    tagCount: 4,
    faqCount: 0,
  },
  {
    slug: "laptop-or-pc-for-coding",
    title: "Laptop or PC for Coding?",
    coverImage: "/images/blogs/laptop_or_pc_for_coding.png",
    author: { name: "hamed", avatar: AUTHORS.hamed.avatar },
    date: "2024-09-15",
    readTime: 8,
    relatedPosts: [],
    sectionCount: 6,
    tagCount: 3,
    faqCount: 5,
  },
  {
    slug: "university-or-skill",
    title: "University or Skill?",
    coverImage: "/images/blogs/university_or_skill.png",
    author: { name: "hamed", avatar: AUTHORS.hamed.avatar },
    date: "2024-09-20",
    readTime: 10,
    relatedPosts: ["barnameh-nevisi-ta-movafaghit"],
    sectionCount: 11,
    tagCount: 4,
    faqCount: 4,
  },
  {
    slug: "computer-maintenance-guide",
    title: "Computer Maintenance Guide",
    coverImage: "/images/blogs/computer_maintenance.png",
    author: { name: "hamed", avatar: AUTHORS.hamed.avatar },
    date: "2024-09-25",
    readTime: 7,
    relatedPosts: ["speed-up-windows", "laptop-or-pc-for-coding"],
    sectionCount: 7,
    tagCount: 3,
    faqCount: 5,
  },
  {
    slug: "speed-up-windows",
    title: "15 Windows Speed Tricks",
    coverImage: "/images/blogs/speed_up_windows.png",
    author: { name: "hamed", avatar: AUTHORS.hamed.avatar },
    date: "2024-09-30",
    readTime: 8,
    relatedPosts: ["computer-maintenance-guide"],
    sectionCount: 5,
    tagCount: 3,
    faqCount: 5,
  },
];

export const getBlogBySlug = (slug: string): Blog | undefined =>
  blogs.find((b) => b.slug === slug);

export const getBlogsByCategory = (category: string): Blog[] =>
  blogs.filter((b) => b.slug.includes(category));

export const getFeaturedBlogs = (): Blog[] => blogs.filter((b) => b.featured);

export const getLatestBlogs = (count = 4): Blog[] =>
  [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

export const getRelatedPosts = (blog: Blog, count = 3): Blog[] => {
  const picked = blog.relatedPosts
    .map((slug) => getBlogBySlug(slug))
    .filter((b): b is Blog => Boolean(b));

  if (picked.length >= count) return picked.slice(0, count);

  const seen = new Set([blog.slug, ...picked.map((b) => b.slug)]);

  const fallback = [...blogs]
    .filter((b) => !seen.has(b.slug))
    .slice(0, count - picked.length);

  picked.push(...fallback);

  return picked.slice(0, count);
};

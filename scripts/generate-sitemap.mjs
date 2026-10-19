/**
 * Code Empire — Sitemap generator
 *
 * Runs at build time. Parses slugs from data files using regex
 * (avoids needing ts-node in the build). Writes public/sitemap.xml.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITE_URL =
  process.env.VITE_SITE_URL || "https://code-empire-v2.vercel.app";

// ============================================
// Slug extractors
// ============================================

function extractSlugs(filePath, keyPattern) {
  const full = resolve(ROOT, filePath);
  if (!existsSync(full)) return [];
  const content = readFileSync(full, "utf-8");
  const re = new RegExp(keyPattern, "g");
  const slugs = new Set();
  let match;
  while ((match = re.exec(content)) !== null) {
    slugs.add(match[1]);
  }
  return [...slugs];
}

const courseSlugs = extractSlugs(
  "src/data/courses.ts",
  /slug:\s*["']([a-z0-9-]+)["']/g,
);
const blogSlugs = extractSlugs(
  "src/data/blogs.ts",
  /slug:\s*["']([a-z0-9-]+)["']/g,
);
const ruleSlugs = extractSlugs(
  "src/data/policy.ts",
  /slug:\s*["']([a-z0-9-]+)["']/g,
);

// ============================================
// Build URLs
// ============================================

const today = new Date().toISOString().split("T")[0];

const staticUrls = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/courses", priority: "0.9", changefreq: "weekly" },
  { path: "/courses/register", priority: "0.8", changefreq: "monthly" },
  { path: "/guide", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
  { path: "/policy", priority: "0.4", changefreq: "yearly" },
];

const urls = [
  ...staticUrls,
  ...courseSlugs.map((slug) => ({
    path: `/courses/${slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  ...blogSlugs.map((slug) => ({
    path: `/blog/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
  ...ruleSlugs.map((slug) => ({
    path: `/policy/${slug}`,
    priority: "0.4",
    changefreq: "yearly",
  })),
];

// ============================================
// XML
// ============================================

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(ROOT, "public/sitemap.xml"), xml);
console.log(`✓ sitemap.xml written (${urls.length} URLs)`);

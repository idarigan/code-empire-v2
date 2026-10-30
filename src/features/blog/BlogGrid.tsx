/**
 * Code Empire — Blog grid
 */

import { useNavigate } from "react-router-dom";
import { BlogCard } from "dara-ui";
import type { Blog } from "@/types";
import { blogPostsContent, blogAuthors } from "@/content/blogs";
import { blog } from "@/content/blog";
import { Icons } from "@/lib/icons";

interface BlogGridProps {
  blogs: Blog[];
  columns?: 2 | 3;
  emptyMessage?: string;
}

export function BlogGrid({ blogs, columns = 3, emptyMessage }: BlogGridProps) {
  const navigate = useNavigate();

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <Icons.fileText className="h-10 w-10 text-[var(--color-text-tertiary)]" />
        <p className="text-[var(--color-text-secondary)] text-sm">
          {emptyMessage ?? blog.noResults}
        </p>
      </div>
    );
  }

  const colsClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const glowCycle: ("primary" | "secondary" | "accent")[] = [
    "primary",
    "secondary",
    "accent",
  ];

  return (
    <div className={`grid ${colsClass} gap-5`}>
      {blogs.map((post, i) => {
        const content = blogPostsContent[post.slug];
        if (!content) return null;
        return (
          <BlogCard
            key={post.slug}
            title={content.title}
            excerpt={content.excerpt}
            coverImage={post.coverImage}
            author={blogAuthors[post.author.name as keyof typeof blogAuthors]}
            authorAvatar={post.author.avatar}
            date={post.date}
            readTime={post.readTime}
            category={content.category}
            tags={content.tags}
            link={`/blog/${post.slug}`}
            glow={glowCycle[i % glowCycle.length]}
            onClick={() => navigate(`/blog/${post.slug}`)}
          />
        );
      })}
    </div>
  );
}

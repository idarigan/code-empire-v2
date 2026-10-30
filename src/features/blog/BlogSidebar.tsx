/**
 * Code Empire — Blog sidebar
 */

import { Link } from "react-router-dom";
import { Card, Avatar } from "dara-ui";
import { getLatestBlogs } from "@/data/blogs";
import type { BlogAuthor } from "@/types";
import { formatDate, formatReadTime } from "@/lib/format";
import { blogPostsContent, blogAuthors } from "@/content/blogs";
import { blog } from "@/content/blog";
import { Icons } from "@/lib/icons";

interface BlogSidebarProps {
  author: BlogAuthor;
  currentSlug: string;
}

export function BlogSidebar({ author, currentSlug }: BlogSidebarProps) {
  const latest = getLatestBlogs(4).filter((b) => b.slug !== currentSlug);
  const displayName = blogAuthors[author.name as keyof typeof blogAuthors];
  const currentContent = blogPostsContent[currentSlug];

  return (
    <aside className="flex flex-col gap-5 sticky top-24 self-start">
      <Card glow="primary">
        <div className="flex items-center gap-3 mb-3">
          <Avatar
            src={author.avatar}
            fallbackText={displayName}
            size="lg"
            glow="primary"
            bordered
          />
          <div className="min-w-0">
            <h4 className="font-heading font-bold text-sm text-[var(--color-text-primary)] truncate">
              {displayName}
            </h4>
            <p className="text-xs text-[var(--color-text-tertiary)] truncate">
              {currentContent?.authorRole ?? blog.authorRole}
            </p>
          </div>
        </div>
      </Card>

      {latest.length > 0 && (
        <Card variant="solid">
          <h3 className="font-heading font-bold text-sm mb-3 text-[var(--color-text-primary)]">
            {blog.latestPosts}
          </h3>
          <ul className="flex flex-col gap-3">
            {latest.map((post) => {
              const content = blogPostsContent[post.slug];
              if (!content) return null;
              return (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex flex-col gap-1 group"
                  >
                    <span
                      className="text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug"
                      dir="auto"
                    >
                      {content.title}
                    </span>
                    <span className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-text-tertiary)]">
                      {formatDate(post.date)}
                      <span>·</span>
                      {formatReadTime(post.readTime)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </aside>
  );
}

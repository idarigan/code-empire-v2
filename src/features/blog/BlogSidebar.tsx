/**
 * Code Empire — Blog sidebar
 *
 * Sticky right column: author bio, latest posts, category list.
 * Categories link back to /blog?category=X for filtering.
 */

import { Link } from "react-router-dom";
import { Card, Avatar, Badge, useI18n } from "dara-ui";
import { blogs, getBlogCategories, getLatestBlogs } from "@/data/blogs";
import type { BlogAuthor } from "@/types";
import { formatDate, formatReadTime } from "@/lib/format";
import { Icons } from "@/lib/icons";

interface BlogSidebarProps {
  author: BlogAuthor;
  currentSlug: string;
}

export function BlogSidebar({ author, currentSlug }: BlogSidebarProps) {
  const { t } = useI18n();

  const latest = getLatestBlogs(4).filter((b) => b.slug !== currentSlug);
  const categories = getBlogCategories();

  return (
    <aside className="flex flex-col gap-5 sticky top-24 self-start">
      {/* Author */}
      <Card glow="primary">
        <div className="flex items-center gap-3 mb-3">
          <Avatar
            src={author.avatar}
            fallbackText={author.name}
            size="lg"
            glow="primary"
            bordered
          />
          <div className="min-w-0">
            <h4 className="font-heading font-bold text-sm text-[var(--color-text-primary)] truncate">
              {author.name}
            </h4>
            <p className="text-xs text-[var(--color-text-tertiary)] truncate">
              {author.role}
            </p>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          {t("blog.author")} ·{" "}
          {blogs.filter((b) => b.author.name === author.name).length}{" "}
          {t("blog.latestPosts")}
        </p>
      </Card>

      {/* Latest posts */}
      {latest.length > 0 && (
        <Card variant="solid">
          <h3 className="font-heading font-bold text-sm mb-3 text-[var(--color-text-primary)]">
            {t("blog.latestPosts")}
          </h3>
          <ul className="flex flex-col gap-3">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col gap-1 group"
                >
                  <span
                    className="text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug"
                    dir="auto"
                  >
                    {post.title}
                  </span>
                  <span className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-text-tertiary)]">
                    {formatDate(post.date)}
                    <span>·</span>
                    {formatReadTime(post.readTime)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Categories */}
      <Card variant="solid">
        <h3 className="font-heading font-bold text-sm mb-3 text-[var(--color-text-primary)]">
          {t("blog.category")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link key={cat} to={`/blog?category=${encodeURIComponent(cat)}`}>
              <Badge variant="secondary" size="sm" outline>
                {cat}
              </Badge>
            </Link>
          ))}
        </div>
      </Card>
    </aside>
  );
}

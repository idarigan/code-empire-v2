/**
 * Code Empire — Bookmarks
 */

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Tabs, Badge } from "dara-ui";
import type { TabItem } from "dara-ui";
import { useProgress } from "@/contexts";
import { getCourseBySlug } from "@/data/courses";
import { getBlogBySlug } from "@/data/blogs";
import { formatDate, formatPrice, formatReadTime } from "@/lib/format";
import { coursesContent } from "@/content/courses";
import { blogPostsContent } from "@/content/blogs";
import { dashboard } from "@/content/dashboard";
import { common } from "@/content/common";
import { Icons } from "@/lib/icons";

type TabValue = "courses" | "blogs";

export default function Bookmarks() {
  const navigate = useNavigate();
  const { bookmarks, toggleBookmark } = useProgress();
  const [tab, setTab] = useState<TabValue>("courses");

  const courseBookmarks = useMemo(
    () =>
      bookmarks
        .filter((b) => b.type === "course")
        .map((b) => ({ bookmark: b, course: getCourseBySlug(b.slug) }))
        .filter((x) => x.course),
    [bookmarks],
  );

  const blogBookmarks = useMemo(
    () =>
      bookmarks
        .filter((b) => b.type === "blog")
        .map((b) => ({ bookmark: b, blog: getBlogBySlug(b.slug) }))
        .filter((x) => x.blog),
    [bookmarks],
  );

  const items: TabItem[] = [
    {
      label: `${dashboard.bookmarkCourses} (${courseBookmarks.length})`,
      value: "courses",
      content: null,
    },
    {
      label: `${dashboard.bookmarkBlogs} (${blogBookmarks.length})`,
      value: "blogs",
      content: null,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
        {dashboard.bookmarks}
      </h1>

      <Tabs
        items={items}
        activeValue={tab}
        onChange={(v) => setTab(v as TabValue)}
        glowColor="primary"
      />

      {tab === "courses" && (
        <>
          {courseBookmarks.length === 0 ? (
            <Card variant="outline" className="text-center py-16">
              <Icons.bookmark className="h-12 w-12 mx-auto text-[var(--color-text-tertiary)] mb-3" />
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                {dashboard.bookmarkEmpty}
              </p>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate("/courses")}
              >
                {dashboard.bookmarkCourses}
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseBookmarks.map(({ course }) => {
                if (!course) return null;
                const content = coursesContent[course.slug];
                if (!content) return null;
                return (
                  <Card key={course.slug} variant="solid">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-tertiary)] flex-shrink-0">
                        <img
                          src={course.logo}
                          alt={content.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading font-bold text-sm truncate">
                          {content.title}
                        </h3>
                        <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mt-1">
                          {content.description}
                        </p>
                        <p className="text-xs font-mono text-[var(--color-primary)] mt-2">
                          {formatPrice(course.price)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        onClick={() => navigate(`/courses/${course.slug}`)}
                      >
                        {common.readMore}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          toggleBookmark({
                            id: course.slug,
                            type: "course",
                            slug: course.slug,
                            title: content.title,
                          })
                        }
                        leftIcon={<Icons.trash className="h-3.5 w-3.5" />}
                      >
                        {dashboard.removeBookmark}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      )}

      {tab === "blogs" && (
        <>
          {blogBookmarks.length === 0 ? (
            <Card variant="outline" className="text-center py-16">
              <Icons.bookmark className="h-12 w-12 mx-auto text-[var(--color-text-tertiary)] mb-3" />
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                {dashboard.bookmarkEmpty}
              </p>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate("/blog")}
              >
                {dashboard.bookmarkBlogs}
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogBookmarks.map(({ blog }) => {
                if (!blog) return null;
                const content = blogPostsContent[blog.slug];
                if (!content) return null;
                return (
                  <Card key={blog.slug} variant="solid">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-tertiary)] flex-shrink-0">
                        <img
                          src={blog.coverImage}
                          alt={content.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading font-bold text-sm line-clamp-2">
                          {content.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-[10px] text-[var(--color-text-tertiary)] font-mono">
                          <Badge variant="secondary" size="sm" outline>
                            {content.category}
                          </Badge>
                          <span>{formatDate(blog.date)}</span>
                          <span>{formatReadTime(blog.readTime)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="primary"
                        size="sm"
                        fullWidth
                        onClick={() => navigate(`/blog/${blog.slug}`)}
                      >
                        {common.readMore}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          toggleBookmark({
                            id: blog.slug,
                            type: "blog",
                            slug: blog.slug,
                            title: content.title,
                          })
                        }
                        leftIcon={<Icons.trash className="h-3.5 w-3.5" />}
                      >
                        {dashboard.removeBookmark}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

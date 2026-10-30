/**
 * Code Empire — Blog overview
 */

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, ScrollReveal } from "dara-ui";
import { blogs } from "@/data/blogs";
import { useDebounce } from "@/hooks";
import { SectionHeader } from "@/features/home/SectionHeader";
import { BlogGrid } from "@/features/blog/BlogGrid";
import { BlogFilters, type BlogSort } from "@/features/blog/BlogFilters";
import { blogPostsContent } from "@/content/blogs";
import { blog } from "@/content/blog";
import { nav, common } from "@/content/common";
import { Icons } from "@/lib/icons";

const PAGE_SIZE = 9;

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") ?? "all",
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<BlogSort>("newest");
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 250);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => {
      const content = blogPostsContent[b.slug];
      if (content) set.add(content.category);
    });
    return Array.from(set);
  }, []);

  useEffect(() => {
    const current = searchParams.get("category") ?? "all";
    if (category === "all" && current !== "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else if (category !== "all" && current !== category) {
      searchParams.set("category", category);
      setSearchParams(searchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    setPage(1);
  }, [category, debouncedQuery, sort]);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();

    let list = blogs.filter((b) => {
      const content = blogPostsContent[b.slug];
      if (!content) return false;
      return category === "all" || content.category === category;
    });

    if (q) {
      list = list.filter((b) => {
        const content = blogPostsContent[b.slug];
        if (!content) return false;
        return (
          content.title.toLowerCase().includes(q) ||
          content.excerpt.toLowerCase().includes(q) ||
          content.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }

    if (sort === "newest") {
      list.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    } else if (sort === "oldest") {
      list.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    } else {
      list.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }

    return list;
  }, [category, debouncedQuery, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="section pt-8">
      <div className="section-container">
        <ScrollReveal animation="fade-up">
          <SectionHeader
            eyebrow={nav.blog}
            title={blog.title}
            subtitle={blog.subtitle}
            align="start"
          />
        </ScrollReveal>

        <BlogFilters
          category={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          sort={sort}
          onSortChange={setSort}
          categories={allCategories}
        />

        <BlogGrid blogs={paginated} columns={3} />

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              leftIcon={<Icons.chevronRight className="h-3.5 w-3.5" />}
            >
              {common.previous}
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i + 1)}
                  className={`w-8 h-8 rounded-[var(--radius-md)] text-xs font-mono transition-colors ${
                    page === i + 1
                      ? "bg-[var(--color-primary-solid)] text-white"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)]/40"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              rightIcon={<Icons.chevronLeft className="h-3.5 w-3.5" />}
            >
              {common.next}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

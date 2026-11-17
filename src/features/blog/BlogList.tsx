/**
 * Code Empire - Blog list
 *
 * Search, category filter and a paged grid of articles.
 */

import { useEffect, useMemo, useState } from "react";
import { Button, Card, Input, ScrollReveal } from "dara-ui";
import { BLOG_PAGE_SIZE } from "@/config/blog";
import { blogList } from "@/content/blog";
import { useDebounce } from "@/hooks/useDebounce";
import { filterArticles, getCategories } from "@/lib/articles";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(BLOG_PAGE_SIZE);

  const debouncedQuery = useDebounce(query);
  const categories = useMemo(() => getCategories(), []);
  const results = useMemo(
    () => filterArticles(debouncedQuery, category),
    [debouncedQuery, category],
  );

  useEffect(() => {
    setVisible(BLOG_PAGE_SIZE);
  }, [debouncedQuery, category]);

  const reset = () => {
    setQuery("");
    setCategory(null);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* ---------- Filters ---------- */}
      <ScrollReveal animation="fade-up">
        <div className="flex flex-col gap-5">
          <Input
            fullWidth
            label={blogList.searchLabel}
            placeholder={blogList.searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={category === null ? "primary" : "glass"}
              aria-pressed={category === null}
              onClick={() => setCategory(null)}
            >
              {blogList.all}
            </Button>
            {categories.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={category === item ? "primary" : "glass"}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}

            <span className="ms-auto text-xs text-[var(--color-text-tertiary)]">
              {blogList.count(results.length)}
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* ---------- Grid ---------- */}
      {results.length > 0 ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.slice(0, visible).map((article, i) => (
              <ScrollReveal
                key={article.slug}
                animation="fade-up"
                delay={(i % 3) * 80}
                className="h-full"
              >
                <BlogCard article={article} />
              </ScrollReveal>
            ))}
          </div>

          {visible < results.length && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setVisible((count) => count + BLOG_PAGE_SIZE)}
              >
                {blogList.loadMore}
              </Button>
            </div>
          )}
        </>
      ) : (
        <Card
          variant="outline"
          className="flex flex-col items-center gap-3 py-12 text-center"
        >
          <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
            {blogList.empty.title}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {blogList.empty.text}
          </p>
          <Button variant="primary" size="sm" onClick={reset}>
            {blogList.empty.reset}
          </Button>
        </Card>
      )}
    </div>
  );
}

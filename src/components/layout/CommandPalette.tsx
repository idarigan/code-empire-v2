/**
 * Code Empire — Command palette
 */

import { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "dara-ui";
import { Input, Badge } from "dara-ui";
import { useUI } from "@/contexts";
import { useKeyboard } from "@/hooks";
import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";
import { coursesContent } from "@/content/courses";
import { blogPostsContent } from "@/content/blogs";
import { coursesPage } from "@/content/courses-page";
import { command } from "@/content/dashboard";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/cn";

interface Result {
  type: "course" | "blog";
  slug: string;
  title: string;
  subtitle: string;
}

export function CommandPalette() {
  const navigate = useNavigate();
  const { commandPaletteOpen, openCommandPalette, closeCommandPalette } =
    useUI();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useKeyboard("k", () => openCommandPalette(), {
    allowInInputs: true,
    preventDefault: false,
  });
  useKeyboard("/", () => openCommandPalette(), { allowInInputs: false });

  useEffect(() => {
    if (commandPaletteOpen) {
      const timer = setTimeout(() => {
        setQuery("");
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [commandPaletteOpen]);

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const courseMatches: Result[] = courses
      .filter((c) => {
        const content = coursesContent[c.slug];
        if (!content) return false;
        const title = content.title.toLowerCase();
        const category = coursesPage[c.category].toLowerCase();
        return title.includes(q) || category.includes(q);
      })
      .slice(0, 5)
      .map((c) => {
        const content = coursesContent[c.slug];
        return {
          type: "course",
          slug: c.slug,
          title: content.title,
          subtitle: coursesPage[c.category],
        };
      });

    const blogMatches: Result[] = blogs
      .filter((b) => {
        const content = blogPostsContent[b.slug];
        if (!content) return false;
        const title = content.title.toLowerCase();
        const category = content.category.toLowerCase();
        const tags = content.tags.map((t) => t.toLowerCase());
        return (
          title.includes(q) ||
          category.includes(q) ||
          tags.some((tag) => tag.includes(q))
        );
      })
      .slice(0, 5)
      .map((b) => {
        const content = blogPostsContent[b.slug];
        return {
          type: "blog",
          slug: b.slug,
          title: content.title,
          subtitle: content.category,
        };
      });

    return [...courseMatches, ...blogMatches];
  }, [query]);

  const handleSelect = (result: Result) => {
    closeCommandPalette();
    navigate(
      result.type === "course"
        ? `/courses/${result.slug}`
        : `/blog/${result.slug}`,
    );
  };

  return (
    <Modal
      isOpen={commandPaletteOpen}
      onClose={closeCommandPalette}
      size="lg"
      closeOnBackdropClick
    >
      <div className="flex flex-col gap-4 -m-2">
        <Input
          ref={inputRef}
          type="search"
          placeholder={command.placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          leftIcon={<Icons.search className="h-4 w-4" />}
          size="md"
        />

        {query && results.length === 0 && (
          <p className="text-center text-sm text-[var(--color-text-tertiary)] py-6">
            {command.noResults}
          </p>
        )}

        {results.length > 0 && (
          <ul className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto">
            {results.map((r) => (
              <li key={`${r.type}-${r.slug}`}>
                <button
                  type="button"
                  onClick={() => handleSelect(r)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)]",
                    "text-start transition-colors duration-150",
                    "hover:bg-[var(--color-bg-elevated)]/60",
                  )}
                >
                  <span className="flex-shrink-0 text-[var(--color-primary)]">
                    {r.type === "course" ? (
                      <Icons.bookOpen className="h-4 w-4" />
                    ) : (
                      <Icons.fileText className="h-4 w-4" />
                    )}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm text-[var(--color-text-primary)] truncate">
                      {r.title}
                    </span>
                    <span className="block text-xs text-[var(--color-text-tertiary)] truncate">
                      {r.subtitle}
                    </span>
                  </span>
                  <Badge variant="secondary" size="sm" outline>
                    {r.type === "course" ? command.courses : command.blog}
                  </Badge>
                </button>
              </li>
            ))}
          </ul>
        )}

        {!query && (
          <div className="text-xs text-[var(--color-text-tertiary)] font-mono text-center py-4">
            {command.hint}
          </div>
        )}
      </div>
    </Modal>
  );
}

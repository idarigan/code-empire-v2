/**
 * Code Empire — Blog filters
 */

import { Dropdown, Input, Tabs } from "dara-ui";
import type { TabItem } from "dara-ui";
import { blog } from "@/content/blog";
import { Icons } from "@/lib/icons";

export type BlogSort = "newest" | "oldest" | "suggested";

interface BlogFiltersProps {
  category: string;
  onCategoryChange: (cat: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
  sort: BlogSort;
  onSortChange: (s: BlogSort) => void;
  categories: string[];
}

export function BlogFilters({
  category,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
  categories,
}: BlogFiltersProps) {
  const categoryOptions = [
    { value: "all", label: blog.allCategories },
    ...categories.map((c) => ({ value: c, label: c })),
  ];

  const sortTabs: TabItem[] = [
    { label: blog.sortNewest, value: "newest", content: null },
    { label: blog.sortOldest, value: "oldest", content: null },
    { label: blog.sortSuggested, value: "suggested", content: null },
  ];

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          options={categoryOptions}
          value={category}
          onChange={onCategoryChange}
          placeholder={blog.categoryPlaceholder}
          searchable
          searchPlaceholder={blog.searchPlaceholder}
          fullWidth
        />
        <Input
          type="search"
          placeholder={blog.searchPlaceholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          leftIcon={<Icons.search className="h-4 w-4" />}
          size="md"
        />
      </div>

      <Tabs
        items={sortTabs}
        activeValue={sort}
        onChange={(v) => onSortChange(v as BlogSort)}
        glowColor="primary"
      />
    </div>
  );
}

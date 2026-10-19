/**
 * Code Empire — Blog filters
 *
 * Category dropdown + search input + sort tabs.
 * Sort options: newest, oldest, suggested (featured first).
 */

import { Dropdown, Input, Tabs, useI18n } from "dara-ui";
import type { TabItem } from "dara-ui";
import { getBlogCategories } from "@/data/blogs";
import { Icons } from "@/lib/icons";

export type BlogSort = "newest" | "oldest" | "suggested";

interface BlogFiltersProps {
  category: string;
  onCategoryChange: (cat: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
  sort: BlogSort;
  onSortChange: (s: BlogSort) => void;
}

export function BlogFilters({
  category,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
}: BlogFiltersProps) {
  const { t } = useI18n();

  const categories = [
    { value: "all", label: t("blog.allCategories") },
    ...getBlogCategories().map((c) => ({ value: c, label: c })),
  ];

  const sortTabs: TabItem[] = [
    { label: t("common.newest"), value: "newest", content: null },
    { label: t("common.oldest"), value: "oldest", content: null },
    { label: t("common.suggested"), value: "suggested", content: null },
  ];

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          options={categories}
          value={category}
          onChange={onCategoryChange}
          placeholder={t("blog.category")}
          searchable
          searchPlaceholder={t("common.search")}
          fullWidth
        />
        <Input
          type="search"
          placeholder={t("common.search")}
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

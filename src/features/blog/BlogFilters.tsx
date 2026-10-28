/**
 * Code Empire — Blog filters
 */

import { Dropdown, Input, Tabs, useI18n } from "dara-ui";
import type { TabItem } from "dara-ui";
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
  const { t } = useI18n();

  const categoryOptions = [
    { value: "all", label: t("blog.allCategories") },
    ...categories.map((c) => ({ value: c, label: c })),
  ];

  const sortTabs: TabItem[] = [
    { label: t("blog.sortNewest"), value: "newest", content: null },
    { label: t("blog.sortOldest"), value: "oldest", content: null },
    { label: t("blog.sortSuggested"), value: "suggested", content: null },
  ];

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dropdown
          options={categoryOptions}
          value={category}
          onChange={onCategoryChange}
          placeholder={t("blog.categoryPlaceholder")}
          searchable
          searchPlaceholder={t("blog.searchPlaceholder")}
          fullWidth
        />
        <Input
          type="search"
          placeholder={t("blog.searchPlaceholder")}
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

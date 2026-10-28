/**
 * Code Empire — Course filters
 *
 * Category tabs + search input. Filtering is fully clientside.
 */

import { Tabs, Input, useI18n } from "dara-ui";
import type { TabItem } from "dara-ui";
import type { CourseCategory } from "@/types";
import { Icons } from "@/lib/icons";

interface CourseFiltersProps {
  category: CourseCategory | "all";
  onCategoryChange: (cat: CourseCategory | "all") => void;
  query: string;
  onQueryChange: (q: string) => void;
}

export function CourseFilters({
  category,
  onCategoryChange,
  query,
  onQueryChange,
}: CourseFiltersProps) {
  const { t } = useI18n();

  const items: TabItem[] = [
    { label: t("courses.all"), value: "all", content: null },
    { label: t("courses.web"), value: "web", content: null },
    { label: t("courses.software"), value: "software", content: null },
    { label: t("courses.game"), value: "game", content: null },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <div className="flex-1 overflow-x-auto">
        <Tabs
          items={items}
          activeValue={category}
          onChange={(v) => onCategoryChange(v as CourseCategory | "all")}
          glowColor="primary"
        />
      </div>
      <Input
        type="search"
        placeholder={t("courses.searchPlaceholder")}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        leftIcon={<Icons.search className="h-4 w-4" />}
        size="sm"
        className="w-full md:w-64"
      />
    </div>
  );
}

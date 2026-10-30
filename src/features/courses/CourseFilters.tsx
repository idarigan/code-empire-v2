/**
 * Code Empire — Course filters
 *
 * Category tabs + search input. Filtering is fully clientside.
 */

import { Tabs, Input } from "dara-ui";
import type { TabItem } from "dara-ui";
import type { CourseCategory } from "@/types";
import { coursesPage } from "@/content/courses-page";
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
  const items: TabItem[] = [
    { label: coursesPage.all, value: "all", content: null },
    { label: coursesPage.web, value: "web", content: null },
    { label: coursesPage.software, value: "software", content: null },
    { label: coursesPage.game, value: "game", content: null },
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
        placeholder={coursesPage.searchPlaceholder}
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        leftIcon={<Icons.search className="h-4 w-4" />}
        size="sm"
        className="w-full md:w-64"
      />
    </div>
  );
}

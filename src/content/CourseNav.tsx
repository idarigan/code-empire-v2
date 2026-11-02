/**
 * Code Empire - Course section nav
 *
 * Sticky tab bar that scrolls to each block and follows the scroll position.
 */

import { useEffect, useState } from "react";
import { Tabs } from "dara-ui";
import type { TabItem } from "dara-ui";

interface CourseNavItem {
  id: string;
  label: string;
}

interface CourseNavProps {
  items: CourseNavItem[];
}

export function CourseNav({ items }: CourseNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const key = items.map((item) => item.id).join(",");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const tabs: TabItem[] = items.map((item) => ({
    label: item.label,
    value: item.id,
    content: null,
  }));

  const handleChange = (id: string) => {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-20 z-30 border-b border-[var(--color-border-secondary)] bg-[var(--color-bg-primary)]/85 py-2 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <Tabs
          items={tabs}
          activeValue={active}
          onChange={handleChange}
          glowColor="primary"
        />
      </div>
    </div>
  );
}

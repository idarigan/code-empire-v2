/**
 * Code Empire — All courses page
 */

import { useMemo, useState } from "react";
import { ScrollReveal, Accordion, useI18n } from "dara-ui";
import { courses } from "@/data/courses";
import type { CourseCategory } from "@/types";
import { useDebounce } from "@/hooks";
import { SectionHeader } from "@/features/home/SectionHeader";
import { CourseGrid } from "@/features/courses/CourseGrid";
import { CourseFilters } from "@/features/courses/CourseFilters";
import { Leaderboard } from "@/features/courses/Leaderboard";

export default function CoursesPage() {
  const { t } = useI18n();
  const [category, setCategory] = useState<CourseCategory | "all">("all");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    return courses
      .filter((c) => category === "all" || c.category === category)
      .filter((c) => {
        if (!q) return true;
        const title = t(`course.${c.slug}.title`).toLowerCase();
        return title.includes(q);
      })
      .sort((a, b) => a.rank - b.rank);
  }, [category, debouncedQuery, t]);

  const faq = [
    {
      id: "faq-1",
      title: t("courses.prerequisite"),
      content: <p>{t("courses.noPrerequisite")}</p>,
    },
    {
      id: "faq-2",
      title: t("register.title"),
      content: <p>{t("register.subtitle")}</p>,
    },
    {
      id: "faq-3",
      title: t("courses.capacity"),
      content: <p>{t("courses.capacity")}</p>,
    },
  ];

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={t("nav.courses")}
              title={t("courses.title")}
              subtitle={t("courses.subtitle")}
              align="start"
            />
          </ScrollReveal>

          <CourseFilters
            category={category}
            onCategoryChange={setCategory}
            query={query}
            onQueryChange={setQuery}
          />

          <CourseGrid courses={filtered} columns={3} />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow="Top"
            title={t("courses.leaderboard")}
            subtitle={t("home.heroSubtitle")}
          />
          <Leaderboard />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow="FAQ"
            title={t("courses.faq")}
            subtitle={t("home.heroSubtitle")}
          />
          <Accordion items={faq} multiple={false} size="md" />
        </div>
      </section>
    </>
  );
}

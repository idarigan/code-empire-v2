/**
 * Code Empire — All courses page
 */

import { useMemo, useState } from "react";
import { ScrollReveal, Accordion } from "dara-ui";
import { courses } from "@/data/courses";
import type { CourseCategory } from "@/types";
import { useDebounce } from "@/hooks";
import { SectionHeader } from "@/features/home/SectionHeader";
import { CourseGrid } from "@/features/courses/CourseGrid";
import { CourseFilters } from "@/features/courses/CourseFilters";
import { Leaderboard } from "@/features/courses/Leaderboard";
import { coursesContent } from "@/content/courses";
import { coursesPage, register } from "@/content/courses-page";
import { home } from "@/content/home";
import { nav } from "@/content/common";

export default function CoursesPage() {
  const [category, setCategory] = useState<CourseCategory | "all">("all");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    return courses
      .filter((c) => category === "all" || c.category === category)
      .filter((c) => {
        if (!q) return true;
        const content = coursesContent[c.slug];
        if (!content) return false;
        return content.title.toLowerCase().includes(q);
      })
      .sort((a, b) => a.rank - b.rank);
  }, [category, debouncedQuery]);

  const faq = [
    {
      id: "faq-1",
      title: coursesPage.prerequisite,
      content: <p>{coursesPage.noPrerequisite}</p>,
    },
    {
      id: "faq-2",
      title: register.title,
      content: <p>{register.subtitle}</p>,
    },
    {
      id: "faq-3",
      title: coursesPage.capacity,
      content: <p>{coursesPage.capacity}</p>,
    },
  ];

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={nav.courses}
              title={coursesPage.title}
              subtitle={coursesPage.subtitle}
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
            eyebrow={coursesPage.leaderboardEyebrow}
            title={coursesPage.leaderboard}
            subtitle={home.heroSubtitle}
          />
          <Leaderboard />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow={coursesPage.faqEyebrow}
            title={coursesPage.faq}
            subtitle={home.heroSubtitle}
          />
          <Accordion items={faq} multiple={false} size="md" />
        </div>
      </section>
    </>
  );
}

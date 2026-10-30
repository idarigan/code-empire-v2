/**
 * Code Empire — Popular courses podium
 */

import { useNavigate } from "react-router-dom";
import { Card, Badge, Button, Progress } from "dara-ui";
import { getTopCourses } from "@/data/courses";
import { SectionHeader } from "./SectionHeader";
import { coursesContent } from "@/content/courses";
import { coursesPage } from "@/content/courses-page";
import { home } from "@/content/home";
import { common } from "@/content/common";
import { Icons } from "@/lib/icons";

export function PopularPodium() {
  const navigate = useNavigate();
  const [first, second, third] = getTopCourses(3);

  const podium = [
    { course: second, rank: 2, height: "h-44", glow: "secondary" as const },
    { course: first, rank: 1, height: "h-64", glow: "accent" as const },
    { course: third, rank: 3, height: "h-40", glow: "primary" as const },
  ];

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.popularEyebrow}
          title={home.popularCourses}
          subtitle={coursesPage.subtitle}
        />

        <div className="flex items-end justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {podium.map(({ course, rank, height, glow }) => {
            const content = coursesContent[course.slug];
            if (!content) return null;
            return (
              <Card
                key={course.slug}
                glow={glow}
                className={`relative ${height} flex-1 max-w-[220px] flex flex-col justify-end p-4 cursor-pointer hover:-translate-y-2 transition-transform duration-300`}
                onClick={() => navigate(`/courses/${course.slug}`)}
              >
                <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2">
                  <Badge
                    variant={rank === 1 ? "warning" : "secondary"}
                    glow={rank === 1}
                    size="md"
                  >
                    <Icons.trophy className="h-3 w-3 me-1 inline-flex" />#{rank}
                  </Badge>
                </div>

                <div className="flex flex-col gap-2 text-center mt-4">
                  <h3 className="font-heading font-bold text-sm md:text-base text-[var(--color-text-primary)] line-clamp-2">
                    {content.title}
                  </h3>

                  <Progress
                    value={Math.round(
                      (course.enrolled / course.capacity) * 100,
                    )}
                    color={rank === 1 ? "warning" : "primary"}
                    size="sm"
                    showLabel
                    labelPosition="right"
                  />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="primary"
            glow="primary"
            onClick={() => navigate("/courses")}
            rightIcon={<Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />}
          >
            {common.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}

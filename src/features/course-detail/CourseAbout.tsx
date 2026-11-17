/**
 * Code Empire - Course about
 *
 * Overview and learning outcomes in one glass card.
 */

import { Card, ScrollReveal } from "dara-ui";
import { ContentBlocks } from "@/components/ContentBlocks";
import { courseDetails } from "@/content/courseDetails";
import { coursePage } from "@/content/coursesPage";

export function CourseAbout({ slug }: { slug: string }) {
  const detail = courseDetails[slug];

  if (!detail) return null;

  return (
    <ScrollReveal animation="fade-up">
      <Card padding="lg">
        <ContentBlocks
          headingLevel={2}
          sections={[
            { title: coursePage.overviewTitle, paragraphs: [detail.overview] },
            { title: coursePage.outcomesTitle, hints: detail.outcomes },
          ]}
        />
      </Card>
    </ScrollReveal>
  );
}

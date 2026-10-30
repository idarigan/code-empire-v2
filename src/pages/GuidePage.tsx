/**
 * Code Empire — Learning guide page
 */

import { Card, Accordion, Button, ScrollReveal } from "dara-ui";
import { useNavigate } from "react-router-dom";
import { classTypes, contactInfo } from "@/data/constants";
import { SectionHeader } from "@/features/home/SectionHeader";
import { ClassTypeSection } from "@/features/courses/ClassTypeSection";
import { TeachingMethod } from "@/features/courses/TeachingMethod";
import { guide } from "@/content/guide";
import { coursesPage } from "@/content/courses-page";
import { home } from "@/content/home";
import { nav, contact } from "@/content/common";
import { Icons } from "@/lib/icons";

export default function GuidePage() {
  const navigate = useNavigate();

  const faq = [
    {
      id: "1",
      title: coursesPage.prerequisite,
      content: <p>{coursesPage.noPrerequisite}</p>,
    },
    {
      id: "2",
      title: guide.classTypes,
      content: <p>{guide.subtitle}</p>,
    },
    {
      id: "3",
      title: guide.sessionStructure,
      content: <p>{guide.teachingMethod}</p>,
    },
  ];

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={nav.guide}
              title={guide.title}
              subtitle={guide.subtitle}
              align="center"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-container">
          <SectionHeader
            eyebrow={guide.classTypes}
            title={home.howItWorks}
            align="start"
          />
          <ClassTypeSection classTypes={classTypes} />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow={guide.teachingMethod}
            title={guide.teachingMethod}
            subtitle={home.heroType3}
          />
          <TeachingMethod />
        </div>
      </section>

      <section className="section">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow={guide.faqEyebrow} title={coursesPage.faq} />
          <Accordion items={faq} multiple={false} />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <Card glow="accent" className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-bold mb-2">
              {guide.support}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-5">
              {home.finalCTADesc}
            </p>
            <div className="flex items-center gap-3 justify-center flex-wrap">
              <Button
                as="a"
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                glow="primary"
                leftIcon={<Icons.send className="h-4 w-4" />}
              >
                {contact.links}
              </Button>
              <Button
                variant="outline"
                leftIcon={<Icons.messageCircle className="h-4 w-4" />}
                onClick={() => navigate("/contact")}
              >
                {nav.contact}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

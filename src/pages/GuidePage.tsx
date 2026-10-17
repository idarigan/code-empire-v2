/**
 * Code Empire — Learning guide page
 *
 * Explains class types, teaching method, session structure.
 */

import { Card, Accordion, Button, ScrollReveal, useI18n } from "dara-ui";
import { useNavigate } from "react-router-dom";
import { classTypes, contactInfo } from "@/data/constants";
import { SectionHeader } from "@/features/home/SectionHeader";
import { ClassTypeSection } from "@/features/courses/ClassTypeSection";
import { TeachingMethod } from "@/features/courses/TeachingMethod";
import { Icons } from "@/lib/icons";

export default function GuidePage() {
  const { t } = useI18n();
  const navigate = useNavigate();

  const faq = [
    {
      id: "1",
      title: t("courses.prerequisite"),
      content: <p>{t("courses.noPrerequisite")}</p>,
    },
    {
      id: "2",
      title: t("guide.classTypes"),
      content: <p>{t("guide.subtitle")}</p>,
    },
    {
      id: "3",
      title: t("guide.sessionStructure"),
      content: <p>{t("guide.teachingMethod")}</p>,
    },
  ];

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={t("nav.guide")}
              title={t("guide.title")}
              subtitle={t("guide.subtitle")}
              align="center"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-container">
          <SectionHeader
            eyebrow={t("guide.classTypes")}
            title={t("home.howItWorks")}
            align="start"
          />
          <ClassTypeSection classTypes={classTypes} />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow={t("guide.teachingMethod")}
            title={t("guide.teachingMethod")}
            subtitle={t("home.heroType3")}
          />
          <TeachingMethod />
        </div>
      </section>

      <section className="section">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="FAQ" title={t("courses.faq")} />
          <Accordion items={faq} multiple={false} />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <Card glow="accent" className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-xl font-bold mb-2">
              {t("guide.support")}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-5">
              {t("home.finalCTADesc")}
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
                {t("contact.links")}
              </Button>
              <Button
                variant="outline"
                leftIcon={<Icons.messageCircle className="h-4 w-4" />}
                onClick={() => navigate("/contact")}
              >
                {t("nav.contact")}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

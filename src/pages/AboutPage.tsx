/**
 * Code Empire — About page
 *
 * Three-half sections, numbers, team grid, join CTA.
 */

import { useNavigate } from "react-router-dom";
import { Card, Button, ScrollReveal, useI18n } from "dara-ui";
import { HalfSections } from "@/features/about/HalfSections";
import { Numbers } from "@/features/about/Numbers";
import { TeamGrid } from "@/features/about/TeamGrid";
import { SectionHeader } from "@/features/home/SectionHeader";
import { Icons } from "@/lib/icons";

export default function AboutPage() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={t("nav.about")}
              title={t("about.title")}
              subtitle={t("about.subtitle")}
              align="center"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-container">
          <HalfSections />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <Numbers />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow={t("about.team")}
            title={t("about.team")}
            subtitle={t("home.heroSubtitle")}
          />
          <TeamGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <Card glow="accent" className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4 text-[var(--color-accent)]">
              <Icons.rocket className="h-10 w-10" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-2">
              {t("about.joinUs")}
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mb-5">
              {t("home.finalCTADesc")}
            </p>
            <div className="flex items-center gap-3 justify-center flex-wrap">
              <Button
                variant="primary"
                glow="primary"
                leftIcon={<Icons.bookOpen className="h-4 w-4" />}
                onClick={() => navigate("/courses")}
              >
                {t("nav.courses")}
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

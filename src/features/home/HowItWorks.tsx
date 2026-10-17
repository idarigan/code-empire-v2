/**
 * Code Empire — How it works
 *
 * Three class-type cards from constants.
 * Each links to the guide page.
 */

import { useNavigate } from "react-router-dom";
import { CharacterCard, Button, ScrollReveal, useI18n } from "dara-ui";
import { classTypes } from "@/data/constants";
import { SectionHeader } from "./SectionHeader";
import { Icons } from "@/lib/icons";

export function HowItWorks() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Guide"
          title={t("home.howItWorks")}
          subtitle={t("guide.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {classTypes.map((cls, i) => (
            <ScrollReveal key={cls.slug} animation="fade-up" delay={i * 120}>
              <CharacterCard
                name={cls.title}
                subtitle={cls.subtitle}
                quote={cls.description}
                portrait={cls.image}
                traits={cls.features}
                glow={cls.glow}
                layout="vertical"
              />
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            glow="primary"
            leftIcon={<Icons.bookOpen className="h-4 w-4" />}
            onClick={() => navigate("/guide")}
          >
            {t("home.viewGuide")}
          </Button>
        </div>
      </div>
    </section>
  );
}

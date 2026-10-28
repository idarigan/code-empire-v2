/**
 * Code Empire — How it works
 */

import { useNavigate } from "react-router-dom";
import { CharacterCard, Button, ScrollReveal, useI18n } from "dara-ui";
import { classTypes } from "@/data/constants";
import { SectionHeader } from "./SectionHeader";
import { Icons } from "@/lib/icons";

export function HowItWorks() {
  const { t } = useI18n();
  const navigate = useNavigate();

  const keyForSlug = (slug: string) => {
    if (slug === "private-online") return "privateOnline";
    if (slug === "private-offline") return "privateOffline";
    return "groupOnline";
  };

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={t("home.guideEyebrow")}
          title={t("home.howItWorks")}
          subtitle={t("guide.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {classTypes.map((cls, i) => {
            const titleKey = `guide.${keyForSlug(cls.slug)}`;
            const descKey = `${titleKey}Desc`;
            const featureKey = (idx: number) =>
              `guide.feature.${cls.slug.replace("-", "")}.${idx + 1}`;

            return (
              <ScrollReveal key={cls.slug} animation="fade-up" delay={i * 120}>
                <CharacterCard
                  name={t(titleKey)}
                  subtitle=""
                  quote={t(descKey)}
                  portrait={cls.image}
                  traits={Array.from({ length: cls.featureCount }, (_, idx) =>
                    t(featureKey(idx)),
                  )}
                  glow={cls.glow}
                  layout="vertical"
                />
              </ScrollReveal>
            );
          })}
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

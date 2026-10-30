/**
 * Code Empire — How it works
 */

import { useNavigate } from "react-router-dom";
import { CharacterCard, Button, ScrollReveal } from "dara-ui";
import { classTypes } from "@/data/constants";
import { SectionHeader } from "./SectionHeader";
import { guide } from "@/content/guide";
import { home } from "@/content/home";
import { Icons } from "@/lib/icons";

const keyForSlug = (
  slug: string,
): "privateOnline" | "privateOffline" | "groupOnline" => {
  if (slug === "private-online") return "privateOnline";
  if (slug === "private-offline") return "privateOffline";
  return "groupOnline";
};

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.guideEyebrow}
          title={home.howItWorks}
          subtitle={guide.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {classTypes.map((cls, i) => {
            const key = keyForSlug(cls.slug);
            const title = guide[key];
            const desc = guide[`${key}Desc` as keyof typeof guide] as string;
            const features = guide.features[key];

            return (
              <ScrollReveal key={cls.slug} animation="fade-up" delay={i * 120}>
                <CharacterCard
                  name={title}
                  subtitle=""
                  quote={desc}
                  portrait={cls.image}
                  traits={features}
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
            {home.viewGuide}
          </Button>
        </div>
      </div>
    </section>
  );
}

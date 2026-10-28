/**
 * Code Empire — Final CTA
 */

import { useNavigate } from "react-router-dom";
import { Card, Button, ScrollReveal, useI18n } from "dara-ui";
import { contactInfo } from "@/data/constants";
import { Icons } from "@/lib/icons";

export function FinalCTA() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="section-container">
        <ScrollReveal animation="flip-up">
          <Card
            glow="accent"
            className="max-w-4xl mx-auto text-center py-12 md:py-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-gradient-hero mb-4">
              {t("home.finalCTA")}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base md:text-lg mb-8 max-w-xl mx-auto">
              {t("home.finalCTADesc")}
            </p>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Button
                variant="primary"
                size="lg"
                glow="primary"
                leftIcon={<Icons.bookOpen className="h-4 w-4" />}
                onClick={() => navigate("/courses")}
              >
                {t("nav.courses")}
              </Button>
              <Button
                as="a"
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                leftIcon={<Icons.send className="h-4 w-4" />}
              >
                {t("contact.links")}
              </Button>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

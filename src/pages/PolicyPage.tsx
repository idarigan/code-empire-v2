/**
 * Code Empire — Policy overview
 *
 * Charter bill + rules list + validity warning.
 * Reads Persian by default and switches to English for en/fr locales.
 */

import { Card, ScrollReveal, useI18n } from "dara-ui";
import { charterBill, charterBillI18n } from "@/data/policy";
import { RulesBill } from "@/features/policy/RulesBill";
import { RulesList } from "@/features/policy/RulesList";
import { SectionHeader } from "@/features/home/SectionHeader";
import { Icons } from "@/lib/icons";

export default function PolicyPage() {
  const { t, language } = useI18n();
  const locale = language || "fa";

  // Pick the right charter based on current language.
  // charterBillI18n stores paragraphs as an array; the RulesBill component
  // expects a single `body` string, so we join them for the UI.
  const displayCharter =
    locale === "fa"
      ? charterBill
      : charterBillI18n.map((item, i) => ({
          id: String(i + 1),
          title: item.title,
          body: item.paragraphs.join(" "),
        }));

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={t("nav.policy")}
              title={t("policy.title")}
              subtitle={t("policy.subtitle")}
              align="center"
            />
          </ScrollReveal>

          <Card
            variant="outline"
            padding="sm"
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
              <Icons.info className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
              <p className="leading-relaxed">{t("policy.validFrom")}</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-container">
          <SectionHeader
            eyebrow={t("policy.charter")}
            title={t("policy.charter")}
            align="start"
          />
          <RulesBill items={displayCharter} />
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <SectionHeader
            eyebrow={t("policy.rules")}
            title={t("policy.rules")}
            align="start"
          />
          <RulesList />
        </div>
      </section>
    </>
  );
}

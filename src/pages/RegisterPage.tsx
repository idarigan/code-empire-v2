/**
 * Code Empire — Register page
 *
 * Hero + registration form. Supports query params for prefilling:
 * /courses/register?course=slug&type=group
 */

import { ScrollReveal, useI18n } from "dara-ui";
import { RegistrationForm } from "@/features/courses/RegistrationForm";
import { SectionHeader } from "@/features/home/SectionHeader";

export default function RegisterPage() {
  const { t } = useI18n();

  return (
    <section className="section pt-8">
      <div className="section-container max-w-3xl">
        <ScrollReveal animation="fade-up">
          <SectionHeader
            eyebrow={t("register.title")}
            title={t("register.title")}
            subtitle={t("register.subtitle")}
            align="center"
          />
        </ScrollReveal>

        <RegistrationForm />
      </div>
    </section>
  );
}

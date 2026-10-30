/**
 * Code Empire — Register page
 *
 * Hero + registration form. Supports query params for prefilling:
 * /courses/register?course=slug&type=group
 */

import { ScrollReveal } from "dara-ui";
import { RegistrationForm } from "@/features/courses/RegistrationForm";
import { SectionHeader } from "@/features/home/SectionHeader";
import { register } from "@/content/courses-page";

export default function RegisterPage() {
  return (
    <section className="section pt-8">
      <div className="section-container max-w-3xl">
        <ScrollReveal animation="fade-up">
          <SectionHeader
            eyebrow={register.title}
            title={register.title}
            subtitle={register.subtitle}
            align="center"
          />
        </ScrollReveal>

        <RegistrationForm />
      </div>
    </section>
  );
}

/**
 * Code Empire — Contact page
 *
 * Info cards, communication bridges, contact form.
 */

import { ScrollReveal, useI18n } from "dara-ui";
import { ContactInfo } from "@/features/contact/ContactInfo";
import { ContactLinks } from "@/features/contact/ContactLinks";
import { ContactForm } from "@/features/contact/ContactForm";
import { SectionHeader } from "@/features/home/SectionHeader";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={t("nav.contact")}
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
              align="center"
            />
          </ScrollReveal>
          <ContactInfo />
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-container">
          <ContactLinks />
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-container max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

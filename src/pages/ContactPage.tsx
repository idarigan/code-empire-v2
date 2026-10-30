/**
 * Code Empire — Contact page
 *
 * Info cards, communication bridges, contact form.
 */

import { ScrollReveal } from "dara-ui";
import { ContactInfo } from "@/features/contact/ContactInfo";
import { ContactLinks } from "@/features/contact/ContactLinks";
import { ContactForm } from "@/features/contact/ContactForm";
import { SectionHeader } from "@/features/home/SectionHeader";
import { contact } from "@/content/contact";
import { nav } from "@/content/common";

export default function ContactPage() {
  return (
    <>
      <section className="section pt-8">
        <div className="section-container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow={nav.contact}
              title={contact.title}
              subtitle={contact.subtitle}
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

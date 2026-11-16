/**
 * Code Empire - Contact page
 */

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { contactHero } from "@/content/contact";
import { Channels, ContactForm, ContactSide } from "@/features/contact";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function ContactPage() {
  usePageTitle(contactHero.metaTitle);

  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        subtitle={contactHero.subtitle}
      />

      <Section id="contact">
        <Channels />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactSide />
          </div>
        </div>
      </Section>
    </>
  );
}

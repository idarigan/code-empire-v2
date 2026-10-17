/**
 * Code Empire — Newsletter section
 *
 * Large newsletter signup card. Same schema and sender as the footer mini-form.
 */

import { useState, type FormEvent } from "react";
import { Card, Input, Button, ScrollReveal, useI18n, useToast } from "dara-ui";
import { sendNewsletter } from "@/lib/emailjs";
import { newsletterSchema, zodErrors } from "@/lib/validation";
import { newsletterStore } from "@/lib/storage";
import { Icons } from "@/lib/icons";

export function NewsletterSection() {
  const { t } = useI18n();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      const errs = zodErrors(parsed.error);
      setError(errs.email ?? t("form.invalidEmail"));
      return;
    }

    setLoading(true);
    try {
      await sendNewsletter({ email });
      await newsletterStore.add(email);
      toast.success(t("home.newsletter"));
      setEmail("");
    } catch {
      toast.error(t("form.failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="section-container">
        <ScrollReveal animation="zoom-in">
          <Card glow="accent" className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4 text-[var(--color-accent)]">
              <Icons.mail className="h-10 w-10" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              {t("home.newsletter")}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              {t("home.newsletterHint")}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={t("contact.email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validation={error ? "error" : undefined}
                errorMessage={error ?? undefined}
                leftIcon={<Icons.mail className="h-4 w-4" />}
                size="md"
                className="flex-1"
              />
              <Button
                type="submit"
                variant="accent"
                size="md"
                glow="accent"
                loading={loading}
                leftIcon={<Icons.send className="h-4 w-4" />}
              >
                {t("common.save")}
              </Button>
            </form>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

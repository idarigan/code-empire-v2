/**
 * Code Empire - Newsletter section
 *
 * Large newsletter signup card. Same schema and sender as the footer mini-form.
 */

import { useState, type FormEvent } from "react";
import { Card, Input, Button, ScrollReveal, useToast } from "dara-ui";
import { sendNewsletter } from "@/lib/emailjs";
import { newsletterSchema, zodErrors } from "@/lib/validation";
import { newsletterStore } from "@/lib/storage";
import { home } from "@/content/home";
import { contact } from "@/content/contact";
import { form, common } from "@/content/common";
import { Icons } from "@/lib/icons";

export function NewsletterSection() {
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
      setError(errs.email ?? form.invalidEmail);
      return;
    }

    setLoading(true);
    try {
      await sendNewsletter({ email });
      await newsletterStore.add(email);
      toast.success(home.newsletter);
      setEmail("");
    } catch {
      toast.error(form.failed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="section-container">
        <ScrollReveal animation="zoom-in">
          <Card glow="accent" className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col items-start gap-3 text-start">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]"
                  style={{
                    background: "var(--color-accent-light)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icons.mail className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)] md:text-3xl">
                  {home.newsletter}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {home.newsletterHint}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder={contact.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  validation={error ? "error" : undefined}
                  errorMessage={error ?? undefined}
                  leftIcon={<Icons.mail className="h-4 w-4" />}
                  size="md"
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="md"
                  glow="accent"
                  fullWidth
                  loading={loading}
                  leftIcon={<Icons.send className="h-4 w-4" />}
                >
                  {common.save}
                </Button>
              </form>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

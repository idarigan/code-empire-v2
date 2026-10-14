/**
 * Code Empire — Footer newsletter mini-form
 *
 * Compact email input + submit button for the footer.
 * Shares the schema and EmailJS sender with the full-page newsletter.
 */

import { useState, type FormEvent } from "react";
import { useI18n, useToast } from "dara-ui";
import { Button, Input } from "dara-ui";
import { sendNewsletter } from "@/lib/emailjs";
import { newsletterSchema, zodErrors } from "@/lib/validation";
import { newsletterStore } from "@/lib/storage";
import { Icons } from "@/lib/icons";

export function NewsletterMini() {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 items-start">
        <Input
          type="email"
          placeholder={t("contact.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validation={error ? "error" : undefined}
          errorMessage={error ?? undefined}
          leftIcon={<Icons.mail className="h-4 w-4" />}
          size="sm"
          className="flex-1"
        />
        <Button
          type="submit"
          variant="primary"
          size="sm"
          loading={loading}
          rightIcon={<Icons.send className="h-3.5 w-3.5" />}
        >
          {t("common.save")}
        </Button>
      </div>
    </form>
  );
}

/**
 * Code Empire — Contact form
 *
 * Zod-validated form (name, email, phone, subject, message).
 * Sends via EmailJS and clears on success.
 */

import { useState, type FormEvent } from "react";
import { Card, Input, Button, useI18n, useToast } from "dara-ui";
import { sendContact } from "@/lib/emailjs";
import { contactSchema, zodErrors } from "@/lib/validation";
import { Icons } from "@/lib/icons";

interface FormState {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const { t } = useI18n();
  const toast = useToast();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const { [key as string]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(zodErrors(parsed.error));
      return;
    }

    setSubmitting(true);
    try {
      await sendContact(form);
      toast.success(t("contact.success"));
      setForm(EMPTY);
    } catch {
      toast.error(t("form.failed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card glow="primary">
      <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
        <Icons.messageCircle className="h-5 w-5 text-[var(--color-primary)]" />
        {t("contact.form")}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("contact.name")}
            placeholder={t("contact.name")}
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            validation={errors.name ? "error" : undefined}
            errorMessage={errors.name}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
          <Input
            label={t("contact.lastName")}
            placeholder={t("contact.lastName")}
            value={form.lastName}
            onChange={(e) => setField("lastName", e.target.value)}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("contact.email")}
            type="email"
            placeholder={t("contact.email")}
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            validation={errors.email ? "error" : undefined}
            errorMessage={errors.email}
            leftIcon={<Icons.mail className="h-4 w-4" />}
          />
          <Input
            label={t("contact.phone")}
            type="tel"
            placeholder="09xxxxxxxxx"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            validation={errors.phone ? "error" : undefined}
            errorMessage={errors.phone}
            leftIcon={<Icons.phone className="h-4 w-4" />}
          />
        </div>

        <Input
          label={t("contact.subject")}
          placeholder={t("contact.subject")}
          value={form.subject}
          onChange={(e) => setField("subject", e.target.value)}
          validation={errors.subject ? "error" : undefined}
          errorMessage={errors.subject}
          leftIcon={<Icons.fileText className="h-4 w-4" />}
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[var(--color-text-secondary)]">
            {t("contact.message")}
          </label>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder={t("contact.message")}
            className="w-full font-sans rounded-[14px] px-4 py-3 text-base outline-none transition-all bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] focus:border-[var(--color-primary)] focus:bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] resize-y min-h-[120px]"
            dir="auto"
          />
          {errors.message && (
            <p className="text-xs text-[var(--color-danger)]">
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          glow="primary"
          loading={submitting}
          leftIcon={<Icons.send className="h-4 w-4" />}
        >
          {submitting ? t("form.sending") : t("contact.submit")}
        </Button>
      </form>
    </Card>
  );
}

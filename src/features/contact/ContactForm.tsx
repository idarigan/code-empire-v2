/**
 * Code Empire - Contact form
 *
 * Validated form that opens a ready-to-send mail draft.
 */

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Button,
  Card,
  Dropdown,
  Input,
  Radio,
  ScrollReveal,
  useToast,
} from "dara-ui";
import { SendIcon } from "@/components/icons";
import { Textarea } from "@/components/Textarea";
import { form } from "@/content/contact";
import { openMailDraft } from "@/lib/contact";
import { formatNumber } from "@/lib/format";
import { MESSAGE_MAX, toLatinDigits, validateContact } from "@/lib/validation";
import type { ContactErrors, ContactValues } from "@/lib/validation";

// ============================================
// State
// ============================================

type ReplyMethod = "phone" | "telegram" | "email";

const EMPTY: ContactValues = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const toast = useToast();
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [reply, setReply] = useState<ReplyMethod>("phone");

  const setField = <K extends keyof ContactValues>(key: K, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  // ============================================
  // Submit
  // ============================================

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const found = validateContact(values, form.errors);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    const subject =
      form.subjects.find((item) => item.value === values.subject)?.label ??
      form.mailHeading;
    const replyLabel =
      form.reply.options.find((item) => item.value === reply)?.label ?? "";
    const fullName = `${values.name} ${values.lastName}`.trim();

    const body = [
      form.mailHeading,
      "",
      `${form.fields.name.label}: ${fullName}`,
      `${form.fields.email.label}: ${values.email}`,
      `${form.fields.phone.label}: ${values.phone}`,
      `${form.reply.label} ${replyLabel}`,
      "",
      values.message,
    ].join("\n");

    openMailDraft(subject, body);
    toast.success(form.success);
    setValues(EMPTY);
    setErrors({});
  };

  return (
    <ScrollReveal animation="fade-up" className="h-full">
      <Card glow="primary" padding="lg" className="h-full">
        <div className="mb-6 flex flex-col gap-1.5">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
            {form.title}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {form.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              fullWidth
              label={form.fields.name.label}
              placeholder={form.fields.name.placeholder}
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              validation={errors.name ? "error" : undefined}
              errorMessage={errors.name}
            />
            <Input
              fullWidth
              label={form.fields.lastName.label}
              placeholder={form.fields.lastName.placeholder}
              value={values.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              fullWidth
              dir="ltr"
              type="email"
              label={form.fields.email.label}
              placeholder={form.fields.email.placeholder}
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
              validation={errors.email ? "error" : undefined}
              errorMessage={errors.email}
            />
            <Input
              fullWidth
              dir="ltr"
              type="tel"
              inputMode="numeric"
              maxLength={11}
              label={form.fields.phone.label}
              placeholder={form.fields.phone.placeholder}
              value={values.phone}
              onChange={(e) => setField("phone", toLatinDigits(e.target.value))}
              validation={errors.phone ? "error" : undefined}
              errorMessage={errors.phone}
            />
          </div>

          <Dropdown
            fullWidth
            label={form.fields.subject.label}
            placeholder={form.fields.subject.placeholder}
            options={form.subjects}
            value={values.subject}
            onChange={(value) => setField("subject", value)}
            error={Boolean(errors.subject)}
            errorMessage={errors.subject}
          />

          <Textarea
            label={form.fields.message.label}
            placeholder={form.fields.message.placeholder}
            value={values.message}
            maxLength={MESSAGE_MAX}
            onChange={(e) => setField("message", e.target.value)}
            errorMessage={errors.message}
            helperText={`${formatNumber(values.message.length)} / ${formatNumber(MESSAGE_MAX)}`}
          />

          <fieldset className="flex flex-col gap-3">
            <legend className="mb-1 text-sm font-medium text-[var(--color-text-secondary)]">
              {form.reply.label}
            </legend>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {form.reply.options.map((option) => (
                <Radio
                  key={option.value}
                  name="reply-method"
                  value={option.value}
                  label={option.label}
                  checked={reply === option.value}
                  onCheckedChange={(checked) => {
                    if (checked) setReply(option.value as ReplyMethod);
                  }}
                  glow={reply === option.value}
                />
              ))}
            </div>
          </fieldset>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            glow="primary"
            fullWidth
            leftIcon={<SendIcon className="h-4 w-4" />}
          >
            {form.submit}
          </Button>
        </form>
      </Card>
    </ScrollReveal>
  );
}

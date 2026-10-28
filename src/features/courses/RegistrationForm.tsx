/**
 * Code Empire — Course registration form
 */

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Checkbox,
  Dropdown,
  useToast,
  useI18n,
} from "dara-ui";
import { courses, getCourseBySlug } from "@/data/courses";
import { sendRegister } from "@/lib/emailjs";
import { registerSchema, zodErrors } from "@/lib/validation";
import { useProgress } from "@/contexts";
import { Icons } from "@/lib/icons";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseSlug: string;
  acceptedTerms: boolean;
}

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  courseSlug: "",
  acceptedTerms: false,
};

export function RegistrationForm() {
  const { t } = useI18n();
  const toast = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enroll } = useProgress();

  const initialSlug = searchParams.get("course") ?? "";
  const initialType = (searchParams.get("type") ?? "group") as
    | "group"
    | "private";

  const [form, setForm] = useState<FormState>({
    ...EMPTY,
    courseSlug: initialSlug,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (initialSlug) {
      setForm((prev) => ({ ...prev, courseSlug: initialSlug }));
    }
  }, [initialSlug]);

  const courseOptions = useMemo(
    () =>
      courses.map((c) => ({
        value: c.slug,
        label: t(`course.${c.slug}.title`),
      })),
    [t],
  );

  const selectedCourse = getCourseBySlug(form.courseSlug);

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

    const parsed = registerSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(zodErrors(parsed.error));
      return;
    }

    if (!selectedCourse) {
      setErrors({ courseSlug: t("form.required") });
      return;
    }

    setSubmitting(true);
    try {
      await Promise.all([
        enroll(selectedCourse.slug, initialType),
        sendRegister({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          courseTitle: t(`course.${selectedCourse.slug}.title`),
          courseSlug: selectedCourse.slug,
        }),
      ]);

      toast.success(t("register.success"));
      setSuccess(t(`course.${selectedCourse.slug}.title`));
      setForm({ ...EMPTY });
    } catch {
      toast.error(t("form.failed"));
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <Card glow="primary" className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-[var(--color-success)]">
          <Icons.check className="h-12 w-12" />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-2 text-[var(--color-text-primary)]">
          {t("register.success")}
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          {success}
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-6">
          {t("register.successDesc")}
        </p>
        <div className="flex items-center gap-3 justify-center flex-wrap">
          <Button
            variant="primary"
            leftIcon={<Icons.dashboard className="h-4 w-4" />}
            onClick={() => navigate("/dashboard/courses")}
          >
            {t("dashboard.courses")}
          </Button>
          <Button
            variant="outline"
            leftIcon={<Icons.home className="h-4 w-4" />}
            onClick={() => navigate("/")}
          >
            {t("nav.home")}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card glow="primary" className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("register.firstName")}
            placeholder={t("register.firstName")}
            value={form.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            validation={errors.firstName ? "error" : undefined}
            errorMessage={errors.firstName}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
          <Input
            label={t("register.lastName")}
            placeholder={t("register.lastName")}
            value={form.lastName}
            onChange={(e) => setField("lastName", e.target.value)}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={t("register.email")}
            type="email"
            placeholder={t("register.email")}
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            validation={errors.email ? "error" : undefined}
            errorMessage={errors.email}
            leftIcon={<Icons.mail className="h-4 w-4" />}
          />
          <Input
            label={t("register.phone")}
            type="tel"
            placeholder="09xxxxxxxxx"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            validation={errors.phone ? "error" : undefined}
            errorMessage={errors.phone}
            leftIcon={<Icons.phone className="h-4 w-4" />}
          />
        </div>

        <Dropdown
          label={t("register.course")}
          options={courseOptions}
          value={form.courseSlug}
          onChange={(v) => setField("courseSlug", v)}
          placeholder={t("register.selectCourse")}
          searchable
          searchPlaceholder={t("command.placeholder")}
          fullWidth
          error={Boolean(errors.courseSlug)}
          errorMessage={errors.courseSlug}
        />

        <div className="flex items-start gap-3">
          <Checkbox
            label={t("register.terms")}
            checked={form.acceptedTerms}
            onCheckedChange={(v) => setField("acceptedTerms", v)}
            glow
          />
        </div>
        {errors.acceptedTerms && (
          <p className="text-xs text-[var(--color-danger)] -mt-3">
            {errors.acceptedTerms}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          glow="primary"
          loading={submitting}
          leftIcon={<Icons.rocket className="h-4 w-4" />}
        >
          {submitting ? t("register.submitting") : t("register.submit")}
        </Button>
      </form>
    </Card>
  );
}

/**
 * Code Empire — Course registration form
 */

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Input, Button, Checkbox, Dropdown, useToast } from "dara-ui";
import { courses, getCourseBySlug } from "@/data/courses";
import { sendRegister } from "@/lib/emailjs";
import { registerSchema, zodErrors } from "@/lib/validation";
import { useProgress } from "@/contexts";
import { coursesContent } from "@/content/courses";
import { coursesPage, register as registerCopy } from "@/content/courses-page";
import { form } from "@/content/common";
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
  const toast = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { enroll } = useProgress();

  const initialSlug = searchParams.get("course") ?? "";
  const initialType = (searchParams.get("type") ?? "group") as
    | "group"
    | "private";

  const [formState, setForm] = useState<FormState>({
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
        label: coursesContent[c.slug]?.title ?? c.slug,
      })),
    [],
  );

  const selectedCourse = getCourseBySlug(formState.courseSlug);

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

    const parsed = registerSchema.safeParse(formState);
    if (!parsed.success) {
      setErrors(zodErrors(parsed.error));
      return;
    }

    if (!selectedCourse) {
      setErrors({ courseSlug: form.required });
      return;
    }

    const courseContent = coursesContent[selectedCourse.slug];
    if (!courseContent) return;

    setSubmitting(true);
    try {
      await Promise.all([
        enroll(selectedCourse.slug, initialType),
        sendRegister({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          phone: formState.phone,
          courseTitle: courseContent.title,
          courseSlug: selectedCourse.slug,
        }),
      ]);

      toast.success(registerCopy.success);
      setSuccess(courseContent.title);
      setForm({ ...EMPTY });
    } catch {
      toast.error(form.failed);
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
          {registerCopy.success}
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          {success}
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)] mb-6">
          {registerCopy.successDesc}
        </p>
        <div className="flex items-center gap-3 justify-center flex-wrap">
          <Button
            variant="primary"
            leftIcon={<Icons.dashboard className="h-4 w-4" />}
            onClick={() => navigate("/dashboard/courses")}
          >
            {coursesPage.leaderboard}
          </Button>
          <Button
            variant="outline"
            leftIcon={<Icons.home className="h-4 w-4" />}
            onClick={() => navigate("/")}
          >
            {coursesPage.all}
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
            label={registerCopy.firstName}
            placeholder={registerCopy.firstName}
            value={formState.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            validation={errors.firstName ? "error" : undefined}
            errorMessage={errors.firstName}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
          <Input
            label={registerCopy.lastName}
            placeholder={registerCopy.lastName}
            value={formState.lastName}
            onChange={(e) => setField("lastName", e.target.value)}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={registerCopy.email}
            type="email"
            placeholder={registerCopy.email}
            value={formState.email}
            onChange={(e) => setField("email", e.target.value)}
            validation={errors.email ? "error" : undefined}
            errorMessage={errors.email}
            leftIcon={<Icons.mail className="h-4 w-4" />}
          />
          <Input
            label={registerCopy.phone}
            type="tel"
            placeholder="09xxxxxxxxx"
            value={formState.phone}
            onChange={(e) => setField("phone", e.target.value)}
            validation={errors.phone ? "error" : undefined}
            errorMessage={errors.phone}
            leftIcon={<Icons.phone className="h-4 w-4" />}
          />
        </div>

        <Dropdown
          label={registerCopy.course}
          options={courseOptions}
          value={formState.courseSlug}
          onChange={(v) => setField("courseSlug", v)}
          placeholder={registerCopy.selectCourse}
          searchable
          searchPlaceholder={registerCopy.selectCourse}
          fullWidth
          error={Boolean(errors.courseSlug)}
          errorMessage={errors.courseSlug}
        />

        <div className="flex items-start gap-3">
          <Checkbox
            label={registerCopy.terms}
            checked={formState.acceptedTerms}
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
          {submitting ? registerCopy.submitting : registerCopy.submit}
        </Button>
      </form>
    </Card>
  );
}

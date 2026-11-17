/**
 * Code Empire - Enroll panel
 *
 * Price, capacity and the ways to enroll or ask for advice.
 */

import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, Progress, ScrollReveal } from "dara-ui";
import { SendIcon } from "@/components/icons";
import { contactInfo } from "@/config/site";
import type { Course } from "@/config/courses";
import { coursePage } from "@/content/coursesPage";
import { coursesSection, journey } from "@/content/home";
import { formatNumber, formatPrice } from "@/lib/format";
import { courseTones, getCapacity } from "@/lib/courses";
import type { CapacityState } from "@/lib/courses";

// ============================================
// Config
// ============================================

const statuses: Record<
  CapacityState,
  { variant: "danger" | "warning" | "success"; label: string }
> = {
  full: { variant: "danger", label: coursesSection.card.full },
  almost: { variant: "warning", label: coursesSection.card.almostFull },
  available: { variant: "success", label: coursesSection.card.available },
};

export function EnrollPanel({ course }: { course: Course }) {
  const navigate = useNavigate();
  const { remaining, percent, state } = getCapacity(course);
  const status = statuses[state];

  return (
    <ScrollReveal animation="fade-up" delay={80}>
      <Card
        glow={courseTones[course.category]}
        padding="lg"
        className="flex flex-col gap-6"
      >
        {/* ---------- Price ---------- */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[var(--color-text-tertiary)]">
            {coursePage.priceLabel}
          </span>
          <span className="text-gradient-primary font-heading text-3xl font-bold">
            {formatPrice(course.price)}
          </span>
        </div>

        {/* ---------- Capacity ---------- */}
        <div className="flex flex-col gap-3 border-t border-[var(--color-border-secondary)] pt-5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-[var(--color-text-secondary)]">
              {coursePage.capacityLabel}
            </span>
            <Badge variant={status.variant} size="sm" glow>
              {status.label}
            </Badge>
          </div>

          <Progress
            value={percent}
            size="sm"
            color={
              state === "full"
                ? "danger"
                : state === "almost"
                  ? "warning"
                  : "primary"
            }
          />

          <p className="flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
            <span dir="ltr" className="font-mono">
              {formatNumber(course.enrolled)} / {formatNumber(course.capacity)}
            </span>
            <span>{coursePage.remaining(remaining)}</span>
          </p>
        </div>

        {/* ---------- Actions ---------- */}
        <div className="flex flex-col gap-3">
          <Button
            as="a"
            href={contactInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            glow="primary"
            fullWidth
            leftIcon={<SendIcon className="h-4 w-4" />}
          >
            {coursePage.enroll}
          </Button>
          <Button
            variant="outline"
            fullWidth
            onClick={() => navigate("/contact")}
          >
            {coursePage.consult}
          </Button>
        </div>

        {/* ---------- Class types ---------- */}
        <div className="flex flex-col gap-3 border-t border-[var(--color-border-secondary)] pt-5">
          <span className="text-sm text-[var(--color-text-secondary)]">
            {coursePage.classTypes}
          </span>
          <div className="flex flex-wrap gap-2">
            {journey.classes.map((item) => (
              <Badge key={item.id} variant={item.variant} size="sm" outline>
                {item.label}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="glass"
              onClick={() => navigate("/guide")}
            >
              {coursePage.guideLink}
            </Button>
            <Button
              size="sm"
              variant="glass"
              onClick={() => navigate("/policy")}
            >
              {coursePage.policyLink}
            </Button>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}

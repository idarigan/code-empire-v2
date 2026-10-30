/**
 * Code Empire — Rules list
 */

import { Link } from "react-router-dom";
import { Card, Badge, Button, ScrollReveal } from "dara-ui";
import { getSortedRules } from "@/data/policy";
import { formatDate } from "@/lib/format";
import { ruleChrome } from "@/content/policy-rules";
import { policy } from "@/content/policy";
import { common } from "@/content/common";
import { Icons } from "@/lib/icons";

const ruleKeyMap: Record<string, keyof typeof ruleChrome> = {
  "makeup-class": "makeupClass",
  "teacher-replacement": "teacherReplacement",
  "leaving-class": "leavingClass",
  "payment-methods": "paymentMethods",
  "student-ranks": "studentRanks",
  "absence-and-cancellation": "absenceAndCancellation",
};

export function RulesList() {
  const rules = getSortedRules();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {rules.map((rule, i) => {
        const key = ruleKeyMap[rule.slug];
        const content = key ? ruleChrome[key] : undefined;
        if (!content) return null;

        return (
          <ScrollReveal key={rule.slug} animation="fade-up" delay={i * 60}>
            <Card variant="solid" className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-bold text-base text-[var(--color-text-primary)]">
                  {content.title}
                </h3>
                <Badge variant="secondary" size="sm" outline>
                  #{rule.order}
                </Badge>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3 flex-1">
                {content.subtitle}
              </p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--color-border-secondary)]">
                <span className="text-xs text-[var(--color-text-tertiary)] font-mono">
                  {policy.validFrom} {formatDate(rule.validFrom)}
                </span>
                <Link to={`/policy/${rule.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    rightIcon={
                      <Icons.arrowLeft className="h-3 w-3 rtl:-scale-x-100" />
                    }
                  >
                    {common.readMore}
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

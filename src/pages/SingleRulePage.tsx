/**
 * Code Empire — Single rule page
 */

import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, Badge, Button, ScrollReveal, useI18n } from "dara-ui";
import { getRuleBySlug, getSortedRules } from "@/data/policy";
import { CourseArticle } from "@/features/courses/CourseArticle";
import { formatDate } from "@/lib/format";
import { Icons } from "@/lib/icons";
import type { ArticleSection } from "@/types";

export default function SingleRulePage() {
  const { t } = useI18n();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const rule = slug ? getRuleBySlug(slug) : undefined;

  const otherRules = useMemo(() => {
    if (!rule) return [];
    return getSortedRules().filter((r) => r.slug !== rule.slug);
  }, [rule]);

  if (!rule) {
    return (
      <section className="section">
        <div className="section-container flex justify-center">
          <Card glow="accent" className="text-center max-w-md w-full">
            <div className="flex justify-center mb-3 text-[var(--color-accent)]">
              <Icons.compass className="h-10 w-10" />
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              {t("common.empty")}
            </p>
            <Button
              variant="primary"
              onClick={() => navigate("/policy")}
              leftIcon={
                <Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />
              }
            >
              {t("nav.policy")}
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  const sections: ArticleSection[] = Array.from(
    { length: rule.sectionCount },
    (_, i) => {
      const titleKey = `rule.${rule.slug}.section.${i}.title`;
      const titleVal = t(titleKey);
      const title = titleVal === titleKey ? undefined : titleVal;

      const paragraphs: string[] = [];
      let j = 0;
      while (true) {
        const pKey = `rule.${rule.slug}.section.${i}.paragraph.${j}`;
        const pVal = t(pKey);
        if (pVal === pKey) break;
        paragraphs.push(pVal);
        j++;
      }

      const hints: string[] = [];
      j = 0;
      while (true) {
        const hKey = `rule.${rule.slug}.section.${i}.hint.${j}`;
        const hVal = t(hKey);
        if (hVal === hKey) break;
        hints.push(hVal);
        j++;
      }

      return {
        title,
        paragraphs: paragraphs.length > 0 ? paragraphs : undefined,
        hints: hints.length > 0 ? hints : undefined,
      };
    },
  );

  return (
    <>
      <section className="section pt-8 pb-4">
        <div className="section-container">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] font-mono mb-4 flex-wrap">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="hover:text-[var(--color-primary)]"
            >
              {t("nav.home")}
            </button>
            <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
            <button
              type="button"
              onClick={() => navigate("/policy")}
              className="hover:text-[var(--color-primary)]"
            >
              {t("nav.policy")}
            </button>
            <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
            <span className="text-[var(--color-text-secondary)] truncate">
              {t(`rule.${rule.slug}.title`)}
            </span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="warning" size="sm" glow>
                  {t("policy.validFrom")} {formatDate(rule.validFrom)}
                </Badge>
                <Badge variant="secondary" size="sm" outline>
                  {rule.category === "course"
                    ? t("nav.courses")
                    : t("nav.policy")}
                </Badge>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-gradient-hero">
                {t(`rule.${rule.slug}.title`)}
              </h1>
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
                {t(`rule.${rule.slug}.subtitle`)}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            <div className="min-w-0">
              <CourseArticle sections={sections} />
            </div>

            <aside className="flex flex-col gap-3 sticky top-24 self-start">
              <h3 className="font-heading font-bold text-sm text-[var(--color-text-primary)] mb-1">
                {t("policy.otherRules")}
              </h3>
              {otherRules.map((other) => (
                <Link key={other.slug} to={`/policy/${other.slug}`}>
                  <Card
                    variant="solid"
                    padding="sm"
                    className="hover:border-[var(--color-primary)] transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <Icons.fileText className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)] mt-0.5" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
                          {t(`rule.${other.slug}.title`)}
                        </p>
                        <p className="text-[10px] font-mono text-[var(--color-text-tertiary)] mt-0.5">
                          #{other.order}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

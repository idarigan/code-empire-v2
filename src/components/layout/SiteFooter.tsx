/**
 * Code Empire — Site footer
 *
 * Four-column layout from constants + social rail + newsletter mini-form.
 */

import { Link } from "react-router-dom";
import { Footer, SocialMedia, useI18n } from "dara-ui";
import type { FooterColumn as DaraFooterColumn } from "dara-ui";
import {
  footerColumns,
  socialLinks,
  contactInfo,
  siteMeta,
} from "@/data/constants";
import { NewsletterMini } from "./NewsletterMini";

export function SiteFooter() {
  const { t } = useI18n();

  const columns: DaraFooterColumn[] = footerColumns.map((col) => ({
    title: t(col.titleKey),
    links: col.links.map((l) => ({
      label: t(l.key),
      href: l.href,
      external: l.external,
    })),
  }));

  // Inject a fourth column: quick contact
  columns.push({
    title: t("footer.quickContact"),
    content: (
      <div className="flex flex-col gap-2 text-sm text-[var(--color-text-secondary)]">
        <a
          href={`tel:${contactInfo.phone}`}
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          {contactInfo.phone}
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          {contactInfo.email}
        </a>
        <span>{contactInfo.hours}</span>
      </div>
    ),
  });

  return (
    <>
      <Footer
        brand={
          <span
            className="font-heading font-bold text-lg tracking-tight"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CODE EMPIRE
          </span>
        }
        tagline={t("home.heroSubtitle")}
        columns={columns}
        social={
          <div className="flex flex-col gap-4 w-full">
            <NewsletterMini />
            <p className="text-xs text-[var(--color-text-tertiary)] font-mono">
              {siteMeta.url.replace("https://", "")}
            </p>
          </div>
        }
        bottomBar={
          <div className="flex items-center justify-between flex-wrap gap-3 w-full">
            <span>
              © {new Date().getFullYear()} — {t("footer.copyright")}
            </span>
            <Link
              to="/policy"
              className="text-[var(--color-primary)] hover:underline"
            >
              {t("nav.policy")}
            </Link>
          </div>
        }
      />

      {/* Floating social rail — Dara UI's SocialMedia */}
      <SocialMedia
        links={socialLinks.map((s) => ({
          platform: s.platform,
          url: s.url,
          color: s.color,
        }))}
        position="left"
        size="md"
        showLabels={false}
        verticalOffset="50%"
      />
    </>
  );
}

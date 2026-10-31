/**
 * Code Empire — Site footer
 */

import { Link } from "react-router-dom";
import { Footer, SocialMedia } from "dara-ui";
import type { FooterColumn as DaraFooterColumn } from "dara-ui";
import {
  footerColumns,
  socialLinks,
  contactInfo,
  siteMeta,
} from "@/data/constants";
import {
  footer,
  nav,
  social,
  siteMeta as siteMetaContent,
} from "@/content/common";
import { contactInfo as contactInfoContent } from "@/content/contact";
import { NewsletterMini } from "./NewsletterMini";

// ============================================
// Label resolver — footer first, then nav
// ============================================

function resolveLabel(key: string): string {
  const bare = key.replace(/^(footer|nav)\./, "");
  const table = key.startsWith("nav.")
    ? nav
    : (footer as Record<string, string>);
  return table[bare] ?? footer[bare as keyof typeof footer] ?? bare;
}

export function SiteFooter() {
  const columns: DaraFooterColumn[] = footerColumns.map((col) => ({
    title: resolveLabel(col.titleKey),
    links: col.links.map((l) => ({
      label: resolveLabel(l.key),
      href: l.href,
      external: l.external,
    })),
  }));

  columns.push({
    title: footer.quickContact,
    content: (
      <div className="flex flex-col gap-2 text-sm text-[var(--color-text-secondary)]">
        <a
          href={`tel:${contactInfo.phoneRaw}`}
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          {contactInfoContent.phone}
        </a>
        <a
          href={`mailto:${contactInfoContent.email}`}
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          {contactInfoContent.email}
        </a>
        <span>{contactInfoContent.hours}</span>
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
        tagline={footer.tagline}
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
              {footer.copyrightPrefix.replace(
                "{year}",
                new Date().getFullYear().toString(),
              )}
            </span>
            <Link
              to="/policy"
              className="text-[var(--color-primary)] hover:underline"
            >
              {footer.policy}
            </Link>
          </div>
        }
      />

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

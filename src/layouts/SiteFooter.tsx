/**
 * Code Empire - Site footer
 */

import { Footer } from "dara-ui";
import type { FooterColumn } from "dara-ui";
import { Brand } from "@/components/Brand";
import { RouterLinks } from "@/components/RouterLinks";
import { contactInfo } from "@/config/site";
import { footer, footerGroups } from "@/content/layout";
import { formatYear } from "@/lib/format";

export function SiteFooter() {
  const columns: FooterColumn[] = [
    ...footerGroups.map((group) => ({
      title: group.title,
      links: group.links.map((link) => ({
        label: link.label,
        href: link.href,
      })),
    })),
    {
      title: footer.contactTitle,
      content: (
        <div className="flex flex-col gap-2 text-sm text-[var(--color-text-secondary)]">
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            {contactInfo.email}
          </a>
          <span>{contactInfo.hours}</span>
        </div>
      ),
    },
  ];

  return (
    <RouterLinks>
      <Footer
        brand={<Brand />}
        tagline={footer.tagline}
        columns={columns}
        bottomBar={footer.copyright(formatYear(new Date().getFullYear()))}
      />
    </RouterLinks>
  );
}

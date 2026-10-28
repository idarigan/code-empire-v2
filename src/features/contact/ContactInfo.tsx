/**
 * Code Empire — Contact info cards
 */

import { Card, ScrollReveal, useI18n } from "dara-ui";
import { contactInfo } from "@/data/constants";
import { Icons } from "@/lib/icons";

export function ContactInfo() {
  const { t } = useI18n();

  const items = [
    {
      icon: <Icons.phone className="h-5 w-5" />,
      label: t("contact.phoneLabel"),
      value: t("contactInfo.phone"),
      href: `tel:${contactInfo.phoneRaw}`,
      glow: "primary" as const,
    },
    {
      icon: <Icons.clock className="h-5 w-5" />,
      label: t("contact.hours"),
      value: t("contactInfo.hours"),
      glow: "secondary" as const,
    },
    {
      icon: <Icons.mail className="h-5 w-5" />,
      label: t("contact.emailLabel"),
      value: t("contactInfo.email"),
      href: `mailto:${t("contactInfo.email")}`,
      glow: "accent" as const,
    },
    {
      icon: <Icons.mapPin className="h-5 w-5" />,
      label: t("contact.addressLabel"),
      value: t("contactInfo.address"),
      glow: "primary" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <ScrollReveal key={item.label} animation="fade-up" delay={i * 80}>
          <Card glow={item.glow} float className="h-full">
            <div className="flex flex-col items-center text-center gap-2">
              <div
                className={`p-3 rounded-full bg-[var(--color-${item.glow}-light)] text-[var(--color-${item.glow})]`}
              >
                {item.icon}
              </div>
              <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)] font-mono mt-1">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                  dir="auto"
                >
                  {item.value}
                </a>
              ) : (
                <span
                  className="text-sm text-[var(--color-text-primary)]"
                  dir="auto"
                >
                  {item.value}
                </span>
              )}
            </div>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}

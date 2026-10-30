/**
 * Code Empire — Contact links
 */

import { Card, Button } from "dara-ui";
import { contactInfo as contactInfoRaw, socialLinks } from "@/data/constants";
import { contact, contactInfo } from "@/content/contact";
import { social } from "@/content/common";
import { Icons } from "@/lib/icons";

export function ContactLinks() {
  const bridges = [
    {
      label: contact.telegramLabel,
      href: contactInfoRaw.telegram,
      icon: <Icons.send className="h-4 w-4" />,
      variant: "primary" as const,
    },
    {
      label: contact.emailLabel,
      href: `mailto:${contactInfo.email}`,
      icon: <Icons.mail className="h-4 w-4" />,
      variant: "secondary" as const,
    },
    {
      label: contact.phoneLabel,
      href: `tel:${contactInfoRaw.phoneRaw}`,
      icon: <Icons.phone className="h-4 w-4" />,
      variant: "outline" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card glow="primary">
        <h3 className="font-heading font-bold text-base mb-4">
          {contact.bridges}
        </h3>
        <div className="flex flex-col gap-2">
          {bridges.map((b) => (
            <Button
              key={b.label}
              as="a"
              href={b.href}
              target={b.href.startsWith("http") ? "_blank" : undefined}
              rel={
                b.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              variant={b.variant}
              fullWidth
              leftIcon={b.icon}
            >
              {b.label}
            </Button>
          ))}
        </div>
      </Card>

      <Card glow="secondary">
        <h3 className="font-heading font-bold text-base mb-4">
          {contact.aboutUs}
        </h3>
        <div className="flex flex-col gap-2">
          {socialLinks.slice(0, 4).map((s) => {
            const Icon = Icons[s.platform as keyof typeof Icons] ?? Icons.globe;
            return (
              <Button
                key={s.platform}
                as="a"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                fullWidth
                leftIcon={<Icon className="h-4 w-4" />}
              >
                {social[s.platform as keyof typeof social] ?? s.platform}
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

/**
 * Code Empire - Channels
 *
 * Phone, email, Telegram and working hours at a glance.
 */

import { Button, ClockIcon, MailIcon } from "dara-ui";
import { PhoneIcon, SendIcon } from "@/components/icons";
import { contactInfo } from "@/config/site";
import { channels } from "@/content/contact";
import { ChannelCard } from "./ChannelCard";
import { CopyButton } from "./CopyButton";

// ============================================
// Value
// ============================================

function Value({
  children,
  muted = false,
}: {
  children: string;
  muted?: boolean;
}) {
  return (
    <span
      dir="ltr"
      className={
        muted
          ? "inline-block font-mono text-sm text-[var(--color-text-tertiary)]"
          : "inline-block font-mono text-base font-semibold text-[var(--color-text-primary)]"
      }
    >
      {children}
    </span>
  );
}

export function Channels() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <ChannelCard
        icon={<PhoneIcon className="h-5 w-5" />}
        label={channels.phone.label}
        glow="primary"
        actions={
          <>
            <Button
              as="a"
              href={`tel:${contactInfo.phoneRaw}`}
              size="sm"
              variant="primary"
            >
              {channels.phone.action}
            </Button>
            <CopyButton value={contactInfo.phone} />
          </>
        }
      >
        <Value>{contactInfo.phone}</Value>
        <Value muted>{contactInfo.phoneAlt}</Value>
      </ChannelCard>

      <ChannelCard
        icon={<MailIcon className="h-5 w-5" />}
        label={channels.email.label}
        glow="secondary"
        delay={80}
        actions={
          <>
            <Button
              as="a"
              href={`mailto:${contactInfo.email}`}
              size="sm"
              variant="secondary"
            >
              {channels.email.action}
            </Button>
            <CopyButton value={contactInfo.email} />
          </>
        }
      >
        <Value>{contactInfo.email}</Value>
      </ChannelCard>

      <ChannelCard
        icon={<SendIcon className="h-5 w-5" />}
        label={channels.telegram.label}
        glow="accent"
        delay={160}
        actions={
          <Button
            as="a"
            href={contactInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="accent"
          >
            {channels.telegram.action}
          </Button>
        }
      >
        <Value>@codeempire_support</Value>
      </ChannelCard>

      <ChannelCard
        icon={<ClockIcon className="h-5 w-5" />}
        label={channels.hours.label}
        glow="primary"
        delay={240}
      >
        <ul className="flex w-full flex-col gap-2.5">
          {contactInfo.hoursRows.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="text-[var(--color-text-secondary)]">
                {row.label}
              </span>
              <span className="font-mono font-semibold text-[var(--color-primary)]">
                {row.time}
              </span>
            </li>
          ))}
        </ul>
      </ChannelCard>
    </div>
  );
}

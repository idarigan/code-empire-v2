/**
 * Code Empire - Contact side column
 *
 * Office location, social links and the response promise.
 */

import type { ComponentType } from "react";
import {
  Button,
  Card,
  CheckIcon,
  InstagramIcon,
  ScrollReveal,
  YoutubeIcon,
} from "dara-ui";
import { MapPinIcon, SendIcon } from "@/components/icons";
import { contactInfo, socialLinks } from "@/config/site";
import { side } from "@/content/contact";
import { buildMapsUrl } from "@/lib/contact";

// ============================================
// Config
// ============================================

type IconType = ComponentType<{ className?: string }>;

const socialIcons: Record<string, IconType> = {
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  telegram: SendIcon,
};

const socials = [
  ...socialLinks,
  { platform: "telegram", url: contactInfo.telegram },
];

// ============================================
// Location
// ============================================

function LocationCard() {
  return (
    <Card glow="secondary" className="flex flex-col gap-4">
      <div
        aria-hidden="true"
        className="relative h-36 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-secondary)] bg-[var(--color-bg-tertiary)]/60"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-secondary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-40 motion-safe:animate-ping" />
          <span
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow-primary)",
            }}
          >
            <MapPinIcon className="h-5 w-5" />
          </span>
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-bold text-[var(--color-text-primary)]">
          {side.location.title}
        </h3>
        <p className="text-sm leading-[2] text-[var(--color-text-secondary)]">
          {contactInfo.address}
        </p>
      </div>

      <Button
        as="a"
        href={buildMapsUrl(contactInfo.address)}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="sm"
        fullWidth
        leftIcon={<MapPinIcon className="h-4 w-4" />}
      >
        {side.location.directions}
      </Button>
    </Card>
  );
}

// ============================================
// Social
// ============================================

function SocialCard() {
  return (
    <Card glow="accent" className="flex flex-col gap-4">
      <h3 className="font-heading text-base font-bold text-[var(--color-text-primary)]">
        {side.social.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {socials.map((item) => {
          const Icon = socialIcons[item.platform] ?? SendIcon;

          return (
            <Button
              key={item.platform}
              as="a"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="glass"
              size="sm"
              leftIcon={<Icon className="h-4 w-4" />}
            >
              {side.social.labels[item.platform] ?? item.platform}
            </Button>
          );
        })}
      </div>
    </Card>
  );
}

// ============================================
// Promise
// ============================================

function PromiseCard() {
  return (
    <Card variant="outline" padding="sm">
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "var(--color-success-light)",
            color: "var(--color-success)",
          }}
        >
          <CheckIcon className="h-4 w-4" />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-sm font-bold text-[var(--color-text-primary)]">
            {side.promise.title}
          </h3>
          <p className="text-xs leading-[1.9] text-[var(--color-text-secondary)]">
            {side.promise.text}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function ContactSide() {
  return (
    <div className="flex flex-col gap-5">
      <ScrollReveal animation="fade-up" delay={80}>
        <LocationCard />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={160}>
        <SocialCard />
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={240}>
        <PromiseCard />
      </ScrollReveal>
    </div>
  );
}

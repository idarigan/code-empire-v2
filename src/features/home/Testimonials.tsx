/**
 * Code Empire — Testimonials
 */

import { Card, Avatar, Badge, ScrollReveal } from "dara-ui";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./SectionHeader";
import { testimonialCopy } from "@/content/testimonials";
import { home } from "@/content/home";
import { Icons } from "@/lib/icons";

export function Testimonials() {
  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.testimonialsEyebrow}
          title={home.testimonials}
          subtitle={home.heroSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((review, i) => {
            const copy =
              testimonialCopy[review.slug as keyof typeof testimonialCopy];
            if (!copy) return null;
            return (
              <ScrollReveal
                key={review.slug}
                animation="fade-up"
                delay={i * 80}
              >
                <Card glow="primary" className="h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={review.avatar}
                      fallbackText={copy.name}
                      size="lg"
                      glow="primary"
                    />
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-sm truncate">
                        {copy.name}
                      </h4>
                      <p className="text-xs text-[var(--color-text-tertiary)] truncate">
                        {copy.job}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[var(--color-warning)]">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Icons.star
                        key={idx}
                        className="h-3.5 w-3.5 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                    <Icons.quote className="h-4 w-4 inline-block me-1 opacity-50" />
                    {copy.quote}
                  </p>

                  {review.videoUrl && (
                    <Badge variant="primary" size="sm" outline>
                      {home.magazinePreview}
                    </Badge>
                  )}
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

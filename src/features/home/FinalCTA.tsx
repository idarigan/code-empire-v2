/**
 * Code Empire - Final CTA
 */

import { useNavigate } from "react-router-dom";
import { Card, Button, Badge, ScrollReveal } from "dara-ui";
import { contactInfo } from "@/data/constants";
import { home } from "@/content/home";
import { nav } from "@/content/common";
import { contact } from "@/content/contact";
import { Icons } from "@/lib/icons";

export function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="section-container">
        <ScrollReveal animation="flip-up">
          <Card
            glow="accent"
            className="relative isolate mx-auto max-w-4xl overflow-hidden py-12 text-center md:py-16"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 start-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full opacity-25 blur-[100px] rtl:translate-x-1/2"
              style={{ background: "var(--gradient-primary)" }}
            />

            <div className="flex flex-col items-center gap-5">
              <Badge variant="warning" size="sm" glow>
                {home.finalCtaEyebrow}
              </Badge>
              <h2 className="text-gradient-hero font-heading text-3xl font-bold md:text-5xl">
                {home.finalCTA}
              </h2>
              <p className="max-w-xl text-base text-[var(--color-text-secondary)] md:text-lg">
                {home.finalCTADesc}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  glow="primary"
                  leftIcon={<Icons.bookOpen className="h-4 w-4" />}
                  onClick={() => navigate("/courses")}
                >
                  {nav.courses}
                </Button>
                <Button
                  as="a"
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  leftIcon={<Icons.send className="h-4 w-4" />}
                >
                  {contact.links}
                </Button>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Code Empire - Final call to action
 *
 * Closing card with the two main ways to get started.
 */

import { useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  GradientRing,
  MailIcon,
  RocketIcon,
  ScrollReveal,
} from "dara-ui";
import { Section } from "@/components/Section";
import { contactInfo } from "@/config/site";
import { cta } from "@/content/home";

export function FinalCta() {
  const navigate = useNavigate();

  return (
    <Section id="start" className="isolate overflow-hidden">
      <ScrollReveal animation="zoom-in">
        <Card
          glow="accent"
          radius="large"
          className="relative isolate mx-auto max-w-4xl overflow-hidden py-14 text-center md:py-20"
        >
          <GradientRing size={360} blur={100} opacity={0.3} />

          <div className="flex flex-col items-center gap-5 px-4">
            <Badge variant="warning" size="sm" glow>
              {cta.eyebrow}
            </Badge>

            <h2 className="text-gradient-hero font-heading text-4xl font-bold leading-[1.25] md:text-6xl">
              {cta.title}
            </h2>

            <p className="max-w-xl text-base leading-[1.9] text-[var(--color-text-secondary)] md:text-lg">
              {cta.desc}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                glow="primary"
                leftIcon={<RocketIcon className="h-4 w-4" />}
                onClick={() => navigate("/courses")}
              >
                {cta.primary}
              </Button>
              <Button
                as="a"
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                leftIcon={<MailIcon className="h-4 w-4" />}
              >
                {cta.secondary}
              </Button>
            </div>
          </div>
        </Card>
      </ScrollReveal>
    </Section>
  );
}

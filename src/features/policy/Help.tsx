/**
 * Code Empire - Policy help
 *
 * Closing card pointing to support for unclear rules.
 */

import { useNavigate } from "react-router-dom";
import { Button, Card, ChevronLeftIcon, ScrollReveal } from "dara-ui";
import { Section } from "@/components/Section";
import { policyHelp } from "@/content/policy";

export function Help() {
  const navigate = useNavigate();

  return (
    <Section id="help">
      <ScrollReveal animation="zoom-in">
        <Card
          glow="secondary"
          radius="large"
          className="mx-auto flex max-w-4xl flex-col items-center gap-4 py-10 text-center md:flex-row md:justify-between md:text-start"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
              {policyHelp.title}
            </h2>
            <p className="text-sm leading-[2] text-[var(--color-text-secondary)]">
              {policyHelp.text}
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            rightIcon={<ChevronLeftIcon className="h-4 w-4" />}
            onClick={() => navigate("/contact")}
          >
            {policyHelp.action}
          </Button>
        </Card>
      </ScrollReveal>
    </Section>
  );
}

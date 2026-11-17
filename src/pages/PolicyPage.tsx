/**
 * Code Empire - Policy page
 */

import { PageHero } from "@/components/PageHero";
import { policyHero } from "@/content/policy";
import { Charter, Help, Rules } from "@/features/policy";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function PolicyPage() {
  usePageTitle(policyHero.metaTitle);

  return (
    <>
      <PageHero
        eyebrow={policyHero.eyebrow}
        title={policyHero.title}
        subtitle={policyHero.subtitle}
      />

      <Charter />
      <Rules />
      <Help />
    </>
  );
}

/**
 * Code Empire - Guide page
 */

import { PageHero } from "@/components/PageHero";
import { guideHero } from "@/content/guide";
import { ClassTypes, Method } from "@/features/guide";
import { FinalCta } from "@/features/home/cta";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function GuidePage() {
  usePageTitle(guideHero.metaTitle);

  return (
    <>
      <PageHero
        eyebrow={guideHero.eyebrow}
        title={guideHero.title}
        subtitle={guideHero.subtitle}
      />

      <ClassTypes />
      <Method />
      <FinalCta />
    </>
  );
}

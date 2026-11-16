/**
 * Code Empire - About page
 */

import { Badge } from "dara-ui";
import { PageHero } from "@/components/PageHero";
import { aboutHero } from "@/content/about";
import { Activities, Chapters, NameStory, Team } from "@/features/about";
import { FinalCta } from "@/features/home/cta";
import { Numbers } from "@/features/home/numbers";
import { usePageTitle } from "@/hooks/usePageTitle";

const variants = ["primary", "secondary", "warning"] as const;

export default function AboutPage() {
  usePageTitle(aboutHero.metaTitle);

  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        subtitle={aboutHero.subtitle}
      >
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {aboutHero.highlights.map((item, i) => (
            <Badge key={item} variant={variants[i % variants.length]} outline>
              {item}
            </Badge>
          ))}
        </div>
      </PageHero>

      <Chapters />
      <NameStory />
      <Activities />
      <Numbers />
      <Team />
      <FinalCta />
    </>
  );
}

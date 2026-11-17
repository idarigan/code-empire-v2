/**
 * Code Empire - Blog page
 */

import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { blogHero } from "@/content/blog";
import { BlogList } from "@/features/blog";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function BlogPage() {
  usePageTitle(blogHero.metaTitle);

  return (
    <>
      <PageHero
        eyebrow={blogHero.eyebrow}
        title={blogHero.title}
        subtitle={blogHero.subtitle}
      />

      <Section id="articles">
        <BlogList />
      </Section>
    </>
  );
}

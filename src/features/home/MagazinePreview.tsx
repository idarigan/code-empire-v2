/**
 * Code Empire — Magazine preview
 */

import { useNavigate } from "react-router-dom";
import { BlogCard, Button, ScrollReveal, useI18n } from "dara-ui";
import { getLatestBlogs } from "@/data/blogs";
import { SectionHeader } from "./SectionHeader";
import { Icons } from "@/lib/icons";

export function MagazinePreview() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const blogs = getLatestBlogs(4);

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={t("home.magazineEyebrow")}
          title={t("home.magazinePreview")}
          subtitle={t("blog.subtitle")}
          align="start"
          action={
            <Button
              variant="outline"
              size="sm"
              rightIcon={
                <Icons.arrowLeft className="h-3.5 w-3.5 rtl:-scale-x-100" />
              }
              onClick={() => navigate("/blog")}
            >
              {t("common.viewAll")}
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogs.map((blog, i) => (
            <ScrollReveal key={blog.slug} animation="fade-up" delay={i * 80}>
              <BlogCard
                title={t(`blogPost.${blog.slug}.title`)}
                excerpt={t(`blogPost.${blog.slug}.excerpt`)}
                coverImage={blog.coverImage}
                author={blog.author.name}
                authorAvatar={blog.author.avatar}
                date={blog.date}
                readTime={blog.readTime}
                category={t(`blogPost.${blog.slug}.category`)}
                tags={Array.from({ length: blog.tagCount }, (_, j) =>
                  t(`blogPost.${blog.slug}.tag.${j}`),
                )}
                link={`/blog/${blog.slug}`}
                glow={
                  i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "accent"
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Code Empire — Single blog post
 */

import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Badge, Button, ScrollReveal, Accordion } from "dara-ui";
import { getBlogBySlug, getRelatedPosts } from "@/data/blogs";
import { CourseArticle } from "@/features/courses/CourseArticle";
import { BlogMeta } from "@/features/blog/BlogMeta";
import { BlogSidebar } from "@/features/blog/BlogSidebar";
import { BlogGrid } from "@/features/blog/BlogGrid";
import { SectionHeader } from "@/features/home/SectionHeader";
import { blogPostsContent } from "@/content/blogs";
import { blog } from "@/content/blog";
import { coursesPage } from "@/content/courses-page";
import { nav } from "@/content/common";
import { Icons } from "@/lib/icons";

export default function SingleBlogPage() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const post = getBlogBySlug(slug);
  const content = slug ? blogPostsContent[slug] : undefined;

  const related = useMemo(() => (post ? getRelatedPosts(post, 3) : []), [post]);

  if (!post || !content) {
    return (
      <section className="section">
        <div className="section-container flex justify-center">
          <Card glow="accent" className="text-center max-w-md w-full">
            <div className="flex justify-center mb-3 text-[var(--color-accent)]">
              <Icons.compass className="h-10 w-10" />
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              {blog.noResults}
            </p>
            <Button
              variant="primary"
              onClick={() => navigate("/blog")}
              leftIcon={
                <Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />
              }
            >
              {nav.blog}
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  const faqItems = content.faq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.question,
    content: <p>{item.answer}</p>,
  }));

  return (
    <>
      <section className="relative pt-20 pb-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${post.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(60px)",
            transform: "scale(1.3)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] font-mono mb-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="hover:text-[var(--color-primary)]"
            >
              {nav.home}
            </button>
            <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
            <button
              type="button"
              onClick={() => navigate("/blog")}
              className="hover:text-[var(--color-primary)]"
            >
              {nav.blog}
            </button>
            <Icons.chevronLeft className="h-3 w-3 rtl:-scale-x-100" />
            <span className="text-[var(--color-text-secondary)] truncate">
              {content.title}
            </span>
          </div>

          <ScrollReveal animation="fade-up">
            <div className="flex flex-col gap-4 max-w-3xl">
              <Badge variant="primary" glow>
                {content.category}
              </Badge>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-gradient-hero leading-tight">
                {content.title}
              </h1>
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
                {content.excerpt}
              </p>
              <BlogMeta
                author={post.author}
                date={post.date}
                readTime={post.readTime}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="section-container">
          <ScrollReveal animation="zoom-in">
            <Card
              variant="solid"
              padding="none"
              className="overflow-hidden max-w-4xl mx-auto"
            >
              <img
                src={post.coverImage}
                alt={content.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div className="min-w-0">
              <CourseArticle sections={content.sections} />

              {content.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[var(--color-border-secondary)]">
                  {content.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" size="sm" outline>
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {faqItems.length > 0 && (
                <div className="mt-12">
                  <SectionHeader
                    eyebrow={blog.faqEyebrow}
                    title={coursesPage.faq}
                    align="start"
                  />
                  <Accordion items={faqItems} multiple={false} />
                </div>
              )}
            </div>

            <BlogSidebar author={post.author} currentSlug={post.slug} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-container">
            <SectionHeader
              eyebrow={blog.relatedEyebrow}
              title={blog.relatedPosts}
              align="start"
            />
            <BlogGrid blogs={related} columns={3} />
          </div>
        </section>
      )}
    </>
  );
}

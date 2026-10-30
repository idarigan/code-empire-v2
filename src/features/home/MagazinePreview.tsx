/**
 * Code Empire — Magazine preview
 */

import { useNavigate } from "react-router-dom";
import { BlogCard, Button, ScrollReveal } from "dara-ui";
import { getLatestBlogs } from "@/data/blogs";
import { SectionHeader } from "./SectionHeader";
import { home } from "@/content/home";
import { blog } from "@/content/blog";
import { common } from "@/content/common";
import { blogPostsContent, blogAuthors } from "@/content/blogs";
import { Icons } from "@/lib/icons";

export function MagazinePreview() {
  const navigate = useNavigate();
  const posts = getLatestBlogs(4);

  return (
    <section className="section">
      <div className="section-container">
        <SectionHeader
          eyebrow={home.magazineEyebrow}
          title={home.magazinePreview}
          subtitle={blog.subtitle}
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
              {common.viewAll}
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => {
            const content = blogPostsContent[post.slug];
            if (!content) return null;
            return (
              <ScrollReveal key={post.slug} animation="fade-up" delay={i * 80}>
                <BlogCard
                  title={content.title}
                  excerpt={content.excerpt}
                  coverImage={post.coverImage}
                  author={
                    blogAuthors[post.author.name as keyof typeof blogAuthors]
                  }
                  authorAvatar={post.author.avatar}
                  date={post.date}
                  readTime={post.readTime}
                  category={content.category}
                  tags={content.tags}
                  link={`/blog/${post.slug}`}
                  glow={
                    i % 3 === 0
                      ? "primary"
                      : i % 3 === 1
                        ? "secondary"
                        : "accent"
                  }
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

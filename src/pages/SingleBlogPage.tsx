/**
 * Code Empire — Single blog page
 *
 * Phase 4 stub. Full article layout lands in Phase 7.
 */

import { useParams } from "react-router-dom";
import { useI18n } from "dara-ui";
import { getBlogBySlug } from "@/data/blogs";

export default function SingleBlogPage() {
  const { slug = "" } = useParams();
  const { t } = useI18n();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <section className="section">
        <div className="section-container text-center">
          <p className="text-[var(--color-text-tertiary)]">
            {t("common.empty")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {blog.title}
        </h1>
        <p className="text-[var(--color-text-secondary)]">{blog.excerpt}</p>
      </div>
    </section>
  );
}

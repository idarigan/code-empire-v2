/**
 * Code Empire - Article cover
 *
 * Category-colored cover drawn with rings, since posts have no images.
 */

import { DocsIcon } from "dara-ui";
import { getCategoryTone } from "@/config/blog";
import { cn } from "@/lib/cn";

interface ArticleCoverProps {
  category: string;
  className?: string;
}

export function ArticleCover({ category, className }: ArticleCoverProps) {
  const tone = getCategoryTone(category);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate aspect-[16/9] overflow-hidden",
        className,
      )}
      style={{
        background: `radial-gradient(circle at 30% 20%, var(--color-${tone}-light), transparent 65%)`,
      }}
    >
      {[0, 1, 2].map((ring) => (
        <span
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            height: `${(ring + 1) * 38}%`,
            aspectRatio: "1",
            transform: "translate(-50%, -50%)",
            borderColor: `color-mix(in srgb, var(--color-${tone}) ${34 - ring * 9}%, transparent)`,
          }}
        />
      ))}

      <span
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white"
        style={{
          background: `var(--color-${tone}-solid)`,
          boxShadow: `var(--shadow-glow-${tone})`,
        }}
      >
        <DocsIcon className="h-6 w-6" />
      </span>
    </div>
  );
}

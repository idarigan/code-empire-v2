/**
 * Code Empire — Blog meta bar
 *
 * Author + date + read time. Shared between the grid card,
 * the single post hero, and the sidebar's "latest posts" list.
 */

import { Avatar, useI18n } from "dara-ui";
import type { BlogAuthor } from "@/types";
import { formatDate, formatReadTime } from "@/lib/format";
import { Icons } from "@/lib/icons";

interface BlogMetaProps {
  author: BlogAuthor;
  date: string;
  readTime: number;
  compact?: boolean;
}

export function BlogMeta({
  author,
  date,
  readTime,
  compact = false,
}: BlogMetaProps) {
  const { language } = useI18n();
  const locale = language || "fa";

  return (
    <div
      className={`flex items-center gap-3 ${
        compact ? "text-xs" : "text-sm"
      } text-[var(--color-text-tertiary)] flex-wrap`}
    >
      {!compact && (
        <Avatar src={author.avatar} fallbackText={author.name} size="sm" />
      )}
      <span className="text-[var(--color-text-secondary)] truncate">
        {author.name}
      </span>
      <span className="flex items-center gap-1">
        <Icons.calendar className="h-3 w-3" />
        {formatDate(date, locale)}
      </span>
      <span className="flex items-center gap-1">
        <Icons.clock className="h-3 w-3" />
        {formatReadTime(readTime, locale)}
      </span>
    </div>
  );
}

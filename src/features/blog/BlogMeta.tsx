/**
 * Code Empire — Blog meta bar
 */

import { Avatar } from "dara-ui";
import type { BlogAuthor } from "@/types";
import { formatDate, formatReadTime } from "@/lib/format";
import { blogAuthors } from "@/content/blogs";
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
  const displayName = blogAuthors[author.name as keyof typeof blogAuthors];

  return (
    <div
      className={`flex items-center gap-3 ${
        compact ? "text-xs" : "text-sm"
      } text-[var(--color-text-tertiary)] flex-wrap`}
    >
      {!compact && (
        <Avatar src={author.avatar} fallbackText={displayName} size="sm" />
      )}
      <span className="text-[var(--color-text-secondary)] truncate">
        {displayName}
      </span>
      <span className="flex items-center gap-1">
        <Icons.calendar className="h-3 w-3" />
        {formatDate(date)}
      </span>
      <span className="flex items-center gap-1">
        <Icons.clock className="h-3 w-3" />
        {formatReadTime(readTime)}
      </span>
    </div>
  );
}

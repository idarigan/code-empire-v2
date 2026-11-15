/**
 * Code Empire - Brand
 *
 * Gradient wordmark shared by the navbar and footer.
 */

import { siteMeta } from "@/config/site";
import { cn } from "@/lib/cn";

export function Brand({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-gradient-primary font-heading text-lg font-bold tracking-tight",
        className,
      )}
      dir="ltr"
    >
      {siteMeta.brand}
    </span>
  );
}

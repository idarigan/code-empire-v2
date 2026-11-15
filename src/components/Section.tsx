/**
 * Code Empire - Section
 *
 * Page section wrapper with the shared container and vertical rhythm.
 */

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">{children}</div>
    </section>
  );
}

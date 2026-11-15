/**
 * Code Empire - Router links
 *
 * Routes same-origin anchor clicks from Dara UI components through
 * React Router instead of reloading the page.
 */

import type { MouseEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function RouterLinks({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;

    const anchor = (event.target as HTMLElement).closest("a");
    const href = anchor?.getAttribute("href");

    if (!anchor || !href || !href.startsWith("/")) return;
    if (anchor.target === "_blank") return;

    event.preventDefault();
    navigate(href);
  };

  return (
    <div className="contents" onClick={handleClick}>
      {children}
    </div>
  );
}

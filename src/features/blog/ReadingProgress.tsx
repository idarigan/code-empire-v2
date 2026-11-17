/**
 * Code Empire - Reading progress
 *
 * Thin gradient bar showing how far down the article the reader is.
 */

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(1, root.scrollTop / max) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full"
        style={{
          background: "var(--gradient-primary)",
          transform: `scaleX(${progress})`,
          transformOrigin: "100% 50%",
        }}
      />
    </div>
  );
}

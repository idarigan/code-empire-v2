/**
 * Code Empire - Tech marquee
 *
 * Endless strip of the languages and tools taught in the academy.
 */

import { tech } from "@/content/home";
import "./tech.css";

export function TechMarquee() {
  const items = [...tech.items, ...tech.items];

  return (
    <section
      aria-label={tech.title}
      className="relative border-y border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)]/40 py-8"
    >
      <p className="mb-6 text-center text-sm text-[var(--color-text-tertiary)]">
        {tech.title}
      </p>

      <div className="tech-marquee" dir="ltr">
        <div className="tech-marquee__track">
          {items.map((item, i) => (
            <span
              key={`${item.label}-${i}`}
              className="tech-marquee__item"
              aria-hidden={i >= tech.items.length ? true : undefined}
            >
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-mono text-sm text-[var(--color-text-primary)]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 12px ${item.color}`,
                  }}
                />
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

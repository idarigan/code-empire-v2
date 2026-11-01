/**
 * Code Empire - Trusted-by bar
 */

import { companies } from "@/data/companies";
import { companyNames } from "@/content/companies";
import { home } from "@/content/home";

export function TrustBar() {
  const items = [...companies, ...companies];

  return (
    <section className="overflow-hidden border-y border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)]/50 py-8 md:py-10">
      <div className="section-container">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-[var(--color-border-secondary)]" />
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-tertiary)] md:text-xs">
            {home.trustedBy}
          </p>
          <span className="h-px flex-1 bg-[var(--color-border-secondary)]" />
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__track">
          {items.map((company, i) => (
            <div
              key={`${company.slug}-${i}`}
              className="marquee__item"
              aria-hidden={i >= companies.length ? true : undefined}
            >
              <img
                src={company.logo}
                alt={
                  i < companies.length
                    ? companyNames[company.slug as keyof typeof companyNames]
                    : ""
                }
                className="h-9 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

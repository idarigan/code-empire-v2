/**
 * Code Empire — Trusted-by bar
 */

import { companies } from "@/data/companies";
import { companyNames } from "@/content/companies";
import { home } from "@/content/home";

export function TrustBar() {
  const items = [...companies, ...companies];

  return (
    <section className="py-10 border-y border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)]/40 overflow-hidden">
      <div className="section-container">
        <p className="text-center text-xs md:text-sm font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-6">
          {home.trustedBy}
        </p>
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
                className="h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

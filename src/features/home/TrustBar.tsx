/**
 * Code Empire — Trusted-by bar
 *
 * Auto-scrolling carousel of company logos below the hero.
 * Splide handles the loop; we just feed it the company list.
 */

import { Splide, SplideSlide } from "@trg69/react-splide";
import "@trg69/react-splide/css";
import { useI18n } from "dara-ui";
import { companies } from "@/data/companies";

export function TrustBar() {
  const { t } = useI18n();

  return (
    <section className="py-10 border-y border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)]/40">
      <div className="section-container">
        <p className="text-center text-xs md:text-sm font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-6">
          {t("home.trustedBy")}
        </p>

        <Splide
          options={{
            type: "loop",
            autoWidth: true,
            gap: "3rem",
            arrows: false,
            pagination: false,
            drag: "free",
            autoScroll: {
              speed: 0.8,
              pauseOnHover: true,
            },
            breakpoints: {
              768: { gap: "2rem" },
            },
          }}
          aria-label={t("home.trustedBy")}
        >
          {companies.map((company) => (
            <SplideSlide key={company.name}>
              <div className="flex items-center justify-center h-16 px-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

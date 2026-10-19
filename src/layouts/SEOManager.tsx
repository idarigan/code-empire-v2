/**
 * Code Empire — Automatic SEO manager
 *
 * One component. Rendered once inside the router. On every route change:
 * - finds the matching config from seoRoutes
 * - calls setSEO with title, description, image, og:type
 * - injects JSON-LD structured data if the config provides it
 * - cleans up previous JSON-LD on the next change
 *
 * Pages never touch SEO directly.
 */

import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { setSEO, setJSONLD, clearJSONLD } from "@/lib/seo";
import { seoRoutes } from "@/config/seoRoutes";

// Track previously injected schemas so we can remove them
let activeSchemaId: string | null = null;

export function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find the first matching route
    let matched: (typeof seoRoutes)[number] | null = null;
    let matchedParams: Record<string, string | undefined> = {};

    for (const route of seoRoutes) {
      const m = matchPath(route.pattern, pathname);
      if (m) {
        matched = route;
        matchedParams = m.params;
        break;
      }
    }

    if (!matched) return;

    const result = matched.resolve(matchedParams);

    // Apply meta tags
    setSEO({
      title: result.title,
      description: result.description,
      image: result.image,
      url: window.location.href,
      type: result.type ?? "website",
    });

    // Handle noindex
    let robots = document.head.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = result.noindex ? "noindex, nofollow" : "index, follow";

    // Swap structured data
    if (activeSchemaId) {
      clearJSONLD(activeSchemaId);
      activeSchemaId = null;
    }
    if (result.jsonLd) {
      setJSONLD(result.jsonLd.id, result.jsonLd.data);
      activeSchemaId = result.jsonLd.id;
    }
  }, [pathname]);

  return null;
}

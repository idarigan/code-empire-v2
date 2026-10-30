/**
 * Code Empire — Automatic SEO manager
 */

import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { setSEO, setJSONLD, clearJSONLD } from "@/lib/seo";
import { seoRoutes } from "@/config/seoRoutes";

let activeSchemaId: string | null = null;

export function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
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

    setSEO({
      title: result.title,
      description: result.description,
      image: result.image,
      url: window.location.href,
      type: result.type ?? "website",
    });

    let robots = document.head.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = result.noindex ? "noindex, nofollow" : "index, follow";

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

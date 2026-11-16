/**
 * Code Empire - usePageTitle
 *
 * Sets the document title for the current page.
 */

import { useEffect } from "react";
import { siteMeta } from "@/config/site";

export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = `${title} | ${siteMeta.name}`;
  }, [title]);
}

/**
 * Code Empire — Keyboard shortcuts
 *
 * Declarative keydown bindings. Combo strings use "+" separator.
 * Example: useKeyboard("ctrl+k", openSearch)
 */

import { useEffect } from "react";

type Handler = (event: KeyboardEvent) => void;

interface Options {
  /** Prevent default browser behavior */
  preventDefault?: boolean;
  /** Fire even when focus is inside inputs */
  allowInInputs?: boolean;
}

function matchesCombo(event: KeyboardEvent, combo: string): boolean {
  const parts = combo.toLowerCase().split("+");
  const key = parts[parts.length - 1];
  const wantsCtrl = parts.includes("ctrl");
  const wantsShift = parts.includes("shift");
  const wantsAlt = parts.includes("alt");
  const wantsMeta = parts.includes("meta");

  const keyMatches =
    event.key.toLowerCase() === key || event.code.toLowerCase() === `key${key}`;

  return (
    keyMatches &&
    event.ctrlKey === wantsCtrl &&
    event.shiftKey === wantsShift &&
    event.altKey === wantsAlt &&
    event.metaKey === wantsMeta
  );
}

export function useKeyboard(
  combo: string,
  handler: Handler,
  options: Options = {},
): void {
  const { preventDefault = true, allowInInputs = false } = options;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!allowInInputs) {
        const target = event.target as HTMLElement | null;
        const tag = target?.tagName?.toLowerCase();
        const isInput =
          tag === "input" || tag === "textarea" || target?.isContentEditable;
        if (isInput) return;
      }

      if (matchesCombo(event, combo)) {
        if (preventDefault) event.preventDefault();
        handler(event);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [combo, handler, preventDefault, allowInInputs]);
}

// Convenience for escape
export const useEscapeKey = (handler: () => void): void => {
  useKeyboard("escape", handler, { allowInInputs: true });
};

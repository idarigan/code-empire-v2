/**
 * Code Empire - useDebounce
 *
 * Returns a value that settles after the given delay.
 */

import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 250): T {
  const [settled, setSettled] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);

  return settled;
}

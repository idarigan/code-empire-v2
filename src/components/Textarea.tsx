/**
 * Code Empire - Textarea
 *
 * Multi-line field styled to match Dara UI's Input.
 */

import { useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  helperText?: string;
}

export function Textarea({
  label,
  errorMessage,
  helperText,
  className,
  id,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const hasError = Boolean(errorMessage);

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={fieldId}
          className={cn(
            "text-sm font-medium transition-colors",
            hasError
              ? "text-[var(--color-danger)]"
              : "text-[var(--color-text-secondary)]",
          )}
        >
          {label}
        </label>
      )}

      <textarea
        id={fieldId}
        dir="auto"
        aria-invalid={hasError}
        className={cn(
          "min-h-36 w-full resize-y rounded-[14px] border bg-[var(--color-bg-tertiary)] px-4 py-3 font-sans text-base text-[var(--color-text-primary)] outline-none transition-all duration-180",
          "placeholder:text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-elevated)] focus:bg-[var(--color-bg-elevated)]",
          hasError
            ? "border-[var(--color-danger)] focus:shadow-[var(--shadow-glow-danger)]"
            : "border-[var(--color-border-primary)] focus:border-[var(--color-primary)] focus:shadow-[var(--shadow-glow-primary)]",
          className,
        )}
        {...props}
      />

      {(errorMessage || helperText) && (
        <p
          className={cn(
            "text-xs",
            hasError
              ? "text-[var(--color-danger)]"
              : "text-[var(--color-text-tertiary)]",
          )}
        >
          {errorMessage ?? helperText}
        </p>
      )}
    </div>
  );
}

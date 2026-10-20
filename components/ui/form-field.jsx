import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "cn";

export function FormField({
  label,
  required = false,
  error,
  hint,
  id,
  children,
  className,
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      {label && (
        <label
          htmlFor={id}
          className="flex items-center gap-1 text-xs font-semibold text-foreground"
        >
          <span>{label}</span>
          {required && <span className="text-destructive font-bold">*</span>}
        </label>
      )}

      {children}

      {error ? (
        <p
          id={id ? `${id}-error` : undefined}
          className="flex items-center gap-1.5 text-[11px] font-medium text-destructive animate-in fade-in-50 duration-150 pt-0.5"
          role="alert"
        >
          <AlertCircle className="size-3 shrink-0" />
          <span>{error}</span>
        </p>
      ) : hint ? (
        <p className="text-[11px] text-foreground-muted">{hint}</p>
      ) : null}
    </div>
  );
}

export const FormInput = React.forwardRef(function FormInput(
  { className, hasError, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      aria-invalid={hasError ? "true" : undefined}
      className={cn(
        "w-full rounded-lg bg-surface border border-border px-3.5 py-2 text-xs text-foreground placeholder:text-foreground-muted outline-none transition-colors",
        "focus:border-primary focus:ring-1 focus:ring-primary",
        hasError && "border-destructive focus:border-destructive focus:ring-destructive/30",
        className
      )}
      {...props}
    />
  );
});

export const FormSelect = React.forwardRef(function FormSelect(
  { className, hasError, children, ...props },
  ref
) {
  return (
    <select
      ref={ref}
      aria-invalid={hasError ? "true" : undefined}
      className={cn(
        "w-full rounded-lg bg-surface border border-border px-3.5 py-2 text-xs text-foreground outline-none transition-colors cursor-pointer",
        "focus:border-primary focus:ring-1 focus:ring-primary",
        hasError && "border-destructive focus:border-destructive focus:ring-destructive/30",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});

export const FormTextarea = React.forwardRef(function FormTextarea(
  { className, hasError, rows = 3, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={hasError ? "true" : undefined}
      className={cn(
        "w-full rounded-lg bg-surface border border-border p-3 text-xs text-foreground placeholder:text-foreground-muted outline-none resize-y min-h-[90px] transition-colors",
        "focus:border-primary focus:ring-1 focus:ring-primary",
        hasError && "border-destructive focus:border-destructive focus:ring-destructive/30",
        className
      )}
      {...props}
    />
  );
});

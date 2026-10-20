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
          className="flex items-center gap-1 text-xs font-medium text-foreground-secondary tracking-wide select-none"
        >
          <span>{label}</span>
          {required && <span className="text-destructive font-bold ml-0.5">*</span>}
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
        "w-full h-10 rounded-md bg-background/90 dark:bg-[#0C0E1F] border border-border/80 dark:border-[#2C2F4D] px-3 text-xs sm:text-sm text-foreground placeholder:text-foreground-muted/70 dark:placeholder:text-[#8E92A8] outline-none transition-all duration-150",
        "hover:border-border dark:hover:border-[#3D4268] hover:bg-background",
        "focus:border-primary focus:ring-0 focus:outline-none focus:bg-background",
        hasError && "border-destructive focus:border-destructive",
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
        "w-full h-10 rounded-md bg-background/90 dark:bg-[#0C0E1F] border border-border/80 dark:border-[#2C2F4D] px-3 text-xs sm:text-sm text-foreground outline-none transition-all duration-150 cursor-pointer",
        "hover:border-border dark:hover:border-[#3D4268] hover:bg-background",
        "focus:border-primary focus:ring-0 focus:outline-none focus:bg-background",
        hasError && "border-destructive focus:border-destructive",
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
        "w-full rounded-md bg-background/90 dark:bg-[#0C0E1F] border border-border/80 dark:border-[#2C2F4D] p-3 text-xs sm:text-sm text-foreground placeholder:text-foreground-muted/70 dark:placeholder:text-[#8E92A8] outline-none resize-y min-h-[90px] transition-all duration-150",
        "hover:border-border dark:hover:border-[#3D4268] hover:bg-background",
        "focus:border-primary focus:ring-0 focus:outline-none focus:bg-background",
        hasError && "border-destructive focus:border-destructive",
        className
      )}
      {...props}
    />
  );
});

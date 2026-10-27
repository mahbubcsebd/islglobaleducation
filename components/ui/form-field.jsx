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
          className="flex items-center gap-1 text-xs font-semibold text-slate-200 tracking-wide select-none"
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
        <p className="text-[11px] text-slate-400">{hint}</p>
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
        "w-full h-10 rounded-md bg-navy-900 border border-white/15 px-3 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none transition-all duration-150",
        "hover:border-white/25 hover:bg-navy-850",
        "focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 focus:outline-none focus:bg-navy-900",
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
        "w-full h-10 rounded-md bg-navy-900 border border-white/15 px-3 text-xs sm:text-sm text-white outline-none transition-all duration-150 cursor-pointer",
        "hover:border-white/25 hover:bg-navy-850",
        "focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 focus:outline-none focus:bg-navy-900",
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
        "w-full rounded-md bg-navy-900 border border-white/15 p-3 text-xs sm:text-sm text-white placeholder:text-slate-400 outline-none resize-y min-h-[90px] transition-all duration-150",
        "hover:border-white/25 hover:bg-navy-850",
        "focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 focus:outline-none focus:bg-navy-900",
        hasError && "border-destructive focus:border-destructive",
        className
      )}
      {...props}
    />
  );
});

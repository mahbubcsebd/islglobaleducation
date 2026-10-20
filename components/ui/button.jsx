import * as React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-colors outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-2xs",
        outline:
          "border-border bg-surface text-foreground hover:bg-surface-alt hover:border-primary/50",
        secondary:
          "border-border bg-surface-alt text-foreground hover:bg-surface",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xs font-semibold",
        ghost:
          "hover:bg-surface-alt hover:text-foreground text-foreground-secondary",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-2xs",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-5 text-sm gap-2",
        xs: "h-7 px-2.5 text-xs rounded-md gap-1 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 sm:h-9 px-3.5 text-xs rounded-lg gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 px-7 text-sm font-semibold rounded-lg gap-2",
        xl: "h-12 px-8 text-base font-semibold rounded-lg gap-2.5",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-lg",
        "icon-xs": "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  if (asChild && React.isValidElement(props.children)) {
    const child = props.children;
    const { children, ...restProps } = props;
    return React.cloneElement(child, {
      className: cn(buttonVariants({ variant, size, className }), child.props.className),
      ...restProps,
      children: child.props.children,
    });
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

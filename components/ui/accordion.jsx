"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "cn";

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-xl border border-white/10 bg-navy-950/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-gold-500/40 hover:shadow-md data-[state=open]:border-gold-500/50 data-[state=open]:bg-navy-900/90",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white transition-all hover:text-gold-400 cursor-pointer [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        <span className="pr-4">{children}</span>
        <ChevronDown className="size-4 shrink-0 text-gold-400 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-xs sm:text-sm text-slate-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("px-5 pb-5 pt-2 border-t border-white/10 leading-relaxed", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

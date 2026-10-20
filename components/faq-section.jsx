"use client";

import * as React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ dict }) {
  const faqs = [
    { id: "faq-1", q: dict.faq.q1, a: dict.faq.a1 },
    { id: "faq-2", q: dict.faq.q2, a: dict.faq.a2 },
    { id: "faq-3", q: dict.faq.q3, a: dict.faq.a3 },
    { id: "faq-4", q: dict.faq.q4, a: dict.faq.a4 },
    { id: "faq-5", q: dict.faq.q5, a: dict.faq.a5 },
  ];

  return (
    <section id="faq" className="py-20 relative bg-transparent overflow-hidden">
      {/* Subtle FAQ Radial Atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[380px] sm:h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(44,58,136,0.12)_0%,rgba(247,223,30,0.10)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(44,58,136,0.22)_0%,rgba(247,223,30,0.08)_50%,transparent_75%)] blur-3xl -z-10" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
            <HelpCircle className="size-3.5" />
            <span>{dict.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.faq.title}
          </h2>
          <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
            {dict.faq.subtitle}
          </p>
        </div>

        {/* Shadcn Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection({ dict }) {
  return (
    <section className="py-20 relative bg-transparent">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-border/80 dark:border-white/10 bg-surface/85 dark:bg-[#121428]/90 backdrop-blur-xl p-8 sm:p-14 text-center shadow-xl overflow-hidden">
          {/* Subtle Top 1.5px Horizon Radiant Beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-xl h-[1.5px] bg-gradient-to-r from-transparent via-primary dark:via-[#F7DF1E]/50 to-transparent z-20 pointer-events-none" />

          {/* Luminous Ambient Glow for CTA */}
          <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(247,223,30,0.30)_0%,rgba(79,70,229,0.22)_45%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(247,223,30,0.14)_0%,rgba(44,58,136,0.40)_50%,transparent_75%)] opacity-85 dark:opacity-90 blur-2xl select-none" aria-hidden="true" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-6">
              <Sparkles className="size-3.5" />
              <span>{dict.cta.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight mb-4">
              {dict.cta.title}
            </h2>

            <p className="text-foreground-secondary text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              {dict.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#eligibility">
                  {dict.cta.button}
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/8801910030040?text=Hello%20ISL%20Global,%20I%20would%20like%20to%20book%20a%20free%20counseling%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 mr-2 text-emerald-500" />
                  <span>{dict.cta.whatsappBtn}</span>
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-foreground-secondary font-medium">
              <ShieldCheck className="size-3.5 text-primary" />
              <span>{dict.cta.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

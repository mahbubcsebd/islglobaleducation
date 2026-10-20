import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection({ dict }) {
  return (
    <section className="py-20 relative bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl border border-border bg-surface p-8 sm:p-14 text-center shadow-2xs overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent mb-6">
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

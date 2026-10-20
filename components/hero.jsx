"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  FileCheck2,
  TrendingUp,
  Search,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ lang, dict }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const dest = document.getElementById("destinations");
    dest?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Logo Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-surface px-4 py-2 rounded-2xl border border-border shadow-xs hover:border-primary transition-colors">
            <Image
              src="/logo.png"
              alt="ISL Global Education"
              width={180}
              height={46}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Floating pill announcement badge with subtle gold accent */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-foreground mb-6 shadow-2xs">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          <span>{dict.hero.badge}</span>
        </div>

        {/* Hero Headings */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.14] mb-6">
          <span>{dict.hero.titleLine1}</span>{" "}
          <span className="text-primary underline decoration-accent/60 underline-offset-8">
            {dict.hero.titleLine2}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          {dict.hero.subtitle}
        </p>

        {/* Quick Search / Destination Omnibar */}
        <form
          onSubmit={handleSearchSubmit}
          className="mx-auto max-w-xl mb-8"
        >
          <div className="relative flex items-center rounded-xl border border-border bg-surface p-1.5 shadow-2xs focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <div className="pl-3.5 pr-2 text-muted-foreground">
              <Search className="size-4 text-primary" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "en" ? "Search country (Malaysia, UK, Canada...) or subject..." : "দেশ (মালয়েশিয়া, ইউকে, কানাডা...) বা পছন্দের বিষয় লিখুন..."}
              className="w-full bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <Button
              type="submit"
              size="sm"
              className="rounded-lg px-4 text-xs font-medium shrink-0 cursor-pointer"
            >
              <Globe2 className="size-3.5 mr-1" />
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </form>

        {/* 4 Trust Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs font-medium text-foreground">
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <FileCheck2 className="size-3.5 text-primary" />
            <span>{dict.hero.pill1}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <GraduationCap className="size-3.5 text-primary" />
            <span>{dict.hero.pill2}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <Sparkles className="size-3.5 text-accent" />
            <span>{dict.hero.pill3}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <TrendingUp className="size-3.5 text-accent" />
            <span>{dict.hero.pill4}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-lg px-8 font-medium transition-colors cursor-pointer"
            asChild
          >
            <Link href="#eligibility">
              {dict.hero.ctaPrimary}
              <ArrowRight className="size-4 ml-1.5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-lg px-7 font-medium border-border hover:bg-surface-alt transition-colors cursor-pointer"
            asChild
          >
            <Link href="#destinations">
              {dict.hero.ctaSecondary}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

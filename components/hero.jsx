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
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Subtle Google-style purple ambient gradient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-primary/35 to-purple-400/15 opacity-40 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Logo Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-white/95 dark:bg-white/95 px-4 py-2 rounded-2xl shadow-sm border border-white/20 hover:scale-105 transition-transform">
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

        {/* Floating pill announcement badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-md mb-6 hover:border-primary/50 transition-colors shadow-xs">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span>{dict.hero.badge}</span>
        </div>

        {/* Hero Headings */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] mb-6">
          <span>{dict.hero.titleLine1}</span>{" "}
          <span className="bg-linear-to-r from-primary via-purple-400 to-indigo-400 bg-clip-text text-transparent">
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
          <div className="relative flex items-center rounded-full border border-border/70 bg-card/80 p-1.5 shadow-lg shadow-primary/5 backdrop-blur-xl focus-within:border-primary/70 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <div className="pl-3.5 pr-2 text-muted-foreground">
              <Search className="size-4 text-primary" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "en" ? "Search country (Malaysia, UK, Canada...) or subject..." : "দেশ (মালয়েশিয়া, ইউকে, কানাডা...) বা পছন্দের বিষয় লিখুন..."}
              className="w-full bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
            />
            <Button
              type="submit"
              size="sm"
              className="rounded-full px-4 text-xs font-medium shrink-0 cursor-pointer shadow-xs"
            >
              <Globe2 className="size-3.5 mr-1" />
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </form>

        {/* 4 Trust Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs font-medium text-foreground">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 backdrop-blur-xs shadow-xs">
            <FileCheck2 className="size-3.5 text-primary" />
            <span>{dict.hero.pill1}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 backdrop-blur-xs shadow-xs">
            <GraduationCap className="size-3.5 text-primary" />
            <span>{dict.hero.pill2}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 backdrop-blur-xs shadow-xs">
            <Sparkles className="size-3.5 text-primary" />
            <span>{dict.hero.pill3}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 backdrop-blur-xs shadow-xs">
            <TrendingUp className="size-3.5 text-emerald-500" />
            <span>{dict.hero.pill4}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 font-medium shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all cursor-pointer"
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
            className="w-full sm:w-auto rounded-full px-7 font-medium border-border/70 hover:bg-muted/70 transition-all cursor-pointer"
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

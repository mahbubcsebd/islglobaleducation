'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  FileCheck2,
  Globe2,
  GraduationCap,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { searchDestinations } from '@/lib/destination-search';

export function Hero({ lang, dict }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const searchContainerRef = React.useRef(null);

  // Real-time matches based on current query
  const matches = React.useMemo(() => {
    return searchDestinations(searchQuery);
  }, [searchQuery]);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const triggerSearch = (queryOrId) => {
    const targetQuery = queryOrId !== undefined ? queryOrId : searchQuery.trim();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("destination-search", {
          detail: targetQuery,
        })
      );
      const dest = document.getElementById("destinations");
      dest?.scrollIntoView({ behavior: "smooth" });
    }
    setIsFocused(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    triggerSearch();
  };

  const handleSelectDestination = (destItem) => {
    setSearchQuery(lang === "bn" ? destItem.bnName : destItem.enName);
    triggerSearch(destItem.id);
  };

  const handleClear = () => {
    setSearchQuery("");
    triggerSearch("");
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-transparent">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating pill announcement badge with primary yellow */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold mb-6 shadow-2xs">
          <span className="size-2 rounded-full bg-primary-foreground animate-pulse" />
          <span>{dict.hero.badge}</span>
        </div>

        {/* Hero Headings: strictly 2 lines with balanced leading */}
        <h1 className="hero-heading mx-auto max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-foreground leading-[1.2] md:leading-[1.24] mb-6">
          <span className="block">{dict.hero.titleLine1}</span>
          <span className="block text-primary underline decoration-primary/60 underline-offset-8 mt-1.5 sm:mt-2.5">
            {dict.hero.titleLine2}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-foreground-secondary leading-relaxed mb-8">
          {dict.hero.subtitle}
        </p>

        {/* Quick Search / Destination Omnibar with real-time bilingual matching */}
        <div ref={searchContainerRef} className="relative mx-auto max-w-xl mb-8 text-left">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative flex items-center rounded-xl border border-border bg-surface p-1.5 shadow-2xs focus-within:border-primary transition-all">
              <div className="pl-3.5 pr-2 text-foreground-muted">
                <Search className="size-4 text-primary" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsFocused(true);
                }}
                placeholder={
                  dict.hero?.searchPlaceholder ||
                  (lang === 'en'
                    ? 'Search country (Malaysia, UK, Canada...) or subject...'
                    : 'দেশ (মালয়েশিয়া, ইউকে, কানাডা...) বা পছন্দের বিষয় লিখুন...')
                }
                className="w-full bg-transparent text-xs sm:text-sm text-foreground placeholder:text-foreground-muted outline-none pr-2"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-2 text-foreground-muted hover:text-foreground text-xs"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <Button type="submit" size="sm" className="shrink-0">
                <Globe2 className="size-3.5 mr-1" />
                {dict.hero.ctaSecondary}
              </Button>
            </div>
          </form>

          {/* Real-time Bilingual Autocomplete Dropdown */}
          {isFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl border border-border bg-surface shadow-xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150">
              <div className="px-4 py-2 bg-surface-alt border-b border-border text-[11px] font-semibold text-foreground-secondary uppercase tracking-wider flex items-center justify-between">
                <span>{dict.hero?.searchSuggestions || (lang === 'bn' ? 'পরামর্শকৃত দেশসমূহ' : 'Suggested Destinations')}</span>
                <span>{matches.length} {lang === 'bn' ? 'টি দেশ' : 'matches'}</span>
              </div>

              {matches.length > 0 ? (
                <div className="max-h-64 overflow-y-auto divide-y divide-border">
                  {matches.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectDestination(item)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-surface-alt transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.flag}</span>
                        <div>
                          <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {lang === "bn" ? item.bnName : item.enName}
                            <span className="text-xs font-normal text-foreground-muted ml-2">
                              ({lang === "bn" ? item.enName : item.bnName})
                            </span>
                          </div>
                          <div className="text-xs text-foreground-secondary line-clamp-1">
                            {lang === "bn" ? item.bnTag : item.enTag}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-foreground-muted group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-foreground-secondary">
                  <p>{dict.hero?.searchNoResults || (lang === 'bn' ? 'কোনো দেশ খুঁজে পাওয়া যায়নি' : 'No destinations found')}</p>
                  <p className="text-[11px] text-foreground-muted mt-1">
                    {lang === 'bn'
                      ? 'ইংরেজি বা বাংলায় দেশের নাম লিখুন (যেমন: মালয়েশিয়া, UK, Canada, IELTS)'
                      : 'Type in English or Bangla (e.g. Malaysia, ইউকে, Canada, IELTS)'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 4 Trust Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs font-medium text-foreground">
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-2xs">
              <FileCheck2 className="size-3.5" />
            </span>
            <span className="font-semibold">{dict.hero.pill1}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-2xs">
              <GraduationCap className="size-3.5" />
            </span>
            <span className="font-semibold">{dict.hero.pill2}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-2xs">
              <Sparkles className="size-3.5" />
            </span>
            <span className="font-semibold">{dict.hero.pill3}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 shadow-2xs">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-2xs">
              <TrendingUp className="size-3.5" />
            </span>
            <span className="font-semibold">{dict.hero.pill4}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="#eligibility">
              {dict.hero.ctaPrimary}
              <ArrowRight className="size-4 ml-1.5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="#destinations">{dict.hero.ctaSecondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

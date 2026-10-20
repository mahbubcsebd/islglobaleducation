"use client";

import * as React from "react";
import Link from "next/link";
import {
  Globe2,
  CheckCircle2,
  ArrowRight,
  Search,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { searchDestinations } from "@/lib/destination-search";

export function DestinationsSection({ lang, dict }) {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const destinations = [
    {
      id: "malaysia",
      flag: "🇲🇾",
      popular: true,
      ...dict.destinations.malaysia,
    },
    {
      id: "uk",
      flag: "🇬🇧",
      ...dict.destinations.uk,
    },
    {
      id: "canada",
      flag: "🇨🇦",
      ...dict.destinations.canada,
    },
    {
      id: "australia",
      flag: "🇦🇺",
      ...dict.destinations.australia,
    },
    {
      id: "europe",
      flag: "🇪🇺",
      ...dict.destinations.europe,
    },
    {
      id: "usa",
      flag: "🇺🇸",
      ...dict.destinations.usa,
    },
  ];

  // Listen to search events triggered from the Hero search omnibar
  React.useEffect(() => {
    const handleSearchEvent = (e) => {
      const query = (e.detail || "").toString().trim();
      if (!query) {
        setSearchQuery("");
        setActiveFilter("all");
        return;
      }

      // Check if it's an exact destination id
      const isDirectId = destinations.some((d) => d.id === query.toLowerCase());
      if (isDirectId) {
        setActiveFilter(query.toLowerCase());
        setSearchQuery("");
        return;
      }

      // Otherwise it's a text query (Bangla or English)
      setSearchQuery(query);
      setActiveFilter("all");
    };

    window.addEventListener("destination-search", handleSearchEvent);
    return () => window.removeEventListener("destination-search", handleSearchEvent);
  }, [destinations]);

  // Compute filtered destinations
  const filtered = React.useMemo(() => {
    if (searchQuery.trim()) {
      const matches = searchDestinations(searchQuery);
      const matchIds = new Set(matches.map((m) => m.id));
      return destinations.filter((d) => matchIds.has(d.id));
    }
    if (activeFilter !== "all") {
      return destinations.filter((d) => d.id === activeFilter);
    }
    return destinations;
  }, [searchQuery, activeFilter, destinations]);

  const handleResetSearch = () => {
    setSearchQuery("");
    setActiveFilter("all");
  };

  return (
    <section id="destinations" className="py-20 relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <Globe2 className="size-3.5" />
            <span>{dict.destinations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.destinations.title}
          </h2>
          <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
            {dict.destinations.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Button
            type="button"
            size="sm"
            variant={activeFilter === "all" && !searchQuery ? "default" : "secondary"}
            onClick={handleResetSearch}
          >
            {dict.destinations.filterAll}
          </Button>
          {destinations.map((d) => (
            <Button
              key={d.id}
              type="button"
              size="sm"
              variant={activeFilter === d.id && !searchQuery ? "default" : "secondary"}
              onClick={() => {
                setActiveFilter(d.id);
                setSearchQuery("");
              }}
            >
              <span>{d.flag}</span>
              <span>{d.name}</span>
            </Button>
          ))}
        </div>

        {/* Active Search Banner */}
        {searchQuery && (
          <div className="mx-auto max-w-lg mb-8 p-3 rounded-xl border border-primary/25 bg-primary/8 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Search className="size-4 text-primary shrink-0" />
              <span>{dict.destinations.searchResultsFor || "Results for:"} <strong className="text-primary font-bold">"{searchQuery}"</strong></span>
            </div>
            <button
              type="button"
              onClick={handleResetSearch}
              className="px-2.5 py-1 rounded-md bg-surface text-foreground hover:bg-surface-alt border border-border text-[11px] font-semibold transition-colors cursor-pointer"
            >
              {dict.destinations.clearSearch || "Reset"} ✕
            </button>
          </div>
        )}

        {/* If no destinations matched the search */}
        {filtered.length === 0 ? (
          <div className="mx-auto max-w-md text-center py-12 px-6 rounded-xl border border-border bg-surface shadow-2xs space-y-4 animate-in fade-in-50 duration-200">
            <div className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent mx-auto">
              <Search className="size-6" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              {dict.destinations.noMatchTitle || "No destinations matched your search"}
            </h3>
            <p className="text-xs text-foreground-secondary leading-relaxed">
              {dict.destinations.noMatchDesc || "Try searching with a different country name or keyword, or reset to see all destinations."}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleResetSearch}
              className="mt-2"
            >
              <RotateCcw className="size-3.5 mr-1.5" />
              {dict.destinations.resetFilter || "Show All Destinations"}
            </Button>
          </div>
        ) : (
          /* Destination Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-primary shadow-2xs"
            >
              {/* Highlight badge for Malaysia with Gold Accent */}
              {item.popular && (
                <div className="absolute -top-3 right-5 rounded-md bg-accent px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground tracking-wide uppercase shadow-2xs">
                  {dict.destinations.topChoice || "Top Choice"}
                </div>
              )}

              <div>
                {/* Header: Flag, Name, Tag */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{item.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-medium text-accent">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-foreground-secondary leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Info Badges (Tuition, Intake, IELTS) */}
                <div className="space-y-2 mb-6 rounded-lg bg-surface-alt p-3.5 border border-border text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-secondary">{dict.destinations.tuitionLabel}:</span>
                    <span className="font-semibold text-foreground">{item.tuition}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-secondary">{dict.destinations.intakeLabel}:</span>
                    <span className="font-semibold text-foreground">{item.intake}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-secondary">{dict.destinations.ieltsLabel}:</span>
                    <span className="font-semibold text-primary">{item.ielts}</span>
                  </div>
                </div>

                {/* Features Bullet List */}
                <ul className="space-y-2 mb-6 text-xs text-foreground-secondary">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="default"
                className="w-full justify-between hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors font-semibold"
                asChild
              >
                <Link href="#eligibility">
                  <span>{dict.destinations.applyNow}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);
}

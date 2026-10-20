"use client";

import * as React from "react";
import Link from "next/link";
import {
  Globe2,
  DollarSign,
  Calendar,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DestinationsSection({ lang, dict }) {
  const [activeFilter, setActiveFilter] = React.useState("all");

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

  const filtered =
    activeFilter === "all"
      ? destinations
      : destinations.filter((d) => d.id === activeFilter);

  return (
    <section id="destinations" className="py-20 border-t border-border/40 relative">
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
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {dict.destinations.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground font-semibold"
                : "bg-surface-alt text-foreground-secondary hover:text-foreground hover:bg-surface border border-border"
            }`}
          >
            {dict.destinations.filterAll}
          </button>
          {destinations.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveFilter(d.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                activeFilter === d.id
                  ? "bg-primary text-primary-foreground border-primary font-semibold"
                  : "bg-surface text-foreground-secondary hover:text-foreground border-border hover:bg-surface-alt"
              }`}
            >
              <span>{d.flag}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary"
            >
              {/* Highlight badge for Malaysia with Gold Accent */}
              {item.popular && (
                <div className="absolute -top-3 right-5 rounded-md bg-accent px-2.5 py-0.5 text-[10px] font-bold text-white dark:text-[#0F1020] tracking-wide uppercase shadow-2xs">
                  Top Choice
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
                className="w-full rounded-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors text-xs font-semibold justify-between"
                asChild
              >
                <Link href="#eligibility">
                  <span>{dict.destinations.applyNow}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

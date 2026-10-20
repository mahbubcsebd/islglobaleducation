import * as React from "react";
import { Users2, ShieldCheck, Building2, Gift } from "lucide-react";

export function MetricsRibbon({ dict }) {
  const stats = [
    {
      value: dict.metrics.stat1Value,
      label: dict.metrics.stat1Label,
      icon: Users2,
    },
    {
      value: dict.metrics.stat2Value,
      label: dict.metrics.stat2Label,
      icon: ShieldCheck,
      highlight: true,
    },
    {
      value: dict.metrics.stat3Value,
      label: dict.metrics.stat3Label,
      icon: Building2,
    },
    {
      value: dict.metrics.stat4Value,
      label: dict.metrics.stat4Label,
      icon: Gift,
      highlight: true,
    },
  ];

  return (
    <section className="py-6 relative z-10 -mt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className="group relative rounded-xl border border-border bg-surface p-4 sm:p-5 transition-colors hover:border-primary shadow-2xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-2xs">
                    <IconComponent className="size-4" />
                  </div>
                  {stat.highlight && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-md shadow-2xs">
                      {dict.metrics.featured || "Featured"}
                    </span>
                  )}
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.highlight ? "text-primary" : "text-foreground"}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-foreground-secondary mt-1 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

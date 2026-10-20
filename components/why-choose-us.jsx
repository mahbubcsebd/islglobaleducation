import * as React from "react";
import {
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

export function WhyChooseUs({ dict }) {
  const reasons = [
    {
      icon: Award,
      title: dict.whyUs.reason1.title,
      desc: dict.whyUs.reason1.desc,
      highlight: dict.whyUs.highlights?.pill1 || "100% Risk Free",
    },
    {
      icon: Clock,
      title: dict.whyUs.reason2.title,
      desc: dict.whyUs.reason2.desc,
      highlight: dict.whyUs.highlights?.pill2 || "3 - 10+ Yrs Accepted",
    },
    {
      icon: TrendingUp,
      title: dict.whyUs.reason3.title,
      desc: dict.whyUs.reason3.desc,
      highlight: dict.whyUs.highlights?.pill3 || "99.2% Success",
    },
    {
      icon: CheckCircle,
      title: dict.whyUs.reason4.title,
      desc: dict.whyUs.reason4.desc,
      highlight: dict.whyUs.highlights?.pill4 || "Panthapath, Dhaka",
    },
  ];

  return (
    <section id="why-us" className="py-20 relative bg-transparent overflow-hidden">
      {/* Subtle Why Us Radial Atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[380px] sm:h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(247,223,30,0.14)_0%,rgba(44,58,136,0.12)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(247,223,30,0.08)_0%,rgba(44,58,136,0.22)_50%,transparent_75%)] blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
            <CheckCircle className="size-3.5" />
            <span>{dict.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.whyUs.title}
          </h2>
          <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
            {dict.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-xl border border-border/80 bg-surface/85 dark:bg-surface/85 backdrop-blur-md p-6 transition-all duration-300 hover:border-primary hover:bg-surface hover:shadow-xl shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-2xs transition-transform duration-200 group-hover:scale-105">
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-md shadow-2xs">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

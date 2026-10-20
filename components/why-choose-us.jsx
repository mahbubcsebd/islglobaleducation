import * as React from "react";
import {
  ShieldAlert,
  Clock,
  TrendingUp,
  Award,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

export function WhyChooseUs({ dict }) {
  const reasons = [
    {
      icon: Award,
      title: dict.whyUs.reason1.title,
      desc: dict.whyUs.reason1.desc,
      highlight: "100% Risk Free",
    },
    {
      icon: Clock,
      title: dict.whyUs.reason2.title,
      desc: dict.whyUs.reason2.desc,
      highlight: "3 - 10+ Yrs Accepted",
    },
    {
      icon: TrendingUp,
      title: dict.whyUs.reason3.title,
      desc: dict.whyUs.reason3.desc,
      highlight: "99.2% Success",
    },
    {
      icon: CheckCircle,
      title: dict.whyUs.reason4.title,
      desc: dict.whyUs.reason4.desc,
      highlight: "Panthapath, Dhaka",
    },
  ];

  return (
    <section id="why-us" className="py-20 border-t border-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <CheckCircle className="size-3.5" />
            <span>{dict.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.whyUs.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                className="group relative rounded-3xl border border-border/60 bg-card/70 p-6 backdrop-blur-xs transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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

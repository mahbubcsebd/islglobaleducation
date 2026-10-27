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
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
            <CheckCircle className="size-3.5 text-gold-400" />
            <span>{dict.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {dict.whyUs.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
                className="group relative rounded-2xl border border-white/10 bg-navy-950 p-6 transition-all duration-300 hover:border-gold-500/40 hover:shadow-xl shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400 transition-transform duration-200 group-hover:scale-105">
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2.5 py-1 rounded-md shadow-2xs">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
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

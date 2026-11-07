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
    <section id="why-us" className="py-24 relative bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors section-divider-gold">
      {/* Overseas Counseling Environment Background Image with Clean Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt="ISL Global Advisory Team"
          className="w-full h-full object-cover opacity-15 dark:opacity-20 scale-100 transition-opacity"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 dark:from-navy-950/95 dark:via-navy-950/85 dark:to-navy-950/95"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 dark:bg-gold-500/15 border border-amber-500/25 dark:border-gold-500/30 text-amber-700 dark:text-gold-300 px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
            <CheckCircle className="size-3.5 text-amber-600 dark:text-gold-400" />
            <span>{dict.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {dict.whyUs.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
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
                className="group relative rounded-3xl glass-card-premium backdrop-blur-md p-7 transition-all duration-300 hover:shadow-luxury-hover shadow-luxury flex flex-col justify-between premium-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 text-navy-950 shadow-md transition-transform duration-200 group-hover:scale-105">
                      <IconComponent className="size-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-gold-500/20 text-slate-800 dark:text-gold-300 border border-slate-200 dark:border-gold-500/30 px-2.5 py-1 rounded-full shadow-2xs">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
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

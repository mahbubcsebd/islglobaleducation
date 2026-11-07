"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function UniversityMarquee({ dict }) {
  const partners = [
    { flag: "🇬🇧", name: "University of Nottingham" },
    { flag: "🇲🇾", name: "Asia Pacific University (APU)" },
    { flag: "🇦🇺", name: "Monash University" },
    { flag: "🇨🇦", name: "Fanshawe College Ontario" },
    { flag: "🇲🇾", name: "Taylor's University" },
    { flag: "🇬🇧", name: "Heriot-Watt University" },
    { flag: "🇪🇺", name: "University of Debrecen" },
    { flag: "🇺🇸", name: "Arizona State University Affiliates" },
    { flag: "🇦🇺", name: "Deakin University" },
    { flag: "🇬🇧", name: "University of Hertfordshire" },
  ];

  return (
    <div className="bg-slate-50/80 dark:bg-navy-950 border-y border-slate-200/80 dark:border-white/10 py-7 overflow-hidden relative z-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {dict.marquee?.title || "Direct Admission Partner Institutions Across 14+ Countries"}
        </p>
      </div>

      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex w-max items-center gap-6 whitespace-nowrap animate-marquee">
          {/* First loop */}
          {partners.map((partner, idx) => (
            <div
              key={`p1-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-gold-500/40 transition-colors shrink-0 shadow-sm"
            >
              <span className="text-xl">{partner.flag}</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}

          {/* Duplicate loop for seamless infinite marquee */}
          {partners.map((partner, idx) => (
            <div
              key={`p2-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-gold-500/40 transition-colors shrink-0 shadow-sm"
            >
              <span className="text-xl">{partner.flag}</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { Users2, ShieldCheck, Globe, Gift } from "lucide-react";
import { motion } from "framer-motion";

export function MetricsRibbon({ dict }) {
  const stats = [
    {
      value: dict.metrics.stat1Value,
      label: dict.metrics.stat1Label,
      icon: Users2,
      accent: "text-white",
      highlight: false,
    },
    {
      value: dict.metrics.stat2Value,
      label: dict.metrics.stat2Label,
      icon: ShieldCheck,
      accent: "text-emerald-400",
      highlight: true,
    },
    {
      value: dict.metrics.stat3Value,
      label: dict.metrics.stat3Label,
      icon: Globe,
      accent: "text-blue-400",
      highlight: false,
    },
    {
      value: dict.metrics.stat4Value,
      label: dict.metrics.stat4Label,
      icon: Gift,
      accent: "text-gold-400",
      highlight: true,
    },
  ];

  return (
    <section className="py-8 relative z-20 bg-navy-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-md p-4 sm:p-5 transition-all duration-300 hover:border-gold-500/40 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                    <IconComponent className="size-4.5" />
                  </div>
                  {stat.highlight && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-md">
                      {dict.metrics.featured || "Featured"}
                    </span>
                  )}
                </div>
                <div className={`text-2xl sm:text-3xl font-black tracking-tight ${stat.accent}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

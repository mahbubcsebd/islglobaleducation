"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Compass, FileCheck, Stamp, Plane } from "lucide-react";

export function ProcessRoadmap({ dict }) {
  const steps = [
    {
      step: dict.process.step1.step,
      title: dict.process.step1.title,
      desc: dict.process.step1.desc,
      icon: Compass,
      color: "from-gold-400 to-amber-600 text-navy-950",
    },
    {
      step: dict.process.step2.step,
      title: dict.process.step2.title,
      desc: dict.process.step2.desc,
      icon: FileCheck,
      color: "from-gold-400 to-amber-600 text-navy-950",
    },
    {
      step: dict.process.step3.step,
      title: dict.process.step3.title,
      desc: dict.process.step3.desc,
      icon: Stamp,
      color: "from-gold-400 to-amber-600 text-navy-950",
    },
    {
      step: dict.process.step4.step,
      title: dict.process.step4.title,
      desc: dict.process.step4.desc,
      icon: Plane,
      color: "from-emerald-400 to-teal-500 text-navy-950",
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Airport Departure / Flight Route Background Image with Mask */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
          alt="International Flight Departure"
          className="w-full h-full object-cover opacity-10 dark:opacity-15 mix-blend-luminosity scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-50/80 to-slate-50/95 dark:from-navy-900/95 dark:via-navy-900/80 dark:to-navy-900/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-700 dark:text-gold-400 uppercase tracking-widest bg-amber-500/10 dark:bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/25 dark:border-gold-500/30">
            {dict.process.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {dict.process.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            {dict.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="roadmap-step relative flex flex-col items-center text-center group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl font-black mb-6 shadow-xl z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

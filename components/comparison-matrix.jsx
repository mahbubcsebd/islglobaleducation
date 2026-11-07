"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react";

export function ComparisonMatrix({ dict }) {
  const rows = [
    dict.comparison.row1,
    dict.comparison.row2,
    dict.comparison.row3,
    dict.comparison.row4,
    dict.comparison.row5,
    dict.comparison.row6,
  ];

  return (
    <section id="comparison" className="py-24 bg-slate-50/60 dark:bg-navy-950 border-t border-slate-200/80 dark:border-white/10 transition-colors noise-overlay section-divider-gold">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-700 dark:text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            {dict.comparison.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {dict.comparison.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            {dict.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/15 bg-white dark:bg-navy-900 shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-navy-850 border-b border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  <th className="p-5 font-bold w-1/3">{dict.comparison.colFactor}</th>
                  <th className="p-5 font-black text-gold-600 dark:text-gold-400 bg-amber-500/10 dark:bg-navy-800/80 w-1/3">
                    {dict.comparison.colIsl}
                  </th>
                  <th className="p-5 font-bold text-slate-500 dark:text-slate-400 w-1/3">
                    {dict.comparison.colOthers}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-semibold text-slate-900 dark:text-white">
                      {row.factor}
                    </td>
                    <td className="p-5 font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-navy-800/40">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{row.isl}</span>
                      </div>
                    </td>
                    <td className="p-5 text-rose-500 dark:text-rose-400">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 dark:text-rose-400/80 shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

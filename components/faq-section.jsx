"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection({ dict }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    { q: dict.faq.q1, a: dict.faq.a1 },
    { q: dict.faq.q2, a: dict.faq.a2 },
    { q: dict.faq.q3, a: dict.faq.a3 },
    { q: dict.faq.q4, a: dict.faq.a4 },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-navy-900 border-t border-slate-200/80 dark:border-white/10 transition-colors noise-overlay section-divider-gold">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-gold-700 dark:text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            {dict.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {dict.faq.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            {dict.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List with Framer Motion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-navy-950 shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-white/5 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-500 dark:text-gold-400 transition-transform duration-300 shrink-0 ml-3 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

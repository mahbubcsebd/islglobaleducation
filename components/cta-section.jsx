"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection({ dict }) {
  return (
    <section className="py-20 relative bg-navy-950 overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-gold-500/30 glass-panel-luxury p-8 sm:p-14 text-center shadow-2xl overflow-hidden"
        >
          {/* Luminous glow */}
          <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gold-500/15 blur-3xl select-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 px-3.5 py-1 text-xs font-bold mb-6">
              <Sparkles className="size-3.5 text-gold-400" />
              <span>{dict.cta.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight mb-4">
              {dict.cta.title}
            </h2>

            <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              {dict.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Link
                href="#eligibility"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-navy-950 gold-button-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>{dict.cta.button}</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="https://wa.me/8801910030040?text=Hello%20ISL%20Global,%20I%20would%20like%20to%20book%20a%20free%20counseling%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageCircle className="size-4 text-emerald-400" />
                <span>{dict.cta.whatsappBtn}</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>{dict.cta.note}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection({ dict }) {
  const stories = [
    {
      id: "story-1",
      data: dict.testimonials?.story1,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "story-2",
      data: dict.testimonials?.story2,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      id: "story-3",
      data: dict.testimonials?.story3,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    },
    {
      id: "story-4",
      data: dict.testimonials?.story4,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
      badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    },
    {
      id: "story-5",
      data: dict.testimonials?.story5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      id: "story-6",
      data: dict.testimonials?.story6,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  return (
    <section id="success-wall" className="py-24 bg-slate-50 dark:bg-navy-900 border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Background campus photo overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
          alt="International Students Success Wall"
          className="w-full h-full object-cover object-center opacity-5 dark:opacity-10 mix-blend-multiply dark:mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/70 to-slate-50/95 dark:from-navy-900/90 dark:via-navy-900/75 dark:to-navy-900/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-gold-700 dark:text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            {dict.testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {dict.testimonials.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            {dict.testimonials.subtitle}
          </p>
        </div>

        {/* Stories Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => {
            if (!story.data) return null;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white dark:bg-navy-950 border border-slate-200/80 dark:border-white/10 p-7 flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 shadow-lg dark:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`px-3 py-1 rounded-full border text-xs font-black ${story.badgeColor}`}
                    >
                      {story.data.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{story.data.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100 dark:border-white/10">
                  <img
                    src={story.image}
                    alt={story.data.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500/40"
                  />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{story.data.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{story.data.course}</p>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                      {story.data.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

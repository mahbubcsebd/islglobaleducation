"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DestinationsSection({ lang, dict }) {
  const [activeFilter, setActiveFilter] = React.useState("all");

  const destinations = [
    {
      id: "Malaysia",
      key: "malaysia",
      flag: "🇲🇾",
      categories: ["budget", "noielts"],
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-emerald-500 text-navy-950",
      data: dict.destinations.malaysia,
    },
    {
      id: "UK",
      key: "uk",
      flag: "🇬🇧",
      categories: ["psw", "noielts"],
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-blue-600 text-white",
      data: dict.destinations.uk,
    },
    {
      id: "Canada",
      key: "canada",
      flag: "🇨🇦",
      categories: ["psw"],
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-red-600 text-white",
      data: dict.destinations.canada,
    },
    {
      id: "Australia",
      key: "australia",
      flag: "🇦🇺",
      categories: ["psw"],
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-sky-600 text-white",
      data: dict.destinations.australia,
    },
    {
      id: "Europe",
      key: "europe",
      flag: "🇪🇺",
      categories: ["budget", "noielts"],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-indigo-600 text-white",
      data: dict.destinations.europe,
    },
    {
      id: "USA",
      key: "usa",
      flag: "🇺🇸",
      categories: ["psw"],
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-purple-600 text-white",
      data: dict.destinations.usa,
    },
  ];

  const filtered = React.useMemo(() => {
    if (activeFilter === "all") return destinations;
    return destinations.filter((d) => d.categories.includes(activeFilter));
  }, [activeFilter, destinations]);

  return (
    <section id="destinations" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
              {dict.destinations.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              {dict.destinations.title}
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              {dict.destinations.subtitle}
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: "all", label: dict.destinations.filterAll },
              { id: "budget", label: dict.destinations.filterBudget },
              { id: "noielts", label: dict.destinations.filterNoIelts },
              { id: "psw", label: dict.destinations.filterPsw },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeFilter === btn.id
                    ? "bg-gold-500 text-navy-950 shadow-md"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid (6 Countries) with Framer Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((country) => (
              <motion.div
                layout
                key={country.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden bg-navy-950 border border-white/10 hover:border-gold-500/50 transition-all duration-300 flex flex-col shadow-xl"
              >
                {/* Image and Flag Banner */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.data.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                  <div
                    className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow ${country.badgeColor}`}
                  >
                    {country.data.badge}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-black">{country.data.name}</h3>
                      <p className="text-xs text-slate-300">{country.data.cities}</p>
                    </div>
                    <span className="text-3xl">{country.flag}</span>
                  </div>
                </div>

                {/* Card Content & Features */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-slate-400">{dict.destinations.tuitionLabel}</span>
                      <span className="font-bold text-gold-400">{country.data.tuition}</span>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-slate-400">{dict.destinations.gapLabel}</span>
                      <span className="font-bold text-white">{country.data.gap}</span>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-slate-400">{dict.destinations.languageLabel}</span>
                      <span className="font-bold text-emerald-400">{country.data.ielts}</span>
                    </div>

                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-slate-400">{dict.destinations.paymentTermLabel}</span>
                      <span className="font-bold text-gold-300">{country.data.paymentTerm}</span>
                    </div>
                  </div>

                  <Link
                    href="#eligibility"
                    className="w-full py-3 bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 group-hover:bg-gold-500 group-hover:text-navy-950 cursor-pointer"
                  >
                    <span>
                      {dict.destinations.applyNow} {country.data.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export function CostCalculator({ lang, dict }) {
  const [country, setCountry] = React.useState("Malaysia");
  const [degree, setDegree] = React.useState("ug");
  const [gpa, setGpa] = React.useState(4.5);

  const costDataset = {
    Malaysia: {
      ug: { tuition: 450000, living: 280000, waiverMax: 35, salary: "RM 4,200 - 6,500" },
      pg: { tuition: 520000, living: 280000, waiverMax: 40, salary: "RM 5,500 - 8,500" },
    },
    UK: {
      ug: { tuition: 1650000, living: 1400000, waiverMax: 20, salary: "£26,000 - £34,000" },
      pg: { tuition: 1850000, living: 1400000, waiverMax: 25, salary: "£30,000 - £42,000" },
    },
    Canada: {
      ug: { tuition: 1550000, living: 1300000, waiverMax: 15, salary: "CAD $48,000 - $65,000" },
      pg: { tuition: 1750000, living: 1300000, waiverMax: 20, salary: "CAD $55,000 - $78,000" },
    },
    Australia: {
      ug: { tuition: 1950000, living: 1600000, waiverMax: 25, salary: "AUD $58,000 - $75,000" },
      pg: { tuition: 2200000, living: 1600000, waiverMax: 30, salary: "AUD $68,000 - $90,000" },
    },
    Europe: {
      ug: { tuition: 400000, living: 900000, waiverMax: 40, salary: "€28,000 - €42,000" },
      pg: { tuition: 480000, living: 900000, waiverMax: 50, salary: "€35,000 - €55,000" },
    },
    USA: {
      ug: { tuition: 2100000, living: 1500000, waiverMax: 40, salary: "$55,000 - $80,000" },
      pg: { tuition: 2400000, living: 1500000, waiverMax: 50, salary: "$65,000 - $105,000" },
    },
  };

  const countries = [
    { id: "Malaysia", label: "🇲🇾 Malaysia" },
    { id: "UK", label: "🇬🇧 UK" },
    { id: "Canada", label: "🇨🇦 Canada" },
    { id: "Australia", label: "🇦🇺 Australia" },
    { id: "Europe", label: "🇪🇺 Europe" },
    { id: "USA", label: "🇺🇸 USA" },
  ];

  // Calculation
  const data = costDataset[country][degree];
  let waiverPct = 0;
  if (gpa >= 4.75) {
    waiverPct = data.waiverMax;
  } else if (gpa >= 4.0) {
    waiverPct = Math.round(data.waiverMax * 0.7);
  } else if (gpa >= 3.5) {
    waiverPct = Math.round(data.waiverMax * 0.4);
  }

  const discountedTuition = Math.round(data.tuition * (1 - waiverPct / 100));
  const total = discountedTuition + data.living;

  return (
    <section id="calculator" className="py-24 bg-navy-950 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            {dict.calculator.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            {dict.calculator.title}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {dict.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-luxury rounded-3xl p-6 sm:p-10">
          
          {/* Controls Column (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Country Switcher */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {dict.calculator.step1}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {countries.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCountry(c.id)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer ${
                      country === c.id
                        ? "border-gold-500 bg-gold-500/20 text-gold-300 shadow-md"
                        : "border-white/15 bg-white/5 text-slate-300 hover:border-gold-500/50"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Degree Switcher */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {dict.calculator.step2}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDegree("ug")}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer ${
                    degree === "ug"
                      ? "border-gold-500 bg-gold-500/20 text-white shadow-md"
                      : "border-white/15 bg-white/5 text-slate-300 hover:border-gold-500/50"
                  }`}
                >
                  {dict.calculator.degUg}
                </button>
                <button
                  type="button"
                  onClick={() => setDegree("pg")}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer ${
                    degree === "pg"
                      ? "border-gold-500 bg-gold-500/20 text-white shadow-md"
                      : "border-white/15 bg-white/5 text-slate-300 hover:border-gold-500/50"
                  }`}
                >
                  {dict.calculator.degPg}
                </button>
              </div>
            </div>

            {/* Academic GPA Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {dict.calculator.step3}
                </label>
                <span className="font-black text-gold-400 text-sm">
                  GPA {gpa.toFixed(2)} / 5.00
                </span>
              </div>
              <input
                type="range"
                min="2.5"
                max="5.0"
                step="0.1"
                value={gpa}
                onChange={(e) => setGpa(parseFloat(e.target.value))}
                className="w-full accent-gold-500 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>{dict.calculator.pass}</span>
                <span>{dict.calculator.good}</span>
                <span>{dict.calculator.outstanding}</span>
              </div>
            </div>

          </div>

          {/* Real-Time Output Column (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-navy-950/90 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <p className="text-xs text-slate-400">{dict.calculator.pathLabel}</p>
                <h3 className="text-2xl font-black text-white">{country}</h3>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">{dict.calculator.scholarshipAward}</p>
                <span className="font-extrabold text-emerald-400 text-sm">
                  {waiverPct > 0 ? `${waiverPct}% Waiver` : dict.calculator.stdBand}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">{dict.calculator.tuitionRow}</span>
                <span className="font-bold text-white text-sm">
                  {discountedTuition.toLocaleString("en-BD")} BDT / Yr
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">{dict.calculator.livingRow}</span>
                <span className="font-bold text-white text-sm">
                  {data.living.toLocaleString("en-BD")} BDT / Yr
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">{dict.calculator.islServiceRow}</span>
                <span className="font-black text-emerald-400 text-sm">
                  {dict.calculator.islFree}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-slate-400">{dict.calculator.salaryRow}</span>
                <span className="font-bold text-gold-300 text-sm">
                  {data.salary} / Month
                </span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-navy-850 to-navy-800 border border-gold-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  {dict.calculator.totalRow}
                </p>
                <p className="text-2xl font-black text-gold-400 mt-0.5">
                  {total.toLocaleString("en-BD")} BDT
                </p>
              </div>

              <Link
                href="#eligibility"
                className="px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition gold-button-glow flex items-center gap-1.5 shrink-0"
              >
                <span>{dict.calculator.ctaBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

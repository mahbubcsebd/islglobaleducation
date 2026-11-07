"use client";

import * as React from "react";
import { PhoneCall, MapPin, Clock, MessageCircle } from "lucide-react";

export function TopContactBar({ lang = "bn", dict }) {
  return (
    <div className="bg-slate-100/90 dark:bg-navy-950 text-slate-600 dark:text-slate-300 text-xs border-b border-slate-200 dark:border-white/10 relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Left Contact & Location Details */}
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <a
            href="tel:+8801910030040"
            className="flex items-center gap-1.5 sm:gap-2 hover:text-amber-600 dark:hover:text-gold-400 transition-colors duration-200 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400 shrink-0" />
            <span className="font-bold text-slate-900 dark:text-white tracking-wide text-xs sm:text-[13px]">
              {dict.topBar.phone}
            </span>
            <span className="hidden md:inline text-slate-500 dark:text-slate-400 text-[11px] font-normal">
              {lang === "bn" ? "(ঢাকা হটলাইন)" : "(Dhaka Hotline)"}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-[11px] truncate">
            <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400 shrink-0" />
            <span className="truncate">{dict.topBar.location}</span>
          </div>

          <div className="hidden xl:flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] shrink-0">
            <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{dict.topBar.officeHours}</span>
          </div>
        </div>

        {/* Right Counselor Status & WhatsApp Action */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* Live counselor pulse */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[10px] sm:text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping shrink-0"></span>
            <span className="hidden sm:inline">{dict.topBar.counselorsOnline || "Counselors Online"}</span>
            <span className="sm:hidden">Online</span>
          </div>

          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>

          <a
            href="https://wa.me/8801910030040?text=Hello%20ISL%20Global%2C%20I%20want%20to%20consult%20regarding%20studying%20abroad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition text-[11px]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{dict.topBar.whatsappText}</span>
          </a>
        </div>

      </div>
    </div>
  );
}


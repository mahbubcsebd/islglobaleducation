"use client";

import * as React from 'react';
import { PhoneCall, MapPin, Clock, MessageCircle } from 'lucide-react';

export function TopContactBar({ dict }) {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs border-b border-white/10 relative z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        
        {/* Left Contact & Location Details */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+8801910030040"
            className="flex items-center gap-2 hover:text-gold-400 transition-colors duration-200"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span className="font-bold text-white tracking-wide">{dict.topBar.phone}</span>
            <span className="hidden sm:inline text-slate-400 text-[11px] font-normal">
              (Dhaka Hotline)
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 text-slate-300 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span>{dict.topBar.location}</span>
          </div>

          <div className="hidden xl:flex items-center gap-2 text-slate-400 text-[11px]">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{dict.topBar.officeHours}</span>
          </div>
        </div>

        {/* Right Counselor Status & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live counselor pulse */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{dict.topBar.counselorsOnline || "Counselors Online Now"}</span>
          </div>

          <span className="text-slate-700 hidden sm:inline">|</span>

          <a
            href="https://wa.me/8801910030040?text=Hello%20ISL%20Global%2C%20I%20want%20to%20consult%20regarding%20studying%20abroad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 font-semibold transition text-[11px]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{dict.topBar.whatsappText}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building,
  PhoneCall,
  Calendar,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

export function ContactSection({ dict }) {
  const [booked, setBooked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    date: "",
    country: "Malaysia",
  });

  const handleBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBooked(true);
    }, 700);
  };

  return (
    <section id="dhaka-office" className="py-24 bg-slate-50 dark:bg-navy-950 border-t border-slate-200/80 dark:border-white/10 relative transition-colors noise-overlay section-divider-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 6 Columns: Physical Office & Counselor Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>{dict.contact.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {dict.contact.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {dict.contact.subtitle}
            </p>

            {/* Office Representation Image */}
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="ISL Global Dhaka Counseling Headquarters"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                  📍 Panthapath, Square Hospital Crossing, Dhaka
                </span>
              </div>
            </div>

            <div className="space-y-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-500 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{dict.contact.officeTitle}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{dict.contact.officeAddress}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{dict.contact.phoneTitle}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{dict.contact.phoneDesc}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{dict.contact.hoursTitle}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{dict.contact.hoursDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 6 Columns: Book Visit Slot Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel-luxury bg-white/95 dark:bg-white/5 border border-slate-200/80 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {dict.contact.bookTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                {dict.contact.bookSubtitle}
              </p>

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    {dict.contact.slotName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={dict.contact.slotNamePlaceholder}
                    className="glass-input-luxury w-full px-4 py-2.5 rounded-xl text-xs outline-none text-slate-900 dark:text-white placeholder-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      {dict.contact.slotPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={dict.contact.slotPhonePlaceholder}
                      className="glass-input-luxury w-full px-4 py-2.5 rounded-xl text-xs outline-none text-slate-900 dark:text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      {dict.contact.slotDate}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="glass-input-luxury w-full px-4 py-2.5 rounded-xl text-xs outline-none text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    {dict.contact.slotDest}
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="glass-input-luxury w-full px-4 py-2.5 rounded-xl text-xs outline-none cursor-pointer text-slate-900 dark:text-white"
                  >
                    <option value="Malaysia" className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white">Malaysia</option>
                    <option value="UK" className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white">United Kingdom</option>
                    <option value="Canada" className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white">Canada</option>
                    <option value="Australia" className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white">Australia</option>
                    <option value="Europe" className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white">Europe / Schengen</option>
                    <option value="USA" className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white">United States</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-xl transition gold-button-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{loading ? dict.contact.slotSubmitting : dict.contact.slotSubmit}</span>
                </button>
              </form>

              <AnimatePresence>
                {booked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-500 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{dict.contact.slotSuccess}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

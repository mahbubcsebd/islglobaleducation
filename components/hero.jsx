'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  Calendar,
  Compass,
  Lock,
  MapPin,
  Phone,
  Sparkles,
  Star,
  User,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

export function Hero({ lang, dict }) {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  // Wizard form state
  const [formData, setFormData] = React.useState({
    country: 'Malaysia',
    qualification: 'HSC / A-Level',
    gap: 'No Gap',
    engProficiency: 'No IELTS (MOI)',
    name: '',
    phone: '',
    city: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWizardSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section className="relative min-h-screen lg:h-dvh flex items-center overflow-hidden bg-background text-foreground transition-colors duration-300 pt-20">
      {/* High-Definition World-Class University Campus Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2560&q=85"
          alt="Prestigious University Campus"
          className="w-full h-full object-cover object-center opacity-90 dark:opacity-75 transition-opacity duration-700"
        />
        {/* Editorial Directional Scrim: Deep on the left for text contrast, translucent on the right to reveal the majestic architecture */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 dark:from-[#030813] dark:via-[#030813]/85 dark:to-[#030813]/40" />

        {/* Seamless vertical blend into header and following section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#FAF9FD] dark:from-[#030813]/70 dark:via-transparent dark:to-[#030813]" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left 7 Columns: Editorial Messaging, Brand Trust & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Hero Headline — strictly 2 lines for both EN and BN */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-black text-slate-900 dark:text-white leading-[1.2] tracking-tight">
              <span className="block">{dict.hero.titleLine1}</span>
              <span className="block text-gold-600 dark:text-gold-400 drop-shadow-sm">
                {dict.hero.titleLine2}
              </span>
              {dict.hero.titleLine3 ? (
                <span className="block">{dict.hero.titleLine3}</span>
              ) : null}
            </h1>

            {/* Compelling Narrative */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 max-w-2xl font-normal leading-relaxed">
              {dict.hero.subtitle}
            </p>

            {/* 4 Core Trust Markers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-luxury backdrop-blur-md hover:border-gold-500/40 transition-all duration-300 hover:shadow-luxury-hover premium-card-glow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-500 dark:text-gold-400 flex items-center justify-center shrink-0">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-sm">
                      0 BDT
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-tight font-medium">
                      {dict.hero.pill1 || 'File Opening Fee'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-luxury backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 hover:shadow-luxury-hover premium-card-glow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-sm">
                      99.2%
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-tight font-medium">
                      {dict.hero.pill2 || 'Visa Approval'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-luxury backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 hover:shadow-luxury-hover premium-card-glow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-500 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-sm">
                      10+ Yrs
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-tight font-medium">
                      {dict.hero.pill3 || 'Study Gap OK'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-luxury backdrop-blur-md hover:border-amber-500/40 transition-all duration-300 hover:shadow-luxury-hover premium-card-glow"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <BookOpenCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-sm">
                      MOI OK
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-tight font-medium">
                      {dict.hero.pill4 || 'Without IELTS'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dual Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#destinations"
                className="px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-navy-950 gold-button-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <span>{dict.hero.ctaPrimary}</span>
                <Compass className="w-4 h-4" />
              </Link>

              <Link
                href="#dhaka-office"
                className="px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900/5 hover:bg-slate-900/10 text-slate-800 border border-slate-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <MapPin className="w-4 h-4 text-gold-500 dark:text-gold-400" />
                <span>{dict.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Social Proof Snippet */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-navy-950 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Student"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-navy-950 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Student"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-navy-950 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                  alt="Student"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-navy-950 object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                  alt="Student"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-500 dark:text-gold-400 text-xs">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-slate-900 dark:text-white ml-1">
                    {dict.hero.socialRating}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">
                  {dict.hero.socialReviews}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right 5 Columns: 2-Minute Smart Eligibility Checker Wizard Card */}
          <motion.div
            id="eligibility"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-luxury bg-white/95 dark:bg-navy-950/80 border border-slate-200/80 dark:border-white/15 rounded-3xl p-6 sm:p-8 relative shadow-2xl">
              {/* Live Intake Ribbon */}
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-emerald-300/30">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                <span>
                  {dict.hero.intakeBadge || '2026 / 2027 Intakes Open'}
                </span>
              </div>

              {/* Card Header */}
              <div className="mb-5">
                <p className="text-gold-600 dark:text-gold-400 text-xs uppercase tracking-wider font-bold">
                  {dict.eligibility.badge}
                </p>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {dict.eligibility.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                  {dict.eligibility.subtitle}
                </p>
              </div>

              {/* Step Progress Indicator */}
              <div className="flex items-center justify-between mb-5 px-1 text-xs">
                <span
                  className={`font-bold flex items-center gap-1.5 ${
                    step >= 1
                      ? 'text-gold-600 dark:text-gold-400'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center text-[10px] font-black">
                    1
                  </span>
                  {dict.eligibility.step1}
                </span>

                <div className="flex-1 h-0.5 mx-3 bg-slate-200 dark:bg-white/10">
                  <div
                    className={`h-full bg-gold-500 dark:bg-gold-400 transition-all duration-300 ${
                      step === 1 ? 'w-1/2' : 'w-full'
                    }`}
                  ></div>
                </div>

                <span
                  className={`font-bold flex items-center gap-1.5 ${
                    step === 2
                      ? 'text-gold-600 dark:text-gold-400'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                      step === 2
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white'
                    }`}
                  >
                    2
                  </span>
                  {dict.eligibility.step2}
                </span>
              </div>

              {/* Wizard Content */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Dynamic Result Card */
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900/90 border border-gold-500/40 text-xs space-y-3"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                      <span className="text-slate-500 dark:text-slate-400">
                        {dict.eligibility.probLabel}
                      </span>
                      <span className="text-emerald-500 dark:text-emerald-400 font-black text-sm">
                        {dict.eligibility.probValue}
                      </span>
                    </div>

                    <div className="py-1 space-y-2">
                      <p className="text-gold-600 dark:text-gold-300 font-bold">
                        {dict.eligibility.scholarshipEst}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                        {dict.eligibility.successMsg}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/8801910030040?text=${encodeURIComponent(
                        `Hello ISL Global Counselor, I completed the eligibility assessment.\nName: ${formData.name || 'Student'}\nPhone: ${formData.phone}\nCountry: ${formData.country}\nQualification: ${formData.qualification}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-center block text-xs transition"
                    >
                      {dict.eligibility.chatCounselor}
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="w-full text-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-[11px] pt-1"
                    >
                      {lang === 'bn'
                        ? 'আরেকটি মূল্যায়ন করুন'
                        : 'Check another profile'}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleWizardSubmit} className="space-y-4">
                    {step === 1 ? (
                      /* STEP 1: Academic */
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-3.5"
                      >
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                            {dict.eligibility.targetCountry}
                          </label>
                          <select
                            value={formData.country}
                            onChange={(e) =>
                              handleChange('country', e.target.value)
                            }
                            className="glass-input-luxury w-full px-3.5 py-2.5 rounded-xl text-xs font-medium outline-none cursor-pointer text-slate-900 dark:text-white"
                          >
                            <option
                              value="Malaysia"
                              className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                            >
                              {dict.eligibility.destOptions?.malaysia ||
                                '🇲🇾 Malaysia'}
                            </option>
                            <option
                              value="UK"
                              className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                            >
                              {dict.eligibility.destOptions?.uk ||
                                '🇬🇧 United Kingdom'}
                            </option>
                            <option
                              value="Canada"
                              className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                            >
                              {dict.eligibility.destOptions?.canada ||
                                '🇨🇦 Canada'}
                            </option>
                            <option
                              value="Australia"
                              className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                            >
                              {dict.eligibility.destOptions?.australia ||
                                '🇦🇺 Australia'}
                            </option>
                            <option
                              value="Europe"
                              className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                            >
                              {dict.eligibility.destOptions?.europe ||
                                '🇪🇺 Europe / Schengen'}
                            </option>
                            <option
                              value="USA"
                              className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                            >
                              {dict.eligibility.destOptions?.usa ||
                                '🇺🇸 United States'}
                            </option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                              {dict.eligibility.qualification}
                            </label>
                            <select
                              value={formData.qualification}
                              onChange={(e) =>
                                handleChange('qualification', e.target.value)
                              }
                              className="glass-input-luxury w-full px-3 py-2.5 rounded-xl text-xs font-medium outline-none cursor-pointer text-slate-900 dark:text-white"
                            >
                              <option
                                value="HSC / A-Level"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.eduOptions?.hsc ||
                                  'HSC / A-Level'}
                              </option>
                              <option
                                value="Diploma"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.eduOptions?.diploma ||
                                  'Diploma'}
                              </option>
                              <option
                                value="Bachelor"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.eduOptions?.bachelor ||
                                  'Bachelor Degree'}
                              </option>
                              <option
                                value="Masters"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.eduOptions?.master ||
                                  'Masters Degree'}
                              </option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                              {dict.eligibility.gap}
                            </label>
                            <select
                              value={formData.gap}
                              onChange={(e) =>
                                handleChange('gap', e.target.value)
                              }
                              className="glass-input-luxury w-full px-3 py-2.5 rounded-xl text-xs font-medium outline-none cursor-pointer text-slate-900 dark:text-white"
                            >
                              <option
                                value="No Gap"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.gapOptions?.noGap || 'No Gap'}
                              </option>
                              <option
                                value="1-3 Years"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.gapOptions?.gap1to3 ||
                                  '1 - 3 Years'}
                              </option>
                              <option
                                value="4-7 Years"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.gapOptions?.gap4to7 ||
                                  '4 - 7 Years'}
                              </option>
                              <option
                                value="8+ Years"
                                className="bg-white dark:bg-navy-900 text-slate-900 dark:text-white"
                              >
                                {dict.eligibility.gapOptions?.gap8plus ||
                                  '8+ Years'}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                            {dict.eligibility.engStatus}
                          </label>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            {[
                              {
                                id: 'No IELTS (MOI)',
                                label:
                                  dict.eligibility.engOptions?.moi ||
                                  'No IELTS (MOI)',
                              },
                              {
                                id: 'Has IELTS',
                                label:
                                  dict.eligibility.engOptions?.ielts ||
                                  'Has IELTS',
                              },
                              {
                                id: 'Duolingo / PTE',
                                label:
                                  dict.eligibility.engOptions?.other ||
                                  'Duolingo / PTE',
                              },
                            ].map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() =>
                                  handleChange('engProficiency', item.id)
                                }
                                className={`border rounded-xl p-2.5 text-center cursor-pointer transition text-[11px] font-bold ${
                                  formData.engProficiency === item.id
                                    ? 'border-gold-500 bg-gold-500/20 text-gold-700 dark:text-gold-300 shadow-sm'
                                    : 'border-slate-200 dark:border-white/15 bg-slate-100/70 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-gold-500/50'
                                }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-navy-950 transition flex items-center justify-center gap-2 gold-button-glow cursor-pointer"
                        >
                          <span>{dict.eligibility.continueBtn}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ) : (
                      /* STEP 2: Contact */
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-3.5"
                      >
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                            {dict.eligibility.fullName}
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                handleChange('name', e.target.value)
                              }
                              placeholder={dict.eligibility.fullNamePlaceholder}
                              className="glass-input-luxury w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl outline-none font-medium placeholder-slate-400 text-slate-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                            {dict.eligibility.phone}
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) =>
                                handleChange('phone', e.target.value)
                              }
                              placeholder={dict.eligibility.phonePlaceholder}
                              className="glass-input-luxury w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl outline-none font-medium placeholder-slate-400 text-slate-900 dark:text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                            {dict.eligibility.city}
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) =>
                              handleChange('city', e.target.value)
                            }
                            placeholder={dict.eligibility.cityPlaceholder}
                            className="glass-input-luxury w-full px-3.5 py-2.5 text-xs rounded-xl outline-none font-medium placeholder-slate-400 text-slate-900 dark:text-white"
                          />
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-1/3 py-3 px-3 rounded-xl font-bold text-xs bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white transition cursor-pointer"
                          >
                            {dict.eligibility.backBtn}
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-2/3 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-navy-950 transition flex items-center justify-center gap-2 gold-button-glow cursor-pointer disabled:opacity-75"
                          >
                            <span>
                              {isSubmitting
                                ? dict.eligibility.calculating
                                : dict.eligibility.submitBtn}
                            </span>
                            <Sparkles className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                )}
              </AnimatePresence>

              {/* Privacy Note */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400" />
                  <span>{dict.eligibility.noSpam}</span>
                </span>
                <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
                  {dict.eligibility.freeAssessment}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

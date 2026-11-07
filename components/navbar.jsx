"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar({ lang, dict }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.destinations, href: "#destinations" },
    { label: dict.nav.eligibility, href: "#eligibility" },
    { label: dict.nav.calculator, href: "#calculator" },
    { label: dict.nav.successWall, href: "#success-wall" },
    { label: dict.nav.comparison, href: "#comparison" },
    { label: dict.nav.roadmap, href: "#roadmap" },
    { label: dict.nav.dhakaOffice, href: "#dhaka-office" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/15 shadow-lg dark:shadow-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Adaptive Brand Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center shrink-0 transition-transform hover:scale-105"
        >
          <BrandLogo
            priority
            forceLight={false}
            className="h-9 sm:h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-6 text-xs xl:text-[13px] font-semibold text-slate-700 dark:text-slate-200">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-amber-600 dark:hover:text-gold-400 transition-colors py-1 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side Controls: Language, Theme & CTA */}
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />

          <Link
            href="#eligibility"
            className="relative group overflow-hidden px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-navy-950 gold-button-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 shrink-0 whitespace-nowrap shadow-md"
          >
            <span className="relative z-10">{dict.nav.bookConsultation}</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tablet & Mobile Controls Trigger */}
        <div className="flex xl:hidden items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition border border-slate-200 dark:border-white/10 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="xl:hidden border-t border-slate-200 dark:border-white/10 bg-white/98 dark:bg-navy-950/98 px-6 py-6 space-y-3.5 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-gold-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
              <Link
                href="#eligibility"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 text-navy-950 font-bold text-xs uppercase tracking-wider gold-button-glow flex items-center justify-center gap-2"
              >
                <span>{dict.nav.bookConsultation}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/8801910030040"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === "bn" ? "সরাসরি হোয়াটসঅ্যাপ করুন" : "WhatsApp Directly"}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
